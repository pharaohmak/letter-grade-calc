# Letter Grade Calculator

This is a simple JavaScript code that calculates a grade based on a given number grade.

## Usage

To use this code, you need to have a basic understanding of JavaScript and how to run it in a browser console.

1. Copy the code and paste it into your browser's console.
2. You will be prompted to enter a number grade (0 - 100).
3. After entering the grade, the code will calculate and display the corresponding letter grade.

## Code Explanation

The code uses the `parseInt()` function to convert the user input into an integer. Then, it uses a series of `if...else` statements to determine the letter grade based on the number grade.

Here's a breakdown of the code:

- `x = parseInt(prompt('Enter Number Grade (Please enter a whole number)'))`: This line prompts the user to enter a number grade and converts the input into an integer.
- The `if...else` statements check the value of `x` and assign the corresponding letter grade to `y`.
- `console.log('You have a(n) ' + x + '%, which means you have earned a(n) ' + y + ' in class!')`: This line logs the final result to the console.

## Error Handling

If the user enters a number outside the range of 0 - 100, the code will display an error message.
