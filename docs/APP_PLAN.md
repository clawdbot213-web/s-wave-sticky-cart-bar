# S Wave Sticky Add‑to‑Cart Bar — Plan

## Goal
Create a sticky add‑to‑cart bar that appears when the main product form is scrolled out of view, keeping conversion actions visible on mobile and desktop.

## MVP Features
- Theme app extension (app block) that renders:
  - product title
  - price
  - quantity selector (optional)
  - add to cart button
- Visibility trigger (show when original ATC form is not visible)
- Basic settings: enable/disable, position (bottom), colors, button label
- Works on product pages for Online Store 2.0 themes

## Tech
- Remix app + Shopify App Template (Remix)
- Theme app extension for storefront UI

## Current Blocker
- `shopify app init` dependency install hangs in this environment. Using template clone instead.

## Next Actions
1. Create theme app extension folder (`extensions/sticky-cart-bar`)
2. Add block schema + liquid + minimal JS to detect visibility
3. Wire add-to-cart form submission via `fetch('/cart/add.js')`
4. Add basic CSS and settings
