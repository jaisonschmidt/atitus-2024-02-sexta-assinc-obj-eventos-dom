// step 01 - criar uma referência (capturar) o formulario
// const frmCep = document.getElementById("frmCep");
const frmCep = document.querySelector("#frmCep");

// criar referencia para o elemento txtCep
const txtCep = document.getElementById("txtCep");

// step 02 - escutar o evento de submit no form de CEP
frmCep.addEventListener("submit", function(evento){
    evento.preventDefault(); // previne que a pagina seja recarregada

    // como eu pego o valor digitado no campo de input?
    const cep = txtCep.value;

    // step 01 - chamar o servidor da ViaCep passando o cep digitado
    const retorno = fetch("//viacep.com.br/ws/01001000/json/");

    retorno
        .then(function(response){
            // precisamos converter o response em JSON
            return response.json(); // isso tb é uma promise
        })
        .then(function(dados){
            console.log(dados.logradouro);
        });

    console.log("Olá! Estou na linha 22");

    // step 02 - receber o retorno do servidor
    // step 03 - exibir os dados na tela

}); // callback