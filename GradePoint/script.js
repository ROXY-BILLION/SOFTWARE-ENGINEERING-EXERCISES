const studentName = "Divine";
const score = 95;


let grade;

if (score >= 80) {
    grade = "A";
} else if (score >= 70) {
    grade = "B";
} else if (score >= 60) {
    grade = "C";
} else if (score >= 50) {
    grade = "D";
} else {
    grade = "F";
}

switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Very good");
        break;
    case "C":
        console.log("Good");
        break;
    case "D":
        console.log("Passed");
        break;
    default:
        console.log("Failed");
}