readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask_numbers(callback) {
  rl.question("Enter your first number: ", (input1) => {
    rl.question("Enter your second number: ", (input2) => {
      num1 = parseFloat(input1);
      num2 = parseFloat(input2);

      //check if num1 and num2 are numbers
      if (isNaN(num1) || isNaN(num2)) {
        console.log("Please enter a number");
      } else {
        callback(num1, num2);
      }
      rl.close();
    });
  });
}

function add_numbers() {
  ask_numbers((num1, num2) => {
    const sum = num1 + num2;
    console.log(`Your answer is ${sum}`);
  });
}

function subtract_numbers() {
  ask_numbers((num1, num2) => {
    const subtract_solution = num1 - num2;
    console.log(`Your answer is ${subtract_solution}`);
  });
}

function multiply_numbers() {
  ask_numbers((num1, num2) => {
    const multiply_solution = num1 * num2;
    console.log(`Your answer is ${multiply_solution}`);
  });
}

function decision() {
  rl.question(
    "Would you like to add, subtract, or multiply? Please type your answer: ",
    (opp_choice) => {
      if (opp_choice === "add") {
        add_numbers();
      } else if (opp_choice === "subtract") {
        subtract_numbers();
      } else if (opp_choice === "multiply") {
        multiply_numbers();
      } else {
        console.log("please enter a valid option");
        decision();
      }
    }
  );
}

decision();
