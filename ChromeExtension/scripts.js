
const postData = []

function detectPosts() {
    const posts = document.getElementsByTagName('p')
    for(post of posts) {
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

function processInformation(data) {
    const posts = document.getElementsByTagName('p')
    for(p of posts) {
        for(d of data) {
            if(p.innerText == Object.keys(d)[0]) {
                if (Object.values(d)[0] == 1) {
                    // code with hate or profanity
                    p.style.border = 'thick solid red'
                }else {
                    p.style.border = 'thick solid black'
                }
            }
        }
    }
}

function gotMessage(message) {
    if(message == 'sendData') {
        const url = 'http://localhost:8080/send_posts'
        const data = JSON.stringify({'posts': postData})
        const request_config = {method: 'POST', body: data, headers: {'Accept': 'application/json', 'content-type': 'application/json'}}
        fetch(url, request_config)
        .then(
            response => response.json()
        ).then((response) => {
            processInformation(response.data)
        })
        .catch((error) => {
            console.log(error.message)
        })
    }
}
