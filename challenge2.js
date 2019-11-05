// Challenge #2 - Something to Talk About

const interviewAnswer = topic => {
	switch (topic) {
		case "arts funding":
			return "We'll have to get creative!";
			break;
		case "economy":
			return "Time is money.";
			break;
		case "transportation":
			return "It's going to be a long road, so we better get moving.";
			break;
		default:
			return "QUACK!";
	}
};

const result1 = interviewAnswer("economy");
console.log(result1);

const result2 = interviewAnswer("default");
console.log(result2);
