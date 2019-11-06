// Challenge #3 - Securing the Vote

//Solution 1
const castVote = (name, votes) => {
	if (name === "Tim") {
		votes[0]++;
	} else if (name === "Sally") {
		votes[1]++;
	} else if (name === "Beth") {
		votes[2]++;
	}
	return votes;
};
console.log(castVote("Sally", [0, 2, 1]));

//Solution 2
const castVote = (name, votes) => {
	const talliedVotes = {
		Tim: votes[0],
		Sally: votes[1],
		Beth: votes[2]
	};
	console.log(talliedVotes[name]++);
	return Object.values(talliedVotes);
};
console.log(castVote("Beth", [3, 2, 1]));

//Solution 3
const castVote = (name, votes) => {
	switch (name) {
		case "Tim":
			votes[0]++;
			break;
		case "Sally":
			votes[1]++;
			break;
		case "Beth":
			votes[2]++;
			break;
	}
	return votes;
};
console.log(castVote("Tim", [1, 1, 2]));
