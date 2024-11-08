"use strict";
{
    //access modifiers
    class BankAccount {
        constructor(id, name, balance) {
            (this.id = id), (this.name = name), (this._balance = balance);
        }
        addDeposit(amount) {
            this._balance = this._balance + amount;
        }
        getBalance() {
            return this._balance;
        }
    }
    class StudentAccount extends BankAccount {
        test() {
            this._balance;
        }
    }
    const poorAccount = new BankAccount(11, "Mr.Poor", 1212);
    poorAccount.name = "Roy";
    poorAccount.addDeposit(300);
    const myBalance = poorAccount.getBalance();
    console.log(myBalance);
}
