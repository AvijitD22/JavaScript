'use strict'

//! Variables
let name = "Avijit";
const city = "Ulhasnagar";
let number = 10;

//! Data Types
//! Primitive     :- 1.Null 2.undefined 3.BigInt 4.String 5.Number 6.Symbol 7.Boolean
//! Non-Primitive :- Object

//! Ternary Operator
//! (Condition) ? yes : no
(number = 10) ? console.log("true"): console.log("false");

//! Conditional Operator
if (number > 0) {
    console.log("First");
} else if (number < 0) {
    console.log("Middle");
} else {
    console.log("Last");
}

//! For Loop
for (let i = 0; i < 10; i++) {
    console.log(i + 1);
}

//! While Loop
let num = 0;
while (num < 10) {
    console.log(num + 1);
    num++;
}


//!  for-in loop (it iterates over the keys), but I have heard about for-of for the first time (it iterates over values).

//! For in Loop
let myArray = [1, 2, 3, 4, 5];
for (let i in myArray) {
    console.log(i);
}

//! For of Loop
for (let i of myArray) {
    console.log(i);
}

//! Do While Loop
do {
    console.log("Do While Loop");
}
while (number > 10);

//! Function
function greet() {
    console.log("Hello and Welcome");
}
greet();

let congrats = () => "Congratulations"

let value = congrats();
console.log(value);


//! Template Literals
console.log(`Value of Number Variable is ${number}`);

//! Escape Sequence
console.log(`Hello \t World`);
console.log(`Hello \n World`);


//! forEach Loop
let secondArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

secondArray.forEach((value, index, array) => {
    console.log(value)
    console.log(index)
    console.log(array)
})

//! Map
let newSecondArray = secondArray.map((value, index, array) => {
    return value + index;
});
console.log(newSecondArray);

//! Filter
let againNewSecondArray = secondArray.filter((value, index, array) => {
    return value > 5;
});
console.log(againNewSecondArray);

//! Reduce
let lastSecondArray = secondArray.reduce((total, item) => {
    console.log(total);
    return item + total;
});
console.log(lastSecondArray);

//! EventListener
btn.addEventListener("mouseover", () => {
    alert("Please wait...");
});

//! SetTimeout : Will try after a delay of 2 seconds
let timeOut = setTimeout(() => {
    console.log("This is SetTimeout");
}, 2000);

//! clearTimeout will cancel setTimeout
clearTimeout(timeOut);

//! setInterval : will run every second
let interval = setInterval(() => {
    console.log("This is SetInterval");
}, 1000);

//! clearInterval will cancel setInterval
clearInterval(interval);

//! Local Storage : To store items in local storage of user browser
console.log(localStorage);


//! setItem
localStorage.setItem("name", "Avijit");
localStorage.setItem("city", "Ulhasnagar");
console.log(localStorage);

//! getItem
localStorage.getItem("name");
console.log(localStorage);

//! removeItem
localStorage.removeItem("name");
console.log(localStorage);

//! key : passing index of item
console.log(localStorage.key(0));

//! clear
localStorage.clear();
console.log(localStorage);


//! Session Storage: To store data in user browser for only current session
//! sessionStorage has same methods as localStorage: setItem , getItem , removeItem , key , clear.
console.log(sessionStorage)


//! When any changes are made in storage then below event will be fired
window.addEventListener('storage', () => {
    alert("Changed")
});

//! JSON : JavaScript Object Notation

//! Synchronous and Asynchronous: JavaScript by default runs asynchronously.
//! Synchronous means running code line by line.
//! In Asynchronous the code keeps on running. If some block of code is running, JavaScript keeps on running it in background and let execute next block of codes.
//! To Make JavaScript run Synchronously we use Async and Await.

//! CallBack Functions : When we want to execute other functions after completion of previous function we use callback functions.
function timerFunction(data, callBack) {
    setTimeout(() => {
        console.log(`${data}`);
        callBack(); //! This is  callback function
    }, 3000)
}

