// Program to demonstrate Access Modifiers in TypeScript

//  Parent Class 
class BankAccount {

    // Public Property
    public accountHolder: string;

    // Private Properties
    private balance: number;
    private pin: number;

    // Protected Property
    protected rewardPoints: number = 0;

    // Constructor
    constructor(name: string, amount: number, pin: number) {
        this.accountHolder = name;
        this.balance = amount;
        this.pin = pin;
    }

    // Public Method
    public deposit(amount: number): void {
        this.balance += amount;
        console.log("Deposited ₹" + amount);
    }

    // Public Method
    public withdraw(amount: number, enteredPin: number): void {

        if (this.checkPin(enteredPin)) {

            if (this.balance >= amount) {
                this.balance -= amount;
                console.log("Withdrawn ₹" + amount);
            } else {
                console.log("Insufficient Balance");
            }

        } else {
            console.log("Incorrect PIN");
        }
    }

    // Private Method
    private checkPin(enteredPin: number): boolean {
        return this.pin === enteredPin;
    }

    // Public Method
    public displayDetails(): void {
        console.log("Account Holder :", this.accountHolder);
        console.log("Balance :", this.balance);
        console.log("--------------------------");
    }
}

//  Child Class
class PremiumAccount extends BankAccount {

    public addRewards(): void {
        this.rewardPoints += 100;
        console.log("Reward Points :", this.rewardPoints);

        // this.balance += 100;
        // ERROR because balance is private
    }
}

//Execution

let account = new BankAccount("Jyothsna", 10000, 1234);

console.log("Public Property:");
console.log(account.accountHolder);

account.deposit(2000);

account.withdraw(3000, 1234);

account.displayDetails();

// account.balance;
// ERROR because balance is private

let premium = new PremiumAccount("Sai", 20000, 5678);

premium.addRewards();