/* MUSEUM — one line per piece in the pile.

   1. Put the file in the assets/museum/ folder.
      Images: WebP or JPG, about 2000 px on the long side, under ~800 KB.
      Videos: MP4 with no sound, under ~5 MB (25 MB is the hard limit per file).
   2. Add a line below.

   Image:  { src: 'assets/museum/FILE.webp', w: WIDTH, h: HEIGHT, title: 'Title', meta: 'Medium, year' },
   Video:  { video: 'assets/museum/FILE.mp4', src: 'assets/museum/STILL.webp', w: WIDTH, h: HEIGHT, title: 'Title', meta: 'Video, 10 s' },

   w and h only set the shape: any numbers with the right ratio work (4 and 5 for a portrait 4:5 piece).
   For a video, src is a still frame shown while it loads.
   Keep the comma at the end of each line. */

window.MUSEUM = [
  { src: 'assets/museum/sketchbook-spread.webp', w: 1400, h: 1081, title: 'Sketchbook spread', meta: 'Ink and marker' },
  { video: 'assets/museum/cat-loop.mp4', src: 'assets/museum/cat-loop.webp', w: 550, h: 450, title: 'Cat cut-out loop', meta: 'Video, 10 s' },
  { video: 'assets/museum/reflex.mp4', src: 'assets/museum/reflex.webp', w: 960, h: 960, title: 'Reflex', meta: 'Video, 10 s' },
];
