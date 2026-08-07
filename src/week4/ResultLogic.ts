import { PASS_MARKS, COLLEGE_NAME } from "./Config";
import { Student } from "./Student";
export class Result {
    constructor(
        public student: Student
    ) {}
    public getResult(): string {
        if (this.student.marks >= PASS_MARKS)
            return "PASS";
        else
            return "FAIL";
    }
    public displayResult(): void {
        console.log("------ Student Result ------");
        console.log("College :", COLLEGE_NAME);
        console.log("Name    :", this.student.name);
        console.log("Roll No :", this.student.rollNo);
        console.log("Marks   :", this.student.marks);
        console.log("Result  :", this.getResult());
        console.log("----------------------------");
    }
}