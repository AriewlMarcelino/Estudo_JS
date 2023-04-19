function rodaPalavra() {
    let selecionaElemento = document.querySelector('.demo')
    let textoNode = selecionaElemento.childNodes[0];
    let mostraNode = textoNode.data;
    setInterval(function () {
        mostraNode = mostraNode[mostraNode.length - 1] + mostraNode.substring(0, mostraNode.length - 1);
        textoNode.data = mostraNode;

    }, 200)
}

rodaPalavra()