"use strict"

let money = prompt("Ваш бюджет на месяц?","0"),
    time = prompt("Введите дату в формате YYYY-MM-DD","YYYY-MM-DD"),
    expenses, peice,
    appData = {
        budget: 0,
        timeData: "",
        expenses: {},
        optionalExpenses: "",
        income: "",
        savings: ""
}

appData.budget = money;
appData.timeData = time;

for (var count = 0; count < 2; count++){
    expenses = prompt("Введите обязательную статью расходов в этом месяце", "");
    peice = prompt("Во сколько обойдется?","0");
    appData.expenses[""] = peice;
}

alert("Ваш дневной бюжет равен:" + Math.round(money/30));
  