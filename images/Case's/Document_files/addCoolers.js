'use strict'

let coolers = [
    {
        name: "Кулер для процессора DEEPCOOL Theta 21 PWM [LGA1700] [DP-ICAP-T21P-17] [основание - алюминий, 2400 об/мин, 30.2 дБ, 4 pin, 95 Вт]",
        image: "https://c.dns-shop.ru/thumb/st1/fit/200/200/5f0c4fed6ea8a60023c58d6256e430eb/e88952d3fe8fea96ffce407f114b9661c5a36dc7250dc896fc111d08d0103a62.jpg.webp",
        price: 399,
    },
    {
        name: "Кулер для процессора DEEPCOOL Theta 15 PWM [DP-ICAS-T15P] [основание - алюминий, 2800 об/мин, 36 дБ, 4 pin, 65 Вт]",
        image: "https://c.dns-shop.ru/thumb/st1/fit/200/200/3774e513462439dac2f57a4ca1698cc7/bb954382848f757049ce0c33f2e0b9ef2375742efa4094b6fbc768212a72951f.jpg.webp",
        price: 699,
    },
    {
        name: "Кулер для процессора ID-COOLING SE-214-XT [LGA1700] [основание - алюминий\медь, 1500 об/мин, 26.6 дБ, 4 pin, подсветка, 180 Вт]",
        image: "https://c.dns-shop.ru/thumb/st1/fit/200/200/e7dde96de185d8821fc2009bac2981a0/51804a17ddd9514d71203bd6347d4fea6fd91b3b5efad50800d5fb86d8166788.jpg.webp",
        price: 1699,
    },
    {
        name: "Кулер для процессора ID-COOLING SE-224-XTS ARGB [основание - алюминий\медь, 1500 об/мин, 28.9 дБ, 4 pin, 220 Вт]",
        image: "https://c.dns-shop.ru/thumb/st1/fit/200/200/922627b0632c672bd2612faa993474ae/5479adacd3f7bf6a5fef660185f877575547b1b698b7a38fcf010404a1e6e59c.jpg.webp",
        price: 2599,
    },
    {
        name: "Кулер для процессора Thermalright Silver Arrow ITX-R Rev.A [основание - медь, 1500 об/мин, 23 дБ, 4 pin, 240 Вт]",
        image: "https://c.dns-shop.ru/thumb/st1/fit/200/200/db36dbbe5cde27904ddda5495282a04f/fe5087bc904cfde320c5f59ca86a5e58a20df292a5d82c4b048080f22d7cff9a.jpg.webp",
        price: 17699,
    },
]

let coolerName =  document.getElementById('cooler-name')
let coolerList = document.querySelector('.product-list__cooler')
let coolerAddBtn = coolerList.getElementsByClassName('list-item__add')
let openCoolerList = document.getElementById('cooler-list__open')

let coolerIsAdd = false
let coolerListIsOpen = false
let coolerPriceStory = []

coolers.forEach((item) => {
    coolerList.innerHTML += `
    <div class="product-item">
        <img class="list-item__img" src="${item.image}">
        <div class="list-item__name">${item.name}</div>
        <div class = "item-add__form">
            <div class="list-item__price">${item.price}₽</div>
            <button class="list-item__add">В комплект</button>
        </div> 
    `
})

openCoolerList.addEventListener('click', (event) => {
    event.preventDefault()

    if (coolerIsAdd == true && coolerListIsOpen == false) {
        openCoolerList.innerHTML = "+ Добавить"
        coolerList.style.display = "block"
        coolerName.innerHTML = "Охлаждение:"
        totalPricePC -= coolerPriceStory[coolerPriceStory.length-1]
        totalPriceForm.innerHTML = `Цена: ${totalPricePC}₽`
        coolerIsAdd = false
        coolerListIsOpen = false
    } else if (coolerListIsOpen == false) {
        coolerList.style.display = "none"
        coolerListIsOpen = true
    } else if (coolerListIsOpen == true) {
        coolerList.style.display = "block"
        coolerListIsOpen = false
    }   
})

for (let i = 0; i < coolers.length; i++) {
    coolerAddBtn[i].addEventListener('click', (event) => {
        event.preventDefault()
        coolerName.innerHTML = `Охлаждение: ${coolers[i].name}`

        openCoolerList.innerHTML = "- Убрать"
        coolerList.style.display = "none"

        coolerPriceStory.push(coolers[i].price)
        totalPricePC += coolers[i].price
        totalPriceForm.innerHTML = `Цена: ${totalPricePC}₽`
        totalPriceForm.style.display = "block"
        
        coolerIsAdd = true
        coolerListIsOpen = false
    })
}