// Challenge 17 - We're Rooting For You!

const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3
  }
];

const metric = "redness";

const judgeVegetable = (vegetables, metric) => {
  let bestVeggie = 0;
  let winnerName = "";
  for (let vegetable of vegetables) {
    if (vegetable[metric] > bestVeggie) {
      bestVeggie = vegetable[metric];
      winnerName = vegetable.submitter;
    }
  }
  return winnerName;
};
console.log(judgeVegetable(vegetables, metric));
