// 'use strict';
// ****************************
// the Task №1
// var x = prompt('Введите Х', '1'), // не было запятой
//     y = prompt('Введите Y', '1'),
//     summ;

//     summ = parseInt(x) + parseInt(y);

// alert( 'Сумма: ' + summ);
// ****************************

// ****************************
// the Task №2
// var x = 3,
//     y = x * 3,
//     z = x + y;

//     alert(x);
//     alert(y);
//     alert(z);
// ****************************

// ****************************
// the Task №3
// var firstName = prompt('Введите Имя: ', ''),
//     lastName = prompt('Введите Фамилию: ', '');

// firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
// lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

// alert(`" What’s up ${``+ firstName} ${``+ lastName} "`);
// ****************************

// ****************************
// the Task №4
// var x = prompt('Input x: ', ''),
//     y = prompt('Input y: ', '');

// summ = parseInt(x) + parseInt(y);
// alert(`x * y =  ${x * y}`);
// alert(`x / y =  ${x / y}`);
// alert(`x - y =  ${x - y}`);
// alert(`x + y =  ${summ}`);
// ****************************

// ****************************
// the Task №5
// var x = prompt('Введите число: ', ''),
//     num = parseInt(x),
//     even;

// even = num % 2 === 0;
// alert(even);
// ****************************

// ****************************
// the Task №6
// var x = prompt('Введите значение в байтах: ', ''),
//     kb, mb, gb;

// parseInt(x);
// kb = x / 1024;
// mb = kb / 1024;
// gb = mb / 1024;
// alert('Значение в байтах: ' + x + ' b');
// alert('Значение в килобайтах: ' + kb.toFixed(3) + ' Kb');
// alert('Значение в мегабайтах: ' + mb.toFixed(4) + ' Mb');
// alert('Значение в гигабайтах: ' + gb.toFixed(8) + ' Gb');
// ****************************

// ****************************
// the Task №7
// var x = +prompt('Колличество яблок Чжуан-цзы: ', ''),
//     y = +prompt('Колличество съеденых яблок Цзэн-Цзы: ', '');

// alert(' На обвинения Чжуан-цзы в съедении всех яблок, Цзэн-Цзы говорит правду в том что не ел все яблоки? : ' + Boolean(y - x));
// ****************************

// ****************************
// the Task №8
// var col1 = +prompt('first column: ', ''),
//     col2 = +prompt('first column: ', ''),
//     col3 = +prompt('first column: ', '');

// alert('Max column ' + Math.max(col1, col2, col3) + ' px');
// ****************************

// ****************************
// the Task №9
// const pathMoon = 384000;

// alert('Расстояние до орбиты Земли 100 км, введите это расстояние ниже...');
// var pathOnOrbit = +prompt('Введите расстояние до орбиты: ', '');
// alert('Первая космическая скорость составляет 7,91 км/с');
// var firstCosmoSpeed = +prompt('Введите первую космическую скорость: ', '');
// alert('Вторая космическая скорость составляет 11.2 км/с');
// var secondCosmoSpeed = +prompt('Введите вторую космическую скорость: ', '');

// var timeOutOnOrbit,
//     isHour,
//     fullTime,
//     pathFromOrbitToMoon,
//     timeFromOrbitToMoon;

// timeOutOnOrbit = pathOnOrbit / firstCosmoSpeed;
// timeOutOnOrbit = (timeOutOnOrbit / 60) / 60;
// pathFromOrbitToMoon = pathMoon - pathOnOrbit;
// timeFromOrbitToMoon = pathFromOrbitToMoon / secondCosmoSpeed;
// isHour = (timeFromOrbitToMoon / 60) / 60;
// fullTime = isHour + timeOutOnOrbit;

// alert('Полёт на орбиту будет выполнен за: ' + timeOutOnOrbit.toFixed(4) + ' мин');
// alert('Полёт с орбиты на Луну будет выполнен за: ' + isHour.toFixed(4) + ' часов');
// alert('Полное время пути займёт: ' + fullTime.toFixed(4) + ' часов');
// ****************************

// ****************************
// the Task №10
var x = (Math.random() * 100).toFixed(0),
    y = +prompt('Введите число до 100: ', '');

alert('x < y = ' + Boolean(x < y) + ' x = ' + x + ' y = ' + y);
// ****************************