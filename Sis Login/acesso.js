function acesso(form) {
    form.nome.value = form.nome.value.toLowerCase(); //Converter o que foi digitado para minusculas
    form.senha.value = form.senha.value.toLowerCase();

    if (form.nome.value == 'claudio' && form.senha.value == '1234' || form.nome.value == 'holencia' && form.senha.value == '5678' || form.nome.value == 'leucia' && form.senha.value == '9101112' || form.nome.value == 'roseta' && form.senha.value == '13141516') { //Cadastro dos usuarios
        location = 'acesso.html'
    } else {
        form.nome.value = ""
        form.senha.value = ""
        alert('[ERRO] Confira os dados que digitou e volte a tentar!')
    }
}