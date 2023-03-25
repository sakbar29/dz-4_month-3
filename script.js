const block = document.querySelector(".block")
const btn = document.querySelector("button")

btn.addEventListener("click", () => {
    const request = new XMLHttpRequest() // sozdanie zaprosa
    request.open("GET", "data.json") // obiyuvlenie metoda zaprosa i ego puti
    request.setRequestHeader("Content-Type", "application/json") // dobavlenie "zagalovki"
    request.send() // otpravka zaprosa
    request.addEventListener("load", () => {
        const data = JSON.parse(request.response)
        data.forEach(i => {
            const box = document.createElement('div')
            box.innerHTML = `
            <div class='box'>
                <p>${i.title}</p>
                <img class="img" src="${i.img}" alt="">
                <h2>${i.price}</h2>
            </div>
            `
            block.append(box)
        })
    })
})