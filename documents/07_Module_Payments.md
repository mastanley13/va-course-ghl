# Module 07 — Payments (Stripe, Products, Payment Links, Invoices)

🔗 **Appendix:** [Plain Language + Glossary (A–Z with screenshots)](Appendix_Plain_Language_Glossary.md) — includes navigation verbs quick-reference (EN/ES/PH).

## Why it matters
Payments is where intent turns into revenue. For the capstone, the VA must collect payments for ad placements and trigger fulfillment automations.

## Learning outcomes
A passing VA can:
- Connect Stripe (or confirm it is connected).
- Create products and prices (one-time and recurring).
- Create a Payment Link and personalize it when needed.
- Create invoices/subscriptions from a contact profile when required.
- Understand what payment methods are supported where.

## Key platform notes (Dec 2025)
- Payment links require a Product first.
- Payment links support URL parameters to pre-fill buyer details and redirect after purchase.
- Manual payment methods are not supported on single Payment Link checkouts; use invoices/order forms for manual methods.

## Vocabulary
- **Integration**: payment provider connection (e.g., Stripe)
  - *What this means:* This is the handshake that lets HighLevel process payments through the provider.
- **Product**: what you sell
  - *What this means:* Define each offer as a product so pricing, tax, and reporting stay organized.
- **Price**: one-time or recurring amount attached to product
  - *What this means:* Prices hold the actual charge amount and billing frequency your checkout will use.
- **Payment Link**: shareable checkout page link
  - *What this means:* Send this URL to let someone pay without building a full page or form.
- **Invoice**: bill sent to a specific contact
  - *What this means:* Use invoices when you need manual payment options or a named recipient.
- **Subscription**: recurring billing relationship
  - *What this means:* A subscription automatically bills on a schedule until canceled.
- **Transaction**: recorded payment event
  - *What this means:* Every successful or failed charge logs as a transaction for reconciliation and follow-up.

## Course sections and pages
### Section A — Orientation
- Page 1: Payments vs Opportunities (value vs cash)
- Page 2: Where payments appear in the platform (contact profile + payments dashboards)

### Section B — Setup
- Page 3: Connect Stripe and confirm integration
- Page 4: Create products + prices

### Section C — Payment links & checkout
- Page 5: Create Payment Link
- Page 6: Pre-fill fields + redirect parameters (use cases)
- Page 7: When to use Invoice instead of Payment Link

### Section D — Production SOP
- Page 8: Standard “collect payment” flow for advertisers
- Page 9: Post-payment automations and receipts

### Section E — Quiz
- Page 10: Quiz (12 questions)

### Section F — Lab
- Page 11: Create 1 product + 1 payment link + test purchase flow

## Production SOP — Advertiser payment flow (capstone-aligned)
1) Create product: “Ad Slot — Monthly Sponsorship” (recurring) OR “Ad Slot — One-Time” (one-time)
2) Create payment link for chosen product
3) Ensure post-purchase redirect goes to “Thank You / Next Steps” page
4) Workflow triggers on successful payment:
   - mark opportunity Won
   - create fulfillment opportunity
   - notify sign vendor

## Quiz (sample bank)
1) Before creating a Payment Link you must create a: **Product** ✅  
2) True/False: Payment links can collect manual bank transfer payments. **False** ✅  
3) Payment links are best for: **fast checkout without a full website** ✅  
4) Invoices are best for: **manual/negotiated billing or manual payment options** ✅  
5) A subscription is: **recurring billing** ✅  
6) Product images: **can display on payment links** ✅  
7) A post-purchase redirect is used to: **send buyers to next steps page** ✅  
8) Payments should trigger: **fulfillment automation** ✅  
9) If revenue appears “wrong,” check: **opportunity value vs payments** ✅  
10) Payment links can pre-fill: **name/email/phone via URL parameters** ✅  
11) Stripe integration is connected via: **Payments > Integrations** ✅  
12) A failed payment should: **trigger internal alert and follow-up** ✅

## Lab assignment (evidence required)
**Goal:** Payments setup for Ace Web Agency (test mode allowed).
1) Connect Stripe if possible (Payments → Integrations). If unavailable, note “Gateway not connected – using test instructions.”
2) Create a product: Payments → Products → `Website Design Package` (one-time ~$500) with a short description. Screenshot the Products list showing name/price.
3) Generate a payment link: Payments → Payment Links → Create New → select the product → save. Screenshot the Payment Links list/settings and open the checkout page for a screenshot (test card OK).
4) Optional invoice: Payments → Invoices → New Invoice → add the product and a test contact; save/send; screenshot the invoice preview/list entry.
5) Refund readiness: In notes, state where the Refund button lives (Payments → Transactions, three-dot menu) and how you’d pair it with a workflow trigger `Payment Refunded` → update opportunity to Lost.
Evidence: Product screenshot, payment link + checkout screenshot, optional invoice, and the refund workflow note. Rubric: Pass if product and link align, checkout is shown, and the refund handling note is present.

## Relatable metaphor — “Cashier + Safe”
Payments is both the cashier collecting money and the safe keeping records. If the drawer doesn’t balance, everything else in the business feels off.

## Scenario walkthroughs with decision points
- **Launch day for a new offer**
  - Decision: invoice or payment link? → Use payment link for self-serve; invoice for B2B with PO requirements.
  - Decision: refunds or voids? → Use refund only after confirming settlement and communication with accounting.
- **Failed payments spike**
  - Decision: technical or financial issue? → Check transaction error codes; if “insufficient funds,” set retry logic; if “processor not connected,” re-auth integration.
  - Decision: where to log follow-up? → Add note/tag in Opportunities and start a recovery workflow.

## UI callouts + screenshot placeholders
- [Screenshot: Products list with price/description callouts]
- [Screenshot: Payment link builder highlighting required fields and branding]
- [Screenshot: Transaction detail with status, error codes, and customer info]

## Stop and try (self-check)
1. What’s the difference between a payment link and an invoice? <details><summary>Answer</summary>Payment links are self-serve checkouts; invoices are issued documents often used for B2B approvals.</details>
2. Where do you confirm processor connectivity? <details><summary>Answer</summary>Settings → Payments integrations (Stripe, etc.).</details>
3. How do you prevent revenue/report mismatches with Opportunities? <details><summary>Answer</summary>Record payments in Payments and update opportunity stages/values accordingly.</details>
4. What action follows a failed payment? <details><summary>Answer</summary>Check error code, contact the customer, and enroll in a recovery or retry sequence.</details>
5. When should you issue a refund vs a credit? <details><summary>Answer</summary>Refund when reversing a charge; credit when applying balance to future service with accounting approval.</details>

## Practice labs + evidence rubric
- **Lab: Product + payment link + refund plan**
  - Deliverable: Product, payment link, checkout preview, and refund workflow note (optional invoice).
  - Evidence: Product and payment link screenshots, checkout page capture, optional invoice, and written refund-handling plan.
  - Rubric: Pass if the product/link pairing is clear, checkout is reachable (test mode acceptable), and refund steps are documented.
