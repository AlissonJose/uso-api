async function getAdvice() {
    const resposta = await fetch("https://api.adviceslip.com/advice");
    //criou uma variável em que ela está aguardando que vem da API
    //console.log(resposta);
    //para ver toda a estrutura dos dados
    const data = await resposta.json();
    //transformou em JSON a resposta que veio do FETCH da API
    //console.log(data);


    document.querySelector("#advice").innerHTML = data.slip.advice;
    //data.slip.advice é o caminho para a acessar o valor do nosso objeto
}


//botão funcionando

let botaoAdvice = document.querySelector("#get-advice");

botaoAdvice.addEventListener("click", function(){
    getAdvice();
});
