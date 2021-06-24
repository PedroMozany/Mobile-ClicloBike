// armazenando dados
localStorage.setItem('username', nome.value);
localStorage.setItem('password',senha.value);

window.onload = () => {
    // loga o usuário e registra o seu identificador
    login.onsubmit = (evento) => {
       nome.value = localStorage.getItem('username');
        alert(`Usuário ${nome.value} logado.`);
        evento.preventDefault();
    };
}

// validação de senha 
let password = document.getElementById("senha");
let confirm_password = document.getElementById("confirmasenha");

function validatePassword() {
    if (password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Senhas diferentes!");
    } else {
        confirm_password.setCustomValidity('');
    }
}
password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;


//função de alerta de conclusão de cadastro

function conclusão() {
    alert("Cadastro concluido!!")
}

