function seguir(){
    let button_follow = document.querySelectorAll(".botao_seguir")
    button_follow.forEach((button)=> {
        button.addEventListener('click', function(event) {
            let button_clicked = event.target
                button_clicked.classList.toggle('button_sugestao_on');
                if (button_clicked.classList.contains('button_sugestao_on')) {
                    button_clicked.textContent = "Seguindo"
                    button_clicked.classList = "button_sugestao_on"
                } else {
                    button_clicked.textContent = "Seguir"
                    button_clicked.classList = "button_sugestao_off"
                }
              
        });
      });

}
seguir()

function postar(){
    let botao_postar = document.querySelector(".button_comentario_on")
    botao_postar.addEventListener("click",() =>{
        botao_postar.classList.toggle("button_comentario_on")
    } )
}










