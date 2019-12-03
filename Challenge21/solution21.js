// Challenge 21 - The Great Codeville Bake-off

const bakeryA = ["saffron", "eggs", "tomato paste", "coconut", "custard"];
const bakeryB = ["milk", "butter", "cream cheese"];
const bakeryC = ["potatoes", "bay leaf", "raisins"];
const bakeryD = ["red bean", "dijon mustard", "apples"];

const recipesList1 = [
  {
    name: "Coconut Sponge Cake",
    ingredients: ["coconut", "cake base"]
  },
  {
    name: "Persian Cheesecake",
    ingredients: ["saffron", "cream cheese"]
  },
  {
    name: "Custard Surprise",
    ingredients: ["custard", "ground beef"]
  }
];

const recipesList2 = [
  {
    name: "Potato Ganache",
    ingredients: ["potatoes", "chocolate"]
  },
  {
    name: "Sweet Fish",
    ingredients: ["anchovies", "honey"]
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ["dijon mustard", "raisins"]
  }
];

const chooseRecipe1 = function(bakeryA, bakeryB, recipesList1) {
  let matchedRecipe1 = "";
  console.log("INGREDIENTS OF BAKERY 'A' :", bakeryA);
  console.log("INGREDIENTS OF BAKERY 'B' :", bakeryB);
  console.log("LIST OF RECIPES :", recipesList1);

  for (let recipe of recipesList1) {
    if (
      bakeryA.includes(recipe.ingredients[0]) &&
      bakeryB.includes(recipe.ingredients[1])
    ) {
      matchedRecipe1 = recipe.name;
    } else if (
      bakeryB.includes(recipe.ingredients[0]) &&
      bakeryA.includes(recipe.ingredients[1])
    ) {
      matchedRecipe1 = recipe.name;
    }
  }
  console.log("FOUND RECIPE :");
  return matchedRecipe1;
};
console.log(chooseRecipe1(bakeryA, bakeryB, recipesList1));

console.log("----------------------------------------------------------------");

const chooseRecipe2 = function(bakeryC, bakeryD, recipesList2) {
  let matchedRecipe2 = "";
  console.log("INGREDIENTS OF BAKERY 'C' :", bakeryC);
  console.log("INGREDIENTS OF BAKERY 'D' :", bakeryD);
  console.log("LIST OF RECIPES2 :", recipesList2);

  for (let recipe of recipesList2) {
    if (
      bakeryC.includes(recipe.ingredients[0]) &&
      bakeryD.includes(recipe.ingredients[1])
    ) {
      matchedRecipe2 = recipe.name;
    } else if (
      bakeryD.includes(recipe.ingredients[0]) &&
      bakeryC.includes(recipe.ingredients[1])
    ) {
      matchedRecipe2 = recipe.name;
    }
  }
  console.log("FOUND RECIPE2 :");
  return matchedRecipe2;
};
console.log(chooseRecipe2(bakeryC, bakeryD, recipesList2));
