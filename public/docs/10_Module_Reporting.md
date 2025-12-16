# Module 10 — Reporting & Attribution (The Scoreboard)

## 1. Why it matters
In marketing, "Opinion" is dangerous. "Data" is profitable.
Most agencies lose clients because they can't prove their results.
GHL Reporting is your **Scoreboard**. It proves:
1.  **Where** leads came from (Attribution).
2.  **How much** they cost (Ad Reporting).
3.  **What** the ROI is (Custom Dashboards).
If the client asks "What did you do for me this month?", this module is the answer.

---

## 2. Learning Outcomes
By the end of this module, you will be able to:
- **Analyze the Source**: Distinguish between "First Click" (Awareness) and "Last Click" (Conversion).
- **Master Tracking**: Implement the "Perfect UTM Strategy" for bulletproof data.
- **Audit the Discrepancy**: Explain why Facebook says 10 leads but GHL says 4 (View-Through Conversions).
- **Build the Scoreboard**: Create 2 Custom Dashboards (CEO View vs Manager View).

---

## 3. Tier 1: Attribution (Who gets the credit?)
**The Concept:** A customer watches a YouTube Ad -> Clicks a Facebook Ad -> Googles your name -> Buys.
Who gets credit? GHL tracks both.

### The Two Models
1.  **First Click (The Introducer):** Credits YouTube. Best for measuring *Brand Awareness*.
2.  **Last Click (The Closer):** Credits Google Search. Best for measuring *ROI*.

### The SOP
Go to **Reporting > Attribution Report**.
*   **Conversion Report:** Shows the path.
*   **Source Report:** Shows which channel is efficient.
*   **Lookback Window:** Set to **30 Days** (Standard).

---

## 4. Tier 2: UTM Parameters (The Tracking Code)
GHL is blind without UTMs.
**Naming Convention (The Golden Rule):**
*   **Source (`utm_source`):** The Platform (e.g., `facebook`, `google`, `newsletter`). **Lowercase only**.
*   **Medium (`utm_medium`):** The Channel (e.g., `cpc`, `email`, `organic`).
*   **Campaign (`utm_campaign`):** The Offer (e.g., `black-friday-2025`).

**Critical Config:**
If using GHL Forms on an external landing page, you MUST add hidden fields for these UTMs so GHL can capture them.

---

## 5. Tier 3: Ad Reporting (The Truth vs The Lie)
**The Problem:** Facebook says "10 Conversions". GHL says "6 Leads".
**The Cause:**
1.  **View-Through Conversions:** FB counts people who *saw* the ad and bought later. GHL only counts people who *clicked*.
2.  **Cross-Device:** User clicks on Mobile, buys on Desktop. Tracking often breaks.
3.  **Bot Traffic:** FB counts accidental clicks. GHL filters out bot submissions.

**The Fix (SOP):**
*   Always trust **GHL Data** for "Real Humans".
*   Trust **FB Data** for "Algorithm Optimization".
*   Explain this discrepancy to clients *before* they ask.

---

## 6. Tier 4: Custom Dashboards (The Cockpit)
Don't use the default dashboard. It's too cluttered.
**Build 2 Views:**

### View A: The CEO Dashboard (High Level)
*   **Widgets:**
    *   *Numeric:* Total Revenue (This Month).
    *   *Numeric:* Total Leads.
    *   *Donut Chart:* Lead Source (Where are they coming from?).

### View B: The Manager Dashboard (In the Weeds)
*   **Widgets:**
    *   *Table:* Google Ads Campaign Performance (CPC, CTR).
    *   *List:* Recent Appointments (Showed vs No-Show).
    *   *Bar Chart:* Call Outcomes (Answered vs Missed).

---

## 7. Lab Assignment: "The Truth Audit"

**Scenario:**
A client is angry. "Facebook says I got 50 leads, but I only see 30 in GHL!"

**Your Mission:**
1.  **Attribution:** Screenshots of the "Attribution Report" showing First vs Last click data.
2.  **Dashboarding:** Build a "CEO Dashboard" with exactly 3 widgets:
    *   Opportunity Status (Donut).
    *   Conversion Rate (Numeric).
    *   Lead Source (Bar Chart).
3.  **Defense:** Write a 3-sentence email explaining the "Facebook Discrepancy" using the term "View-Through Conversion".

**Deliverable:**
2 Screenshots (Report + Dashboard) and the Email Text.

---

## 8. Production SOP (Weekly Ritual)
1.  **Monday:** Check "Ad Reporting" status (is the Token expired?).
2.  **Monthly:** Export the "Attribution Report" PDF for the client.
3.  **Always:** Test UTMs using a "Real Time" test lead before launching ads.

## 9. Quiz (Verified Bank)
1) "First Click" attribution gives credit to: (A) The last ad clicked (B) **The first touchpoint that introduced the brand** ✅.
2) What is the correct format for `utm_source`? (A) Facebook Ads (B) **facebook** (Lowercase) ✅.
3) Why does Facebook report more leads than GHL? (A) GHL is broken (B) **Facebook counts View-Through conversions (Impressions)** ✅.
4) Which Dashboard widget is best for showing "Lead Source"? (A) Numeric (B) **Donut Chart** ✅.
