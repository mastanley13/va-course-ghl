# Naming Conventions + Data Dictionary (North Star)

## Why this exists
Most GHL builds fail long-term because names are inconsistent and nobody can audit automation safely. This file is mandatory for every build in this course.

---

## 1) Naming Conventions

### Workflows
Format: `[DEPT] - [Purpose] - [Trigger] - v#`

Departments:
- `ACQ` Acquisition
- `SALES` Sales ops
- `FUL` Fulfillment
- `OPS` Internal operations
- `FIN` Finance

Examples:
- `ACQ - Outbound Prospecting - Tag stage:new - v1`
- `OPS - Daily Prospect Build - Scheduler Daily - v1`
- `FUL - Vendor Notify - Payment Success - v1`

### Pipelines
- `Sales - Advertisers`
- `Fulfillment - Sign Orders`

### Calendars
- `Sales - Advertiser Meeting`
- `Vendor - Pickup Scheduling`
- `Vendor - Dropoff Scheduling` (if used)

### Tags
Prefixes:
- `stage:` pipeline or funnel stage mirror
- `seg:` segmentation bucket
- `intent:` inferred intent
- `src:` source bucket
- `status:` operational state

Examples:
- `stage:new`
- `seg:mortgage`
- `intent:pricing`
- `src:manual`
- `status:do-not-contact`

### Custom Fields (Contacts)
Principles:
- Use snake_case
- Keep fields stable (don’t rename mid-build)
- Avoid free-text when structured choice is better

Examples:
- `biz_name`
- `biz_website`
- `ad_package_selected`
- `consent_sms`

---

## 2) Data Dictionary (Capstone-aligned)

### Contact Fields (minimum)
Identity:
- biz_name
- first_name, last_name (if contact person known)
- email
- phone

Segmentation:
- biz_type
- biz_industry
- biz_city, biz_state
- lead_source

Qualification:
- ad_interest_level
- ad_budget_range
- ad_package_selected

Compliance:
- consent_email (yes/no/unknown)
- consent_sms (yes/no/unknown)
- status_do_not_contact (derived from tag)

AI:
- last_ai_summary

---

## 3) Evidence discipline
Every “required object” must be provable:
- tags via contact record screenshot
- fields via settings screenshot
- workflows via canvas screenshot (incl. settings tab)
- pages via preview link screenshot
