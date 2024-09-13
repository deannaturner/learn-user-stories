import Bank from '../src/bank'

// User Story 1
console.log('Testing Story 1...');
// scenario 1
const bank = new Bank();
const acc = bank.createAccount('Jane Doe', 26, '123456');

if (acc.accountNumber === '123456') {
    console.log('Scenario 1 passed');
} else {
    console.log('Scenario 1 failed');
}

// scenario 2
try {
    bank.createAccount('Jane Doe', 26, '123456');
} catch(e) {
    console.log('Scenario 2 passed');
}

console.log('Testing Story 2...');
// User Story 2
// scenario 1
try {
    bank.deposit('123456', 400);
    if (acc.balance === 400) {
        console.log('Scenario 1 passed');
    }
} catch(e) {
    console.log('Scenario 1 failed');
}

acc.balance -= 400;

// scenario 2
try {
    bank.deposit('111111', 100);
} catch(e) {
    console.log('Scenario 2 passed');
}

// scenario 3
try {
    bank.deposit('123456', -100);
} catch(e) {
    console.log('Scenario 3 passed');
}