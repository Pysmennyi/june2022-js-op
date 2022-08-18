// - Створити функцію конструктор для об'єктів User з
// полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let array = [];
array.push(new User(1, `Petro`, `Petro`, `sadada`, 2983268));
array.push(new User(2, `Petro`, `Petro`, `sadada`, 2983268));
array.push(new User(3, `Petro`, `Petro`, `sadada`, 2983268));
array.push(new User(45, `Petro`, `Petro`, `sadada`, 2983268));
array.push(new User(5, `Petro`, `Petro`, `sadada`, 2983268));
array.push(new User(6, `Petro`, `Petro`, `sadada`, 2983268));
array.push(new User(7, `Petro`, `Petro`, `sadada`, 2983268));
array.push(new User(8, `Petro`, `Petro`, `sadada`, 2983268));
array.push(new User(9, `Petro`, `Petro`, `sadada`, 2983268));
array.push(new User(10, `Petro`, `Petro`, `sadada`, 2983268));

console.log(array);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// залишивши тільки об'єкти з парними id (filter)

let filter = array.filter(user => user.id % 2 === 0);
console.log(filter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sort = array.sort((a, b) => a.id - b.id);
console.log(sort);
// - створити класс для об'єктів Client з полями
// id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [];
clients.push(new Client(1, `Petro`, `Petro`, `sadada`, 2983268, [231, 123]));
clients.push(new Client(2, `Petro`, `Petro`, `sadada`, 2983268, [231, 123, 3, 2, 1, 1, 1,]));
clients.push(new Client(3, `Petro`, `Petro`, `sadada`, 2983268, [231, 123, 23, 4, 6]));
clients.push(new Client(4, `Petro`, `Petro`, `sadada`, 2983268, [231, 123, 21, 2]));
clients.push(new Client(5, `Petro`, `Petro`, `sadada`, 2983268, [231, 123, 2]));
clients.push(new Client(6, `Petro`, `Petro`, `sadada`, 2983268, [231, 123]));
clients.push(new Client(7, `Petro`, `Petro`, `sadada`, 2983268, [231]));
clients.push(new Client(8, `Petro`, `Petro`, `sadada`, 2983268, [231, 3, 1]));
clients.push(new Client(9, `Petro`, `Petro`, `sadada`, 2983268, [231, 2, 0, 0, 0,]));
clients.push(new Client(10, `Petro`, `Petro`, `sadada`, 2983268, [1, 0, 1, 0]));

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості
// товарів в полі order по зростанню. (sort)
let sortClient = clients.sort((client1, client2) => client1.order.length - client2.order.length);
console.log(sortClient);

//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car,
// з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// function Car(model, producer, year, maxSpeed) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     function drive() {
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
//     }
//
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     this.info =function () {
//         for (const item in this) {
//             if (typeof this[item] !== 'function') {
//                 console.log(`${item} -- ${this[item]}`);
//             }
//         }
//     }
//
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//    this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//     this.addDriver = function (driver) {
//         this.driver = driver;
//
//     }
// }
// let car = new Car(`audi`,`Germany`,2022,3,2);
// console.log(car);
// car.info();
// car.changeYear(1992);
// car.addDriver({name:`Vasia`,surname:`Vasia`});
// car.info();

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car2{
    constructor(model, producer, year, maxSpeed) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
    }
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
        drive() {
            console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
        }

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
        info (){
            for (const item in this) {
                if (typeof this[item] !== 'function') {
                    console.log(`${item} -- ${this[item]}`);
                }
            }
        }

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
        increaseMaxSpeed (newSpeed) {
            this.maxSpeed += newSpeed;
        }

// -- changeYear (newValue) - змінює рік випуску на значення newValue
        changeYear (newValue) {
            this.year = newValue;
        }

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
        addDriver (driver) {
            this.driver = driver;

        }

}
let car2 = new Car2(`audi`,`Ukraine`,2022,3,2);
car2.info();

//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella{

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderella1 = new Cinderella('Alina',22,35);
let cinderella2 = new Cinderella('Alina',22,36);
let cinderella3 = new Cinderella('Alina',22,37);
let cinderella4 = new Cinderella('Alina',22,38);
let cinderella5 = new Cinderella('Alina',22,34);

let array2 = [cinderella1,cinderella2,cinderella3,cinderella4,cinderella5];

class Prince extends Cinderella{
    constructor(name, age, findFootSize) {
        super(name,age);
        this.findFootSize = findFootSize;
    }
}

let prince = new Prince('Vasya', 22, 37);

let find = (array, prince) => {
    for (const item of array) {
        if (prince.findFootSize === item.footSize) {
            return `My Cinderella is ${item.name}`
        }
    }
}
console.log(find(array2, prince));

let cinderella = array2.find(value => prince.findFootSize === value.footSize);
console.log(cinderella);
