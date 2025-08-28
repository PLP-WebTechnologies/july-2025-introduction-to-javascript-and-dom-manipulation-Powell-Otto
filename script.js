// =============================
// Part 1: Variables & Conditionals
// =============================

// Sample student data
let students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 58 },
  { name: "Charlie", grade: 72 }
];

let passingGrade = 60; // condition threshold

// =============================
// Part 2: Custom Functions
// =============================

// Function 1: Display students in the DOM
function showStudents() {
  let outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "<h3>Student List:</h3>";
  
  students.forEach(student => {
    outputDiv.innerHTML += `<p>${student.name} - Grade: ${student.grade}</p>`;
  });
}

// Function 2: Add a new student
function addStudent() {
  let name = prompt("Enter student name:");
  let grade = parseInt(prompt("Enter student grade:"));
  students.push({ name: name, grade: grade });

  alert("Student added successfully!");
  showStudents(); // refresh display
}

// =============================
// Part 3: Loops
// =============================

// Example 1: Check who is passing using for loop
function checkPassing() {
  let outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "<h3>Passing Students:</h3>";

  for (let i = 0; i < students.length; i++) {
    if (students[i].grade >= passingGrade) {
      outputDiv.innerHTML += `<p>${students[i].name} is passing 🎉</p>`;
    }
  }
}

// Example 2: Using while loop to count
function countStudents() {
  let i = 0;
  while (i < students.length) {
    console.log("Student " + (i + 1) + ": " + students[i].name);
    i++;
  }
}
countStudents(); // runs on page load

// =============================
// Part 4: DOM Interactions
// =============================
// 1. Display content inside <div id="output">
// 2. Update content dynamically with innerHTML
// 3. Use buttons (onclick) to trigger actions
