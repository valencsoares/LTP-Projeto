// divListaProduto.insertAdjacentHTML('afterbegin', '');
class Produto {
    constructor(nome, datadeCadastro, descricao, preco){
        this.nome = nome
        this.datadeCadastro = datadeCadastro
        this.descricao = descricao
        this.preco = preco
    }
    mostrarProduto(){

    }
}

class ProdutoDestaque extends Produto {
    constructor(nome, datadeCadastro, descricao, preco, imagemDestaque){
        super(nome, datadeCadastro, descricao, preco)
        this.imagemDestaque = imagemDestaque
    }
    mostrarProdutoDestaque(){
        "Nome do produto: " + this.nome + ", Descrição: " + this.descricao + this.imagemDestaque
    }
}

const produto = new Produto();
console.log(produto);

const produtoDestaque = new produtoDestaque();
console.log(produtoDestaque);