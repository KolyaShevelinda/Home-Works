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
debugger;
let person = {
    firstname: 'Nike',
    lastname: 'Shevelinda',
    age: 40
}
console.log(person);

let nameNewObj = new Object();
person.nameNewObj = prompt('Введите название объекта : ', '');
console.log(person);

if (typeof person.nameNewObj === 'undefined') {

    while (true) {

        let fildObj = prompt('Введите название поля объекта ' + person.nameNewObj, '');
        person.nameNewObj = fildObj;

        let valueNewObj = prompt('Введите значение поля ' + person.nameNewObj + ' объекта ', '');
        fildObj = valueNewObj;

        if (nameNewObj === null || fildObj === null || valueNewObj === null) {
            alert('Окончание работы с объектом ');
            break;
        }
        console.log(person);
    }

} 

// if (typeof person.nameNewObj === 'undefined') {

//     person.nameNewObj = prompt('Введите название объекта : ', '');

//     let fildObj = prompt('Введите название свойства объекта ' + person.nameNewObj, '');
//     person.nameNewObj = fildObj;

//     // let valueNewObj = prompt('Введите название свойства объекта : ' + nameNewObj + ' объекта ', '');
//     // nameNewObj.fildObj = valueNewObj;

//     console.log(person);

// }

// *********************

// *********************
//Task №3
// *********************

// *********************
//Task №4
// *********************

// *********************
//Task №5
// *********************

// *********************
//Task №6
// *********************