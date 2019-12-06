// *********************
//Task №1

// let findOption = prompt('Введите название свойства объекта (firstname, lastname, age) : ', '');

// let person = {
//     firstname: 'Nike',
//     lastname: 'Shevelinda',
//     age: 40
// }

// console.log(person[findOption]);

// if (typeof person[findOption] === 'undefined') {
//     let value = prompt('Введите значение свойства ' + findOption + ' объекта', '');
//     person[findOption] = value;
//     console.log(person);
// }

// *********************

// *********************
//Task №2

// let field = null;
// let phone = {};
// let person = {
//     firstname: 'Nike',
//     lastname: 'Shevelinda',
//     age: 40
// }

// do {
//     field = prompt('Введите название поля', '');
//     if (field) {
//         const val = prompt('Введите значение поля', '');
//         if (val) {
//             phone[field] = val;
//         } else {
//             break;
//         }
//     } else {
//         break;
//     }
// } while (field);

// person.phone = phone;

// console.log(person);

// *********************

// *********************
//Task №3

// let person = {
//     firstname: 'Nike',
//     lastname: 'Shevelinda',
//     age: 40,
//     phone: {
//         brand: 'LG'
//     }
// }

// while (1) {
//     const field = prompt('Введите название поля для редактирования', '');
//     if (field) {
//         const action = prompt('Введите действие (delete | update)', '');
//         if (action) {
//             if (action === 'delete') {
//                 delete person.phone[field];
//             } else if (action === 'update') {
//                 const newValue = prompt('Введите действие (delete | update)', '');
//                 if(newValue) {
//                     person.phone[field] = newValue;
//                 } else {
//                     break;
//                 }
//             } else {
//                 alert("Неизвестное действие!");
//                 break;
//             }
//         } else {
//             break;
//         }
//     } else {
//         break;
//     }
// }
// console.log(person);

// *********************

// *********************
//Task №4
debugger
let person = {
    firstname: 'Nike',
    lastname: 'Shevelinda',
    age: 40,
    phone: 'Samsung'
}

let listElement = document.createElement('dl');
document.body.appendChild(listElement);

for (let key in person) {
    
    if (key) {
        let titleElement = document.createElement('dt');
        listElement.appendChild(titleElement);
        titleElement.innerText = key;

        let defElement = document.createElement('dd');
        listElement.appendChild(defElement);
        defElement.innerText = person[key];
    }
    
}


// *********************

// *********************
//Task №5
// *********************

// *********************
//Task №6
// *********************