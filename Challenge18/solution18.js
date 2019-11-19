// Challenge 18 - In It to Win It

const tickets = ["red", "red", "green", "blue", "green"];

const raffleEntries = {
  red: 10,
  green: 30,
  blue: 15
};

const countTickets = tickets => {
  var count = { red: 0, green: 0, blue: 0 };

  for (var ticket of tickets) {
    switch (ticket) {
      case "red":
        count[ticket]++;
        break;
      case "green":
        count[ticket]++;
        break;
      case "blue":
        count[ticket]++;
        break;
    }
  }
  return count;
};
console.log(countTickets(tickets));

const bestOdds = (tickets, raffleEntries) => {
  highestChance = countTickets(tickets);

  ticketRed = highestChance.red / raffleEntries.red;
  ticketGreen = highestChance.green / raffleEntries.green;
  ticketBlue = highestChance.blue / raffleEntries.blue;

  if (ticketRed > ticketGreen && ticketRed > ticketBlue) {
    return `You have the best odds of winning the red raffle.`;
  } else if (ticketGreen > ticketBlue) {
    return `You have the best odds of winning the green raffle.`;
  } else {
    return `You have the best odds of winning the blue raffle.`;
  }
};
console.log(bestOdds(tickets, raffleEntries));
