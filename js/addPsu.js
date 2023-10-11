let psu = [
    {
        name: "Блок питания DEEPCOOL DE500 v2 [DP-DE500US-PH] [350 Вт, 20 + 4 pin, 4+4 pin CPU, 4 SATA, 6+2 pin PCI-E]",
        image: "https://c.dns-shop.ru/thumb/st4/fit/200/200/38d63c5bef3f3ae53885235d080e1b93/1283d57fe6abfec70ab06c3f4764076b63b1a1b600ee2830b35631f1b4e09256.jpg.webp",
        price: 2599,
    },
    {
        name: "Блок питания Chieftec iARENA 700W [GPA-700S] [700 Вт, APFC, 20 + 4 pin, 4+4 pin CPU, 6 SATA, 6+2 pin x2 PCI-E]",
        image: "https://c.dns-shop.ru/thumb/st1/fit/200/200/afa9b18ec7813e0504f87465512c81a6/8ff697c8179eb526c86cebca440447c4b3251a54b89ecf8aa7de6f50579f6a8b.jpg.webp",
        price: 3699,
    },
    {
        name: "Блок питания Cougar VTE600 [CGR BS-600] [600 Вт, 80+ Bronze, APFC, 20 + 4 pin, 4+4 pin CPU, 6 SATA, 6+2 pin x2 PCI-E]",
        image: "https://c.dns-shop.ru/thumb/st4/fit/200/200/f2b2fa1cdff9c8dc8beb26d9d286e814/45791c9159dd8fab485eba5e078128899391441495bb86b1182995ca6d7090c9.jpg.webp",
        price: 4799,
    },
    {
        name: "Блок питания Cooler Master MWE 550 WHITE - V2 [MPE-5501-ACABW-EU] [550 Вт, 80+, APFC, 20 + 4 pin, 4+4 pin CPU, 6 SATA, 6+2 pin x2 PCI-E]",
        image: "https://c.dns-shop.ru/thumb/st1/fit/200/200/b22c46745b05b892954297d3c9641c3f/ea48ea130e90007500bc7ec98eb6f8e660a758fefcf78359682099e7c72ebe1d.jpg.webp",
        price: 5899,
    },
    {
        name: "Блок питания Advantech RPS-400ATX-ZE [MRW-6400P] [400 Вт, 80+, APFC, 20 + 4 pin]",
        image: "https://c.dns-shop.ru/thumb/st4/fit/200/200/ecc2a71dbb913d261e0ef92dcca75021/5859bf777b56d1ecf18e84ff2dec1f397313c2f3ed64fede77ce606c69d3169e.jpg.webp",
        price: 74999,
    },
]

let psuName = document.getElementById('psu-name')
let psuList = document.querySelector('.product-list__psu')
let psuAddBtn = psuList.getElementsByClassName('list-item__add')
let openPsuList = document.getElementById('psu-list__open')

psuList.style.display = "none"

let psuIsAdd = false
let psuListIsOpen = true
let psuPriceStory = []

psu.forEach((item) => {
    psuList.innerHTML += `
    <div class="product-item">
        <img class="list-item__img" src="${item.image}">
        <div class="list-item__name">${item.name}</div>
        <div class = "item-add__form">
            <div class="list-item__price">${item.price}₽</div>
            <button class="list-item__add">В комплект</button>
        </div> 
    `
})

openPsuList.addEventListener('click', (event) => {
    event.preventDefault()

    if (psuIsAdd == true && psuListIsOpen == false) {
        openPsuList.innerHTML = "+ Добавить"
        psuList.style.display = "block"
        psuName.innerHTML = "Блок питания:"
        totalPricePC -= psuPriceStory[psuPriceStory.length-1]
        totalPriceForm.innerHTML = `Цена: ${totalPricePC}₽`
        psuIsAdd = false
        psuListIsOpen = false
    } else if (psuListIsOpen == false) {
        psuList.style.display = "none"
        psuListIsOpen = true
    } else if (psuListIsOpen == true) {
        psuList.style.display = "block"
        psuListIsOpen = false
    }   
})

for (let i = 0; i < psu.length; i++) {
    psuAddBtn[i].addEventListener('click', (event) => {
        event.preventDefault()
        psuName.innerHTML = `Блок питания: ${psu[i].name}`

        openPsuList.innerHTML = "- Убрать"
        psuList.style.display = "none"

        psuPriceStory.push(psu[i].price)
        totalPricePC += psu[i].price
        totalPriceForm.innerHTML = `Цена: ${totalPricePC}₽`
        totalPriceForm.style.display = "block"
        
        psuIsAdd = true
        psuListIsOpen = false
    })
}