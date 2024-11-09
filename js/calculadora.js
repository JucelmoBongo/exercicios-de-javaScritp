
function inserir(valor) {
    var dados = document.getElementById('resultado').innerHTML;
    var ultimoCaractere = dados[dados.length - 1]; // Captura o último caractere inserido

    // Verifica se o último caractere é um operador e impede a inserção de operadores duplicados
    if (['+', '-', '*', '/'].includes(ultimoCaractere) && ['+', '-', '*', '/'].includes(valor)) {
        return; // Se o último caractere for um operador e o novo valor também, não adiciona
    }

    document.getElementById('resultado').innerHTML = dados + valor;
}

function limpar() {
    document.getElementById('resultado').innerHTML = "";
}

function apagar() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular() {
    let result = document.getElementById('resultado').innerHTML;
    if (result) {
        try {
            document.getElementById('resultado').innerHTML = eval(result); //  eval para calcular a expressão
        } catch (e) {
            document.getElementById('resultado').innerHTML = "Erro 404"; // Em caso de erro na expressão
            setTimeout(function () {
                document.getElementById('resultado').innerHTML = '';
            }, 2000);
        }
    } else {
        document.getElementById('resultado').innerHTML = "Error value not found";
        setTimeout(function () {
            document.getElementById('resultado').innerHTML = '';
        }, 2000);
    }
}

