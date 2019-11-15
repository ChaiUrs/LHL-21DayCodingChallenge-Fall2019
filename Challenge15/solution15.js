// Challenge 15 - X Marks the Perfect Shot 📸

const moves = ["north", "north", "west", "west", "north", "east", "north"];

const finalPosition = moves => {
  let paradeLocation = [0, 0]; // [x, y]

  moves.forEach(direction => {
    if (direction === "north") {
      paradeLocation[1]++; // y++
    }
    if (direction === "south") {
      paradeLocation[1]--; // y--
    }
    if (direction === "west") {
      paradeLocation[0]--; // x--
    }
    if (direction === "east") {
      paradeLocation[0]++; // x++
    }
  });
  return paradeLocation;
};
console.log(finalPosition(moves));
