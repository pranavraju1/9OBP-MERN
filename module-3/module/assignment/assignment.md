# Student Management System Using JavaScript Modules

## Problem Statement

Create a **Student Management System** using JavaScript ES Modules.

### Project Structure

```text
project/
│
├── main.js
└── student.js
```

---

## Requirements

### 1. `student.js`

Create a `students` array containing **at least 4 students**.

Each student object must contain:

- `name`
- `marks`

Example structure:

```javascript
const students = [
    { name: "Rahul", marks: 92 },
    { name: "Aman", marks: 75 },
    { name: "Priya", marks: 68 },
    { name: "Neha", marks: 79 }
];
```

You must:

1. Export the `students` array as a **named export**.
2. Create and export a function `getTopper()` that returns the student who has the **highest marks**.
3. Create and export a function `getAverageMarks()` that returns the **average marks** of all students.
4. Export `getTopper()` as the **default export**.

> **Note:** Since `getTopper()` must be both exported and used as the default export, use an appropriate export structure.

---

### 2. `main.js`

Import the following using **named imports**:

- `students`
- `getAverageMarks`

Import `getTopper()` using a **default import**.

Then display the following information in the console:

```text
Students: [...]
Average Marks: 78.5
Topper: Rahul - 92
```

The exact average and topper should be calculated dynamically from the `students` array rather than being hardcoded.

---

## Concepts to Practice

Your solution should demonstrate:

- ES Modules
- Named exports
- Default exports
- Named imports
- Default imports
- Arrays of objects
- Array methods
- Functions
- `import` and `export`

## Expected Output

```text
Students: [
  { name: "Rahul", marks: 92 },
  { name: "Aman", marks: 75 },
  { name: "Priya", marks: 68 },
  { name: "Neha", marks: 79 }
]

Average Marks: 78.5

Topper: Rahul - 92
```

**Important:** Do not hardcode `Average Marks` or `Topper`. Both values must be calculated using the functions from `student.js`.