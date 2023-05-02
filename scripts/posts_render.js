function render_Posts(post_content,user){
    

    let post         = document.createElement("div")
    let header       = document.createElement("header")
    let img_perfil   = document.createElement("img")
    let div_perfil   = document.createElement("div")
    let perfil_name  = document.createElement("h4")
    let perfil_stack = document.createElement("span")

    let main       = document.createElement("main")
    let post_title = document.createElement("h4")
    let post_text  = document.createElement("p")

    let footer      = document.createElement("footer")
    let button      = document.createElement("button")
    let div_like    = document.createElement("div")
    let like        = document.createElement("span")
    let like_number = document.createElement("small")

    post.classList.add("post")
    header.classList.add("user")
    button.classList.add("button_post")
    like.classList.add("coracao")
    

    img_perfil.src         = user[post_content.user -1].img
    perfil_name.innerText  = user[post_content.user -1].user
    perfil_stack.innerText = user[post_content.user -1].stack
    
    post_title.innerText = post_content.title
    post_text.innerText  = post_content.text

    button.innerText = "Abrir Post"
    button.addEventListener("click",() =>{
        const tag_main = document.querySelector(".conteiner_main")
        let titulo = post_content.title
        let texto  = post_content.text
        let moldal = criarMoldal(user[post_content.user -1],titulo,texto)
        tag_main.append(moldal)
        
    })
    like_number.innerText = post_content.like
    like.innerText        = "❤"
    like.addEventListener("click", (event) =>{
        event.preventDefault()
        
        if(like.classList.contains("heart_red")){
            like.classList.remove("heart_red")
            like_number.innerText = post_content.like 
        }else{
            like.classList.add("heart_red")
            like_number.innerText = post_content.like +1
        }
        // like.classList.toggle("heart_red")

    })
    
    

    div_perfil.append(perfil_name,perfil_stack)
    header.append(img_perfil,div_perfil)
    main.append(post_title,post_text)
    div_like.append(like,like_number)
    footer.append(button,div_like)

    post.append(header,main,footer)
    
    return post
}


function print_posts(posts_list,users){
    let posts_area = document.querySelector(".post_area")
    posts_area.innerHTML = ""
    console.log(posts)
    posts_list.forEach(function(post_item) {
        let post = render_Posts(post_item, users);
        posts_area.appendChild(post);
      });

}
print_posts(posts,users)