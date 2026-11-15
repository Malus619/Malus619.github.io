# Portfolio 1.5

Rangan Mukhopadhyay's portfolio: a night train window with a looping view, plus About, Work and Museum.
It is a plain website (one HTML page and its assets), with no build step. Anything saved to this repository goes live on its own.

## Add a piece to the Museum
1. Open `assets/museum/` → **Add file → Upload files** and upload the image or video.
   - Images: WebP or JPG, about 2000 px on the long side, under ~800 KB.
   - Videos: MP4 without sound, under ~5 MB. GitHub's upload limit is 25 MB per file.
2. Open `content/museum.js` → the pencil icon, and add one line (the file explains the format).
3. **Commit changes.** The site updates within a minute or two.

## Add or change a project in Work
Edit `content/work.js` the same way: one line per project, with its Behance link.

## Where things are
| What | File |
| --- | --- |
| The page (layout, About text, styles, interactions) | `index.html` |
| Work list | `content/work.js` |
| Museum list | `content/museum.js` |
| Window video, train images, fonts, photo | `assets/` |
| Museum files | `assets/museum/` |
