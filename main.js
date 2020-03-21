'use stript';

let money = +prompt("Ваш бюджет на месяц?", ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    console.log(typeof(money));

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

// цикл который повторяется 2 раза ,
// мы будем получать значения от пользователя и их применять в дальнейшом .
for (let i = 0; i < 2; i++) { // Цикл for () {};
     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
         b = prompt("Во сколько обойдется?", ''),
         c;

    if ((typeof(a)=== 'string') && (typeof(a)) != null && (typeof(b)) != null // проверяем на тип и на ведение значения
        && a != '' && b != '' && a.length < 50) { // проверяем на длину значения и на пустату .
        
        console.log("done"); // если все нас устраевает то мы идём дальше!!!
            
        appData.expenses[a] = b;

    } else {
        i = 0;
    }
};

/*let i = 0; // Цикл while () {};
while(i < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", ''); 
            if ((typeof(a)=== 'string') && (typeof(a)) != null && (typeof(b)) != null // проверяем на тип и на ведение значения
        && a != '' && b != '' && a.length < 50) { // проверяем на длину значения и на пустату .
            
            console.log("done"); // если все нас устраевает то мы идём дальше!!!
           
            appData.expenses[a] = b;

    } else {
        i = 0;
    }
    i++;
}*/

/*let i = 0; //цикл do {} while ();
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", ''); 
        
        console.log("done"); // если все нас устраевает то мы идём дальше!!!
           
        appData.expenses[a] = b;
        if ((typeof(a)=== 'string') && (typeof(a)) != null && (typeof(b)) != null // проверяем на тип и на ведение значения
        && a != '' && b != '' && a.length < 50) { // проверяем на длину значения и на пустату .
            
            console.log("done"); // если все нас устраевает то мы идём дальше!!!
           
            appData.expenses[a] = b;

    } else {
        i = 0;
    }
    i++;
} 
while (i < 2);*/

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет :" + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Ошибка в действии");
}