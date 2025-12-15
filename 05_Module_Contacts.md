# Module 05 — Contacts (Smart Lists, Bulk Actions, Imports)

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
- **Smart List**: dynamic list that updates automatically based on filters
- **Custom fields**: structured fields for additional data
- **Tags**: labels for segmentation and automation triggers
- **Bulk actions**: batch operations (tag, delete, export)
- **Dedupe**: preventing duplicate contacts (email/phone matching)
- **Consent**: permission flags for outreach (especially SMS)

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
1) Create Smart Lists:
   - `SL - New Prospects (No Owner)`
   - `SL - Advertiser Leads (Interested)`
   - `SL - Vendors (Sign Company)`
2) Import a small CSV (5–10 contacts) into a test sub-account.
3) Apply a bulk tag to imported contacts.
Evidence:
- screenshots of each Smart List filters
- screenshot of import summary
Rubric: Pass if lists are correct and tags applied without errors.
