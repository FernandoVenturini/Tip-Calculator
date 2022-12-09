// 1- Funcao responsavel por calcular a gorjeta:
function calculateTip(event) {
    // 4- Preveni o recarregamento da pagina:
    event.preventDefault();
    // 5- Pegando os valores digitados nos input:
    let bill = document.getElementById('bill').value;
    let serviceQual = document.getElementById('serviceQual').value;
    let people = document.getElementById('people').value;

    // 6- Verificacao com if/else para ve se a conta foi preenchida ou esta vazia:
    if (bill == '' || serviceQual == 0) {
        alert('Por favor, preencha os valores!');
        return;
    }

    // 7- Verificando o numero de pessoas:
    if (people == '' || people <= 1) {
        people = 1;
        // 8- Desabilitando o paragrafo com id 'each':
        document.getElementById('each').style.display = 'none';
    } else {
        // 9- Habilitando o paragrafo com id 'each' caso seja maior que 1 pessoa:
        document.getElementById('each').style.display = 'block';
    }

    // 10- Calculando o valor total da gorjeta:
    let totalGorjeta = (bill * serviceQual) / people;
    totalGorjeta = totalGorjeta.toFixed(2);
    // 11- Exibindo o valor na tela que esta no span:
    document.getElementById('tip').innerHTML = totalGorjeta;
    // 12- Exibindo a div totalTip com os valores na tela:
    document.getElementById('totalTip').style.display = 'block';
}

// 2- Escondendo a div totalTips:
document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

// 3- Submetendo o button ao evento de click:
document.getElementById('tipsForm').addEventListener('submit', calculateTip);