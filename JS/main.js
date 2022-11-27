/**
 * Makram Ibrahim
 * Aug 15, 2022
 * 2.5 Code Exercise 04: Conditionals
 */

/**
 * Problem #1 – Grade Letter Calculator
 */

x = parseInt(prompt('Enter Number Grade (Please enter a whole number)'))

if (x >= 90 && x <= 100) {
  y = 'A'
} else if (x <= 89 && x >= 80) {
  y = 'B'
} else if (x <= 79 && x >= 70) {
  y = 'C'
} else if (x <= 69 && x >= 60) {
  y = 'D'
} else if (x <= 59 && x >= 50) {
  y = 'F'
} else {
  alert('Error! Please a valid number (0 - 100).')
}

console.log(
  'You have a(n) ' +
    x +
    '%, which means you have earned a(n) ' +
    y +
    ' in class!',
)

/**
 * Problem #2 – Pumpkin Patch Pickers
 */
x = parseFloat(prompt('Enter the weight of the pumpkin.'))

if (x < 5.5) {
  y = 1.0 * x
} else if (x < 10.75) {
  y = 0.9 * x
} else if (x < 25) {
  y = x * 0.8
} else if (x < 50) {
  y = x * 0.7
} else if (x < 100) {
  y = x * 0.6
} else {
  y = x * 0.5
}

console.log('Your pumpkin of ' + x + 'lbs costs $' + y + '.')

/**
 * Problem #3 – Loyalty Card
 */

item1 = parseFloat(prompt('Enter the Cost of Item 1'))
item2 = parseFloat(prompt('Enter the cost of Item 2'))

x = prompt('Are you a preffered member')
yes = 'yes' || 'Yes' || 'Y' || 'y' || 'YES'
no = 'No' || 'no' || 'N' || 'n' || 'NO'

if (x === no) {
  y = item1 + item2
  console.log('Results - “Your total purchase is $”' + y)
} else if (x === yes) {
  y = parseFloat((item1 + item2) * 0.15)
  console.log(
    'Results - “Your total purchase is $' +
      y +
      ' , which includes your 15% discount.”',
  )
} else {
  alert('Error! Only enter "yes" or "no"')
}
