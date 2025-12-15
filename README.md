# GoHighLevel VA Training Course UI

[![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646cff?logo=vite&logoColor=white)](https://vite.dev/guide/)
[![Markdown Content](https://img.shields.io/badge/Content-Markdown-000000?logo=markdown)](public/docs)

A single-page learner experience for the GoHighLevel VA training and certification course. The platform teaches technical virtual assistants to deliver production-ready GHL sub-account builds and culminates in a capstone automation project. Learners must progress linearly, prove completion with evidence, and pass quizzes with a 100% score to advance.

## Purpose and learning outcomes
- Train and test Technical VAs on navigation, build accuracy, and instruction-following in GoHighLevel sub-accounts.
- Require 100% correctness on quizzes, labs, and capstone rubrics; allow one policy-defined revision for perfection.
- Emphasize proof-first learning with screenshot/asset evidence for labs and capstone submissions.
- Ensure graduates can implement the end-to-end golf advertising automation system described in the capstone spec.

## Quick start
1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Run the learner UI locally**
   ```bash
   npm run dev
   ```
   Vite will print a localhost URL (default `5173`) for the SPA.
3. **Production build**
   ```bash
   npm run build
   ```
4. **Preview the production bundle (optional)**
   ```bash
   npm run preview
   ```

## How the learner UI works
- **Routing and layout**: The SPA uses React Router to expose a dashboard and module pages under `/module/:moduleId` within a shared course layout shell.
- **Module manifest**: `src/data/courseData.js` lists the ordered modules, filenames, and lock state used to render navigation and gating states.
- **Content loading**: `src/pages/ModuleView.jsx` fetches markdown files from `/docs/<filename>` at runtime, renders them with `react-markdown`, and injects anchors for the table of contents.
- **Navigation**: Module pages show progress-aware navigation (previous/next) and a sidebar course navigation list; future gating logic can extend the `isLocked` flags and completion handlers.

## Content authoring workflow
1. **Edit or add markdown modules**
   - Course content lives in `public/docs`. Update existing `.md` files there or drop in a new module file following the existing numbering convention (`02_Module_Dashboard.md`, etc.).
   - Keep any PRD/supporting docs in the same folder so they are served with the built app.
2. **Wire the module into the manifest**
   - Add or update an entry in `src/data/courseData.js` with the `id`, learner-facing `title`, and `filename` that matches the markdown file name.
   - Toggle `isLocked` to control whether learners can navigate directly or must unlock via future gating logic.
3. **Run the app** (`npm run dev`) to verify the module renders and its headings appear in the table of contents.

## Evidence, labs, and quizzes
- **Quizzes**: Modules are expected to require a 100% score; one retake per module is policy-based. Question types include single/multi-select and true/false, with optional short-text prompts for manual grading.
- **Labs**: Each module includes a lab with required evidence (screenshots/exports). Cohorts can run in self-attested mode (learner uploads proof) or graded mode (reviewer marks rubric items pass/fail).
- **Capstone**: Always graded and requires 100% rubric completion, with one revision allowed. Submissions should include links, attachments, and notes that prove the build meets the golf advertising automation spec.
- **Linear progression**: Next content unlocks only after completion criteria (perfect quiz + required evidence) are met, aligning with the 100% accuracy and proof-first principles.

## Deployment

### Vercel

The repository includes `vercel.json` for one-command deployments to Vercel's static hosting.

1. Install dependencies (once per environment):
   ```bash
   npm install
   ```
2. Build the optimized production bundle:
   ```bash
   npm run build
   ```
3. Deploy with the Vercel CLI (uses the repo defaults):
   ```bash
   vercel --prod
   ```

Key settings
- Build command: `npm run build`
- Output directory: `dist`
- SPA routing: all client-side routes rewrite to `index.html` so deep links work after refresh.

## Hosting notes for small cohorts
- The app is a static React/Vite bundle that fetches markdown content from `/docs`, making it suitable for low-complexity hosting (static site hosts, object storage + CDN, or a lightweight Node/Vite preview server).
- Non-functional requirements target small-scale delivery (≈10–15 concurrent trainees), so simple hosting with CDN caching is sufficient for cohorts around 100 enrolled users without heavy backend scaling.
- Keep uploads/evidence storage considerations in mind if you later add grading features; current assets are markdown-only, but future evidence uploads should include virus scanning, size limits, and access controls.

## Repository pointers
- **PRD and course materials**: `public/docs/00_PRD_VA_Training_Course_Platform.md` and the other numbered markdown files define the curriculum, labs, evidence requirements, and capstone spec.
- **UI entry points**: `src/App.jsx` sets up routing; `src/pages/ModuleView.jsx` renders module content; `src/components` contains layout, navigation, and markdown renderer components.

## Contributing
1. Fork or branch from `main`.
2. Add/update markdown content in `public/docs` and the manifest in `src/data/courseData.js`.
3. Run `npm run lint` and `npm run build` before opening a PR.
4. Include screenshots for UI changes where applicable.