timerFunction("Hello World", () => {
    console.log("timerFunction is completed successfully");
});
//! We can create different function for callback and pass it to required functions.

//! CallBack hell or Pyramid of doom: When we callback function for a function then callback also has callback then again callback has callback. In this situation it's hard to manage code. We avoid writing code this way. Instead we use Promises.


//! Promises
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("This is my promise");
        resolve("Completed Stage 1");
    }, 5000);
})

//! This is Promise chaining : This is the solution for callback hell/ pyramid of doom.
//! When Promise is resolved .then will run
myPromise.then((value) => {
    console.log(value);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Promise Completed Successfully");
            resolve("Completed Stage 2");
        }, 2000);
    });
}).then((value) => {
    console.log(value);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Promise Completed Successfully");
            resolve("Completed Stage 3");
        }, 2000);
    });
}).then((value) => {
    console.log(value);
    console.log("Operation Finished Successfully");
});

//! When Promise is rejected .catch will be called
myPromise.catch((error) => {
    console.log(error);
})

//! Promise : Multiple Handlers : All below .then() will run asynchronously when myPromise is resolved.
myPromise.then((value) => {
    console.log("Multiple Handlers 1")
});

myPromise.then((value) => {
    console.log("Multiple Handlers 2")
});

myPromise.then((value) => {
    console.log("Multiple Handlers 3")
});

//! Promise APIs : .all , .allSettled , .race , .any , .resolve , .reject

let firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is First Promise!!");
    }, 5000);
});

let secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is Second Promise!!");
    }, 2000);
});

let thirdPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is Third Promise!!");
    }, 3000);
});

let promiseAPI = Promise.all([firstPromise, secondPromise, thirdPromise]);
//* let promiseAPI = Promise.allSettled([firstPromise, secondPromise, thirdPromise]);
//* let promiseAPI = Promise.race([firstPromise, secondPromise, thirdPromise]);
//* let promiseAPI = Promise.any([firstPromise, secondPromise, thirdPromise]);
//* let promiseAPI = Promise.resolve([firstPromise, secondPromise, thirdPromise]);
//* let promiseAPI = Promise.reject([firstPromise, secondPromise, thirdPromise]);
promiseAPI.then((value) => {
    console.log(value);
})


//! Async and Await : As JavaScript runs asynchronously so to run some things synchronously we use Async and Await
async function greeting() {
    let greetingPromise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Hello Dear Avijit`);
        }, 10000);
    });

    let greetingPromise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Hello Again Dear Avijit`);
        }, 2000);
    });

    console.log("This is Start : Async/Await")
    let greetOne = await greetingPromise1;
    console.log(greetOne);
    let greetTwo = await greetingPromise2;
    console.log(greetTwo);
    return [greetOne, greetTwo]
}

greeting().then((value) => {
    console.log(value);
})

//! Throwing Custom Errors
//* throw new Error("Getting Bored");
//* throw new SyntaxError("You Idiot")


//! Error Handling : try , catch and finally
try {
    console.log(Middle);
} catch (error) {
    console.log(error);
} finally {
    console.log("Middle Section Error Handling Completed");
}


//! Fetch API : to fetch details from API. Usually details are in JSON format. By default API request is in Get method.
let weatherCity = "ohio";
let fetchedData = fetch(`https://goweather.herokuapp.com/weather/${weatherCity}`);

fetchedData.then((response) => {
    return response.json();
}).then((response) => {
    console.log(response);
});

//! Fetch API : Post Request
let options = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "This is Title",
        body: "This is Body",
        userId: 1000
    })
}

let myPostRequest = fetch("https://jsonplaceholder.typicode.com/posts", options)
myPostRequest.then((response) => {
    response.json()
}).then((json) => {
    console.log(json)
});


//! Cookies
console.log(document.cookie) //! To view cookies

