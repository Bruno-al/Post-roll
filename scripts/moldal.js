function criarMoldal(user,title,text){
    
    const tag_div_moldal          = document.createElement('div')
    const tag_div_moldal_cont          = document.createElement('div')

    const tag_header_perfil = document.createElement('header')
    const tag_img_perfil    = document.createElement('img')
    const tag_div_perfil    = document.createElement('div')
    const tag_h4_perfil     = document.createElement('h4')
    const tag_span_perfil   = document.createElement('span')
    
    const tag_div_conteudo        = document.createElement('div')
    const tag_h1         = document.createElement('h1')
    const tag_p         = document.createElement('p')
    const tag_span_close         = document.createElement('span')

    tag_div_moldal.classList.add("moldal")
    tag_div_moldal_cont.classList.add("moldal_conteiner")
    tag_header_perfil.classList.add("user")
    tag_div_conteudo.classList.add("conteudo_post_moldal")
    tag_span_close.classList.add("close")
    tag_div_moldal.classList.add("aparecer")

    tag_img_perfil.src = user.img
    tag_h4_perfil.innerText = user.user
    tag_span_perfil.innerText = user.stack
    tag_span_close.innerText = "X"

    tag_h1.innerText = title
    tag_p.innerText = text

    tag_div_perfil.append(tag_h4_perfil,tag_span_perfil)
    tag_header_perfil.append(tag_img_perfil,tag_div_perfil)
    tag_div_conteudo.append(tag_h1,tag_p,tag_span_close)
    tag_div_moldal_cont.append(tag_header_perfil,tag_div_conteudo)
    tag_div_moldal.appendChild(tag_div_moldal_cont)
    

    tag_span_close.addEventListener("click",()=>{
        tag_div_moldal.remove()
    })

    return tag_div_moldal
}




function exibirMoldal(user,post){
    
    const tag_main = document.querySelector(".conteiner_main")
    //const botao = document.querySelector(".button_post")
    let titulo = post.title
    let texto = post.text
    let moldal = criarMoldal(user,titulo,texto)
    tag_main.append(moldal)
    return tag_main
}