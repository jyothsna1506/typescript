// Program to demonstrate Class Implementation with Constructors

class FixedDeposit {

    // ---------------- Properties ----------------
    accountHolder: string;
    amount: number;
    years: number;
    interestRate: number;

    // ---------------- Constructor Overloading Signatures ----------------
    constructor();
    constructor(accountHolder: string, amount: number, years: number, interestRate: number);

    // ---------------- Constructor Logic ----------------
    constructor(
        accountHolder?: string,
        amount?: number,
        years?: number,
        interestRate?: number
    ) {

        // Default Constructor Logic
        if (
            accountHolder === undefined &&
            amount === undefined &&
            years === undefined &&
            interestRate === undefined
        ) {
            this.accountHolder = "Unknown";
            this.amount = 10000;
            this.years = 1;
            this.interestRate = 6.5;
        }

        // Overloaded Constructor Logic
        else {
            this.accountHolder = accountHolder!;
            this.amount = amount!;
            this.years = years!;
            this.interestRate = interestRate!;
        }
    }

    // ---------------- Method ----------------
    calculateMaturity(): number {
        return this.amount + (this.amount * this.interestRate * this.years) / 100;
    }

    // ---------------- Display Account Summary ----------------
    displaySummary(): void {
        console.log("Account Holder :", this.accountHolder);
        console.log("Deposit Amount :", this.amount);
        console.log("Years          :", this.years);
        console.log("Interest Rate  :", this.interestRate + "%");
        console.log("Maturity Amount:", this.calculateMaturity());
        console.log("-------------------------------");
    }
}

// ---------------- Using Default Constructor ----------------
let fd1 = new FixedDeposit();

console.log("Using Default Constructor");
fd1.displaySummary();

// ---------------- Using Overloaded Constructor ----------------
let fd2 = new FixedDeposit("Jyothsna", 50000, 3, 7.5);

console.log("Using Overloaded Constructor");
fd2.displaySummary();

// ---------------- Updating Properties after Construction ----------------
fd1.accountHolder = "Sai";
fd1.amount = 30000;

console.log("After Updating Properties");
fd1.displaySummary();