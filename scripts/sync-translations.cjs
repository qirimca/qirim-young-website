const fs = require('fs');
const path = require('path');

// Read CSV file
const csvPath = 'C:\\Users\\vlift\\Downloads\\all_translations.csv';
const csvContent = fs.readFileSync(csvPath, 'utf8');

// Parse CSV
const lines = csvContent.split('\n');
const header = lines[0].split(',');

// Find column indices
const keyIndex = header.indexOf('Key');
const ukrainianIndex = header.indexOf('Ukrainian');
const crimeanTatarIndex = header.indexOf('"Crimean Tatar"');
const englishIndex = header.indexOf('English');

console.log('Column indices:', { keyIndex, ukrainianIndex, crimeanTatarIndex, englishIndex });

// Initialize translation objects
const translations = {
  uk: {},
  crh: {},
  en: {}
};

// Parse each line
for (let i = 1; i < lines.length; i++) {
  const line = lines[i];
  if (!line.trim()) continue;
  
  // Simple CSV parser (handles quotes)
  const cols = [];
  let current = '';
  let inQuotes = false;
  
  for (let j = 0; j < line.length; j++) {
    const char = line[j];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      cols.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  cols.push(current.trim());
  
  const key = cols[keyIndex];
  const ukrainian = cols[ukrainianIndex]?.replace(/"/g, '');
  const crimeanTatar = cols[crimeanTatarIndex]?.replace(/"/g, '');
  const english = cols[englishIndex]?.replace(/"/g, '');
  
  if (key && ukrainian) {
    // Convert dot notation to nested object
    const keys = key.split('.');
    let ukObj = translations.uk;
    let crhObj = translations.crh;
    let enObj = translations.en;
    
    for (let k = 0; k < keys.length - 1; k++) {
      const keyPart = keys[k];
      if (!ukObj[keyPart]) ukObj[keyPart] = {};
      if (!crhObj[keyPart]) crhObj[keyPart] = {};
      if (!enObj[keyPart]) enObj[keyPart] = {};
      
      ukObj = ukObj[keyPart];
      crhObj = crhObj[keyPart];
      enObj = enObj[keyPart];
    }
    
    const lastKey = keys[keys.length - 1];
    ukObj[lastKey] = ukrainian;
    crhObj[lastKey] = crimeanTatar || ukrainian;
    enObj[lastKey] = english || ukrainian;
  }
}

// Write JSON files
const localesDir = path.join(__dirname, '..', 'src', 'i18n', 'locales');

fs.writeFileSync(
  path.join(localesDir, 'uk.json'),
  JSON.stringify(translations.uk, null, 2),
  'utf8'
);

fs.writeFileSync(
  path.join(localesDir, 'crh.json'),
  JSON.stringify(translations.crh, null, 2),
  'utf8'
);

fs.writeFileSync(
  path.join(localesDir, 'en.json'),
  JSON.stringify(translations.en, null, 2),
  'utf8'
);

console.log('✅ Translation files updated successfully!');
console.log('📊 Statistics:');
console.log(`- Ukrainian keys: ${Object.keys(flattenObject(translations.uk)).length}`);
console.log(`- Crimean Tatar keys: ${Object.keys(flattenObject(translations.crh)).length}`);
console.log(`- English keys: ${Object.keys(flattenObject(translations.en)).length}`);

function flattenObject(obj, prefix = '') {
  const flattened = {};
  for (const key in obj) {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      Object.assign(flattened, flattenObject(obj[key], newKey));
    } else {
      flattened[newKey] = obj[key];
    }
  }
  return flattened;
}