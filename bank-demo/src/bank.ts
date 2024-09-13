// This is a type for all bank accounts in the bank
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

    /**
     * Checks if the given amount is valid, i.e, a positive number.
     * @param {number} amnt 
     * @returns {Boolean} True if the given amount is a valid amount, false otherwise.
     */
    private isValidAmount(amnt: number): boolean {
        return typeof amnt === 'number' && amnt > 0;
    }

    /**
     * This method deposits the given amount of money, if the provided account number and amounts are valid.
     * @param {string} accountNumber 
     * @param {number} amount 
     */
    public deposit(accountNumber: string, amount: number): void {
        const account = this.isAccountExists(accountNumber);

        if (account === undefined) {
            throw new Error('Account number is wrong or does not exist.');
        } else {
            if (this.isValidAmount(amount)) {
                account.balance += amount;
                console.log("Added $%d to the account.", amount);
            } else {
                throw new Error('Cannot add a negative amount to the account.');
            }
        }
    }

    /**
     * This method withdraws the given amount of money, if there is enough and the provided account number is valid.
     * @param {string} accountNumber 
     * @param {number} amount 
     */
    public withdraw(accountNumber: string, amount: number): void {
        const account = this.isAccountExists(accountNumber);

        if (account === undefined) {
            throw new Error('Account number is wrong or does not exist.');
        } else {
            if (!this.isValidAmount(amount)) {
                throw new Error('Cannot add a negative amount to the account.');
            } else if (account.balance >= amount) {
                account.balance -= amount;
                console.log('Withdrew $%d from the account.', amount);
            } else {
                throw new Error('Not enough funds to make withdrawal.');
            }
        }
    }
}