# Module 11 — Sites (The Storefront)

## 1. Why it matters
In 2025, a "Website" is not enough. You need:
1.  **Funnels** to sell.
2.  **Portals** to serve.
3.  **Dynamic Forms** to qualify.
Most VAs just "drag and drop". You will build **Smart Systems** that adapt to the user.

---

## 2. Learning Outcomes
By the end of this module, you will be able to:
- **Architect the Journey**: Know exactly when to use a Funnel vs a Website.
- **Deploy Client Portals**: Set up a password-protected zone for clients to access assets.
- **Master Logic V2**: Build "Smart Forms" that change questions based on user answers.
- **Optimize Revenue**: Implement "One-Click Upsells" to increase cart value.

---

## 3. Tier 1: Funnels (The Salesman)
**Goal:** Convert traffic into leads/sales.
**Structure:** Linear (Step 1 -> Step 2 -> Step 3). No distractions (Header/Footer removed).

### Key 2025 Features
*   **One-Click Upsells:** After credit card entry, offer a "One Time Offer" (OTO). User clicks "Yes" -> Charge happens instantly without re-entering details.
*   **A/B Split Testing:** Test Headline A vs Headline B.
    *   *SOP:* Always run a split test on the Landing Page. Even a 2% lift = Free Money.
*   **2-Step Order Form:** Step 1 (Name/Email) captures the lead even if they abandon Step 2 (Credit Card).

---

## 4. Tier 2: Websites (The Brochure)
**Goal:** Brand Authority & SEO.
**Structure:** Spiderweb (Home, About, Services, Contact).

### The "Global Section" Strategy
Stop editing 10 pages manually.
*   Create a **Global Header** and **Global Footer**.
*   Update it once -> It updates across ALL pages instanly.
*   *Workflow:* Build the Header FIRST. Save as "Global".

### The Client Portal (2025 Standard)
Don't send files via email.
1.  **Setup:** Sites > Client Portal > Domain Setup (`portal.yourbrand.com`).
2.  **Function:** Gives every client a secure login.
3.  **Content:** They can view their **Affiliate Stats**, **Courses**, and **Communities** in one dashboard.

---

## 5. Tier 3: Forms & Surveys (The Quiz)
**Static Forms are dead.** Use **Conditional Logic V2**.

### Logic Jumps (How it works)
*   **Question 1:** "What is your budget?"
    *   *If < $1,000:* -> Show "DIY Course" option.
    *   *If > $1,000:* -> Show "Book Consultation" calendar.
*   **Disqualification:** If they select "Just Looking", jump straight to "Thanks, here is a blog post" (Skip the booking calendar).

---

## 6. Tier 4: Domains (The DNS Handshake)
**The #1 VA Struggle:** "The site isn't loading!!"
**The Fix (SOP):**
1.  **CNAME Record:** Point `www` to `flash.funnels.msgsndr.com`.
2.  **A Record:** Point `@` (root) to `34.68.234.4` (Standard GHL IP).
3.  **Cloudflare:** Use Cloudflare for fastest propagation (1 minute vs 24 hours).

---

## 7. Lab Assignment: "The Smart Funnel"

**Scenario:**
A Consultant wants to filter bad leads.

**Your Mission:**
1.  **Build a Form:** using **Logic V2**.
    *   Q1: "Revenue?"
    *   *Logic:* If < $5k, Hide the "Phone Number" field. If > $5k, Show "Phone Number".
2.  **Build a Funnel:** 2 Steps.
    *   Step 1: Landing Page with your Smart Form.
    *   Step 2: Thank You Page.
3.  **Global Section:** Create a Footer with "Copyright 2025" and save it as Global.

**Deliverable:**
Screenshots of the (1) Logic V2 settings, (2) Funnel View, and (3) Global Section purple outline.

---

## 8. Quiz (Verified Bank)
1) What is the main difference between a Funnel and a Website? (A) Funnels have no SEO (B) **Funnels are linear conversion paths; Websites are navigational hubs** ✅.
2) Where do you edit a header to update it on ALL pages? (A) On every page manually (B) **In Global Sections** ✅.
3) What allows a user to buy an Upsell without re-entering their card? (A) Magic (B) **One-Click Upsell (2-Step Order Form)** ✅.
4) If a user answers "No" and you want to skip the next question, what feature do you use? (A) Logic V2 (Conditional Logic) (B) Magic Jump ✅.
