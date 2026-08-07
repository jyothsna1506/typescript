import { Result } from "../ResultLogic";
const student = {
    name: "Jyothsna",
    rollNo: "24B01A4287",
    marks: 91
};
const result = new Result(student);
result.displayResult();