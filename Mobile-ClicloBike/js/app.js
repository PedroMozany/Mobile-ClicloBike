
// armazenamento é o do evento de formulário do login.
window.onload = () => {
    // carrega o ultimo identificador de usuário usado
    nome.value = localStorage.getItem('username');

    // loga o usuário e registra o seu identificador
    login.onsubmit = (evento) => {
        localStorage.setItem('username', nome.value);
        alert(`Usuário ${nome.value} logado.`);
        evento.preventDefault();
    };

}

// validação de senha 
let password = document.getElementById("password");
let confirm_password = document.getElementById("confirm_password");

function validatePassword() {
    if (password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Senhas diferentes!");
    } else {
        confirm_password.setCustomValidity('');
    }
}
password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;