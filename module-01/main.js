// EXERCISE 01
class User {
  constructor(email, password){
      this.email = email;
      this.password = password;
  }

  // Class method
  isAdm(){
      if(this.adm === true){
          return true;
      } else {
          return false;
      }
  }
}

class Adm extends User {
  constructor(){
      super();
      this.adm = true;
  }
}

const admin = new Adm('girardi.gui@icloud.com', 123);
const user =  new User('gui.girardi02@hotmail.com', 12345);


console.log(admin.isAdm()); // true
console.log(user.isAdm()); // false



// <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>




//EXERCISE 2
const users = [
  {name: 'Girardi', age: 30, company: 'Rocketseat'},
  {name: 'Raisa', age: 28, company: 'Macrame'},
  {name: 'Guilherme', age: 29, company: 'Google'}
]

//2.1 Map - Array with all ages
const ages = users.map(user => user.age);
console.log(ages);

//2.2 Filter - Variable with those who works at Rocketseat and have more than 20 years old.
const rocket = users.filter(user => user.company ==='Rocketseat' && user.age >20);
console.log(rocket);

//2.3 Find - Variable that searches for a user who works at Google.
const google = users.find(user => user.company ==='Google');
console.log(google);

//2.4 Uniting Operations - Multiply the age of all users by 2 and filter those who are 70 (max).
const userLessThan50 = users.map(user => ({...user, age: user.age *2})).filter(user => user.age < 70);
console.log(userLessThan50);



// <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>



//EXERCISE 3
// Convert into array function

// 3.1
//const arr = [1, 2, 3, 4, 5];
// arr.map(function(item) {
//     return item + 10;
// });

const arr =[1, 2, 3, 4, 5];
arr.map(item => item +10);

// 3.2
// const user = { nome: 'Diego', age: 23 };
// function showAge(user) {
//  return user.age;
// }
// showAge(user);

const user3 ={
  nome: 'Girardi',
  age: 31
}
const showAge = (user3 => user3.age);
console.log(showAge(user3)); // 31


// 3.3
// const name = "Diego";
// const age = 23;
// function showUser(name = 'Diego', age = 18) {
//  return { name, age };
// }
// showUser(name, age);
// showUser(name);

const name3 = "Diego";
const age3 = 23;
// function showUser(name = 'Diego', age = 18) {
// return { name, age };
// }
const showUser3 = (name = 'Diego', age =18) => ({name, age});
console.log(showUser3(name3, age3));
console.log(showUser3(name3));


//// 3.4
// const promise = function() {
//     return new Promise(function(resolve, reject) {
//         return resolve();
//     })
// }

const promise = () => new Promise((resolve, reject) => resolve());



// <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>



//EXERCISE 4
// 4.1 - SIMPLE DESTRUCTURING
const company4 = {
  name: 'Rocketseat',
  address: {
      city: 'Rio do Sul',
      UF: 'SC',
  }
};

const {name, address: {city, UF}} = company4;
console.log(name); // Rocketseat
console.log(city); // Rio do Sul
console.log(UF); // SC


//4.1 - PARAMETERS DESTRUCTURING
function showInfo({name, age}) {
  return `${name} has ${age} years.`;
}
console.log(showInfo({name: 'Girardi', age: 29}));



// <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>



//EXERCISE 5 - REST/SPREAD
//5.1 - REST
const arr5 = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr5;
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

const soma = (...params) => params.reduce((total, next) => total + next);
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3


//5.2 - SPREAD
const user5 ={
  name: 'Guilherme',
  age: 31,
  address: {
    city: 'Rio de Janeiro',
    uf: 'RJ',
    country: 'Brasil'
  }
}

const user51 = {...user5, name: 'Gabriel'};
console.log(user51);

const user52 = {...user5, address: {...user5.address, city: 'Lontras'}};
console.log(user52);



// <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>



//EXERCISE 6 - TEMPLATE LITERALS
// Convert:
const user6 = 'Diego';
const age6 = 23;
// console.log('The user ' + user + ' has ' + age + ' years');
console.log(`The user ${user6} has ${age6} years`);



// <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>



//EXERCISE 7 - Object Short Syntax
const name7 = 'Girardi';
const age7 = 29;
// const user = {
//     name: name,
//     age: age,
//     city: 'Rio do Sul',
// };
const user7 = {
  name7,
  age7,
  city: 'Rio de Janeiro'
}

console.log(user7);
