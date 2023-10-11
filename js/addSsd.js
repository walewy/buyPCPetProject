'use strict'

let ssd = [
    {
        name: "256 ГБ 2.5 SATA накопитель AGI AI138 [AGI256G06AI138] [SATA, чтение - 530 Мбайт/сек, запись - 510 Мбайт/сек, 3D NAND 3 бит TLC]",
        image: "https://c.dns-shop.ru/thumb/st1/fit/200/200/5e3e5129f7183b88576ddcb8b53d34a9/316669ec95b261b46250015ba20ccc1387c87b3cd13cb504633465246e9f164c.jpg.webp",
        price: 1299,
    },
    {
        name: "512 ГБ 2.5 SATA накопитель AGI AI178 [AGI512G17AI178] [SATA, чтение - 530 Мбайт/сек, запись - 480 Мбайт/сек, 3D NAND 3 бит TLC]",
        image: "https://c.dns-shop.ru/thumb/st1/fit/200/200/330a1adcaa30f75ed2aadce0ade032d6/a9e528e634bf25a0dc9ead60cb7c44a02257f6793d47b7494796cb5ee86b9550.jpg.webp",
        price: 2699,
    },
    {
        name: "1000 ГБ 2.5 SATA накопитель QUMO Novation [Q3DT-1TSKF] [SATA, чтение - 560 Мбайт/сек, запись - 520 Мбайт/сек, 3D NAND 3 бит TLC]",
        image: "https://c.dns-shop.ru/thumb/st4/fit/200/200/402f212adca57197cf75328bf8aa3e6f/3831e3c2e37d006ffafdc62efa4f2cec814696c1ede81e52eb623555c239e164.jpg.webp",
        price: 6099,
    },
    {
        name: "2000 ГБ 2.5 SATA накопитель Samsung 870 QVO [MZ-77Q2T0BW] [SATA, чтение - 560 Мбайт/сек, запись - 530 Мбайт/сек, 3D NAND 4 бит MLC (QLC)]",
        image: "https://c.dns-shop.ru/thumb/st1/fit/200/200/baa57c07aa2e39b5bf84d2d41b6fca74/749347532c2c82773bc592ea7d9145bc17eccb7df24f485817aa0b8e8087ac28.jpg.webp",
        price: 12399,
    },
    {
        name: "8000 ГБ 2.5 SATA накопитель Samsung 870 QVO [MZ-77Q8T0BW] [SATA, чтение - 560 Мбайт/сек, запись - 530 Мбайт/сек, 3D NAND 4 бит MLC (QLC)]",
        image: "https://c.dns-shop.ru/thumb/st4/fit/200/200/1bd903dcc2cabf6934c004fb22e8e760/d490ac40d2f57dec6c5daeb8987b8f11b98a90c157c35b2c366d2bc616c4805a.jpg.webp",
        price: 46499,
    }
]

let ssdName = document.getElementById('ssd-name')
let ssdList = document.querySelector('.product-list__ssd')
let ssdAddBtn = ssdList.getElementsByClassName('list-item__add')
let openSsdList = document.getElementById('ssd-list__open')

ssdList.style.display = "none"

let ssdIsAdd = false
let ssdListIsOpen = true
let ssdPriceStory = []

ssd.forEach((item) => {
    ssdList.innerHTML += `
    <div class="product-item">
        <img class="list-item__img" src="${item.image}">
        <div class="list-item__name">${item.name}</div>
        <div class = "item-add__form">
            <div class="list-item__price">${item.price}₽</div>
            <button class="list-item__add">В комплект</button>
        </div> 
    `
})

openSsdList.addEventListener('click', (event) => {
    event.preventDefault()

    if (ssdIsAdd == true && ssdListIsOpen == false) {
        openSsdList.innerHTML = "+ Добавить"
        ssdList.style.display = "block"
        ssdName.innerHTML = "Оперативаня память:"
        totalPricePC -= ssdPriceStory[ssdPriceStory.length-1]
        totalPriceForm.innerHTML = `Цена: ${totalPricePC}₽`
        ssdIsAdd = false
        ssdListIsOpen = false
    } else if (ssdListIsOpen == false) {
        ssdList.style.display = "none"
        ssdListIsOpen = true
    } else if (ssdListIsOpen == true) {
        ssdList.style.display = "block"
        ssdListIsOpen = false
    }   
})

for (let i = 0; i < ssd.length; i++) {
    ssdAddBtn[i].addEventListener('click', (event) => {
        event.preventDefault()
        ssdName.innerHTML = `Оперативная память: ${ssd[i].name}`

        openSsdList.innerHTML = "- Убрать"
        ssdList.style.display = "none"

        ssdPriceStory.push(ssd[i].price)
        totalPricePC += ssd[i].price
        totalPriceForm.innerHTML = `Цена: ${totalPricePC}₽`
        totalPriceForm.style.display = "block"
        
        ssdIsAdd = true
        ssdListIsOpen = false
    })
}