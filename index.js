// class BudgetCalculator {
//     constructor() {
//         this.income=[];
//         this.expense=[];
//     }
//     addIncome(amount) {
//         this.income.push(amount);
//     }
//     addExpense(amount) {
//         this.expense.push(amount);
//     }
//     calculateTotalIncome(){
//         return this.income((total,income) => total + income, 0);
//     }

//     calculateTotalExpense(){
//         return this.expense((total,expense) => total + expense, 0);
//     }
//     calculateRemainingBudget(){
//         return this.calculateTotalIncome() - this.calculateTotalExpense();
//     }
// }

// const budgetCalculator = new BudgetCalculator();

// function addIncome(amount) {
//     budgetCalculator.addIncome(amount);

// }

// function addExpense(amount) {
//     budgetCalculator.addExpense(amount);
    
// }

// function updateUI(){
//     document
// }

class BudgetCalculator {
    constructor() {
        this.income = [];
        this.expense = [];
    }
    addIncome(amount) {
        this.income.push(amount);
        updateUI();
    }
    addExpense(amount) {
        this.expense.push(amount);
        updateUI();
    }
    calculateTotalIncome() {
        return this.income.reduce((total, income) => total + income, 0);
    }

    calculateTotalExpense() {
        return this.expense.reduce((total, expense) => total + expense, 0);
    }
    calculateRemainingBudget() {
        return this.calculateTotalIncome() - this.calculateTotalExpense();
    }
}

const budgetCalculator = new BudgetCalculator();

document.getElementById('addIncome').addEventListener('click', function () {
    const incomeInput = parseFloat(document.getElementById('incomeSource').value);
    if (!isNaN(incomeInput)) {
        budgetCalculator.addIncome(incomeInput);
        document.getElementById('incomeSource').value = '';
    }
});

document.getElementById('addExpense').addEventListener('click', function () {
    const expenseInput = parseFloat(document.getElementById('expenseSource').value);
    if (!isNaN(expenseInput)) {
        budgetCalculator.addExpense(expenseInput);
        document.getElementById('expenseSource').value = '';
    }
});

function updateUI() {
    const totalIncomeElement = document.getElementById('incomeTotal');
    const totalExpenseElement = document.getElementById('expenseTotal');
    const remainingBudgetElement = document.getElementById('remaining');

    const totalIncome = budgetCalculator.calculateTotalIncome();
    const totalExpense = budgetCalculator.calculateTotalExpense();
    const remainingBudget = budgetCalculator.calculateRemainingBudget();

    totalIncomeElement.textContent = `Total income: $${totalIncome.toFixed(2)}`;
    totalExpenseElement.textContent = `Total Expense: $${totalExpense.toFixed(2)}`;
    remainingBudgetElement.textContent = `Budget Remaining: $${remainingBudget.toFixed(2)}`;
}

function reset() {
    budgetCalculator.income = [];
    budgetCalculator.expense = [];
    updateUI();
}

document.getElementById('submitButton').addEventListener('click', function(event){
    event.preventDefault();
    reset();
});