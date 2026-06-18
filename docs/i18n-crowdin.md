# i18n and Crowdin Hygiene

This repository uses JSON locale files from `src/i18n/locales/` and loads them explicitly in `src/i18n/config.ts`.

## Canonical locale files

- `uk.json` is the source language file.
- `crh.json` is the canonical Crimean Tatar target locale.
- `en.json` is the canonical English target locale.
- `ach.json` is only for Crowdin pseudo-language or in-context testing.
- `eng.json` is not used by the app and should not be committed.

## Maintainer review rules

- Do not merge pull requests that add `src/i18n/locales/eng.json`.
- Do not merge pull requests that put raw Crowdin pseudo markers such as `crwdns` or `crwdne` into production locales (`uk.json`, `crh.json`, or `en.json`).
- Stale `l10n_master` pull requests should be closed if their useful translations were already integrated elsewhere.
- PR #11 should be closed as stale or superseded unless a maintainer confirms it contains unique, useful, reviewed translations that are not already on `master`.

## Crowdin notes

- `crowdin.yml` maps Crowdin's English language code to `en.json`, because the app imports `en.json` and not `eng.json`.
- If Crowdin still creates `eng.json`, maintainers should check the Crowdin UI or any legacy GitHub integration settings for an outdated file mapping.
- `ach.json` may intentionally contain Crowdin pseudo-language placeholders for in-context testing.

## Validation

Run `npm run validate:i18n` before merging locale-related changes. The validation script checks:

- required locale files exist;
- `eng.json` is absent;
- all locale JSON files parse successfully;
- `crh.json` and `en.json` keep the same top-level keys as `uk.json`;
- production locale files do not contain raw Crowdin pseudo markers.
