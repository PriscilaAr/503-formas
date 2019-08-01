let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let senha = document.querySelector("#senha");
let confirmacao = document.querySelector("#confirmacao");
let sexo = document.querySelector("select");
let texto = document.querySelector("h1");
let botao = document.querySelector("button");

botao.onclick = function(){
    if(senha.value == confirmacao.value){
        localStorage.setItem("nome", nome.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("senha", senha.value);
        localStorage.setItem("sexo", sexo.value);
    }else{
        console.log("Senha incorreta");
    }
}