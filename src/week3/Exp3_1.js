
class FixedDeposit {
    accountHolder;
    amount;
    years;
    interestRate;
    constructor(accountHolder, amount, years, interestRate) {
        if (accountHolder === undefined &&
            amount === undefined &&
            years === undefined &&
            interestRate === undefined) {
            this.accountHolder = "Unknown";
            this.amount = 10000;
            this.years = 1;
            this.interestRate = 6.5;
        }
        else {
            this.accountHolder = accountHolder;
            this.amount = amount;
            this.years = years;
            this.interestRate = interestRate;
        }
    }
    calculateMaturity() {
        return this.amount + (this.amount * this.interestRate * this.years) / 100;
    }
    displaySummary() {
        console.log("Account Holder :", this.accountHolder);
        console.log("Deposit Amount :", this.amount);
        console.log("Years          :", this.years);
        console.log("Interest Rate  :", this.interestRate + "%");
        console.log("Maturity Amount:", this.calculateMaturity());
        console.log("-------------------------------");
    }
}
let fd1 = new FixedDeposit();
console.log("Using Default Constructor");
fd1.displaySummary();
let fd2 = new FixedDeposit("Jyothsna", 50000, 3, 7.5);
console.log("Using Overloaded Constructor");
fd2.displaySummary();
fd1.accountHolder = "Sai";
fd1.amount = 30000;
console.log("After Updating Properties");
fd1.displaySummary();
export {};
