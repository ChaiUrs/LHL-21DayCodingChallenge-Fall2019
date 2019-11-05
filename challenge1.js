// Challenge #1 - Door to Door

const volunteers = ["Sally", "Jake", "Brian", "Hamid"];

const neighbourhoods = [
	"Central Valley",
	"Big Mountain",
	"Little Bridge",
	"Bricktown",
	"Brownsville",
	"Paul's Boutique",
	"Clay Park",
	"Fox Nest"
];

const doorToDoor = (volunteers, neighbourhoods) => {
	return neighbourhoods.length / volunteers.length;
};

console.log(volunteers.length);
console.log(neighbourhoods.length);
console.log(neighbourhoods.length / volunteers.length);
