// let container = document.getElementById("container")
// let img = document.createElement("img")
// fetch("https://dog.ceo/api/breeds/image/random")
//     .then((res) => res.json())
//     .then(data => {
//         console.log(data)
//         img.src = data.message
//         container.append(img)
//     })
// https://apis.scrimba.com/bored/api/activity


let text = document.getElementById("text")
let btn = document.getElementById("btn")
let title = document.getElementById("title")

btn.addEventListener("click", function () {
    fetch("https://www.boredapi.com/api/activity")
    .then((res) => res.json())
    .then(data => {
        text.textContent = data.activity 
        title.textContent = "😆 HappyBot 😆"
        document.body.classList.add("bgc")
    })

   
})


    

