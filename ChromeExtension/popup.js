
const sendButton = document.getElementById('sendButton')

sendButton.addEventListener('click', () => {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, 'sendData')
    })
})
