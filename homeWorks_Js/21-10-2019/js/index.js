'use strict';

// Задание №1
// var x = prompt('Введите Х', '1'), // не было запятой
//     y = prompt('Введите Y', '1');

// alert( 'Сумма: ' + x + y );

// Задание №2
// var x = 3,
//     y = x * 3,
//     z = x + y;

//     alert(x);
//     alert(y);
//     alert(z);

// Задание №3
var firstName = prompt('Введите Имя: ', ''),
    lastName = prompt('Введите Фамилию: ', '');

    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

alert(`" What’s up ${``+ firstName} ${``+ lastName} "`);

