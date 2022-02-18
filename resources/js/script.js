// Income variable 
let income = document.getElementById('total-income');

// Expenses variable 
let food = document.getElementById('food-exp');
let rent = document.getElementById('rent-exp');
let cloth = document.getElementById('cloth-exp');
let totalExpenses = document.getElementById('total-exp');
let balance = document.getElementById('balance');

// Calculate variable 
let calculateBtn = document.getElementById('calculate-btn');

// Saving variable
let saving = document.getElementById('saving-percent');
let savingBtn = document.getElementById('save-btn');

let savingAmount = document.getElementById('saving-amount');

// Last balance variable
let finalBalance = document.getElementById('remaining-blanace');

// Expenses calcualion Function
function calculateExpense(item_1, item_2, item_3){
    return item_1+item_2+item_3;
};

// Balance calculation Function
function calculateBalance(item_1, item_2){
    return item_1-item_2;
};

// Saving calculation Function
function calculateSaving(item_1, item_2){
    return (item_1*(item_2/100));
}

// Calculate buttom event listener
calculateBtn.addEventListener('click', ()=>{
    let incomeValue = parseFloat(income.value);

    let foodValue = parseFloat(food.value);
    let rentValue = parseFloat(rent.value);
    let clothValue = parseFloat(cloth.value);

    let calculatedExpenses = calculateExpense(foodValue, rentValue, clothValue);
    totalExpenses.innerText = calculatedExpenses;
    let finalExpenses = totalExpenses.innerText;

    // Input type check
    if(isNaN(incomeValue) || isNaN(foodValue) || isNaN(rentValue) || isNaN(clothValue)){
        alert('One of your input feild is empty or value is not a number.Enter only number!');

        totalExpenses.innerText = '';
    }
    else if(incomeValue < 0 || foodValue < 0 || rentValue < 0 || clothValue < 0){
        alert('One of your input value is negative! Please input positive value!')
    }
    else{
        // Balance condition check
    if(finalExpenses > incomeValue){
        alert('Your expenses is more then income');

        saving.disabled = true;
        savingBtn.disabled = true;

    }
    // Finction used 1st time
    let balanceCalculation = calculateBalance(incomeValue, parseFloat(finalExpenses));

    balance.innerText = balanceCalculation;
    }   

    income.value ='';
    food.value ='';
    rent.value = '';
    cloth.value ='';
    saving.value = '';
});

// Saving button event listener
savingBtn.addEventListener('click', ()=>{
    let balanceAfterExp = parseFloat(balance.innerText);
    console.log(balanceAfterExp);

    let savingValue = parseFloat(saving.value);

    if(isNaN(savingValue)){
        alert('Input field is empty or is not a Number.');
    }
    else {
        savingAmount.innerText = calculateSaving(balanceAfterExp, savingValue);

    // Function used 2nd time
    finalBalance.innerText = calculateBalance(balanceAfterExp, parseFloat(savingAmount.innerText));

    // Resetting all value
    balance.innerText = '';
    }
});

