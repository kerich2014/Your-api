const button = document.querySelector('#btn')
let select = document.querySelector('#select')
const img = document.querySelector('#img')
const dateInput = document.querySelector('input')
const date = document.querySelector('input').value
const outputBlock = document.querySelector('#apimage')
let today = new Date().toISOString().slice(0, 10)
const ipText = document.createElement('h2')
const inputBlock = document.querySelector('#inputBlock')
const inputText = document.createElement('input')
const inputButton = document.createElement('button')
const uOutputBlock = document.createElement('div')
const uOutputBlock1 = document.createElement('div')
const body = document.querySelector('body')

    button.addEventListener('click', () => {
    let date = document.querySelector('input').value
    if(select.value == 'NASA' && date <= today){
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&hd=true&api_key=iG4f8GwqFUUPUfFdFY0ZVaRX3S1UTjzUdvN4dTc7`)
    .then(res => res.json())
    .then(response => {
        console.log(response)
        img.src = response.hdurl
    })
    }
    else(
        img.src = 'https://media.istockphoto.com/id/980623012/ru/видео/try-again-глюк-текстовая-анимация-альфа-канал-старый-стиль-игровой-консоли-рендеринг-фон-петля.jpg?s=640x640&k=20&c=r1hGbpv27PgllAUSsNfgWr9D7hZrU-ix1KOuQQrDZ60='
    )
})

    select.addEventListener('change', () => {
        if(select.value == 'IP'){
            button.remove()
            img.remove()
            dateInput.remove()
            uOutputBlock.remove()
            inputText.remove()
            inputButton.remove()
            ipText.classList.add('h1')
            outputBlock.append(ipText)
            fetch('https://api.ipify.org?format=json')
            .then(res => res.json())
            .then(response => {
                console.log(response)
                ipText.innerHTML = `Your IP adress is: ${response.ip}`
            })
        }

        if(select.value == 'NASA'){
            location.reload()
        }

        if(select.value == 'Universities'){
            ipText.remove()
            button.remove()
            img.remove()
            dateInput.remove()
            inputText.classList.add('input')
            inputText.value = 'Enter country'
            inputButton.classList.add('button')
            inputButton.textContent = 'Go'
            inputBlock.append(inputText, inputButton)
            uOutputBlock.classList.add('uOutputBlock')
            uOutputBlock1.classList.add('uOutputBlock')
            let count = 0

                inputButton.addEventListener('click', () => {
                    if(count == 0){
                    uOutputBlock1.remove()
                    body.appendChild(uOutputBlock)
                    let inputTextValue = inputText.value
                    fetch(`http://universities.hipolabs.com/search?country=${inputTextValue}`)
                    .then(res => res.json())
                    .then(response => {
                        console.log(response.length)
                        console.log(response)
                        for(let i = 0; i <= response.length; i++){
                            const uBlock = document.createElement('div')
                            const uWeb = document.createElement('a')
                            const uName = document.createElement('h2')
                            uBlock.append(uName)
                            uBlock.append(uWeb)
                            uName.innerHTML = response[i].name
                            uWeb.innerHTML = response[i].web_pages[0]
                            uWeb.href = response[i].web_pages[0]
                            uOutputBlock.appendChild(uBlock)
                            uBlock.classList.add('uBlock')
                        }
                        document.appendChild(uOutputBlock)
                    })
                    count++
                    console.log(count)
                }

                else{
                    uOutputBlock.remove()
                    body.appendChild(uOutputBlock1)
                    let inputTextValue = inputText.value
                    fetch(`http://universities.hipolabs.com/search?country=${inputTextValue}`)
                    .then(res => res.json())
                    .then(response => {
                        console.log(response.length)
                        console.log(response)
                        for(let i = 0; i <= response.length; i++){
                            const uBlock = document.createElement('div')
                            const uWeb = document.createElement('a')
                            const uName = document.createElement('h2')
                            uBlock.append(uName)
                            uBlock.append(uWeb)
                            uName.innerHTML = response[i].name
                            uWeb.innerHTML = response[i].web_pages[0]
                            uWeb.href = response[i].web_pages[0]
                            uOutputBlock1.appendChild(uBlock)
                            uBlock.classList.add('uBlock')
                        }
                        document.appendChild(uOutputBlock1)
                    })
                    count = 0
                    console.log(count)
            }
                })
        }
    })

    //http://universities.hipolabs.com/search?country=Kazakhstan





