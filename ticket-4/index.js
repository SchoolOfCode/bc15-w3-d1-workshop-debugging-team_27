function getGradeFromPoints(points) {
  if (points >= 90) {
    return "A";
  } else if (points >= 70) {
    return "B";
  } else if (points >= 50) {
    return "C";
  } else if (points >= 40) {
    return "D";
  } else {
    return "E";
  }
}

let grade = getGradeFromPoints(90);
console.log(grade, "should be A");

grade = getGradeFromPoints(70);
console.log(grade, "should be B");

grade = getGradeFromPoints(50);
console.log(grade, "should be C");

grade = getGradeFromPoints(40);
console.log(grade, "should be D");