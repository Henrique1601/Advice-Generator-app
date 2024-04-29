// Função para obter um conselho aleatório da API
function getAdvice() {
  // Fazendo uma requisição GET para a API de conselhos
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json()) // Convertendo a resposta para JSON
    .then((data) => {
      // Extraindo o conselho da resposta
      const advice = data.slip.advice;

      // Exibindo o conselho na página HTML
      document.getElementById("advice").innerText = advice;
    })
    .catch((error) => {
      console.error("Erro ao obter conselho:", error);
    });

    setTimeout(function(){
    var randomNumber = Math.floor(Math.random()* 100 ) + 1;
    document.getElementById("Random_number").innerText = " Advice " + randomNumber;
    },350)
  }

// Chamando a função para obter um conselho quando a página carrega
document.addEventListener("DOMContentLoaded", getAdvice);
