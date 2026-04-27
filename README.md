# 40 Meadowbrook Rd — Rental Listing Site

A clean React listing site built with Vite.

---

## Quickstart

```bash
npm install
npm run dev        # local preview at http://localhost:5173
npm run build      # outputs to  dist/
```

---

## Adding Photos

1. Drop your `.jpg` / `.webp` files into `public/photos/`
2. Open `src/config.js` and add an entry to the `photos` array:

```js
photos: [
  { src: "/photos/living-room.jpg",  caption: "Living Room" },
  { src: "/photos/bedroom-1.jpg",    caption: "Bedroom 1" },
  // add more lines here...
]
```
