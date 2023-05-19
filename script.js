// divListaProduto.insertAdjacentHTML('afterbegin', '');
class Produto {
    constructor(nome, datadeCadastro, descricao, preco){
        this.nome = nome
        this.datadeCadastro = datadeCadastro
        this.descricao = descricao
        this.preco = preco
    }
    mostrarProduto(){
        return `
        <h4>${this.nome}</h4>
        <p>${this.datadeCadastro}</p>
        <p>${this.descricao}</p>
        <p>${this.preco}</p>
        </br>
        `
    }
}

class ProdutoDestaque extends Produto {
    constructor(nome, datadeCadastro, descricao, preco, imagemDestaque){
        super(nome, datadeCadastro, descricao, preco)
        this.imagemDestaque = imagemDestaque
    }
    mostrarProdutoDestaque(){
        return `
        <img src="${this.imagemDestaque}" width="630"></img>
        <h4 id="h">${this.nome}</h4>
        <p id="p1">${this.datadeCadastro}</p>
        <p id="p2">${this.descricao}</p>
        <p id="p3">${this.preco}</p>
        </br>
        `
        /* return "Nome do produto: " + this.nome + ", Descrição: " + this.descricao + this.imagemDestaque  */
    }
}

/* class Listaprodutos extends ProdutoDestaque {
    constructor(nome, datadeCadastro, descricao, preco, imagemDestaque){
        super(nome, datadeCadastro, descricao, preco, imagemDestaque)
    }
    mostrarListaDeProdutos(){
        return `
        <p>${this.Produto()}</p>
        <p>${this.ProdutoDestaque()}</p>
        </br>
        `
    }
} */

const produto = new Produto("Textos Cruéis Demais", 121206, "Textos para tocar cicatrizes", 30);
console.log(produto);

const produto2 = new Produto("Textos Cruéis Demais", 121206, "Textos para tocar cicatrizes", 30);
console.log(produto);

const produto3 = new Produto("Textos Cruéis Demais", 121206, "Textos para tocar cicatrizes", 30);
console.log(produto);

const produtoDestaque = new ProdutoDestaque("TOG", 121022, "A lâmina da assassina", 42, "https://3.bp.blogspot.com/-VrTZkrdC3BM/XJfj3HdPhUI/AAAAAAAAZc8/ZCcv4g_wRGES2veo4muvEU_0qLitixB3gCLcBGAs/s1600/resenha%2Ba%2Blamina%2Bassassina%2Bsarah%2Bj%2Bmaas%2Beditora%2Bgalera%2Brecord%2Bserie%2Btrono%2Bde%2Bvidro%2Bthe%2Bassassins%2Bblade%2Bthrone%2Bof%2Bglass%2Bbloomsbury%2Bpublisher%2Bhouse%2Bbook%2Breview%2Bresenha%2Bliteraria%2Bblog%2Btudo%2Bque%2Bmotiva%2B%25282%2529.jpg");
console.log(produtoDestaque);

/* const listaProdutos = new Listaprodutos("TOG", 121022, "A lâmina da assassina", 42, "https://m.media-amazon.com/images/I/81UKoa+LByL.jpg");
console.log(listaProdutos); */

var destaque = document.getElementById("produto-destaque");
destaque.insertAdjacentHTML('afterbegin', produtoDestaque.mostrarProdutoDestaque());

var prod = document.getElementById("produto");
prod.insertAdjacentHTML('afterbegin', produto.mostrarProduto());
prod.insertAdjacentHTML('afterbegin', produto2.mostrarProduto());
prod.insertAdjacentHTML('afterbegin', produto3.mostrarProduto());

/* var lista = document.getElementById("lista-produtos");
lista.insertAdjacentHTML('afterbegin', produto.mostrarListaDeProdutos()); */