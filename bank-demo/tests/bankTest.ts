import Bank from '../src/bank'

// User Story 1
console.log('Testing Story 1...');
// scenario 1
const bank = new Bank();
const acc = bank.createAccount('Jane Doe', 26, '123456');

if (acc.accountNumber === '123456') {
    console.log('Story 1 Scenario 1 passed');
} else {
    console.log('Story 1 Scenario 1 failed');
}

// scenario 2
try {
    bank.createAccount('Jane Doe', 26, '123456');
} catch(e) {
    console.log('Story 1 Scenario 2 passed');
}

// User Story 2
console.log('Testing Story 2...');
// scenario 1
try {
    bank.deposit('123456', 400);
    if (acc.balance === 400) {
        console.log('Story 2 Scenario 1 passed');
    }
} catch(e) {
    console.log('Story 2 Scenario 1 failed');
}

acc.balance -= 400;

// scenario 2
try {
    bank.deposit('111111', 100);
} catch(e) {
    console.log('Story 2 Scenario 2 passed');
}

// scenario 3
try {
    bank.deposit('123456', -100);
} catch(e) {
    console.log('Story 2 Scenario 3 passed');
}

// User story 3
console.log('Testing Story 3...');
// scenario 1
const accountTwo = bank.createAccount('John Appleseed', 50, '091224');
bank.deposit('091224', 900);

try {
    bank.withdraw('091224', 450);
    if (accountTwo.balance === 450) {
        console.log('Story 3 Scenario 1 passed');
    }
} catch(e) {
    console.log('Story 3 Scenario 1 failed');
}

// scenario 2
try {
    bank.withdraw('091224', 5000);
} catch(e) {
    console.log('Story 3 Scenario 2 passed');
}

// scenario 3
try {
    bank.withdraw('111111', 900);
} catch(e) {
    console.log('Story 3 Scenario 3 passed');
}

// User story 4
