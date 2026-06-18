import { access, readdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const repoRoot = path.resolve(__dirname, '..')
const localesDir = path.join(repoRoot, 'src', 'i18n', 'locales')

const requiredFiles = ['uk.json', 'crh.json', 'en.json', 'ach.json']
const forbiddenFiles = ['eng.json']
const productionFiles = ['uk.json', 'crh.json', 'en.json']
const productionTargetFiles = productionFiles.filter(fileName => fileName !== 'uk.json')
const forbiddenFileReasons = new Map([
  ['eng.json', 'the app uses en.json, not eng.json']
])
const errors = []

async function fileExists(filePath) {
  try {
    await access(filePath)
    return true
  } catch {
    return false
  }
}

function getMissingKeys(sourceKeys, targetKeys) {
  return sourceKeys.filter(key => !targetKeys.includes(key))
}

async function main() {
  for (const fileName of requiredFiles) {
    const filePath = path.join(localesDir, fileName)
    if (!(await fileExists(filePath))) {
      errors.push(`Missing required locale file: src/i18n/locales/${fileName}`)
    }
  }

  for (const fileName of forbiddenFiles) {
    const filePath = path.join(localesDir, fileName)
    if (await fileExists(filePath)) {
      const reason = forbiddenFileReasons.get(fileName)
      const reasonSuffix = reason ? ` (${reason})` : ''
      errors.push(`Forbidden locale file present: src/i18n/locales/${fileName}${reasonSuffix}`)
    }
  }

  let localeFiles = []

  try {
    localeFiles = (await readdir(localesDir)).filter(fileName => fileName.endsWith('.json')).sort()
  } catch (error) {
    errors.push(`Unable to read locale directory src/i18n/locales: ${error.message}`)
  }

  const parsedLocales = new Map()
  const rawLocaleContents = new Map()

  for (const fileName of localeFiles) {
    const filePath = path.join(localesDir, fileName)

    try {
      const contents = await readFile(filePath, 'utf8')
      rawLocaleContents.set(fileName, contents)
      parsedLocales.set(fileName, JSON.parse(contents))
    } catch (error) {
      errors.push(`Invalid JSON in src/i18n/locales/${fileName}: ${error.message}`)
    }
  }

  const sourceLocale = parsedLocales.get('uk.json')

  if (sourceLocale && typeof sourceLocale === 'object' && !Array.isArray(sourceLocale)) {
    const sourceKeys = Object.keys(sourceLocale)

    for (const fileName of productionTargetFiles) {
      const locale = parsedLocales.get(fileName)

      if (!locale || typeof locale !== 'object' || Array.isArray(locale)) {
        continue
      }

      const localeKeys = Object.keys(locale)
      const missingKeys = getMissingKeys(sourceKeys, localeKeys)
      const extraKeys = getMissingKeys(localeKeys, sourceKeys)

      if (missingKeys.length > 0 || extraKeys.length > 0) {
        errors.push(
          [
            `Top-level key mismatch in src/i18n/locales/${fileName} compared with uk.json.`,
            missingKeys.length > 0 ? `Missing keys: ${missingKeys.join(', ')}` : null,
            extraKeys.length > 0 ? `Extra keys: ${extraKeys.join(', ')}` : null
          ]
            .filter(Boolean)
            .join(' ')
        )
      }
    }
  } else if (parsedLocales.has('uk.json')) {
    errors.push('uk.json must contain a top-level JSON object.')
  }

  for (const fileName of productionFiles) {
    const contents = rawLocaleContents.get(fileName)

    if (!contents) {
      continue
    }

    if (contents.includes('crwdns') || contents.includes('crwdne')) {
      errors.push(`Raw Crowdin pseudo markers found in production locale src/i18n/locales/${fileName}.`)
    }
  }

  if (errors.length > 0) {
    console.error('i18n locale validation failed:')

    for (const error of errors) {
      console.error(`- ${error}`)
    }

    process.exit(1)
  }

  console.log(`i18n locale validation passed for ${localeFiles.length} locale file(s).`)
  console.log('Validated required locale files, JSON parsing, top-level key parity, and production locale Crowdin marker hygiene.')
}

await main()
