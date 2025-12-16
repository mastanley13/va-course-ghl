# Module 09 — Marketing (The Digital Megaphone)

## 1. Why it matters
Most VAs use GHL marketing tools like amateurs: one-off posts, ugly emails, and zero tracking.
To be an **Architect**, you must build **systems** that amplify the client's voice without manual effort.
1.  **Social Planner:** Don't post daily. Schedule 90 days at once (Bulk CSV).
2.  **Email Builder:** Don't guess. Test scientifically (A/B Testing).
3.  **Affiliate Manager:** Don't just sell. Recruit an army to sell for you (2-Tier Commissions).

---

## 2. Learning Outcomes
By the end of this module, you will be able to:
- **Execute "The Content Factory"**: Bulk upload 90 social posts via CSV.
- **Run "The Scientist" Protocol**: Set up A/B split tests for Email Subject Lines.
- **Deploy "The Army"**: Configure a 2-Tier Affiliate Campaign with automated payouts.
- **Design System**: Create a "Master Email Template" with saved footers/headers.

---

## 3. Tier 1: Social Planner (The Content Factory)
**Goal:** Stop manual posting. Move to "Batch & Blast".

### The Bulk CSV Method (SOP)
Instead of creating 1 post at a time, we use a Spreadsheet.
1.  **Download Template:** Go to Marketing > Social Planner > CSV Upload > "Download Sample".
2.  **The "Golden Columns":**
    *   `postAtSpecificTime`: Must use `YYYY-MM-DD HH:mm:ss` format. (e.g., `2025-12-01 10:00:00`).
    *   `content`: Your caption + hashtags. Limit: 2,200 chars for IG.
    *   `imageUrls`: Must be a direct link (host images in GHL Media Library first).
3.  **The 90-Post Limit:** You can upload up to 90 posts per CSV.
4.  **Review Logic:** After upload, GHL puts them in "Review". You must manually click "Schedule All".

### Platform Nuances
*   **GMB (Google):** Requires a "Call To Action" button (e.g., "Learn More").
*   **TikTok:** Video ONLY. No text-only posts.
*   **LinkedIn:** Text limit is higher (3,000 chars), allowing for "Article" style posts.

---

## 4. Tier 2: Email Builder (The Scientist)
**Goal:** High Deliverability + High Open Rates.

### The A/B Test Protocol
You can test **Subject Lines** OR **Content**, but not both at once.
**The Setup:**
1.  Create Email Campaign > Enable **A/B Testing**.
2.  **Variable A:** "Subject: 50% Off Today" (Direct).
3.  **Variable B:** "Subject: You might miss this..." (Curiosity).
4.  **Distribution:**
    *   Test Group: 20% of list (10% get A, 10% get B).
    *   Winning Metric: **Unique Open Rate**.
    *   Duration: 4 Hours.
    *   Web Winner: The remaining 80% automatically get the winner.

### Deliverability "Red Flags"
*   **Spam Words:** Avoid "Free", "Cash", "Guarantee", "!!!" in subject lines.
*   **Footer Compliance:** You MUST use the `{{footer}}` custom value (Address + Unsubscribe) or GHL will block the email.
*   **Domain:** Ensure the sending domain has DMARC/SPF verified (Settings > Email Services).

---

## 5. Tier 3: Affiliate Manager (The Army)
**Goal:** Zero-cost customer acquisition.

### The 2-Tier Strategy
Most programs pay 1 level (I sell -> I get paid).
**2-Tier** pays for recruiting other affiliates (I recruit Bob -> Bob sells -> We BOTH get paid).
**Setup:**
1.  **Campaign Settings:** Marketing > Affiliate Manager > Campaigns > "Add New".
2.  **Commission Type:** Percentage vs Flat Rate.
    *   *Tier 1 (Direct):* 40% (Standard SaaS rate).
    *   *Tier 2 (Second Level):* 5% (The "Broker" fee).
3.  **Cookie Life:** Set to **90 Days** (Industry Standard). 30 days is too short; 365 is too generous.

### Payout Workflow
Tracking is easy. Paying is hard.
**SOP:**
1.  Go to "Payouts".
2.  Filter by "Due" (Threshold > $50).
3.  Export CSV -> Upload to PayPal Mass Pay (or Wise).
4.  Mark as "Paid" in GHL.

---

## 6. Lab Assignment: "The 30-Day Blitz"

**Scenario:**
A Fitness Coach needs a marketing explosion.

**Your Mission:**
1.  **Social:** Create a CSV with **5 Posts** (Monday-Friday next week).
    *   Must include Image URLs.
    *   Upload to Social Planner and screenshot the "Review" screen.
2.  **Email:** Create an A/B Test for their newsletter.
    *   Subject A: "Fitness Tips"
    *   Subject B: "Why you aren't losing weight"
    *   Screenshot the A/B settings panel.
3.  **Affiliate:** Create a Campaign named "Ambassador Program".
    *   Set Tier 1 to 30%, Tier 2 to 10%.
    *   Screenshot the Commission Setup.

**Deliverable:**
3 Screenshots (Social Review, Email A/B Panel, Affiliate Commission Settings).

---

## 7. Production SOP (Daily Habits)
1.  **Monday:** Check "Failed Posts" in Social Planner (often due to expired tokens).
2.  **Tuesday:** Review Email A/B results. Update "Subject Line Bank" with winners.
3.  **Friday:** Approve Affiliate Payouts.

## 8. Quiz (Verified Bank)
1) What is the correct date format for the CSV bulk upload? (A) DD-MM-YYYY (B) **YYYY-MM-DD HH:mm:ss** ✅.
2) In an A/B test, can you test Subject Line AND Content at the same time? (A) Yes (B) **No** ✅.
3) What is a "2-Tier" Affiliate Commission? (A) Getting paid twice (B) **Earning on your sales AND your recruits' sales** ✅.
4) If an email lacks the `{{footer}}` tag, what happens? (A) It works fine (B) **GHL may block it or high spam risk** ✅.
