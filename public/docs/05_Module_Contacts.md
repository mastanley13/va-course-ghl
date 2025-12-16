# Module 05 — Contacts (Smart Lists, Bulk Actions, Imports)

## Why it matters
Contacts are the database. If contact data is messy, every workflow, report, and AI personalization gets worse.

## Learning outcomes
A passing VA can:
- Create and manage Smart Lists (dynamic filters).
- Import contacts safely via CSV.
# Module 05 — Contacts (The Central Nervous System)

## 1. Why it matters
Most beginners think of the "Contacts" tab as just a list of names. They are wrong.
This is the **Central Nervous System** of the entire platform.
Every Automation (Muscle), Campaign (Voice), and Pipeline (Movement) relies on the *Data* stored here.
*   If the Data is dirty, the Automation misfires.
*   If the Data is clean, the System performs magic.
You are not just a Data Entry clerk; you are the **Brain Surgeon**.

---

## 2. Learning Outcomes
By the end of this module, you will be able to:
- **Architect "Smart Lists"** that update in real-time (Dynamic SQL Logic) vs. "Static Lists" (Snapshots).
- **Execute Bulk Actions Safely** using "Drip Mode" to prevent server crashes and carrier bans.
- **Perform Data Surgery**: Restore deleted contacts (within 60 days) and trace "who deleted what" using Audit Logs.
- **Manage "DND" (Do Not Disturb)**: Understand the difference between a permanent hard bounce and a temporary opt-out.

---

## 3. Vocabulary
- **Contact record**: the CRM profile for a person/business
- **Smart List**: A saved search query (e.g., "People who joined last week AND have email"). It is *alive*. If a new contact matches the rule, they *automatically* appear in this list.
- **Static List**: A fixed group of people (e.g., "Event Attendees"). It never changes unless you manually add/remove someone.
- **Custom fields**: structured fields for additional data
- **Tags**: labels for segmentation and automation triggers
- **Bulk Action**: Doing one thing (SMS, Email, Tag) to 1,000 people at once.
- **Drip Mode**: Processing a Bulk Action in small batches (e.g., 50 people every hour) to avoid spam filters.
- **Dedupe**: preventing duplicate contacts (email/phone matching)
- **Consent**: permission flags for outreach (especially SMS)
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
