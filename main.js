'use stript';
let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true
};

function choosExpenses() {
    // цикл который повторяется 2 раза ,
// мы будем получать значения от пользователя и их применять в дальнейшом .
    for (let i = 0; i < 2; i++) { // Цикл for () {};
         let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
             b = prompt("Во сколько обойдется?", '');
   
        if ((typeof(a)=== 'string') && (typeof(a)) != null && (typeof(b)) != null // проверяем на тип и на ведение значения
            && a != '' && b != '' && a.length < 50) { // проверяем на длину значения и на пустату .
            console.log("done"); // если все нас устраевает то мы идём дальше!!!  
            appData.expenses[a] = b;
        } else {
            i = i - 1;
        }
    }
}
choosExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет :" + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Ошибка в действии");
    }
}
detectLevel();

function checkSevings() {
    if(appData.savings == true) {
        let save = +prompt("Какого сумма накопленний?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSevings();

function chooseOptExpenses() {
    let i = 1;
    while (i < 4) {
        let b = +prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = b;
        i++;
    }
}
chooseOptExpenses();