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
        <h4>${this.nome}</h4>
        <p>${this.datadeCadastro}</p>
        <p>${this.descricao}</p>
        <p>${this.preco}</p>
        <img src="${this.imagemDestaque}" width="200"></img>
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

const produtoDestaque = new ProdutoDestaque("TOG", 121022, "A lâmina da assassina", 42, "https://m.media-amazon.com/images/I/81UKoa+LByL.jpg");
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