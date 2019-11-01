// **********************************************
// Task №1

// **********************************************

// **********************************************
// Task №2
// var x = +prompt('Введите скорость движения улитки(от -10 до 10)', '');

// if (x > 0) {
//     alert('улитка идёт вперёд!');
// } else if (x < 0) {
//     alert('улитка идёт назад!');
// } else if (x === 0) {
//     alert('улитка стоит на месте!');
// }
// **********************************************

// **********************************************
// Task №3
// var x = +prompt('У меня денег в гривне: ', ''),
//     y = +prompt('У друга денег в гривне: ', ''),
//     summ;

// summ = x + y;

// if (summ <= 1000) {
//     alert('Хрен слетаешь на Мальту, и не хватет выучить английский язык!!! ))) Остаётся только пиво!!!');
// } else if (summ >= 1000, summ < 5000) {
//     alert('Нечего пить пиво, денег хватает выучить английский!!!');
// } else if (summ >= 5000, summ < 30000S) {
//     alert('Пора собирать вещи и на Мальту');
// }
// **********************************************

// **********************************************
// Task №4
// var age = +prompt('Введите сколько вам лет: ', '');

// if (age >= 20, age < 30) {
//     alert('Вам выслана повестка!');
// } else {
//     alert('Вы не попадаете на призыв! Повесткиии неее будет!!!');
// }
// **********************************************

// **********************************************
// Task №5
// var busNumber1 = 7,
//     busNumber2 = 225,
//     busNumber3 = 255,
//     theBusArrived = +prompt('Прибыл автобус по маршруту №: ', '');

// if (theBusArrived === busNumber1) {
//     alert('Проходите на посадку!');
// } else if (theBusArrived === busNumber2) {
//     alert('Проходите на посадку!');
// } else if (theBusArrived === busNumber3) {
//     alert('Проходите на посадку!');
// }else {
//     alert('Ожидайте свой маршрут!');
// }
// **********************************************

// **********************************************
// Task №6
// var day = new Date();

// day.getUTCDay();
// console.log(day);

// if (day !== 5, day !== 6) {
//     alert('Вам пора на работу(');
// } else {
//     alert('Сегодня выходной!!!');
// }
// **********************************************

// **********************************************
// Task №7
// var userName = prompt('Введите имя: ', '');

// if ( userName == null) {
//     alert('К сожалению вы не ввели имя, досвидания!!!)))');
// } else {
//     alert('Привет, ' + userName);
// }
// **********************************************

// **********************************************
// Task №8
// var usd_uan = +prompt('Сколько вы хотите купить долларов?: ', ''),
//     cursUsd = 25.10,
//     calcUsd;

// switch (usd_uan) {
//     case usd_uan:
//         alert('С Вас: ' + (calcUsd = usd_uan * cursUsd) + ' гр ' + '  Продажа по курсу за 1$:  ' + cursUsd + ' гр');
//         break;
// }

// var uan_usd = +prompt('Сколько вы хотите сдать долларов?: ', ''),
//     cursUan = 24.50,
//     calcUan;

// switch (uan_usd) {
//     case uan_usd:
//         alert('Вам: ' + (calcUan = uan_usd * cursUan) + ' гр ' + '  Покупка по курсу за 1$:  ' + cursUan + ' гр');
//         break;
// }
// **********************************************

// **********************************************
// Task №9
// var greeting = '',
//     userName = prompt('Input name: ', ''),
//     lang = prompt('Выберите язык "ru", "en", "de" ' + userName, ' ');

// if (lang === 'ru') {
//     greeting = alert('Добрый день ' + userName + ' !');
//     console.log(greeting);
// } else if (lang === 'en') {
//     greeting = alert('Good day ' + userName + ' !');
//     console.log(greeting);
// } else if (lang === 'de') {
//     greeting = alert('guten Tag ' + userName + ' !');
// };
// **********************************************

// **********************************************
// Task №10
// var month = new Date(),
//     today = month.getUTCMonth();

// console.log(month);

// switch (today) {
//     case 0: alert('This is winter');
//     break;
//     case 1: alert('This is winter');
//     break;
//     case 2: alert('This is spring');
//     break;
//     case 3: alert('This is spring');
//     break;
//     case 4: alert('This is spring');
//     break;
//     case 5: alert('This is summer');
//     break;
//     case 6: alert('This is summer');
//     break;
//     case 7: alert('This is summer');
//     break;
//     case 8: alert('This is autumn');
//     break;
//     case 9: alert('This is autumn');
//     break;
//     case 10: alert('This is autumn');
//     break;
//     case 11: alert('This is winter');
//     break;
// }
// ++++++++++++++++++++++++++++++++++++++++++++
// if (month === 0, month === 1, month === 11) {
//     alert('This is winter');
// } else if (month === 2, month === 3, month ===4) {
//     alert('This is spring');
// } else if (month === 5, month === 6, month === 7) {
//     alert('This is summer');
// } else if (month === 8, month === 9, month === 10) {
//     alert('This is autumn');
// }
// ++++++++++++++++++++++++++++++++++++++++++++
// **********************************************

// **********************************************
// Task №11
// var lang = prompt('Выберите язык "ru", "en" ', ''),
//     data = new Date(),
//     result;

// day = data.getDay();
// console.log(day);

// if (lang == 'ru') {
//     switch (lang == 'ru') {
//         case day === 1: result = alert('Сегодня понедельник');
//             break;
//         case day === 2: result = alert('Сегодня вторник');
//             break;
//         case day === 3: result = alert('Сегодня среда');
//             break;
//         case day === 4: result = alert('Сегодня четверг');
//             break;
//         case day === 5: result = alert('Сегодня пятница');
//             break;
//         case day === 6: result = alert('Сегодня суббота');
//             break;
//         case day === 7: result = alert('Сегодня воскресенье');
//             break;
//     }
// }

// if (lang == 'en') {
//     switch (lang == 'en') {
//         case day === 1: result = alert('Today is Monday');
//             break;
//         case day === 2: result = alert('Today is Tuesday');
//             break;
//         case day === 3: result = alert('Today is Wednesday');
//             break;
//         case day === 4: result = alert('Today is Thursday');
//             break;
//         case day === 5: result = alert('Today is Friday');
//             break;
//         case day === 6: result = alert('Today is Saturday');
//             break;
//         case day === 7: result = alert('Today is Sunday');
//             break;
//     }
// }
// **********************************************

// **********************************************
// Task №12
var x = +prompt('x', 0);
var error = null;

switch (x) {
    case 0: error = 'На ноль делить нельзя';
    break;
    case 1: error = 'На единицу делить бессмысленно';
    break;
    default: error = 'Не математическая операция';
    break;
}

if (error) {
    alert(error);
} else {
    alert(100 / x);
}

// **********************************************