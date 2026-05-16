# Live Oak History - Interactive Walking Tours

A beautiful, mobile-first website for exploring Live Oak's historical walking tours. Built with React, Leaflet maps, and designed for users viewing on phones while walking.

## Project Structure

```
live-oak/
├── src/
│   ├── components/          # React components
│   │   └── WaypointModal.jsx
│   ├── pages/              # Page components
│   │   ├── LandingPage.jsx
│   │   ├── TourPage.jsx
│   │   └── WaypointDetailPage.jsx
│   ├── data/               # Tour and waypoint data
│   │   └── tours.js
│   ├── styles/             # CSS files
│   │   ├── App.css         # Global styles & color variables
│   │   ├── pages.css       # Page-specific styles
│   │   └── components.css  # Component styles
│   ├── App.jsx             # Main app component with routing
│   └── main.jsx            # React entry point
├── index.html              # HTML entry point
├── package.json            # Dependencies
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

## Setup Instructions

### 1. Clone or Download the Project

```bash
# If you have it as a zip file, extract it first
cd live-oak
```

### 2. Install Dependencies

Make sure you have Node.js 16+ installed. Then run:

```bash
npm install
```

### 3. Run Locally

```bash
npm run dev
```

The site will open at `http://localhost:3000`. It will auto-refresh as you make changes.

## Customizing Your Content

### Adding Your Walking Tours

All tour data lives in `src/data/tours.js`. This is where you'll paste your brochure content.

**Structure of a tour:**

```javascript
{
  id: 1,                              // Unique number
  name: "Downtown Live Oak Walk",     // Tour title
  description: "A journey through...", // Brief description
  lat: 36.975,                        // Center latitude
  lng: -121.795,                      // Center longitude
  bounds: {                           // Map zoom area
    north: 36.980,
    south: 36.970,
    east: -121.785,
    west: -121.805
  },
  waypoints: [                        // List of stops on the tour
    {
      id: 1,
      name: "Old General Store",
      lat: 36.9755,                   // Exact location (GPS)
      lng: -121.7955,
      text: "Established in 1892...",  // Description (50-500 words)
      type: "modal",                   // "modal" for short, "page" for long
      image: null                      // Optional photo path
    }
  ]
}
```

### Pasting Your Brochure Content

1. **Open** `src/data/tours.js`
2. **Replace the sample tours** with your real tours
3. **For each waypoint**, decide:
   - **"modal" type**: Short text (50-300 words) that appears in a popup
   - **"page" type**: Longer text (300+ words) that gets its own scrollable page
4. **Save the file** - the site will update immediately

### Changing Colors

Colors are defined at the top of `src/styles/App.css`:

```css
:root {
  --bg-primary: #F5F1E8;        /* Warm cream background */
  --accent-primary: #7A8F6F;    /* Sage green - main color */
  --accent-secondary: #A67C52;  /* Terracotta - accents */
  --text-primary: #2C2C2C;      /* Dark text */
  /* ... more colors ... */
}
```

**Change any hex color and the entire site updates.** No code changes needed.

### Adding Photos

1. **Save your image file** to a public location (we'll improve this for non-technical users later)
2. **In tours.js**, add the image path:

```javascript
{
  id: 1,
  name: "Old General Store",
  text: "...",
  type: "modal",
  image: "/images/general-store.jpg"  // Reference to your image
}
```

## Working with Tour Data

### Map Coordinates

To find the exact latitude/longitude for a waypoint:

1. Open [Google Maps](https://maps.google.com)
2. Search for the location
3. Right-click on the exact spot
4. Copy the coordinates shown (they'll be in the format: 36.9755, -121.7955)

### Tour Bounds

The `bounds` object sets the zoom area for each tour's map. Use slightly wider boundaries than your waypoint cluster so they're all visible on screen.

### Text Content

- **Modal text**: Keep to 50-300 words for quick reading while walking
- **Page text**: Can be longer; break into paragraphs with blank lines (`\n\n`)
- **Formatting**: Use simple text (no HTML or markdown yet)

## Building for Deployment

When ready to deploy:

```bash
npm run build
```

This creates a `dist/` folder with your ready-to-deploy site.

## Deploying to Netlify (Free Hosting)

Netlify hosts your site for free and gives you a custom domain option.

### Option A: Deploy via GitHub (Recommended)

1. **Create a GitHub account** (if you don't have one): github.com
2. **Create a new repository**:
   - Click "New repository"
   - Name it `live-oak-history`
   - Initialize with README
   - Click "Create"

3. **Upload your code to GitHub**:
   - Install GitHub Desktop: github.com/desktop
   - Clone your repository locally
   - Copy all the `live-oak` files into the cloned folder
   - Open GitHub Desktop, commit and push

4. **Deploy to Netlify**:
   - Go to netlify.com and sign up
   - Click "New site from Git"
   - Select your GitHub repository
   - Set Build command: `npm run build`
   - Set Publish directory: `dist`
   - Click "Deploy"

Netlify will automatically redeploy whenever you push changes to GitHub.

### Option B: Deploy via Drag & Drop (Simplest)

1. **Build the site**:
   ```bash
   npm run build
   ```

2. **Go to netlify.com**
3. **Drag the `dist/` folder** into the Netlify deploy zone
4. Your site is live!

To update: rebuild, drag the new `dist/` folder.

## Future Enhancements

This is just the start. Future improvements could include:

- **Admin panel** for non-technical users to edit tours without touching code
- **Photo gallery** with upload capability
- **Search functionality** to find waypoints by name
- **Email collection** for a mailing list
- **User submissions** for community contributions
- **Offline mode** for using without internet connection while walking

## Troubleshooting

**"npm install" fails:**
- Make sure Node.js 16+ is installed: `node --version`
- Try: `npm install --legacy-peer-deps`

**Map not showing:**
- Check your internet (Leaflet uses OpenStreetMap)
- Make sure coordinates are valid (around 36.97, -121.79 for Live Oak)

**Changes not showing locally:**
- Save your files
- Check the terminal for errors
- Restart the dev server: stop (Ctrl+C) and run `npm run dev` again

**Build fails:**
- Delete `node_modules` folder and run `npm install` again
- Check for typos in `src/data/tours.js`

## Support

For questions or issues:
1. Check the code comments - they explain how things work
2. Look at the sample tours to understand the structure
3. Search for the specific error message online

---

**Ready to customize?** Start with `src/data/tours.js` and paste your brochure content!
