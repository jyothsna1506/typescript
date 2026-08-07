class BankAccount {
    public accountHolder: string;
    private balance: number;
    private pin: number;
    protected rewardPoints: number = 0;
    constructor(name: string, amount: number, pin: number) {
        this.accountHolder = name;
        this.balance = amount;
        this.pin = pin;
    }
    public deposit(amount: number): void {
        this.balance += amount;
        console.log("Deposited " + amount);
    }
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
    private checkPin(enteredPin: number): boolean {
        return this.pin === enteredPin;
    }
    public displayDetails(): void {
        console.log("Account Holder :", this.accountHolder);
        console.log("Balance :", this.balance);
        console.log("--------------------------");
    }
}
class PremiumAccount extends BankAccount {

    public addRewards(): void {
        this.rewardPoints += 100;
        console.log("Reward Points :", this.rewardPoints);
    }
}
let account = new BankAccount("Jyothsna", 10000, 1234);
console.log("Public Property:");
console.log(account.accountHolder);
account.deposit(2000);
account.withdraw(3000, 1234);
account.displayDetails();
let premium = new PremiumAccount("Sai", 20000, 5678);
premium.addRewards();