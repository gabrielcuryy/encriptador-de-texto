let botaoCriptografar = document.querySelector(".botao-criptografar");
let botaoDescriptografar = document.querySelector(".botao-descriptografar");
let imgMenino = document.querySelector(".contem-imagem-menino");
let blocoDeTexto = document.querySelector(".contem-segundo-paragrafo");
let resultado = document.querySelector(".texto-resultado");

botaoCriptografar.onclick = criptografar;
botaoDescriptografar.onclick = descriptografar;

function criptografar() {
    esconder();
    let caixaDeTexto = recuperarTexto();
    resultado.textContent = criptografarTexto(caixaDeTexto);
}

function descriptografar() {
    esconder();
    let caixaDeTexto = recuperarTexto();
    resultado.textContent = descriptografarTexto(caixaDeTexto);
}

function recuperarTexto() {
    let caixaDeTexto = document.querySelector(".caixa-de-texto");
    return caixaDeTexto.value;
}

function esconder() {
    imgMenino.classList.add("ocultar");
    blocoDeTexto.classList.add("ocultar");
}

function criptografarTexto(mensagem) {
    let texto = mensagem;
    let textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "ai"
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "enter"
        }
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "imes"
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "ober"
        }
        else if (texto[i] == "u") {
            textoFinal = textoFinal + "ufat"
        }
        else {
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}

function descriptografarTexto(mensagem) {
    var texto = mensagem;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "a"
            i = i + 1;
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "e"
            i = i + 4;
        }
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "i"
            i = i + 3;
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "o"
            i = i + 3;
        }

        else if (texto[i] == "u") {
            textoFinal = textoFinal + "u"
            i = i + 3;
        }
        else {
            textoFinal = textoFinal + texto[i];
        }
    }

    return textoFinal;
}

const btnCopiar = document.querySelector(".botao-copiar");
btnCopiar.addEventListener("click", copiar = () => {
    var contem = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contem);
    console.log("Olá");
});