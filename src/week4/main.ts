import { Result } from "./ResultLogic";
import { Student } from "./Student";
const student: Student = {
    name: "Jyothsna",
    rollNo: "24B01A4287",
    marks: 91
};
const result = new Result(student);
result.displayResult();