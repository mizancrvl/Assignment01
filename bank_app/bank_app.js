class BankAccount{
    accountNumber
    ownerName
    balance
    constructor(accnum, owner, blnc){
        this.accountNumber = accnum
        this.ownerName = owner
        this.balance = blnc
    }
    deposit(amount){
        this.balance +=amount
        console.log(`Deposited Amount: ${amount}`)
    }
    withdraw(amount){
        if(amount>this.balance){
            console.log(`Insufficient funds`);
        }else{
            this.balance -=amount
            console.log(`Withdrawn Amount: ${amount}`)
        }
       
    }
    getBalance(){
        return this.balance
    }
    displayAccountInfo(){
        return (
        console.log(`Account Number: ${this.accountNumber}`),
        console.log(`Owner Name: ${this.ownerName}`),
        console.log(`Balance: $ ${this.balance}`)
        )
    }

}
const Acc1 = new BankAccount(10001, 'Salam', 1000)
const Acc2 = new BankAccount(10002, 'Sabina', 2000)

console.log('Initial Status: ')
Acc1.displayAccountInfo()
Acc1.deposit(1000)
Acc1.withdraw(2500)
Acc1.getBalance()
console.log('Updated Status: ')
Acc1.displayAccountInfo()

console.log('Initial Status: ')
Acc2.displayAccountInfo()
Acc2.deposit(500) 
Acc2.withdraw(200)
Acc2.getBalance()
console.log('Updated Status: ')
Acc2.displayAccountInfo()