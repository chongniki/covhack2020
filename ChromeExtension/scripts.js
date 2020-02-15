
const postData = []

function detectPosts() {
    const posts = document.getElementsByTagName('p')
    for(post of posts) {
        post.style.border = 'thick solid green'
        console.log("Index of the thing is " + postData.indexOf(post.innerText))
        if(postData.indexOf(post.innerText) < 0){
            postData.push(post.innerText)
        }
    }
}

window.addEventListener('scroll', (event) => {
    detectPosts()
})

detectPosts()
chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage(message) {
    if(message == 'sendData') {
        console.log(postData)
    }
}
