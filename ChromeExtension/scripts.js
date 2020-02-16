
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
        const url = 'http://localhost:8080/send_posts'
        const data = JSON.stringify({'posts': postData})
        const request_config = {method: 'POST', body: data, headers: {'Accept': 'Application/json', 'Content-Type': 'application/json'}}
        fetch(url, request_config).then((data) => {
            console.log(data)
        }).catch((error) => {
            console.log(error.message)
        })
    } 
}
