# Module 05 — Contacts (Smart Lists, Bulk Actions, Imports)

🔗 **Appendix:** [Plain Language + Glossary (A–Z with screenshots)](Appendix_Plain_Language_Glossary.md) — includes navigation verbs quick-reference (EN/ES/PH).

## Why it matters
Contacts are the database. If contact data is messy, every workflow, report, and AI personalization gets worse.

## Learning outcomes
A passing VA can:
- Create and manage Smart Lists (dynamic filters).
- Import contacts safely via CSV.
- Use bulk actions responsibly (tags, deletes, exports).
- Create and maintain clean contact records for automation and reporting.

## Compliance note (critical)
Bulk importing contacts without proper consent can damage deliverability and increase spam/bounce rates. Purchased/rented lists are risky and often unsuitable for marketing tools.

## Vocabulary
- **Contact record**: the CRM profile for a person/business
  - *What this means:* It holds all identifiers, history, and activity for one lead or account.
- **Smart List**: dynamic list that updates automatically based on filters
  - *What this means:* Save filters once so the list refreshes itself as data changes.
- **Custom fields**: structured fields for additional data
  - *What this means:* Use custom fields when you need data that can be merged into messages or reports.
- **Tags**: labels for segmentation and automation triggers
  - *What this means:* Tags categorize contacts so workflows and filters can act on them quickly.
- **Bulk actions**: batch operations (tag, delete, export)
  - *What this means:* Bulk actions let you change many records at once—double-check filters before running them.
- **Dedupe**: preventing duplicate contacts (email/phone matching)
  - *What this means:* Match on email/phone to stop sending two copies of every message.
- **Consent**: permission flags for outreach (especially SMS)
  - *What this means:* Only message contacts who have opted in, or you risk spam complaints and compliance issues.

## Course sections and pages
### Section A — Orientation
- Page 1: Contacts as the “source of truth”
- Page 2: Contact object vs Company/Business data

### Section B — Smart Lists and segmentation
- Page 3: Building Smart Lists (filters, columns, saved views)
- Page 4: Standard segmentation patterns (source/industry/intent)

### Section C — Imports and bulk actions
- Page 5: CSV import (contacts and opportunities)
- Page 6: Bulk actions (tags, export, delete, restore)

### Section D — Production SOP
- Page 7: “Clean contact” SOP (required fields + formatting)
- Page 8: Consent + deliverability SOP (do not spam)

### Section E — Quiz
- Page 9: Quiz (10 questions)

### Section F — Lab
- Page 10: Build 3 Smart Lists + import a test CSV

## Production SOP — Clean contact minimum standard
- Required fields: Name, business name (if B2B), email OR phone, source, owner
- Normalize phone to E.164 format if possible
- Apply tags consistently (e.g., `src:leadlist`, `seg:real-estate`, `status:new`)
- Add notes for context
- Assign owner if a rep is responsible

## Quiz (sample bank)
1) Smart Lists are: **dynamic lists based on filters** ✅  
2) True/False: Smart Lists update automatically when contacts match filters. **True** ✅  
3) CSV import should only be done with: **proper consent and clean data** ✅  
4) A tag is used for: **segmentation and workflow triggers** ✅  
5) Best practice for duplicates: **dedupe on email/phone; avoid double imports** ✅  
6) Bulk delete is safe because: **you can restore if supported; still risky—use carefully** ✅  
7) A “source” tag helps with: **reporting and attribution sanity** ✅  
8) If you want a list of businesses in a city, you’d create: **a Smart List with location filter** ✅  
9) Purchased lists can cause: **spam complaints/bounces and deliverability damage** ✅  
10) A custom field should be used when: **you need structured data reused in automations/reports** ✅

## Lab assignment (evidence required)
**Goal:** Contacts import + Smart Lists for Ace Web Agency.
1) Add a single contact manually (e.g., John Doe with email/phone) to confirm basics.
2) Import a sample CSV (5 rows) with Name/Email/Phone (and one optional custom field). Map fields correctly; create a custom field if needed. Screenshot the import summary.
3) Bulk tag the imported contacts (e.g., `seg:web-agency` or `import_test`). Screenshot the contacts list or detail showing the tag.
4) Create Smart Lists:
   - `SL - New Prospects (No Owner)` → filter Contact Assigned User is empty.
   - `SL - Interested Leads` → filter by tag/custom field indicating interest.
   - `SL - Vendors/Partners` → add a sample vendor contact, tag `vendor`, filter Tag contains vendor.
5) Optional: Enable “Create Smart List for new contacts” if the import wizard offers it.
6) Evidence: Import summary screenshot, one tagged contact/list view, and screenshots of the filter panel for at least two Smart Lists.
Rubric: Pass if import mapping is correct, tags applied in bulk, and Smart Lists reflect the specified filters.

## Relatable metaphor — “Library Card Catalog”
Contacts are the card catalog for the business. If the cards are misfiled or mislabeled, nobody can find the right book (lead) when it’s needed.

## Scenario walkthroughs with decision points
- **CSV import with missing consent**
  - Decision: import now or pause? → Pause and request proof of consent; tag records appropriately once verified.
  - Decision: mapping unclear for phone? → Standardize to E.164 and map primary phone only once.
- **Duplicate detection**
  - Decision: merge or keep separate? → Merge when identifiers match (email/phone) and notes show same person; otherwise tag for review.
  - Decision: which custom fields to keep? → Retain the most recent verified data and log changes in notes.

## UI callouts + screenshot placeholders
- [Screenshot: Import mapping screen highlighting required fields and tags]
- [Screenshot: Contact record with custom fields and activity timeline annotated]
- [Screenshot: Duplicate management/merge confirmation dialog]

## Stop and try (self-check)
1. Which two identifiers drive deduplication? <details><summary>Answer</summary>Email and phone.</details>
2. Why use standardized phone formatting? <details><summary>Answer</summary>To prevent duplicate creation and improve deliverability/routing.</details>
3. What tag prefix should you use for source? <details><summary>Answer</summary>`src:` per the naming convention.</details>
4. How do you document consent status? <details><summary>Answer</summary>Apply a consent field/tag and note the proof location in the record.</details>
5. Which module should be checked after a bulk import? <details><summary>Answer</summary>Automation/Workflows to ensure sequences are paused until QA is complete.</details>

## Practice labs + evidence rubric
- **Lab: Import + segment**
  - Deliverable: CSV import of 5 contacts, bulk tag applied, and three Smart Lists (`No Owner`, `Interested Leads`, `Vendors/Partners`).
  - Evidence: Import summary, tagged contact/list view, and Smart List filter screenshots.
  - Rubric: Pass if import is clean, tags are applied consistently, and Smart Lists match filter specs.
