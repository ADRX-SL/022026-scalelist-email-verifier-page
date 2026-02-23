

# Fix: Hero Title Line Breaks

## Problem
The title in the screenshot displays as 4 lines:
- Line 1: "Get the best"
- Line 2: "emails and"
- Line 3: "mobile numbers,"
- Line 4: "Anywhere"

The current code forces 3 lines using `<br />` tags, which does not match the reference.

## Solution
Update `src/components/Hero.tsx` (line 133-137) to remove the current `<br />` tags and instead let the text wrap naturally by constraining the `max-width` of the heading. The large font size combined with a narrower container will produce the exact 4-line break pattern shown in the screenshot.

Alternatively, use explicit `<br />` tags matching the 4-line structure:
```
Get the best<br />
emails and<br />
mobile numbers,<br />
Anywhere
```

## File Change
- **`src/components/Hero.tsx`** (lines 133-137): Update the `h1` content to use 4 line breaks matching the screenshot exactly, and add a `max-w-[600px]` constraint to ensure consistent wrapping.

