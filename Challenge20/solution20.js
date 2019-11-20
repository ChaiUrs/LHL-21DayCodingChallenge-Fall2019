// Challenge 20 - Bouncy Castles

const PI = 3.14159;

const sphereVolume = radius => {
  return Math.round((4 / 3) * Math.PI * Math.pow(radius, 3) * 100) / 100;
};
const sphere = {
  type: "sphere",
  radius: 2
};
console.log("Volume of Sphere :");
console.log(sphereVolume(sphere.radius));

const coneVolume = (radius, height) => {
  return Math.round(PI * Math.pow(radius, 2) * (height / 3) * 100) / 100;
};
const cone = {
  type: "cone",
  radius: 3,
  height: 5
};
console.log("Volume of Cone :");
console.log(coneVolume(cone.radius, cone.height));

const prismVolume = (height, width, depth) => {
  return Math.round(height * width * depth * 100) / 100;
};
const prism = {
  type: "prism",
  height: 3,
  width: 4,
  depth: 5
};
console.log("Volume of Prism :");
console.log(prismVolume(prism.height, prism.width, prism.depth));

const totalVolume = solids => {
  let volumeOfShape = 0;
  for (let shape of solids) {
    if (shape.type === "sphere") {
      volumeOfShape += sphereVolume(shape.radius);
    } else if (shape.type === "cone") {
      volumeOfShape += coneVolume(shape.radius, shape.height);
    } else if (shape.type === "prism") {
      volumeOfShape += prismVolume(shape.height, shape.width, shape.depth);
    }
  }
  return Math.round(volumeOfShape * 100) / 100;
};

// ------------------------------------------------------------------------- //

const largeSphere = {
  type: "sphere",
  radius: 40
};

const smallSphere = {
  type: "sphere",
  radius: 10
};

const duckCone = {
  type: "cone",
  radius: 3,
  height: 5
};

const duck = [largeSphere, smallSphere, duckCone];
console.log("Total Volume of Duck :");
console.log(totalVolume(duck));

// ------------------------------------------------------------------------- //

const castleCone = {
  type: "cone",
  radius: 3,
  height: 6
};

const castlePrism = {
  type: "prism",
  height: 5,
  width: 6,
  depth: 3
};

const castle = [castleCone, castlePrism];
console.log("Total Volume of Castle :");
console.log(totalVolume(castle));

// ------------------------------------------------------------------------- //
