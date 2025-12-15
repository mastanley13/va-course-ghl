# Module 07 — Payments (Stripe, Products, Payment Links, Invoices)

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
- **Product**: what you sell
- **Price**: one-time or recurring amount attached to product
- **Payment Link**: shareable checkout page link
- **Invoice**: bill sent to a specific contact
- **Subscription**: recurring billing relationship
- **Transaction**: recorded payment event

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
1) Create product + price
2) Create payment link
3) Provide:
  - screenshot of product setup
  - screenshot of payment link settings
  - test checkout screenshot (use test mode if available)
Rubric: Pass if link works and configuration matches spec.
