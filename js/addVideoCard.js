'use strict'

let gpus = [
    {
        name: "Видеокарта KFA2 GeForce 210 [21GGF4HI00NK] [PCI-E 2.0 1 ГБ GDDR3, 64 бит, DVI-I, HDMI, VGA (D-Sub), GPU 520 МГц]",
        image: "https://c.dns-shop.ru/thumb/st4/fit/200/200/55db66534a3731f6dbd8b9d5b4c723fb/229e0b72fabb7fa61e4b2c80e136b714bc99051a483cbd7176d1181e422c5109.jpg.webp",
        price: 3999,
    },
    {
        name: "Видеокарта MSI GeForce GT 730 [N730-2GD3V3] [PCI-E 2.0 2 ГБ GDDR3, 128 бит, DVI-I, HDMI, VGA (D-Sub), GPU 700 МГц]",
        image: "https://c.dns-shop.ru/thumb/st1/fit/200/200/5af4b877bede7e91740733c3d4695ad9/cc44f4784af9a976703d6716f745de6ebef6fe558a2feb45e338b73455345ce1.jpg.webp",
        price: 4299,
    },
    {
        name: "Видеокарта MSI GeForce GTX 1630 VENTUS XS OC [GTX 1630 VENTUS XS 4G OC] [PCI-E 3.0 4 ГБ GDDR6, 64 бит, DisplayPort, DVI-D, HDMI, GPU 1740 МГц]",
        image: "https://c.dns-shop.ru/thumb/st1/fit/200/200/a27479fcf592673a4c9f00da23dac7ff/dff95d5459ca767de53504b0e43a6c565de4ea0af4fee001470fc29f5e6b2391.jpg.webp",
        price: 12699,
    },
    {
        name: "Видеокарта KFA2 GeForce RTX 3050 X Black [35NSL8MD6YEK] [PCI-E 4.0 8 ГБ GDDR6, 128 бит, DisplayPort x3, HDMI, GPU 1552 МГц]",
        image: "https://c.dns-shop.ru/thumb/st4/fit/200/200/f8f7c4f850cd55ebc964e9c4929afcbc/c429736947c88c00d721e9e1a92899220ca36166e22043f54a1d81a6e44ef1dc.jpg.webp",
        price: 30299,
    },
    {
        name: "Видеокарта GIGABYTE GeForce RTX 4080 AERO [GV-N4080AERO-16GD] [PCI-E 4.0 16 ГБ GDDR6X, 256 бит, DisplayPort x3, HDMI, GPU 2210 МГц]",
        image: "https://c.dns-shop.ru/thumb/st1/fit/200/200/4422356c33bcd14090ad423fa2f09146/26d92bd79e71905605da1cbd314bad41a25861e743bed280d2f766d864daa3e6.jpg.webp",
        price: 138999,
    },
]

let gpuName = document.getElementById('videocard_name')
let gpuList = document.querySelector('.product-list__videocard')
let gpuAddBtn = gpuList.getElementsByClassName('list-item__add')
let openGpuList = document.getElementById('gpu-list__open')

gpuList.style.display = "none"

let gpuIsAdd = false
let gpuListIsOpen = true
let gpuPriceStory = []

gpus.forEach(item => {
    gpuList.innerHTML += `
    <div class="product-item">
        <img class="list-item__img" src="${item.image}">
        <div class="list-item__name">${item.name}</div>
        <div class = "item-add__form">
            <div class="list-item__price">${item.price}₽</div>
            <button class="list-item__add">В комплект</button>
        </div> 
    `
})

openGpuList.addEventListener('click', (event) => {
    event.preventDefault()

    if (gpuIsAdd == true && gpuListIsOpen == false) {
        openGpuList.innerHTML = "+ Добавить"
        gpuList.style.display = "block"
        gpuName.innerHTML = "Видеокарта:"
        totalPricePC -= gpuPriceStory[gpuPriceStory.length-1]
        totalPriceForm.innerHTML = `Цена: ${totalPricePC}₽`
        gpuIsAdd = false
        gpuListIsOpen = false
    } else if (gpuListIsOpen == false) {
        gpuList.style.display = "none"
        gpuListIsOpen = true
    } else if (gpuListIsOpen == true) {
        gpuList.style.display = "block"
        gpuListIsOpen = false
    }   
})

for (let i = 0; i < gpus.length; i++) {
    gpuAddBtn[i].addEventListener('click', (event) => {
        event.preventDefault()
        gpuName.innerHTML = `Видеокарта: ${gpus[i].name}`

        openGpuList.innerHTML = "- Убрать"
        gpuList.style.display = "none"

        gpuPriceStory.push(gpus[i].price)
        totalPricePC += gpus[i].price
        totalPriceForm.innerHTML = `Цена: ${totalPricePC}₽`
        totalPriceForm.style.display = "block"
        
        gpuIsAdd = true
        gpuListIsOpen = false
    })
}