function main() {
  let grade = parseInt(document.getElementById('grade').value);


  if (grade >= 90 && grade <= 100) {
    letterGrade = 'A'
  } else if (grade <= 89 && grade >= 80) {
    letterGrade = 'B'
  } else if (grade <= 79 && grade >= 70) {
    letterGrade = 'C'
  } else if (grade <= 69 && grade >= 60) {
    letterGrade = 'D'
  } else if (grade <= 59 && grade >= 50) {
    letterGrade = 'F'
  } else {
    alert('Error! Please a valid number (0 - 100).')
  }

  const results = document.getElementById('results');
  results.innerHTML = `You have a ${grade}%, which means you have earned a(n) ${letterGrade} in class!`

}  
