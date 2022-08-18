// 1. Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User (id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}





// 2. створити пустий масив, наповнити його 10 об'єктами new User(....)

let arr = [];

arr[0] = new User(1, 2, 3, 4, 5);
arr[1] = new User(2, 2, 3, 4, 5);
arr[2] = new User(3, 2, 3, 4, 5);
arr[3] = new User(4, 2, 3, 4, 5);
arr[4] = new User(5, 2, 3, 4, 5);
arr[5] = new User(6, 2, 3, 4, 5);
arr[6] = new User(7, 2, 3, 4, 5);
arr[7] = new User(9, 2, 3, 4, 5);
arr[8] = new User(8, 2, 3, 4, 5);
arr[9] = new User(10, 2, 3, 4, 5);
// console.log(arr);

// 3. Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filt = arr.filter(function (e) {
//     return e.id % 2 === 0;
// });
// console.log(filt);



// 4. Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sorts = arr.sort(function (a, b) {return a.id - b.id});
//
// console.log(sorts);




// 5. створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order, goods1, goods2, goods3, goods4) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = [{
            goods1: goods1,
            goods2: goods2,
            goods3: goods3,
            goods4: goods4,}
        ];
    }
}

// let x = new Client(1, 2, 3, 4, 5, 6);
// console.log(x);



// 6. створити пустий масив, наповнити його 10 об'єктами Client

let arrArr = [];

arrArr[0] = new Client(2, 2, 6, 1, 2, 1, 32, 5, 2);
arrArr[1] = new Client(1, 2, 6, 1, 2, 1, 3, 5, 2);
arrArr[2] = new Client(7, 2, 6, 1, 2, 1, 311, 5, 3, 4);
arrArr[3] = new Client(6, 2, 6, 1, 2, 1, 3, 5, 2);
arrArr[4] = new Client(8, 2, 6, 1, 2, 1, 3, 5, 2);
arrArr[5] = new Client(3, 2, 6, 1, 2, 1, 3, 5, 2);
arrArr[6] = new Client(9, 2, 6, 1, 2, 1, 3, 5, 2);
arrArr[7] = new Client(5, 2, 6, 1, 2, 1, 3, 5, 2);
arrArr[8] = new Client(10, 2, 6, 1, 2, 1, 3, 5, 2);
arrArr[9] = new Client(4, 2, 6, 1, 2, 1, 3, 5, 2);

// console.log(arrArr);

// 7. Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sorts = arrArr.sort(function (a, b){return a.order.length - b.order.length});
console.log(sorts);




// 8. Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:







// function Car (model, vurobnuk, year, maxSpeed, v, drivers) {
//     this.model = model;
//     this.vurobnuk = vurobnuk;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.v = v;
//
//     // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
//     }
//
//     // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     this.info = function () {
//         console.log(y);
//     }
//
//     // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     this.increaseMaxSpeed = function (newSpeed) {
//         maxSpeed *= newSpeed;
//         console.log(maxSpeed);
//     };
//
//     // -- changeYear (newValue) - змінює рік випуску на значення newValue
//     this.changeYear = function (newValue) {
//         year = newValue;
//         console.log(year);
//     };
//     this.drivers = drivers;
// }
//
//
// 9. addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// let drivers = {Lastname: 'EnT', Name: 'eVi'};
//
//
//
//
// let y = new Car('Megane', 'Renault', 2012, 240, 1.5, drivers);
// y.drive();
// y.info();
// y.increaseMaxSpeed(2);
// y.changeYear(2022);
// y.drivers;
//
// console.log(y);



// 10. (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:



// class Car  {
//     constructor(model, vurobnuk, year, maxSpeed, v, drivers) {
//         this.model = model;
//         this.vurobnuk = vurobnuk;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.v = v;
//
//         // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//         this.drive = function () {
//             console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
//         }
//
//         // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//         this.info = function () {
//             console.log(y);
//         }
//
//         // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//         this.increaseMaxSpeed = function (newSpeed) {
//             maxSpeed *= newSpeed;
//             console.log(maxSpeed);
//         };
//
//         // -- changeYear (newValue) - змінює рік випуску на значення newValue
//         this.changeYear = function (newValue) {
//             year = newValue;
//             console.log(year);
//         };
//         this.drivers = drivers;
//     }
//
// }
//
//
// 11. addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// let drivers = {Lastname: 'EnT', Name: 'eVi'};
//
//
//
//
// let y = new Car('Megane', 'Renault', 2012, 240, 1.5, drivers);
// y.drive();
// y.info();
// y.increaseMaxSpeed(2);
// y.changeYear(2022);
// y.drivers;

// console.log(y);



// 12. створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Popelushka {
    constructor(name, age, footSize) {
        this.name = name,
        this.age = age,
        this.footSize = footSize;
    }
}

let PopArr = [];

PopArr[0] = new Popelushka('Ksenya', 22, 39);
PopArr[1] = new Popelushka('Zoryana', 21, 38);
PopArr[2] = new Popelushka('Victoria', 23, 39);
PopArr[3] = new Popelushka('Nina', 23, 43);
PopArr[4] = new Popelushka('Sasha', 20, 37);
PopArr[5] = new Popelushka('Natalia', 19, 39);
PopArr[6] = new Popelushka('Nika', 25, 36);
PopArr[7] = new Popelushka('Maria', 23, 36);
PopArr[8] = new Popelushka('Ira', 27, 38);
PopArr[9] = new Popelushka('Olga', 23, 39);
//
//
// console.log(PopArr);


// 13. Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.



class Prints {
    constructor(name, age, shoe) {
        this.name = name,
        this.age = age,
        this.shoe = shoe;
    }
}

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

let printsObj = new Prints('Arnold', 29, 43);
let x = 0;
for (let key of PopArr) {
        if (key.footSize === printsObj.shoe) {
            x = key;
            console.log(x);
        }
}

//  14.  Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку,


let pop = PopArr.find(function (value, index) {
    if (PopArr.footSize === printsObj.shoe) {
        console.log(true);

    }
});
