{
    //access modifiers

    class BankAccount {
        readonly id: number;
        name: string;
        protected _balance: number;

        constructor(id: number, name: string, balance: number) {
            (this.id = id), (this.name = name), (this._balance = balance);
        }

        // addDeposit(amount: number){
        //     this._balance = this._balance + amount;
        // }

        // ! using setter

        set deposit(amount: number){
            this._balance = this._balance + amount;
        }

        // getBalance(){
        //     return this._balance;
        // }

        // ! using getter

        get balance(){
            return this._balance;
        }
    }


    const poorAccount = new BankAccount(11, "Mr.Poor", 12);
    poorAccount.name = "Roy"

    poorAccount.deposit = 500;
    const myBalance = poorAccount.balance;
    console.log(myBalance);


}
