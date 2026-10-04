```markdown
# Study-Guider

<div align="center">

**A multi-course revision and exam-solution portal for the University of Zambia (UNZA).**

Verified model answers · Live Mermaid diagrams · Exact-question grounding · 100% offline capable

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/KernelBornie/study-guider)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-6.x-purple.svg)](https://vitejs.dev)

[Live App](https://study-guider-seven.vercel.app) · [Report Bug](https://github.com/KernelBornie/study-guider/issues) · [Request Feature](https://github.com/KernelBornie/study-guider/issues)

</div>

---

## 📖 Overview

**Study-Guider** is a progressive web app (PWA) built for UNZA Computer Science students to revise for final examinations, continuous assessments, and tests. It bundles:

- 📚 **Verified past-paper solutions** across three courses
- 🤖 **AI Study Assistant** powered by Gemini 3.8 Flash (with a full offline fallback engine)
- 📊 **Live Mermaid diagrams** (flowcharts, class diagrams, sequence diagrams, state machines, ER diagrams)
- 🧮 **Interactive calculators** (Cyclomatic Complexity, Path vs Line coverage, Equivalence Class Partitioning, Defect Removal Model)
- 📶 **100% offline mode** — all content and the AI tutor work without internet
- 📄 **PDF / image upload** — attach past papers and get exact, grounded answers

---

## ✨ Features

### 🎓 Multi-Course Support
| Course | Title | Papers |
|--------|-------|--------|
| **CSC 4642** | Software Quality Assurance | Final 2024, Final 2023, Assessments 1 & 2, Mid-Term, Exam-Ready Material, White Box Testing Guide |
| **CSC 4630** | Advanced Software Engineering | Final 2024, Moodle Quiz (60 Q), Study Guide (Lethbridge & Laganière 2nd Ed.), Final Supplement |
| **CSC 3600** | Software Engineering | Test 1 (Ch. 1–7), Assignment 1 (SCHS) |

### 🤖 AI Study Assistant & Diagram Tutor
- **Exact-question grounding** — answers come only from the attached PDF, with page citations
- **Solve-all mode** — "Solve the questions in the attached paper in order" iterates every question
- **Live Mermaid diagrams** — validated before render, with a copyable source fallback
- **Attachment pipeline** — PDF (with text layer), PNG, JPG, WEBP, TXT (up to 5 files, 10 MB each)
- **Hybrid mode** — cloud Gemini with automatic offline fallback
- **Force-offline toggle** — zero internet data usage when enabled
- **Keyboard shortcuts** — `Ctrl/Cmd + Enter` to submit, `Esc` to close modals

### 📶 Offline-First PWA
- Service worker precaches all HTML, JS, CSS, fonts, and course content
- Install button (Chromium/Android/Desktop) and guided iOS Safari install
- Offline indicator toast when the app transitions to offline
- Full offline AI Tutor knowledge engine with pre-loaded answers for known UNZA papers

### 🧮 Interactive Calculators
- **McCabe Cyclomatic Complexity** — V(G) = E − N + 2P, with independent path derivation
- **Path vs Line Coverage** — ITS Taximeter worked example (24 vs 3 test cases)
- **Equivalence Class Partitioning** — valid/invalid partition table
- **Defect Removal Model** — 100-defect process illustration with cost escalation

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 19, TypeScript, Vite 6, Tailwind CSS |
| **Routing** | React Router v6 |
| **Markdown** | `react-markdown` + `remark-gfm` |
| **Diagrams** | Mermaid.js (with custom sanitiser) |
| **PDF parsing** | `pdfjs-dist` (client-side text extraction) |
| **Backend** | Express (`server.ts`) — full-stack Node.js 22 |
| **AI** | Google Gemini 3.8 Flash (`@google/genai`) |
| **PWA** | `vite-plugin-pwa` + Workbox |
| **Icons** | Lucide React |
| **Deployment** | Vercel (Production) |
| **Package manager** | npm |

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** ≥ 20 (Node 22 recommended)
- **npm** ≥ 10
- A **Gemini API key** from [Google AI Studio](https://aistudio.google.com/app/apikey) (optional — the offline engine works without one)

### 1. Clone and install
```bash
git clone https://github.com/KernelBornie/study-guider.git
cd study-guider
npm install
```

### 2. Configure environment
Create `.env.local` in the project root:

```env
# Required for cloud AI (optional — offline engine works without)
GEMINI_API_KEY=your_gemini_api_key_here

