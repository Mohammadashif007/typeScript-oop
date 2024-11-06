"use strict";
{
    //access modifiers
    class BankAccount {
        constructor(id, name, balance) {
            (this.id = id), (this.name = name), (this._balance = balance);
        }
        // addDeposit(amount: number){
        //     this._balance = this._balance + amount;
        // }
        // ! using setter
        set deposit(amount) {
            this._balance = this._balance + amount;
        }
        // getBalance(){
        //     return this._balance;
        // }
        // ! using getter
        get balance() {
            return this._balance;
        }
    }
    const poorAccount = new BankAccount(11, "Mr.Poor", 12);
    poorAccount.name = "Roy";
    poorAccount.deposit = 500;
    const myBalance = poorAccount.balance;
    console.log(myBalance);
}
