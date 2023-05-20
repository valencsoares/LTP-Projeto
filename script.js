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
        <h4 id="nome">${this.nome}</h4>
        <p>${this.descricao}</p>
        </br>
        <p style="font-weight: bold">R$${this.preco},00</p>
        <p id="p1">${this.datadeCadastro}</p>
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
        <img src="${this.imagemDestaque}" width="593"></img>
        <h4 id="nomeDest">${this.nome}</h4>
        <p id="p2">${this.descricao}</br></br> O livro se desenvolve através de cinco histórias, que fluem diretamente uma para a outra. </br>Livro extra de "Trono de Vidro" de Sarah J. Maas.</p>
        </br>
        <p id="p3">R$${this.preco},00</p>
        <p id="p4">${this.datadeCadastro}</p>
        </br>
        `
    }
}

const produto = new Produto("Trono de Vidro", 250806, "Rainha das Sombras </br> Vol.4 da saga Trono de Vidro", 70);
console.log(produto);

const produto2 = new Produto("Trono de Vidro", 130406, "Herdeira do Fogo </br> Vol.3 da saga Trono de Vidro", 30);
console.log(produto2);

const produto3 = new Produto("Trono de Vidro", 121206, "Reino de Cinzas </br> Vol.6 da saga Trono de Vidro", 90);
console.log(produto3);

const produtoDestaque = new ProdutoDestaque("Trono de Vidro", 121022, "A Lâmina da Assassina", 42, "https://3.bp.blogspot.com/-VrTZkrdC3BM/XJfj3HdPhUI/AAAAAAAAZc8/ZCcv4g_wRGES2veo4muvEU_0qLitixB3gCLcBGAs/s1600/resenha%2Ba%2Blamina%2Bassassina%2Bsarah%2Bj%2Bmaas%2Beditora%2Bgalera%2Brecord%2Bserie%2Btrono%2Bde%2Bvidro%2Bthe%2Bassassins%2Bblade%2Bthrone%2Bof%2Bglass%2Bbloomsbury%2Bpublisher%2Bhouse%2Bbook%2Breview%2Bresenha%2Bliteraria%2Bblog%2Btudo%2Bque%2Bmotiva%2B%25282%2529.jpg");
console.log(produtoDestaque);

var destaque = document.getElementById("produto-destaque");
destaque.insertAdjacentHTML('afterbegin', produtoDestaque.mostrarProdutoDestaque());

var prod = document.getElementById("produto");
prod.insertAdjacentHTML('afterbegin', produto.mostrarProduto());
var prod = document.getElementById("produto2");
prod.insertAdjacentHTML('afterbegin', produto2.mostrarProduto());
var prod = document.getElementById("produto3");
prod.insertAdjacentHTML('afterbegin', produto3.mostrarProduto());