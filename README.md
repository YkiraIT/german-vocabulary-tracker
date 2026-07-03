# 🇩🇪 German Vocabulary Tracker

A personal German vocabulary learning tool I built while preparing for my move to Germany.  
Started as a simple word list — evolved into a full desktop application.

> **Honest note:** I don't have a programming background. The ideas, features, and content decisions are mine. Development was done in collaboration with Claude AI. Think of it like an architect who designs the building but works with engineers to construct it.

---

## 📸 Screenshots

**Main view — Light mode**
![Main view](screenshots/ana_sayfa.png)

**Dark mode**
![Dark mode](screenshots/dark_mode.png)

**Sentence journal** — write example sentences for words you're learning
![Sentence journal](screenshots/cumle_gunlugu.png)

**Statistics panel** — track progress by category with streak counter
![Statistics](screenshots/istatistikler.png)

**Multiple choice quiz**
![Quiz](screenshots/quiz.png)

---

## ✨ Features

- **500+ vocabulary words** organized into 14 categories (A1–A2 level + personal additions)
- **Word status tracking** — mark words as *Known*, *Learning*, or *Not Known*
- **Spaced repetition** — unknown words appear more frequently in practice sessions
- **Random word mode** — weighted queue system, each word shown once per round
- **Multiple choice quiz** — filter by status, choose question count
- **Sentence journal** — write example sentences for each word, saved by date
- **Right-click menu** — mark words, change category, delete, or build a sentence
- **Custom word support** — add your own words, saved persistently
- **Statistics panel** — progress by category, streak counter, learning overview
- **Word addition history** — see which words were added on which date
- **Dark mode** — preference saved automatically
- **Export** — download word list as `.txt` (German only or German + Turkish)
- **Multi-language UI** — switch between Turkish, English, and German
- **Custom title** — personalize the app title
- **Desktop app** — packaged with Electron, runs as a standalone `.exe`

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, JavaScript |
| Backend | Node.js + Express |
| Desktop | Electron |
| Data | JSON (local file, not a database) |
| AI Integration | Groq API (LLaMA 3.3) |

---

## 📁 Project Structure

```
german-vocabulary-tracker/
├── almanca-sitem.html   ← Main UI (all frontend + logic)
├── main.js              ← Electron main process
├── preload.js           ← Electron context bridge
└── package.json         ← Dependencies
```

> `veri.json` (user data) is excluded from this repository via `.gitignore` — it contains personal word states, journal entries, and custom words.

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run in browser mode (Node.js + Express)
node main.js
# Open http://localhost:3000/almanca-sitem.html

# Or run as desktop app (Electron)
npm start
```

---

## 🧠 How It Was Built

This project grew organically over several weeks:

1. **Started** as a static HTML word list with a search feature
2. **Added** a Node.js + Express backend to persist data between sessions
3. **Configured** pm2 to run the server automatically on startup
4. **Migrated** to Electron to package it as a proper desktop application
5. **Continuously added features** based on what I actually needed while studying

Every feature in this app exists because I ran into a real problem while learning German and decided to solve it.

---

## 🌍 Why This Project?

I'm preparing for an apprenticeship (*Ausbildung*) in **Fachinformatiker für Systemintegration** in Germany.  
Learning German is part of that journey. Instead of using a generic app, I built my own — and in doing so, learned about servers, file systems, process management, desktop packaging, and API integration along the way.

---

## 📅 Update History

### v1.4 — July 2026
- **Multi-language UI** — switch between Turkish 🇹🇷, English 🇬🇧, and German 🇩🇪 from the hamburger menu; preference saved automatically
- **Custom title** — click the app title to rename it; confirmation prompt included
- **Delete all words** — new option in hamburger menu with typed confirmation (`onaylıyorum` / `confirm` / `bestätigen`) to prevent accidents
- **Reset fix** — reset button now correctly saves state to disk and resets all word statuses including fixed words
- **Export feature** — download entire word list as `.txt` (German only or German + Turkish)
- **Right-click: Build a sentence** — added "Build Sentence" option to the right-click context menu on any word card

### v1.3 — June 2026
- **Sentence journal improvements** — added per-sentence delete button (✕) and optional Turkish translation field
- **Word addition history** — statistics panel now shows which words were added on which date, displayed as tags
- **Quiz filter** — quiz mode now supports filtering by word status (All / Unseen / Known / Unknown / Learning) with dynamic question count shown on the start button
- **Category change** — right-click any word card to move it to a different category; change is saved permanently via `categoryOverrides` in `veri.json`
- **Sentence builder from right-click** — build example sentences directly from the word list without entering random mode

### v1.2 — June 2026
- **Spaced repetition** — weighted random selection: Unknown ×6, Learning ×3, Unseen ×2, Known ×1
- **Queue-based study mode** — filtered random mode now uses a shuffled queue; each word shown exactly once per session, auto-closes when done
- **Multiple choice quiz** — new 📝 Test button; 4-option quiz with automatic status updates (wrong = Not Known, correct unseen = Learning)
- **Statistics enhancements** — added Learning counter to navbar pills and stats panel; 🔥 streak counter; category progress bars
- **Learning counter** — "Öğreniliyor / Learning" status now tracked and displayed across all panels
- **Filter panel redesign** — random study filter rebuilt as a bottom drawer with scrollable category list

### v1.1 — June 2026
- **Word state persistence fix** — critical bug fixed: word statuses (Known/Unknown/Learning) were being reset to Unseen on every page load
- **Category mismatch fix** — category numbering in `veri.json` was out of sync with the HTML word list; all categories remapped correctly
- **pm2 auto-start** — server now starts automatically on Windows boot via pm2 startup
- **Port migration** — moved from Electron IPC to Node.js + Express backend (port 3000) for more reliable data persistence
- **Broken character fix** — "Öğreniyorum" button displayed garbled unicode characters; corrected

### v1.0 — June 2026
- Initial setup on new machine (migrated from previous system)
- Node.js installation, npm dependencies, pm2 configuration
- BAT file updated for correct Windows username
- Base features: word list, status tracking, search, filter, dark mode, random word mode, sentence journal

---

## 📅 Development Log

See [DEVLOG.md](DEVLOG.md) for a detailed history of bugs fixed and features added.

---

*Built with curiosity and Claude AI · 2025–2026*
