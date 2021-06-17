window.addEventListener("load", function() {
    let name = document.getElementById('name');
    let date = document.getElementById("data");
    let password = document.getElementById("senha");
    let cpassword = document.getElementById("confirmasenha");
    let tel = document.getElementById("telefone");
    let ema = document.getElementById("email");
    let salvar = document.getElementById("salvar");

    salvar.addEventListener("click", function() {
      let input1=name.value
      let input2=date.value
      let input3=tel.value
      let input4=ema.value
      let input5=password.value
      window.localStorage.setItem('nome', JSON.stringify(input1));
      window.localStorage.setItem('data', JSON.stringify(input2));
      window.localStorage.setItem('telefone', JSON.stringify(input3));
      window.localStorage.setItem('email', JSON.stringify(input4));
      window.localStorage.setItem('senha', JSON.stringify(input5));
    });

});
