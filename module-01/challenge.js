//EXERCICIO1

class Usuario {
  constructor(email, senha){
      this.email = email;
      this.senha = senha;
  }
  isAdmin(){
      if(this.admin === true){
          return true;
      } else {
          return false;
      }
  }
}

class Admin extends Usuario {
  constructor(){
      super();
      this.admin = true;
  }
}

const admin = new Admin('renatoslip@hotmail.com', 123);
const usuario =  new Usuario('diego3g@rocketseat.com.br', 12345);


console.log(admin.isAdmin());
console.log(usuario.isAdmin());


//EXERCICIO 2

const usuarios = [
  {nome: 'Renato', idade: 31, empresa: 'Rocketseat'},
  {nome: 'Diego', idade: 23, empresa: 'Rocketseat'},
  {nome: 'Gabriel', idade: 18, empresa: 'Google'}
]

//2.1 map - array com a idade de todos
const idades = usuarios.map(usuario => usuario.idade);
console.log(idades);

//2.2 filter - variavel que tenha apenas quem trabalhe na rocketseat e mais de 20 anos
const rocket = usuarios.filter(usuario => usuario.empresa ==='Rocketseat' && usuario.idade >20);
console.log(rocket);

//2.3 find - variável que procura por um usuário que trabalhe na empresa Google
const google = usuarios.find(usuario => usuario.empresa ==='Google');
console.log(google);

//2.4 unindo operações - Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem no max 50 anos
const usuariosMenor50 = usuarios.map(usuario => ({...usuario, idade: usuario.idade *2})).filter(usuario => usuario.idade <=50);
console.log(usuariosMenor50);


//EXERCICIO 3

//converta em array funcion

// 3.1
//const arr = [1, 2, 3, 4, 5];
// arr.map(function(item) {
//     return item + 10;
// });

const arr =[1, 2, 3, 4, 5];
arr.map(item => item +10);

// 3.2
// Dica: Utilize uma constante pra function
// const usuario = { nome: 'Diego', idade: 23 };
// function mostraIdade(usuario) {
// return usuario.idade;
// }
// mostraIdade(usuario);
const usuario3 ={
  nome: 'Renato',
  idade: 31
}
const mostraIdade = (usuario3 => usuario3.idade);
console.log(mostraIdade(usuario3));//31


// 3.3
// Dica: Utilize uma constante pra function
const nome3 = "Diego";
const idade3 = 23;
// function mostraUsuario(nome = 'Diego', idade = 18) {
// return { nome, idade };
// }
const mostraUsuario3 = (nome = 'Diego', idade =18) => ({nome, idade});
console.log(mostraUsuario3(nome3, idade3));
console.log(mostraUsuario3(nome3));


//// 3.4
// const promise = function() {
//     return new Promise(function(resolve, reject) {
//         return resolve();
//     })
// }
const promise = () => new Promise((resolve, reject) => resolve());


//EXERCICIO 4

// 4.1 - DESESTRUTURAÇÃO SIMPLES
const empresa4 = {
  nome: 'Rocketseat',
  endereco: {
      cidade: 'Rio do Sul',
      estado: 'SC',
  }
};

// Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis, no
// fim deve ser possível fazer o seguinte:

const {nome, endereco: {cidade, estado}} = empresa4;
console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC


//4.1 - DESESTRUTURAÇÃO EM PARAMETROS
// Na seguinte função:
// function mostraInfo(usuario) {
// return `${usuario.nome} tem ${usuario.idade} anos.`;
// }
// mostraInfo({ nome: 'Diego', idade: 23 })

// Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuário
// separadamente e a função poder retornar apenas:
// return `${nome} tem ${idade} anos.`;
function mostraInfo({nome, idade}) {
  return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({nome: 'Diego', idade: 23}));


//EXERCICIO 5 - REST/SPREAD
//5.1 - REST
const arr5 = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr5;
console.log(x);//1
console.log(y);//[2, 3, 4, 5, 6]

const soma = (...params) => params.reduce((total, next) => total + next);
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3


//5.2 - SPREAD
const usuario5 ={
  nome: 'Renato',
  idade: 31,
  endereco: {
      cidade: 'Rio de Janeiro',
      uf: 'RJ',
      pais: 'Brasil'
  }
}

const usuario51 = {...usuario5, nome: 'Gabriel'};
console.log(usuario51);

const usuario52 = {...usuario5, endereco: {...usuario5.endereco, cidade: 'Lontras'}};
console.log(usuario52);


//EXERCICIO 6 - TEMPLATE LITERALS
// converta:
const usuario6 = 'Diego';
const idade6 = 23;
// console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');
console.log(`O usuário ${usuario6} possui ${idade6} anos`);


//EXERCICIO 7 - Object Short Syntax
const nome7 = 'Renato';
const idade7 = 31;
// const usuario = {
//     nome: nome,
//     idade: idade,
//     cidade: 'Rio do Sul',
// };
const usuario7 = {
  nome7,
  idade7,
  cidade: 'Rio de Janeiro'
}

console.log(usuario7);
