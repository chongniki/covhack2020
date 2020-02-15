

function detectPosts() {
    const posts = document.getElementsByTagName('p')
    for(post of posts) {
        post.style.border = 'thick solid green'
    }
}

window.addEventListener('scroll', (event) => {
    detectPosts()
})

detectPosts()