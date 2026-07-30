// Importing constants and interface
import { PASS_MARKS, COLLEGE_NAME } from "./Config";
export class Result {
    student;
    constructor(student) {
        this.student = student;
    }
    // Check Pass/Fail
    getResult() {
        if (this.student.marks >= PASS_MARKS)
            return "PASS";
        else
            return "FAIL";
    }
    // Display Result
    displayResult() {
        console.log("------ Student Result ------");
        console.log("College :", COLLEGE_NAME);
        console.log("Name    :", this.student.name);
        console.log("Roll No :", this.student.rollNo);
        console.log("Marks   :", this.student.marks);
        console.log("Result  :", this.getResult());
        console.log("----------------------------");
    }
}
//# sourceMappingURL=ResultLogic.js.map