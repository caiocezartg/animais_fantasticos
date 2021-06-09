function Carro(){
    this.modelo = "Marca",
    this.preco = 0,
    this.ano = 0
}

const ford = new Carro();

ford.modelo = "Ford";
ford.preco = 9888;
ford.ano = 1999;


// const Dom = {
//     seletor: 'li',
//     element() {
//        return document.querySelector(this.seletor);
//     },
//     ativar(){
//         const elementoSelecionado = this.element();
//         elementoSelecionado.classList.toggle('ativar');
//     }
// };

function Dom(seletor){
    this.seletor = seletor;
    this.element = () => document.querySelector(seletor);
    this.ativar = function() {
        this.element().classList.toggle('ativar');
    }
};

const li = new Dom('li');

//Exercicio 1

function Pessoa(nomePessoa, idade){
    this.nome = nomePessoa;
    this.idade = idade;
    this.andar = function(){
        console.log(this.nome + ' andou.')
    }
}

//Exercicio 2

const pessoa1 = new Pessoa("João", 20);
const pessoa2 = new Pessoa("Maria", 25);
const pessoa3 = new Pessoa("Bruno", 15);

function Dom(seletor){
    const elementList = document.querySelectorAll(seletor);
    this.elements = elementList;
    this.addClass = function(classe) {
        this.elements.forEach((element) => {
            element.classList.add(classe);
        });
    };
    this.removeClass = function(classe) {
        this.elements.forEach((element) => {
            element.classList.remove(classe);
        });
    };
};


function Class1(){
    this.method = () => { };
}

Class1.staticMethod = function(){};

const C1 = new Class1();

Class1.prototype.publicMethod = function(){};

const C2 = new Class1();

function PessoaEx(nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

PessoaEx.prototype.nomeCompleto = function(){
    return `${this.nome} ${this.sobrenome}`
}

const p1 = new PessoaEx("Caio", "Toledo", 21);