document.cookie = "name = Avijit";
document.cookie = "name2 = Avijit2";
let cookieCityKey = "city";
let cookieCityValue = "ulhasnagar";
document.cookie = `${encodeURIComponent(cookieCityKey)}=${encodeURIComponent(cookieCityValue)}`


//! Object Oriented Programming System (OOPS)
//! OOPS consist of 4 pillars :- 
//! Abstraction    :- Hiding Internal Details/Information
//! Inheritance    :- Upgrading and adding new things to existing programs/classes 
//! Polymorphism   :- One thing many forms
//! Encapsulation  :- Making one thing by combining multiple things

//! Prototypes / __proto__

let human1 = {
    name: "Avijit",
    age: 21,
}

let human2 = {
    name: "Avijit2",
    run: () => {
        alert("Running");
    }
}

let human3 = {
    name: "myNameAvijit",
    fly: () => {
        alert("Flying");
    }
}

human1.__proto__ = human2; //! Here Human1 has access to all details/information of human2. If something information is not found in human1 it will then find in human2 and return.
human2.__proto__ = human3; //! Here Human2 has access to all details/information of human3. If something information is not found in human2 it will then find in human3 and return.

//! Here in above example if some info is not found in human1 then it will find in human2, if still not found it will find in  human3 and return.
human1.run();
human1.fly();

//! Classes and object
class applicationForm {

    //! The constructor method is a special method of a class for creating and initializing an object instance of that class.
    //! If you don't provide your own constructor, then a default constructor will be supplied for you. If your class is a base class, the default constructor is empty:-    constructor() {}
    constructor(name, age, exp) {
        this.name = name;
        this.age = age;
        this.exp = exp;
    }

    //! Method
    submit() {
        alert(`${this.name} Your Application Form is submitted successfully`);
    }

    //! Method
    cancel() {
        alert(`${this.name} Your Application Form is cancelled`);
    }
}

let person1 = new applicationForm("Avijit", 21, 1);
person1.submit();
person1.cancel();


//! Inheritance : Extends Keyword : Used to create new classes while including methods of other classes.
class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    run() {
        console.log(`${this.name} is Running...`);
    }

    shout() {
        console.log(`${this.name} is Shouting...`);
    }
}

let lion = new Animal("King", "Golden");
lion.run();

class Monkey extends Animal {
    eatBanana() {
        console.log(`${this.name} is Eating Banana`);
    }
}

let myMonkey = new Monkey("Monu", "Orange");
myMonkey.eatBanana();
myMonkey.run();


//! Method Overriding
class Employee {
    constructor() {}

    login() {
        console.log(`Employee Logged in`);
    }

    logout() {
        console.log(`Employee Logout`);
    }

    requestLeave(leaves) {
        console.log(`Employee has Requested ${leaves} leaves`);
    }
}

class Programmer extends Employee {
    getCoffee() {
        console.log(`Programmer Needs Coffee`);
    }

    //! Method of parent class is being overridden.
    requestLeave(leaves) {
        console.log(`Programmer has Requested ${leaves+1} leaves (One Extra)`);
    }

    //! Super keyword is used to call method from parent class
    requestLeave(leaves) {
        super.requestLeave(leaves);
    }
}

let firstEmployee = new Programmer();
firstEmployee.requestLeave(5);

//! Constructor overriding
//! When there is no constructor in child classes, then constructor of parent class is called.
//! Constructor in child classes :-
//* constructor(...args){
//*     super(...args);
//* }
//! To Override constructor in child classes we have to use super keyword in constructor as shown above. And then we can add extra requirements.



//! Static methods: This methods can be used outside the class. While using we have to use class name. 
class Animal {
    constructor(name) {
        this.name = Animal.capitalize(name);
    }

    run() {
        console.log(`Animal ${this.name} is running...`)
    }

    static capitalize(name) {
        return name.charAt(0).toUpperCase() + name.substr(1, name.length);
    }
}

let myAnimal = new Animal("king");
myAnimal.run();

//! Example of using static method outside class. 
console.log(Animal.capitalize("lol"));