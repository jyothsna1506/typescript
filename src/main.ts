// Importing class and interface

import { Result } from "./ResultLogic";
import { Student } from "./Student";

// Create Student Object

const student: Student = {
    name: "Jyothsna",
    rollNo: "24B01A4287",
    marks: 91
};

// Create Result Object

const result = new Result(student);

// Execute

result.displayResult();