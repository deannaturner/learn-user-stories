// This is a tyoe for all bank accounts in the bank
interface BankAccount {
    name: string;
    age: number;
    accountNumber: string;
    balance: number;
}

/**
 * This class represents a simple bank with the ability to create new accouns.
 */
export default class Bank {
    // This is a private field that holds the bank accounts for the given bank
    private accounts: BankAccount[] = [];

    /**
     * This method checks if an account with the given account number exists
     * @param {string} accountNumber 
     * @returns {BankAccount | Undefined} -- The account, if it exists, or undefined otherwise
     */
    private isAccountExists(accountNumber: string): BankAccount | undefined {
        return this.accounts.find(acc => acc.accountNumber === accountNumber);
    }

    /**
     * This method creates a new account with the given name, age and account number.
     * @param {string} name 
     * @param {number} age 
     * @param {string} accountNumber 
     * @returns {BankAccount} -- The created account
     */
    public createAccount(name: string, age: number, accountNumber: string): BankAccount {
        const isAccExists = this.isAccountExists(accountNumber);
        if (isAccExists != null) {
            throw new Error('Account already exists');
        }

        const account = {name, age, accountNumber, balance:0};
        this.accounts.push(account);
        return account;
    }
}