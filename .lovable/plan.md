
## Fix: "up to 95%" Layout

**Problem**: The current code places "up to" and "95%" on two lines (correct) but positions "Verified emails + direct dials" to the right of it using a horizontal flex layout. The screenshot shows "Verified emails + direct dials" should be **below** the "up to 95%" text, not beside it.

**Change in `src/components/Accuracy.tsx` (around lines 77-80)**:

- Remove the horizontal `flex items-baseline gap-4` wrapper that places the subtitle next to the number
- Stack "up to 95%" and "Verified emails + direct dials" vertically instead
- Keep the `<br />` between "up to" and "95%" so it remains on two lines

```
Before:
  <div className="mb-1 flex items-baseline gap-4">
    <p className="text-4xl font-extrabold text-white">up to<br />95%</p>
    <p className="text-sm text-gray-400">Verified emails + direct dials</p>
  </div>

After:
  <p className="mb-1 text-4xl font-extrabold text-white">up to<br />95%</p>
  <p className="mb-8 text-sm text-gray-400">Verified emails + direct dials</p>
```

This makes "up to / 95%" a standalone stacked heading with the subtitle underneath, matching the screenshot exactly.
