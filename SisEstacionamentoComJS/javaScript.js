window.document.getElementById('formulario').addEventListener('submit', cadastrarVeiculo)

function cadastrarVeiculo(e) {
    var modelo = window.document.getElementById('modelo').value;
    var placa = document.querySelector('input#placa').value;
    var time = new Date();

    if (!modelo && !placa) {
        alert('Por favor, preencha os campos em branco!');
        return false;
    }

    carro = {
        modelo: modelo,
        placa: placa,
        hora: time.getHours(),
        minutos: time.getMinutes()
    }

    if (localStorage.getItem('patio2') === null) { //Capturar os valores do formulario
        var carros = [];
        carros.push(carro); //Para receber os valores do objecto CARRO
        localStorage.setItem('patio2', JSON.stringify(carros)); //Para armazenar no navegador / JSON.stringify - para retornar como string
    } else {
        var carros = JSON.parse(localStorage.getItem('patio2')); //JSON.parse para retornar como objecto
        carros.push(carro);
        localStorage.setItem('patio2', JSON.stringify(carros));
    }

    document.getElementById('formulario').reset();

    mostraPatio();

    e.preventDefault();
}

function apagarVeiculo(placa) {
    var carros = JSON.parse(localStorage.getItem('patio2'));

    for (var i = 0; i < carros.length; i++) {
        if (carros[i].placa == placa) {
            carros.splice(i, 1); //Para remover em arrays
        }
        localStorage.setItem('patio2', JSON.stringify(carros));
    }
    mostraPatio();
}

function mostraPatio() { //Para mostrar os cadastro dos veiculos na tabela
    var carros = JSON.parse(localStorage.getItem('patio2')); //Pegar o valor do localStorage
    var carrosResultado = window.document.querySelector('tbody#resultados') //Pegar o ID-resultado no HTML

    carrosResultado.innerHTML = ''; //Para carregar as inforacoes a pagina comeca vazio

    for (var i = 0; i < carros.length; i++) { //Contador para adicionar informacoes ao patio
        var modelo = carros[i].modelo;
        var placa = carros[i].placa;
        var hora = carros[i].hora;
        var minutos = carros[i].minutos;

        carrosResultado.innerHTML += '<tr><td>' + modelo + //Enviar as informacoes para a tabela / Para carregar eh preciso chamar a funcao onload - que ao carregar a pagina, mostra toda informacao inclusive do mostra patio
            '</td><td>' + placa +
            '</td><td>' + hora + ':' + minutos +
            '</td><td><button class="btn2" title="Se clicar ira apagar o veiculo." onclick="apagarVeiculo(\'' + placa + '\')">Excluir</button></td>' +  //O quebra barra eh para poder interpretar as aspas e colocar o parametro como string
            '</tr>';
    }
}