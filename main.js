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


