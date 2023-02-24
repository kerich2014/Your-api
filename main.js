const button = document.querySelector('#btn')
button.addEventListener('click', () => {
    const img = document.querySelector('#img')
let date = document.querySelector('input').value

fetch(`https://api.nasa.gov/planetary/apod?date=${date}&hd=true&api_key=iG4f8GwqFUUPUfFdFY0ZVaRX3S1UTjzUdvN4dTc7`)
.then(res => res.json())
.then(response => {
    console.log(response)
    img.src = response.hdurl
})
})

