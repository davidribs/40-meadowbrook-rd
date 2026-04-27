# 40 Meadowbrook Rd — Rental Listing Site

A clean, production-ready React listing site built with Vite.
Deploy for free on Netlify or Vercel in under 5 minutes.

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

The **first photo** is used as the full-screen hero image.
All others appear in the gallery grid.
That's it — no other changes needed.

---

## Editing Listing Details

Everything lives in **`src/config.js`**:
- Price, beds, baths, sqft
- Description paragraphs
- Feature cards
- Quick-facts sidebar rows
- Contact email and phone
- Nearby tags

---

## Free Hosting — Netlify (easiest)

**Option A — drag & drop (no account needed for 1 site):**
1. `npm run build`
2. Go to [netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `dist/` folder onto the page
4. Done — you get a live URL instantly

**Option B — GitHub + auto-deploy:**
1. Push this folder to a GitHub repo
2. Log in to Netlify → "Add new site" → "Import from Git"
3. Build command: `npm run build` — Publish directory: `dist`
4. Every `git push` automatically redeploys

---

## Free Hosting — Vercel

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → "Add New Project"
3. Import your repo — Vercel auto-detects Vite
4. Deploy — done

---

## File Structure

```
meadowbrook/
├── public/
│   └── photos/          ← drop images here
├── src/
│   ├── config.js        ← EDIT THIS: all listing data + photo list
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── components/
│       ├── Hero.jsx
│       ├── StatsBar.jsx
│       ├── About.jsx
│       ├── Gallery.jsx
│       ├── Lightbox.jsx
│       ├── Features.jsx
│       ├── Location.jsx
│       ├── Contact.jsx
│       ├── Footer.jsx
│       └── SectionHeader.jsx
├── index.html
├── vite.config.js
└── package.json
```