# Server port
PORT=3000
```

Copy from the example:
```bash
cp .env.example .env.local
```

### 3. Run the dev server
```bash
npm run dev
```

The app will be available at **http://localhost:3000**.

---

## 📜 Available Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start the full-stack dev server (Vite + Express on port 3000) |
| `npm run build` | Build the production bundle (client + server) |
| `npm start` | Run the built production server (`node server.ts`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `tsc --noEmit` | Type-check without emitting files |

---

## 📁 Project Structure

```
study-guider/
├── public/
│   ├── pdf.worker.min.mjs        # pdfjs-dist worker
│   ├── icon-192.png              # PWA icons
│   ├── icon-512.png
│   └── maskable-512.png
├── src/
│   ├── components/
│   │   ├── FileUploader.tsx      # Drag-drop + Choose File button
│   │   ├── MermaidDiagram.tsx    # Parse-then-render with error box
│   │   ├── Navbar.tsx
│   │   ├── OfflineIndicator.tsx
│   │   ├── PWAInstallButton.tsx
│   │   ├── PrintView.tsx
│   │   ├── SectionAView.tsx
│   │   ├── SectionBView.tsx
│   │   ├── CalculatorsView.tsx
│   │   └── Diagram*.tsx          # Defect Removal, Error Chain, FDR, McCall Tree, Prototyping
│   ├── pages/
│   │   ├── AIPage.tsx            # AI Tutor page
│   │   ├── AdminPage.tsx
│   │   ├── CalculatorsPage.tsx
│   │   ├── CoursePage.tsx
│   │   ├── DiagramsPage.tsx
│   │   ├── HomePage.tsx
│   │   └── PaperPage.tsx
│   ├── services/
│   │   ├── aiTutorEngine.ts      # Offline AI knowledge engine
│   │   └── pdfParser.ts          # pdfjs-dist + question detection
│   ├── data/
│   │   └── courses/
│   │       ├── csc4642-sqa/      # SQA papers, guides, quizzes
│   │       ├── csc4630-ase/      # ASE papers, guides, quizzes
│   │       └── csc3600-se/       # SE papers
│   ├── hooks/
│   │   ├── useOnlineStatus.ts
│   │   ├── useLocalData.ts
│   │   └── usePWAInstall.ts
│   ├── App.tsx
│   └── main.tsx
├── server.ts                     # Express backend + /api/chat
├── vite.config.ts                # Vite + PWA + Workbox config
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── .env.example
```

---

## 🌐 Deployment

### Vercel (Production)

The app is deployed at **[study-guider-seven.vercel.app](https://study-guider-seven.vercel.app)**.

**To deploy your own copy:**

1. Fork this repository.
2. Go to [Vercel](https://vercel.com/new) → **Import Git Repository** → select your fork.
3. Add environment variables in **Settings → Environment Variables**:
   - `GEMINI_API_KEY` = your key
   - `PORT` = `3000` (optional)
4. Click **Deploy**. Vercel auto-detects the Vite + Express setup.

### Manual Deployment
```bash
npm run build
npm start
```

Server binds on `0.0.0.0:${PORT}` (defaults to 3000).

---

## 🤖 AI Tutor Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     User Question + Attachments             │
└───────────────────────┬─────────────────────────────────────┘
                        │
                        ▼
        ┌───────────────────────────────┐
        │  Attachment Pipeline          │
        │  • PDF → pdfjs-dist text      │
        │  • Image → Gemini Vision OCR  │
        │  • TXT → read directly        │
        │  • Question detection regex   │
        └───────────────┬───────────────┘
                        │
         ┌──────────────┴──────────────┐
         │                             │
         ▼                             ▼
  ┌─────────────┐              ┌─────────────────┐
  │ Hybrid Mode │              │ Force Offline   │
  │ Gemini 3.8  │              │ Local Engine    │
  │ Flash API   │              │ (no API calls)  │
  └──────┬──────┘              └────────┬────────┘
         │                              │
         └──────────────┬───────────────┘
                        ▼
        ┌───────────────────────────────┐
        │  Grounded Response            │
        │  • Cite page numbers          │
        │  • Mermaid diagrams           │
        │  • Plain-text formulas        │
        └───────────────────────────────┘
```

