# PRD — GoHighLevel VA Training + Certification Course Platform (Sub-Account Builds)

## 1. Purpose
Build a lightweight, linear web course that **trains and tests Technical VAs** on GoHighLevel (GHL) sub-account production builds. The course is designed to validate **instruction-following, tool navigation, and build accuracy**—not “marketing genius.”

The course culminates in a **capstone build**: an AI-driven acquisition + fulfillment system for a golf facility selling advertising placements to local businesses (B2B), implemented inside GHL using the UI + Workflows + AI Agents.

## 2. Outcomes
A VA who passes can:
- Navigate every core sub-account module used in production builds.
- Configure foundational settings correctly (timezone, branding, staff permissions, Labs).
- Build reliable automations using Workflows (including scheduler-based recurring jobs).
- Use AI Agents (Conversation AI + Agent Studio / GPT actions where available) with guardrails.
- Implement a complete “end-to-end” production system: list building → outreach → qualification → sales conversion → payment → fulfillment → vendor coordination → reporting.

## 3. Users & Roles
### 3.1 Trainee (VA)
- Consumes modules in order.
- Must pass quizzes and complete hands-on labs.
- Submits capstone artifacts (screenshots + links + required exports).

### 3.2 Reviewer / Grader (Agency Operator)
- Reviews capstone checklist and module labs (if enabled).
- Leaves feedback and scores each rubric step as Pass/Fail.
- Can grant **one re-attempt** (policy-defined) to reach 100%.

### 3.3 Admin (Course Owner)
- Manages module content, quiz bank, grading rubrics.
- Manages enrollments (invite codes) and permissions.

## 4. Product Principles
- **Linear progression** (no skipping): next page unlocked only after completion criteria.
- **100% accuracy requirement**: quizzes must be perfect; capstone rubric must be perfect (one revision allowed).
- **Objective grading**: rubrics are checklist-based (Pass/Fail), minimal subjective judgment.
- **Proof-first**: every lab/capstone requires screenshots or exports to verify work.
- **“Production safe” training**: enforce compliance, rate limits, and anti-spam practices.

## 5. Scope (MVP)
### In scope (MVP)
- Trainee login via invite code + email.
- Module sequence with pages (markdown content), embedded images (optional), and checkboxes.
- Quizzes:
  - Question types: single-select MCQ, multi-select, True/False.
  - Optional: short text (manual grade) — use sparingly.
- Attempt policy:
  - Module quizzes: must score 100% to proceed.
  - Retake policy: 1 allowed retake per module (configurable).
- Capstone:
  - Submission: form fields for links + attachments + notes.
  - Grading UI: rubric checklist + feedback per rubric item.
  - Reattempt: 1 allowed to reach 100% (configurable).
- Progress tracking + audit log (page view, quiz results, timestamps).
- Admin exports: CSV export of results + rubric outcomes.

### Out of scope (MVP)
- Public self-serve enrollment.
- Large-scale analytics (beyond basic exports).
- Multi-tenant white-labeling.
- Complex gamification.
- SSO / enterprise identity.

## 6. Non-Functional Requirements
- **Small scale**: 10–15 concurrent trainees; optimize for simplicity.
- **Security**:
  - Password hashing
  - Role-based access (trainee vs reviewer vs admin)
  - Secure uploads (virus scan if available; size limits)
- **Data privacy**:
  - No storage of client credentials in course platform.
  - Upload redaction instructions: trainees must not upload secrets/API keys.
- **Reliability**:
  - Graceful resume: autosave progress.
  - No broken gating logic.

## 7. Content Model (for the IDE / Course Builder)
### 7.1 Modules
Each module is a document with:
- Purpose + learning outcomes
- Vocabulary
- UI map / navigation
- SOP checklists
- Pitfalls + troubleshooting
- Quiz bank (with answer key)
- Hands-on lab + grading rubric

### 7.2 Pages
Each module is broken into **sections** and **pages**:
- Content pages (instructional)
- Recap pages (key points)
- Quiz pages (question groups)
- Lab pages (step-by-step tasks + required evidence)

### 7.3 Gating Rules
- Page completion: trainee confirms checklist or passes embedded micro-quiz.
- Module completion: 100% quiz + lab submission (if lab gating enabled).
- Capstone completion: 100% rubric pass after 0–1 revision.

## 8. Grading Policy
### 8.1 Quizzes
- Must score 100%.
- Show which questions were missed, but do not reveal correct answers until after module is passed (optional anti-cheat).
- Randomize question order from a bank (optional).

### 8.2 Labs
Two modes (configurable per cohort):
- **Self-attested labs** (fast): trainee checks off tasks + uploads required screenshots.
- **Graded labs** (strict): reviewer marks rubric Pass/Fail.

### 8.3 Capstone
- Always graded.
- Pass requires 100% rubric.
- One revision attempt allowed.

## 9. Compliance Requirements (must be taught and enforced)
The capstone includes outbound communication. The course must require:
- Email compliance: CAN‑SPAM principles (opt-out, business identity, no deceptive subject lines).
- SMS/phone compliance: require documented consent; obey local laws; respect STOP keywords.
- “No purchased list” warnings: imported bulk contacts without proper consent can damage deliverability and increase spam complaints.
- Rate limiting and quiet hours: workflow timing settings must be used to avoid spam behavior.

## 10. Acceptance Criteria (MVP)
The platform is acceptable when:
- A trainee can complete all modules sequentially and progress is recorded.
- Quizzes gate correctly (100% required).
- A reviewer can grade a capstone rubric with feedback and allow a revision.
- Exports exist for cohort performance.
- The capstone spec (provided in this doc set) can be implemented by a skilled VA in a test sub-account and objectively graded.

## 11. Deliverables in this Document Set
- Course Overview & Curriculum Map
- One module document per GHL module (sub-account relevant)
- Capstone Build Spec (golf advertising acquisition + fulfillment system)
- Global grading rubrics and naming conventions
