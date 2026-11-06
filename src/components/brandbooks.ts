/* Page lists for the brandbook flip books, in reading order. Shared by the
   case studies and the creative page. */

// SelfServe: cover, 02-27, then 00 as the back cover
const SELFSERVE = "/images/selfserve/brandbook";
export const selfServeBrandbook = [
  ...Array.from({ length: 27 }, (_, i) => `${SELFSERVE}/page-${String(i + 1).padStart(2, "0")}.jpg`),
  `${SELFSERVE}/page-00.jpg`,
];

// CineCircle: each source image was a two-page spread, split down the middle.
// Front cover (right of spread 00), spreads 02-13, then the back cover (left
// of spread 00). Spread 01 was blank and is skipped.
const CINECIRCLE = "/images/cinecircle/brandbook";
export const cineCircleBrandbook = [
  `${CINECIRCLE}/page-00-right.jpg`,
  ...Array.from({ length: 12 }, (_, i) => {
    const n = String(i + 2).padStart(2, "0");
    return [`${CINECIRCLE}/page-${n}-left.jpg`, `${CINECIRCLE}/page-${n}-right.jpg`];
  }).flat(),
  `${CINECIRCLE}/page-00-left.jpg`,
];
