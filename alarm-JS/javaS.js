var minutos = document.getElementById('minutos')
var segundos = document.getElementById('segundos')

var comecar = document.getElementById('comecar')

var display = document.getElementById('display')

var cronometroSeg;
var minutoAtual;
var segundoAtual;
var interval;

for (var i = 0; i <= 180; i++) {
    minutos.innerHTML += '<option value="' + i + ' ">' + i + '</option>';
}

for (var i = 0; i <= 60; i++) {
    segundos.innerHTML += '<option value="' + i + '">' + i + '</option>';
}

comecar.addEventListener('click', function () {
    minutoAtual = minutos.value;
    segundoAtual = segundos.value;

    display.childNodes[1].innerHTML = minutoAtual + ":" + segundoAtual;

    interval = setInterval(function () {

        segundoAtual--;
        if (segundoAtual <= 0) {
            if (minutoAtual > 0) {
                minutoAtual--;
                segundoAtual = 59;
            } else {
                document.getElementById("sound").play();
                alert('FELIZ ANO NOVO E PROSPERO 2021')
                clearInterval(interval);
            }
        }
        display.childNodes[1].innerHTML = minutoAtual + ":" + segundoAtual;
    }, 1000);

})