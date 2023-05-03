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
        <p>${this.imagemDestaque}</p>
        </br>
        `
        /* return "Nome do produto: " + this.nome + ", Descrição: " + this.descricao + this.imagemDestaque  */
    }
}

const produto = new Produto("Textos Cruéis Demais", 121206, "Textos para tocar cicatrizes", 30);
console.log(produto);

const produtoDestaque = new ProdutoDestaque("TOG", 121022, "A lâmina da assassina", 42, "https://m.media-amazon.com/images/I/81UKoa+LByL.jpg");
console.log(produtoDestaque);

var destaque = document.getElementById("produto-destaque");
destaque.insertAdjacentHTML('afterbegin', produtoDestaque.mostrarProdutoDestaque());

var prod = document.getElementById("produto");
prod.insertAdjacentHTML('afterbegin', produto.mostrarProduto());