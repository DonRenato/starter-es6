class Usuario {
    constructor(email, senha){
        this.email = email;
        this.senha = senha;

    }
        isAdmin(){
            return this.admin === true;
        }
}  

class Admin  extends Usuario{
    constructor(email, senha){
        super(email, senha);

        this.admin = true;

    }
}


const User1 = new Usuario('email1@teste.com', 'senha123');
const Admin1 = new Admin('email1@teste.com', 'senha123');

console.log(User1.isAdmin());
console.log(Admin1.isAdmin());