function conferirSenha(){
    const senha1 = document.querySelector('input[id=Pass]');
    const senha2 = document.querySelector('input[id=Pass2]');

    if (senha2.value === senha1.value) {
        senha2.setCustomValidity('');
    }else {
        senha2.setCustomValidity('As senhas não conferem');
    }
}

function senhasComferem(){
    alert("Senhas conferem!")
}