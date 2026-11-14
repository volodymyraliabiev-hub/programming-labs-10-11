const grades = [10, 8, 12, 7, 9, 11];

function calculateAverage(grades) {
  let sum = 0;
  for (let index = 0; index < grades.length; index++) sum += grades[index];
  return sum / grades.length;
}

function findMaxGrade(grades) {
  let highest = grades[0];
  for (let index = 1; index < grades.length; index++) {
    if (grades[index] > highest) highest = grades[index];
  }
  return highest;
}

function countHighGrades(grades) {
  let count = 0;
  for (let index = 0; index < grades.length; index++) {
    if (grades[index] >= 10) count++;
  }
  return count;
}

function showResults(grades) {
  console.log('===== АНАЛІЗ ОЦІНОК =====');
  let gradeText = 'Оцінки студента:';
  for (let index = 0; index < grades.length; index++) {
    const separator = index === 0 ? ' ' : ', ';
    gradeText += separator + grades[index];
  }
  console.log(gradeText);
  console.log(`Кількість оцінок: ${grades.length}`);
  console.log(`Середній бал: ${calculateAverage(grades)}`);
  console.log(`Найвища оцінка: ${findMaxGrade(grades)}`);
  console.log(`Кількість високих оцінок: ${countHighGrades(grades)}`);
  console.log('=========================');
}

showResults(grades);
