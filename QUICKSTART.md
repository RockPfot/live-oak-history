# Quick Start Guide

Get your Live Oak History site running in 5 minutes.

## Step 1: Install Node.js

Download from: https://nodejs.org/ (choose "LTS")

## Step 2: Open Terminal in Project Folder

- Mac: Right-click folder → "New Terminal at Folder"
- Windows: Shift + Right-click → "Open PowerShell here"
- Linux: Right-click → "Open Terminal Here"

## Step 3: Install Dependencies

Copy and paste this in the terminal:

```bash
npm install
```

Wait for it to finish (1-2 minutes).

## Step 4: Start the Site

```bash
npm run dev
```

Your browser should open to `http://localhost:3000` automatically.

## Step 5: Try It Out

1. Click a tour on the landing page
2. Click a waypoint on the map
3. See the modal or page appear
4. Navigate back and explore

## Step 6: Add Your Content

Open `src/data/tours.js` with a text editor and:
- Replace the sample tour names with yours
- Paste in your waypoint descriptions from the brochures
- Add GPS coordinates for each waypoint

Save the file. The site updates automatically!

## Step 7: Deploy When Ready

See "Deploying to Netlify" in README.md for free hosting.

---

**That's it!** You now have a working local version of your site.

For detailed customization, see README.md.
