function add_post(){
    let post_title = document.querySelector("#add_post_title")
    let post_text = document.querySelector("#add_post_text")
    let id = pos
    posts.push({
        id_post: posts.length + 1 ,
        user: 1,
        title:post_title.value,
        text: post_text.value,
        like: 0
    })
    print_posts(posts,users)
}