// setando valor inicial do contador
let count = 0;

// selecionar valor dos botões
const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")

// estrutura de repetição para percorrer a variavel btns e saber quais são as classes do CSS
btns.forEach(function(btn){
    // Evento de click dos botões para definir qual a classe do botão a ser somada, subtraida ou resetada no valor do count
    btn.addEventListener("click",function(e){
        const styles = e.currentTarget.classList
        // Condicionais para verificação de qual a classe CSS do botão clicado
        if (styles.contains('decrease')) {
            count--
        }else if(styles.contains('increase')){
            count++
        }
        else if(styles.contains('reset')){
            count = 0
        }
        
        // Condicionais para verificação se o texto ficará em vermelho em caso de negativo, verde em caso positivo ou preto caso seja nulo
        if(count < 0){
            value.style.color = 'red'
        }else if(count > 0){
            value.style.color = 'green'
        }else{
            value.style.color = 'black'
        }
        // atribuindo valor atual do contador ao a propriedade de texto do seletor #value html
        value.innerText = count
    })
})