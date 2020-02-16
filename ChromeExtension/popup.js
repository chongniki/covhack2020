
const sendButton = document.getElementById('sendButton')
const phoneNumberInput = document.getElementById('phoneNumber')
const storePhoneNumberButton = document.getElementById('storeButton')

sendButton.addEventListener('click', () => {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, 'sendData')
    })
})

storePhoneNumberButton.addEventListener('click', () => {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, phoneNumberInput.innerText)
    })
})