### Grounding Rules
1. **Attachment-first** — answers come only from the attached PDF, with `(Attached: file.pdf, p. N)` citations
2. **No raw PDF headers** — never leak `PDF-1.4`, `MediaBox`, `/Kids`
3. **Solve-all mode** — when the user says "solve in order", every question is solved
4. **No fabrication** — absent questions are reported, not invented
5. **No LaTeX in output** — plain text formulas only

---

## 📚 Adding Course Content

Course content lives in `src/data/courses/<course-code>/`. Each course has an `index.ts` exporting an array of papers:

```ts
// src/data/courses/csc4642-sqa/index.ts
export const csc4642Papers: Paper[] = [
  {
    id: "csc4642-2024-final",
    title: "2024 Final Examination",
    year: 2024,
    sections: [
      {
        id: "section-a",
        title: "Section A — Compulsory",
        questions: [
          {
            number: "1",
            title: "McCall Factor Model",
            marks: 20,
            body: "...",
            modelAnswer: "...",
          },
        ],
      },
    ],
  },
];
```

Then import and register in `src/data/courses/index.ts`.

---

## 🧪 Testing

```bash
# Type-check
npx tsc --noEmit

# Build (validates all imports and assets)
npm run build

# Lint
npm run lint
```

### Manual Regression Checklist
- [ ] Upload `CSC 4642 2024 EXAM.pdf` → chip shows `✓ Ready`
- [ ] Ask "Solve the questions in the attached paper in order" → all 7 questions solved
- [ ] Toggle offline → same answers via local engine
- [ ] Open a diagram → Mermaid renders, no blank canvas
- [ ] Refresh in offline mode → app loads from service worker
- [ ] Install PWA on mobile → home screen icon appears

---

## 🔐 Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `GEMINI_API_KEY` | Optional | Google Gemini API key. If omitted, only the offline engine runs. |
| `PORT` | Optional | Server port. Defaults to `3000`. |

---

## 🗺 Roadmap

- [x] **Phase 1** — CSC 4642 SQA full coverage
- [x] **Phase 2** — CSC 4630 ASE + CSC 3600 SE
- [x] **Phase 3** — PDF text-layer parsing with OCR fallback
- [x] **Phase 4** — Exact-question grounding with page citations
- [x] **Phase 5** — 100% offline PWA + AI Tutor
- [ ] **Phase 6** — Add CSC 4641, CSC 4741, other CS courses
- [ ] **Phase 7** — Collaborative study rooms
- [ ] **Phase 8** — Spaced-repetition flashcards
- [ ] **Phase 9** — Voice-based revision mode

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Convention
This project uses [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` — new feature
- `fix:` — bug fix
- `docs:` — documentation
- `refactor:` — code refactor
- `chore:` — build/tooling

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for details.

---

## 🙏 Acknowledgements

- **The University of Zambia** — School of Natural Sciences, Department of Computer Science
- **Lethbridge & Laganière** — *Object-Oriented Software Engineering* (2nd Ed.)
- **Ian Sommerville** — *Software Engineering* (10th Ed.)
- **Bennett, McRobb & Farmer** — *Object-Oriented Systems Analysis and Design Using UML*
- **Rajib Mall** — *Fundamentals of Software Engineering*
- **Google AI Studio** — Gemini 3.8 Flash API
- **Vercel** — hosting and edge deployment

---

## 📬 Contact

**Project Maintainer:** [@KernelBornie](https://github.com/KernelBornie)  
**Issues:** [github.com/KernelBornie/study-guider/issues](https://github.com/KernelBornie/study-guider/issues)

---

<div align="center">

**Built for UNZA Computer Science students**

⭐ Star this repo if you find it useful!

</div>
```
