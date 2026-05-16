# Content Editing Guide

How to add your walking tours and waypoints to the site.

## Where to Edit

All tour content goes in: `src/data/tours.js`

This is a plain text file. Open it with:
- Visual Studio Code (recommended)
- Notepad
- Any text editor

## Tour Structure

Each tour is a block that looks like this:

```javascript
{
  id: 1,
  name: "Your Tour Name",
  description: "Short 1-2 sentence description",
  lat: 36.975,
  lng: -121.795,
  bounds: {
    north: 36.980,
    south: 36.970,
    east: -121.785,
    west: -121.805
  },
  waypoints: [
    // Add waypoints here
  ]
}
```

## Adding Waypoints

Each waypoint goes inside the `waypoints: [` array.

### Example 1: Short Content (appears in popup modal)

```javascript
{
  id: 1,
  name: "Historic Oak Tree",
  lat: 36.9755,
  lng: -121.7955,
  text: "This magnificent oak tree has stood here for 300+ years. It was a gathering point for the community.",
  type: "modal",
  image: null
}
```

### Example 2: Long Content (appears on full page)

```javascript
{
  id: 2,
  name: "Community Hall",
  lat: 36.9760,
  lng: -121.7950,
  text: "Built in 1912 to serve as a gathering place for the community.\n\nThe hall hosted countless celebrations, from harvest festivals to holiday gatherings. Local families gathered here to share news and celebrate together.\n\nDuring World War II, the hall was used for community support activities. After agricultural decline, the building fell into disrepair but has been preserved.",
  type: "page",
  image: null
}
```

## Important Rules

1. **id**: Must be unique within each tour (1, 2, 3, etc.)
2. **name**: The waypoint title
3. **lat/lng**: Exact GPS coordinates (get from Google Maps)
4. **text**: Description
   - For "modal" type: Keep under 300 words
   - For "page" type: Can be longer
   - Use `\n\n` to make paragraph breaks
5. **type**: Either `"modal"` or `"page"`
6. **image**: Use `null` for now (we'll add photos later)

## Finding GPS Coordinates

1. Open Google Maps: maps.google.com
2. Search for the location (e.g., "Old General Store, Live Oak")
3. Right-click on the exact spot
4. Click the coordinates shown at the top
5. Copy them (they'll be something like `36.9755, -121.7955`)

## Comma Rules (Important!)

JavaScript requires specific comma placement:

✓ **Correct:**
```javascript
{
  id: 1,
  name: "Place",
  text: "Description"
}
```

✗ **Wrong - extra comma:**
```javascript
{
  id: 1,
  name: "Place",
  text: "Description",    // ← No comma here, it's the last item
}
```

✗ **Wrong - missing comma:**
```javascript
{
  id: 1
  name: "Place"          // ← Missing comma
}
```

If the site breaks, check for missing or extra commas!

## Copying from Brochures

When pasting text from your PDF brochures:

1. Copy the text
2. Paste it in the `text: "..."` field
3. For paragraph breaks, replace them with `\n\n`

Example:

Original brochure:
```
Built in 1892, the store served the community.

It provided essential goods to farmers and residents.
```

In tours.js:
```javascript
text: "Built in 1892, the store served the community.\n\nIt provided essential goods to farmers and residents."
```

## Example: Adding Your First Tour

Replace the first tour with real content:

```javascript
{
  id: 1,
  name: "Downtown Santa Cruz Avenue Walk",
  description: "Historic buildings and shops along Santa Cruz Avenue",
  lat: 36.9755,
  lng: -121.7955,
  bounds: {
    north: 36.9800,
    south: 36.9710,
    east: -121.7850,
    west: -121.8060
  },
  waypoints: [
    {
      id: 1,
      name: "Old Train Station",
      lat: 36.9755,
      lng: -121.7955,
      text: "The original train station served the community from 1885 to 1950.",
      type: "modal",
      image: null
    },
    {
      id: 2,
      name: "Hardware Store Building",
      lat: 36.9760,
      lng: -121.7950,
      text: "Built in 1898 to supply tools and goods to local farmers.\n\nThis building reflects the architectural styles of the late 19th century, with its brick facade and ornate cornices.\n\nFor many years it served as the main supplier of hardware and farm equipment to the surrounding agricultural community.",
      type: "page",
      image: null
    }
  ]
}
```

## Testing Your Changes

1. Save the file
2. Look at your browser - it should update automatically
3. If it shows an error, check:
   - Commas are in the right places
   - All quotes are matched (" ... ")
   - All brackets are matched ({ ... })

## Troubleshooting

**"Expected '}' but got 'x'"**
- You're missing a comma somewhere
- Check the line numbers shown in the error

**"Unexpected token"**
- Check for unmatched quotes or brackets

**Tour doesn't appear**
- Make sure the `id` number is unique in the array
- Check that coordinates are close to Live Oak (should be around 36.97, -121.79)

**Map shows wrong area**
- Check the `lat` and `lng` in the tour header
- Check `bounds` - make sure north > south, east > west

## Adding Photos (Coming Soon)

For now, set `image: null`. We'll add a guide for adding photos once you have the structure working.

---

**Save frequently!** And if you break something, you can always undo (Ctrl+Z) or restore the original file.
