<h1 align="center">
    <img alt="Starter" title="ES6 Starter"src=".github/es6.png" width="200px" />
</h1>

<h3 align="center">
  Rocketseat ES6 Challenges :book:
</h3>

<p align="center">This project is just the final exercises of each Rocketseat ES6 course module <a href="https://skylab.rocketseat.com.br/journey/starter">ES6 Starter</a> 🎓
</p>

## Module 1

<h3>Exercise One</h3>
To test your knowledge with classes, create a class named "Admin", that class must extend a second class called "User".
The user class must receive two parameters in the constructor method, email and password, and write them down in class properties. The "Admin" class does not receive any parameters, but must pass the email and password parameters to the parent class and mark an "admin" property as `true` in the class.
Now with your formatted classes, add a method in the User class called isAdmin that returns whether the user is an administrator or not based on the admin property being true or not.

```
const User1 = new User('email@teste.com', 'senha123');
const Adm1 = new Adm('email@teste.com', 'senha123');
console.log(User1.isAdm()) // false
console.log(Adm1.isAdm()) // true
```

<h3>Exercise Two</h3>
From the following vector and using the array methods (map, reduce, filter and find):

```
const users = [
 { name: 'Diego', age: 23, company: 'Rocketseat' },
 { name: 'Gabriel', age: 15, company: 'Rocketseat' },
 { name: 'Lucas', age: 30, company: 'Facebook' },
];
```

2.1 - Using `map`
Create a variable that contains all ages of users: [23, 15, 30]

2.2 - Using `filter`
Create a variable that has only users who work at Rocketseat and over 18
years old: [{name: 'Diego', age: 23, company: 'Rocketseat'}]

2.3 - Using `find`
Create a variable that looks for a user who works for the Google company: undefined

2.4 - Joining operations
Multiply the age of all users by two and then perform a filter on users who have
maximum 50 years:

```
// Result:
[
 { name: 'Diego', age: 46, company: 'Rocketseat' },
 { name: 'Gabriel', age: 30, company: 'Rocketseat' },
]
```

<h3>Exercise Three</h3>
Convert the functions to the following code snippets in Arrow Functions:

```
// 3.1
const arr = [1, 2, 3, 4, 5];
arr.map(function(item) {
 return item + 10;
});
```

```
// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
function mostraIdade(usuario) {
 return usuario.idade;
}
mostraIdade(usuario);
```

```
// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
function mostraUsuario(nome = 'Diego', idade = 18) {
 return { nome, idade };
}
mostraUsuario(nome, idade);
mostraUsuario(nome);
```

```
// 3.4
const promise = function() {
 return new Promise(function(resolve, reject) {
 return resolve();
 })
}
```

<h3>Exercise Four</h3>
4.1 - Simple Destructuring.
From the following object:

```
const empresa = {
 name: 'Rocketseat',
 address: {
 city: 'Rio do Sul',
 UF: 'SC',
 }
};
```

Use the de-structuring to transform the properties name, city and state into variables, in the
order it should be possible to do the following:

```
console.log(name); // Rocketseat
console.log(city); // Rio do Sul
console.log(UF); // SC
```

4.2 - Params Destructuring.
From the following function:

```
function showInfo(user) {
 return `${user.name} tem ${user.age} years.`;
}
showInfo({ name: 'Diego', age: 23 })
```

Use the breakdown in the function parameters to search for the user's name and age
separately and the function can only return:

```
return `${name} tem ${age} years.`;
```

<h3>Exercise Five</h3>
Using the rest / spread operator (...) perform the following operations:

5.1 - Rest
From the array: const arr = [1, 2, 3, 4, 5, 6], define a variable x that receives the first
position of the vector and another variable y that receives all the rest of the data.

```
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]
```

Create a function that takes numerous parameters and returns the sum of them all:

```
// function soma...
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3
```

5.2 - Spread
From the object and using the spread operator:

```
const usuario = {
 nome: 'Diego',
 idade: 23,
 endereco: {
 cidade: 'Rio do Sul',
 uf: 'SC',
 pais: 'Brasil',
 }
};
```

Create a user2 variable that contains all user data but named Gabriel.

Create a user3 variable that contains all user data but with Lontras city.

<h3>Exercise Six</h3>
Convert the following code snippet using Template Literals:

```
const user = 'Diego';
const age = 23;
console.log('The user ' + user + ' has ' + age + ' years');
```

<h3>Exercise Seven</h3>
Use object short syntax on the following object:

```
const name = 'Diego';
const age = 23;
const user = {
 name: name,
 age: age,
 city: 'Rio do Sul',
};
```

<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

## Module 2
<h4>All of the exercises below require you to have your Webpack configured.<h4>

<h3>Exercise One</h3>
Create a file called `functions.js` with the following content:
```
export const age = 23;
export default class User {
 static info() {
 console.log('Just a test');
 }
}
```


1.1 Now in your main file import only the User class renaming it to `UserClass` and call the `info ()` function;
1.2 In your main file, import the age variable and display it on screen;
1.3 In your main file import both the class and the age variable and rename the age variable for `UserAge`.

<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

## Module 3

<h3>Exercise One</h3>
<h4>All exercises below require you to have the Async / Await plugin from Babel and the babel-polyfill properly configured. In some exercises it is necessary to install Axios.</h4>

<h3>Exercise</h3>
Transform the following code snippets using async / await:

```
// Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
function umPorSegundo() {
 delay().then(() => {
 console.log('1s');
 delay().then(() => {
 console.log('2s');
 delay().then(() => {
 console.log('3s');
 });
 })
 });
}
umPorSegundo();
```

```
import axios from 'axios';
function getUserFromGithub(user) {
 axios.get(`https://api.github.com/users/${user}`)
 .then(response => {
 console.log(response.data);
 })
 .catch(err => {
 console.log('Usuário não existe');
 })
}
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');
```

```
class Github {
 static getRepositories(repo) {
 axios.get(`https://api.github.com/repos/${repo}`)
 .then(response => {
 console.log(response.data);
 })
 .catch(err => {
 console.log('Repositório não existe');
 })
 }
}
Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');
```

```
const buscaUsuario = usuario => {
 axios.get(`https://api.github.com/users/${user}`)
 .then(response => {
 console.log(response.data);
 })
 .catch(err => {
 console.log('Usuário não existe');
 });
}
buscaUsuario('diego3g');
```

## Contributing

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a pull request

## License

![MIT](https://img.shields.io/badge/License-MIT-blue.svg)
