// *********************
//Task №1

let findOption = prompt('Введите название свойства объекта (firstname, lastname, age) : ', '');

let person = {
    firstname: 'Nike',
    lastname: 'Shevelinda',
    age: 40
}

console.log(person[findOption]);

if (typeof person[findOption] === 'undefined') {
    let value = prompt('Введите значение свойства ' + findOption + ' объекта', '');
    person[findOption] = value;
    console.log(person);
}

// *********************

// *********************
//Task №2
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