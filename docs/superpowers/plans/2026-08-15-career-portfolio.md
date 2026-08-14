# Career Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a standalone, bilingual, career-first portfolio for Fengyi Zhang.

**Architecture:** A self-contained HTML entry served over HTTP, with a small data module, presentational components, and one stylesheet. React 18 + Babel keeps the prototype editable without a build step; all referenced assets are copied into the project folder.

**Tech Stack:** HTML, CSS, React 18.3.1, Babel 7.29.0, Lucide, Google Fonts.

---

### Task 1: Create project shell and assets

**Files:**
- Create: `designs/fengyi-career-portfolio/index.html`
- Create: `designs/fengyi-career-portfolio/data.jsx`
- Create: `designs/fengyi-career-portfolio/components.jsx`
- Create: `designs/fengyi-career-portfolio/app.jsx`
- Create: `designs/fengyi-career-portfolio/styles.css`
- Copy: `designs/fengyi-career-portfolio/assets/` from the existing resumes and logo.

- [ ] Create the entry point with pinned React/Babel scripts and a favicon.
- [ ] Copy English/Chinese resumes and the existing logo into the new project.

### Task 2: Implement the career-first page

**Files:** `index.html`, `data.jsx`, `components.jsx`, `app.jsx`, `styles.css`

- [ ] Add the editorial header and bilingual hero with real resume metrics.
- [ ] Render the five-role experience ledger with expandable details.
- [ ] Render filtered project rows with verified external links and in-progress labels.
- [ ] Render skills, education, contact, mobile navigation, and reduced-motion styles.

### Task 3: Verify and register

**Files:** `designs/fengyi-career-portfolio/_d_meta.json`, `output/playwright/`

- [ ] Serve the project over HTTP and verify desktop and 390px mobile viewports with Playwright.
- [ ] Check all images, links, console errors, keyboard toggles, filters, disclosures, and document overflow.
- [ ] Register `index.html` with `baoyu-design` asset metadata and report the live URL.
