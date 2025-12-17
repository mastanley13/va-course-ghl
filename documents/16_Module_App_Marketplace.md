# Module 16 — App Marketplace (Integrations)

🔗 **Appendix:** [Plain Language + Glossary (A–Z with screenshots)](Appendix_Plain_Language_Glossary.md) — includes navigation verbs quick-reference (EN/ES/PH).

## Why it matters
Marketplace apps extend GHL: enrichment, sheets sync, vendor notifications, ad integrations, etc. For capstone: at minimum, one integration path to support list building or vendor notification.

## Learning outcomes
A passing VA can:
- Install an app and understand connection requirements.
- Connect apps at the sub-account level (OAuth/API key/basic auth).
- Manage app permissions (avoid over-scoped access).
- Use marketplace triggers/actions in workflows while respecting usage charges if applicable.

## Vocabulary
- **Install**: add app to account
- **Connect**: authenticate within sub-account
- **OAuth scope**: permissions requested by an app
- **Workflow triggers/actions**: steps provided by an app
- **Connected apps**: settings area to manage/revoke access

## Course sections and pages
### Section A — Orientation
- Page 1: When marketplace apps are required vs optional
- Page 2: Security principles (least privilege)

### Section B — Install and connect
- Page 3: Install app
- Page 4: Connect app (per sub-account)
- Page 5: Troubleshoot “not connected” states

### Section C — Workflow usage
- Page 6: Use marketplace triggers/actions
- Page 7: Testing and cost awareness

### Section D — Quiz
- Page 8: Quiz (8 questions)

### Section E — Lab
- Page 9: Install + connect one app and show it inside workflows

## Quiz (sample bank)
1) Connections are typically: **per sub-account** ✅  
2) OAuth scope means: **permissions the app requests** ✅  
3) Least privilege means: **only grant access needed for function** ✅  
4) Marketplace actions can appear in: **Workflows** ✅  
5) True/False: Bulk install always completes connections automatically. **False** ✅  
6) Where do you manage/revoke access? **Settings → Connected Apps** ✅  
7) Testing integrations should be done: **in a test environment first** ✅  
8) If actions are chargeable, you must: **limit tests and document expected volume** ✅

## Lab assignment (evidence required)
**Goal:** Explore one Marketplace integration.
1) Open App Marketplace and search for an app (e.g., QuickBooks, Zoom, Facebook Ads, Mailgun, Shopify—pick one relevant to Ace Web Agency).
2) Open the app detail page, read the description/permissions, and note what it does and why you’d use it.
3) (Do not install unless authorized.) If a free/demo install is safe, you may proceed; otherwise, skip installation and just document.
4) Reflection: In one sentence, state which app you chose and how Ace Web Agency could use it.
Evidence: Screenshot of the Marketplace listing/detail page and the reflection sentence. Rubric: Pass if the app page is captured and the use-case summary is provided.

## Relatable metaphor — “Power Strip with Adapters”
The App Marketplace is a power strip. You plug in adapters (apps) to extend what the system can do, but every plug must be labeled and safe.

## Scenario walkthroughs with decision points
- **Client requests a new integration**
  - Decision: agency-level or sub-account? → Install at the right scope based on who owns the app and data.
  - Decision: permissions? → Review requested scopes and confirm with client before enabling.
- **Workflow needs an external action**
  - Decision: app action or webhook? → Use app action if supported natively; otherwise, use webhook with clear payload mapping.
  - Decision: failure handling? → Add fallback actions/alerts when app calls fail.

## UI callouts + screenshot placeholders
- [Screenshot: App listing page with permission scopes annotated]
- [Screenshot: Install confirmation modal highlighting scope selection]
- [Screenshot: Workflow action picker showing new app action]

## Stop and try (self-check)
1. Who should approve new app permissions? <details><summary>Answer</summary>The account/agency owner or designated admin.</details>
2. When do you prefer native app actions over webhooks? <details><summary>Answer</summary>When the app provides supported actions that reduce maintenance.</details>
3. What do you document after installing an app? <details><summary>Answer</summary>App purpose, permissions granted, and which workflows use it.</details>
4. How do you handle an app outage? <details><summary>Answer</summary>Switch to backup steps (tasks/notifications) and pause dependent automations if needed.</details>

## Practice labs + evidence rubric
- **Lab: Integration reconnaissance**
  - Deliverable: Marketplace app detail reviewed with a use-case statement.
  - Evidence: Listing/detail screenshot and one-sentence use-case for Ace Web Agency.
  - Rubric: Pass if the app purpose is summarized accurately and the screenshot shows the chosen integration.
