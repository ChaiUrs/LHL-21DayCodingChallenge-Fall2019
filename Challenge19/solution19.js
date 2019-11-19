// Challenge 19 - Pumpkin Spice and Everything Nice

const money = 9;

const pumpkinSpice = money => {
  console.log("************* PUMPKIN SPICE & EVERYTHING NICE *************");
  console.log(
    "-----------------------------------------------------------------"
  );
  console.log(
    "Amount of money festival-goer bringing to the festival :",
    `$${money}`
  );
  let pumpkinSpiceinGrams = 0;
  console.log(
    "-----------------------------------------------------------------"
  );

  const pieSlices = Math.floor(money / 5);
  let remainingMoney = money % 5;
  pumpkinSpiceinGrams += pieSlices * 30;
  console.log(
    "Pumpkin Pie Slices the festival-goer can buy:",
    `${pieSlices} slice`
  );
  console.log(
    "Money left after buying Pumpkin Pie Slices:",
    `$${remainingMoney}`
  );
  console.log("Pumpkin Spice Consumed :", `${pumpkinSpiceinGrams} grams`);
  console.log(
    "-----------------------------------------------------------------"
  );

  const pieLattes = Math.floor(remainingMoney / 3);
  remainingMoney = remainingMoney % 3;
  pumpkinSpiceinGrams += pieLattes * 15;
  console.log(
    "Pumpkin Spice Lattes the festival-goer can buy:",
    `${pieLattes} latte`
  );
  console.log(
    "Money left after buying Pumpkin Pie Spices & Lattes:",
    `$${remainingMoney}`
  );
  console.log("Pumpkin Spice Consumed :", `${pumpkinSpiceinGrams} grams`);
  console.log(
    "-----------------------------------------------------------------"
  );

  const pieMacarons = Math.floor(remainingMoney / 1);
  remainingMoney = remainingMoney % 1;
  pumpkinSpiceinGrams += pieMacarons * 3;
  console.log(
    "Pumpkin Spice Macarons the festival-goer can buy:",
    `${pieMacarons} macaron`
  );
  console.log(
    "Money left after buying Pumpkin Pie Slices, Lattes & Macarons:",
    `$${remainingMoney}`
  );
  console.log(
    "-----------------------------------------------------------------"
  );
  console.log(
    "Total Grams of Pumpkin Spice the festival-goer is buying:",
    `${pumpkinSpiceinGrams} grams`
  );
  console.log(
    "-----------------------------------------------------------------"
  );

  const TotalPumpkinSpice = [
    pieSlices,
    pieLattes,
    pieMacarons,
    pumpkinSpiceinGrams
  ];

  console.log("******** The festival-goer spending on treats  ********");
  return TotalPumpkinSpice;
};
console.log(pumpkinSpice(money));
