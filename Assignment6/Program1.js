// 1. Create a class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance().

class BankAccount
{
    constructor (balance , owner)
    {
        this.balance= balance ;
        this.owner = owner ;
    }
    deposit(amt)
    {
        this.balance+=amt;
    }
    withdraw(amt)
    {
        this.balance-=amt;
    }
    displayBalance()
    {
        console.log("Hii , "+this.owner + " The balance in your account is : "+this.balance);
    }
    
}
const temp = new BankAccount(1000,"Virat");
temp.deposit(500);
temp.withdraw(200);
temp.displayBalance();