const arr = [1,2,3,4,5];
const usuario = {
    nome: 'Diego',
    idade: 23
}

const nome = 'Diego';
const idade = 23;


//exe 3.1
const arr2 = arr.map(item => item + 10);

console.log(arr2);

//exe3.2

const mostraIdade  = usuario => usuario.idade;


console.log(mostraIdade(usuario));


//exe 3.3

 const mostraUsuario  = (nome = 'Diego',idade = 18) => ({nome,idade});


 console.log(mostraUsuario(nome));
 console.log(mostraUsuario(nome, idade));


//exe 3.4

const promisse = () => new Promise((resolve, reject) => resolve());


