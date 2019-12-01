// ******** 28.10.2019 *********


// Task №1 
// *****************************

// *****************************
// Task №2
// *****************************
// let h3 = document.createElement('h3');
// document.body.appendChild(h3);

// for (let col = 0; col < 3; col++) {
//     let text = document.createElement('h3');
//     let name = prompt('Input name: ', '');
//     text.innerText = 'Happy birthday to you ' + name;
//     console.log(h3.appendChild(text), name);
// }
// *****************************
// Task №3

// var str = '';
// for (let i = 0; i < 11; i++) {
//     let notEven, even;

//     if (i % 2 !== 0) {
//         notEven = '#';
//     } else {
//         even = '.';
//     }

//     str += notEven || even; 
// }

// document.body.append(str);
//     console.log(str);
// *****************************

// *****************************
// Task №4

// for(var i = 1; i < 11; i++) {
//      if (i % 2 === 0) { 
//         document.write(Math.pow(i, 2)); 
//         document.write(" "); 
//         console.log(Math.pow(i, 2));
//     } 
// }
// *****************************

// *****************************
// Task №5 
//
// for (let i = 1; i < 3; i++) {
//     if (window.confirm('Вам нужно подтвердить вход!!!')) {
//         window.alert('Спасибо что вы с нами!!!)))!!!');
//         break;
//     }
//     else {
//         window.alert('Рекомендуем всё таки подтвердить вход!!!');
//     }
// }
// *****************************

// *****************************
// Task №6 
// let even = prompt('Введите число: ', ''),
//     sum = 0;
// for (let i = 0; i < even; i++) {
//     if (i % 2 === 1) {
//         sum += i;
//     } 
// }
// alert(sum);
// *****************************

// *****************************
// Task №7

// let i = 0;
// while (true) {
//   let randomNumber = Math.random();
//   i++;
//   if (randomNumber > 0.99) {
//     alert(`iteration count is ${i}, number is ${randomNumber}`);
//     break;
//   }
// }
// *****************************

// *****************************
// Task №8

// for (let i = 1; i < 10; i++) {
//     for (let j = 1; j < 10; j++) {
//         console.log(i + " * " + j + " = " + i * j);
//     }
// }
// *****************************

// *****************************
// Task №9 

// let deckSize = +prompt('input count', '');
// let result = "";
// for (let i = 1; i <= deckSize; i++) {
//     for (let j = 1; j <= deckSize; j++) {
//       if (j % 2 === 0) {
//         result += ( i % 2 === 0) ? " * " : " # ";        
//       } else {
//         result += ( i % 2 === 0) ? " # " : " * ";
//       }
//       if (j === deckSize) result += "\n";
//     }
// }
// alert(result);
// *****************************

// *****************************
// Task №10

// // F = Fn-1 + Fn-2, n >= 2
// let fibonachiNumbers = "";
// let foundTotal = 0;
// let fn1 = 0;
// let fn2 = 0;
// let currentFn = 0;
// for (let i = 0;; i++) {
//   if (i >= 2) {
//     currentFn = fn1 + fn2;
//     fibonachiNumbers += currentFn + ", ";
//     fn1 = fn2;
//     fn2 = currentFn
//     foundTotal++
//   } else {
//     if (i === 0) {
//       fn1 = 0;
//       fibonachiNumbers += 0 + ", ";
//     } else {
//       fn2 = 1;
//       fibonachiNumbers += 1 + ", ";
//     }
//     foundTotal++
//   }
//   if (foundTotal === 20) { break }
// }
// console.log(fibonachiNumbers);
// *****************************

// *****************************
// Task №11

// let userLogin = '';
// const correctLogin = 'nike';
// let userPassword = '';
// const correctPassword = 'shev';

// while (userLogin !== correctLogin || userPassword !== correctPassword) {
//     userLogin = prompt('Введите логин : ', '');

//     if (userLogin === null) {
//         let output = confirm('Вы уверены что хотите прекратить авторизацию ?');
//         if (output === true) {
//             alert('Вы отменили авторизацию !!!');
//             break;
//         } else {
//             continue;
//         }
//         continue;
//     }

//     userPassword = prompt('Введите пароль : ', '');

//     if (userPassword !== correctPassword) {
//         alert('Не верный пароль !!! Пройдите авторизацию снова!!!');
//         continue;
//     }

// }

// if (userLogin === correctLogin && userPassword === correctPassword) {
//     alert('Вы авторизованы !!!');
// }
// *****************************

// *****************************
// Task №12 

// for (let i = 0; i < 10; i++) {
// 	for (let j = 0; j < 10; j++) { //i++ а надо j++
//      console.log('i =' + i, 'j =' + j);
// 	}
// }
// *****************************

// *****************************
// Task №13 spes

// let countStrings = +prompt('Введите колличество строк : ', '');
// let result = '';

// for (let i = 0; i < 10; i++) {
//     for (let j = -countStrings; j < countStrings; j++) {
//         result += (j >= -i && j <= i) ? '#' : '.';
//     }
//     result += '\n';
// }

// console.log(result);
// *****************************