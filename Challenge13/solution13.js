// Challenge 13 - All of the Lights

// for lightsOn() function
const lights1 = [
  {
    id: 1,
    on: false
  },
  {
    id: 2,
    on: false
  },
  {
    id: 3,
    on: false
  },
  {
    id: 4,
    on: false
  },
  {
    id: 5,
    on: false
  }
];

// for lightsOff() function
const lights2 = [
  {
    id: 1,
    on: true
  },
  {
    id: 2,
    on: true
  },
  {
    id: 3,
    on: true
  },
  {
    id: 4,
    on: true
  },
  {
    id: 5,
    on: true
  }
];

// for toggleLights() function
const lights3 = [
  {
    id: 1,
    on: true
  },
  {
    id: 2,
    on: true
  },
  {
    id: 3,
    on: true
  },
  {
    id: 4,
    on: true
  },
  {
    id: 5,
    on: true
  }
];

const lightsOn = function(lights) {
  return lights.map(allLights => {
    allLights.on = true;
    return allLights;
  });
};
console.log("-------LIGHTS ON--------");
console.log(lightsOn(lights1));

const lightsOff = function(lights) {
  return lights.map(allLights => {
    allLights.on = false;
    return allLights;
  });
};
console.log("-------LIGHTS OFF-------");
console.log(lightsOff(lights2));

const toggleLights = function(lights, lightsAreOn) {
  lightsAreOn ? lightsOff(lights) : lightsOn(lights);
  return lights;
};

const lightsAreOn = true;
const lightsAreOn2 = false;

console.log("------TOGGLE LIGHTS------");
console.log(toggleLights(lights3, lightsAreOn));
console.log("-------------------------");
console.log(toggleLights(lights3, lightsAreOn2));
