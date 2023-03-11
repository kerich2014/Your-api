const button = document.querySelector('#btn')
let select = document.querySelector('#select')
const img = document.querySelector('#img')
const dateInput = document.querySelector('input')
const date = document.querySelector('input').value
const outputBlock = document.querySelector('#apimage')

    button.addEventListener('click', () => {
    let date = document.querySelector('input').value
    if(select.value == 'NASA'){
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&hd=true&api_key=iG4f8GwqFUUPUfFdFY0ZVaRX3S1UTjzUdvN4dTc7`)
    .then(res => res.json())
    .then(response => {
        console.log(response)
        img.src = response.hdurl
    })
    }

    if(select.value == 'IP'){
        img.remove()
        dateInput.remove()
        const ipText = document.createElement('h1')
        ipText.classList.add('h1')
        outputBlock.append(ipText)
        fetch('https://api.ipify.org?format=json')
        .then(res => res.json())
        .then(response => {
            console.log(response)
            ipText.innerHTML = `Your IP is: ${response.ip}`
        })
    }
})

