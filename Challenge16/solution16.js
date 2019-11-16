// Challenge 16 - In Living Colour

/* A split-complementary color scheme is a three-color combination 
that consists of a base color (H0) and two colors (H1 and H2) t
hat are 150 degrees and 210 degrees apart from H0 respectively. */

/* 
formula: H1 = |(H0 + 150 degrees) - 360 degrees|
formula: H2 = |(H0 + 210 degrees) - 360 degrees|
*/

const festivalColours = H0 => {
  const H1 = Math.abs(H0 + 150);
  const H2 = Math.abs(H0 + 210);

  if (H1 > H2) {
    return [H2, H1];
  } else {
    return [H1, H2];
  }
};
console.log(festivalColours(100));
console.log(festivalColours(200));
