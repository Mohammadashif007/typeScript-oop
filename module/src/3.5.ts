{
    //access modifiers

    class BankAccount {
        readonly id: number;
        name: string;
        protected _balance: number;

        constructor(id: number, name: string, balance: number) {
            (this.id = id), (this.name = name), (this._balance = balance);
        }

        addDeposit(amount: number){
            this._balance = this._balance + amount;
        }

        getBalance(){
            return this._balance;
        }
    }

    class StudentAccount extends BankAccount {
        test(){
            this._balance
        }
    }

    const poorAccount = new BankAccount(11, "Mr.Poor", 1212);
    poorAccount.name = "Roy"

    poorAccount.addDeposit(300)
    const myBalance = poorAccount.getBalance();
    console.log(myBalance);


}
