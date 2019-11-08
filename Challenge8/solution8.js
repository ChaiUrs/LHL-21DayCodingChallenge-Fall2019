// Challenge 8 - Trash to Treasure

const bins = {
	waste: 4,
	recycling: 2,
	compost: 5
};

const trash = "recycling";

// SOLUTION 1
const smartGarbage = (trash, bins) => {
	if (trash === "waste") {
		bins["waste"]++;
	}
	if (trash === "recycling") {
		bins["recycling"]++;
	}
	if (trash === "compost") {
		bins["compost"]++;
	}
	return bins;
};
console.log(smartGarbage(trash, bins));

// SOLUTION 2
const smartGarbage = (trash, bins) => {
	if (trash === "waste" || trash === "recycling" || trash === "compost") {
		bins[`${trash}`]++;
	}
	return bins;
};
console.log(smartGarbage(trash, bins));

// SOLUTION 3
const smartGarbage = (trash, bins) => {
	bins[trash]++;
	return bins;
};
console.log(smartGarbage(trash, bins));

// SOLUTION 4
const smartGarbage = (trash, bins) => {
	switch (trash) {
		case "waste":
			bins.waste++;
			break;

		case "recycling":
			bins.recycling++;
			break;

		case "compost":
			bins.compost++;
			break;

		default:
			break;
	}
	return bins;
};
console.log(smartGarbage(trash, bins));
