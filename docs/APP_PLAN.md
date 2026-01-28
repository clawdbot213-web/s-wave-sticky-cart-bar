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

## Status
- Theme app extension scaffolded with app block, JS, and CSS.
- Sticky bar shows when product form scrolls out of view and posts to cart.

## Next Actions
1. Run `shopify app dev` to register the app + extension in a dev store.
2. QA in a Dawn product page (variant changes, sold-out state, mobile sizing).
3. Decide if we need product/variant selection handling beyond the current form sync.
4. Add lightweight admin page for help/docs if needed.
