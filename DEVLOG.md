# 📋 Development Log

A running record of problems encountered and features added throughout the project.

---

## 🔧 Bug Fixes

### Word states resetting on every page load
**Problem:** Every time the site was opened, all word markings (known/unknown) were reset to unseen.  
**Cause:** `initQuiz()` was overwriting the loaded `states` object on every run.  
**Fix:** Load states from `veri.json` first, then apply them to cards after rendering.

### "Invalid Date" appearing in sentence journal
**Problem:** The journal panel showed an "Invalid Date" entry alongside real dates.  
**Cause:** The `journal` object contained a `__activityLog` key that was being treated as a date.  
**Fix:** Added a filter to only process keys matching the `YYYY-MM-DD` format.

### `words[w].filter is not a function` error
**Problem:** Journal rendering crashed with a TypeError.  
**Cause:** Some journal entries were stored as non-array values.  
**Fix:** Added `Array.isArray()` check before calling `.filter()`.

### Right-click menu not working on custom-added words
**Problem:** Words added by the user had no right-click functionality (no delete, no category change, no sentence builder).  
**Cause:** The `contextmenu` event listener was only attached to statically rendered cards at page load, not to dynamically created ones.  
**Fix:** Added `card.addEventListener('contextmenu', ...)` to the dynamic card creation function.

### Random mode showing the same word repeatedly
**Problem:** The same word kept appearing in random practice mode.  
**Fix:** Implemented a weighted queue system — each word is shown once per round before any word repeats. Unknown words appear more frequently (×6 weight), learning words ×3, unseen ×2, known ×1.

### "Learning" count not reflected in remaining words counter
**Problem:** The navbar showed incorrect remaining word count because "learning" state wasn't being subtracted.  
**Fix:** Updated the counter logic to account for all three non-unseen states.

### Category numbers mismatched after migration
**Problem:** After moving to a new computer, category numbers in `veri.json` didn't match the HTML (e.g. category 8 in JSON was category 9 in the site).  
**Fix:** Manually corrected all category key mappings in `veri.json`.

### Exposed API key in source code
**Problem:** Groq API key was hardcoded in `almanca-sitem.html` and `main.js`.  
**Fix:** Removed key from all source files. In Electron version, key is handled via `body._apiKey` passed at runtime and never stored in source.

---

## ✨ Features Added

| Feature | Description |
|---|---|
| Persistent storage | Word states, journal, custom words saved to `veri.json` via Express API |
| pm2 integration | Server runs automatically on system startup |
| Dark mode | Toggle with 🌙 button, preference saved to localStorage |
| Statistics panel | Progress overview: known/unknown/learning counts, category breakdown, streak counter |
| Random word mode | Weighted queue, mark words directly from the modal |
| Multiple choice quiz | Filter by word status, configurable question count |
| Spaced repetition | Words weighted by status for smarter practice |
| Sentence journal | Write up to 3 example sentences per word, saved by date with delete option |
| Right-click menu | Context menu: mark status / change category / delete / build sentence |
| Custom word support | Add personal vocabulary, stored in `customWords` in `veri.json` |
| Category management | Change a word's category via right-click, saved persistently |
| Word export | Download full word list as `.txt` — German only or German + Turkish |
| Hamburger menu | Clean ☰ menu for export options next to search bar |
| Electron packaging | Full desktop app, runs as `.exe` without needing a browser |
| Activity log | Track when words were added, visible in statistics |

---

## 🖥 Environment Setup (New Machine)

```bash
winget install OpenJS.NodeJS.LTS
cd project-folder
npm install
npm start
```

For background service:
```bash
npm install -g pm2
pm2 start main.js --name almanca
pm2 save
pm2 startup
```

---

*Last updated: July 2026*
