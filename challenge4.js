//Challenge #4 - This is How You Remind Me (To Register To Vote)

const registerToVote = (name, unregisteredVoters) => {
	const voterNameRemoved = unregisteredVoters.filter(
		voterName => voterName !== name
	);
	return voterNameRemoved;
};

const name = "Bradley";
const unregisteredVoters = ["Jake", "Alanna", "Bradley", "Stephanie"];

console.log(registerToVote(name, unregisteredVoters));
