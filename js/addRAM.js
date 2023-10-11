let rams = [
    {
        name: "Оперативная память AMD Radeon R3 Value Series [R334G1339U1S-U] 4 ГБ [DDR3, 4 ГБx1 шт, 1333 МГц, 9-9-9-24]",
        image: "https://c.dns-shop.ru/thumb/st4/fit/200/200/f41da615d67a76d1e0792af31f59baf1/cf77d12121fbba531887707f9cf55c7fbc35916e664c57a2b677a62b381d94d2.jpg.webp",
        price: 650,
    },
    {
        name: "Оперативная память ADATA Premier [AD4U32008G22-SGN] 8 ГБ [DDR4, 8 ГБx1 шт, 3200 МГц, 22]",
        image: "https://c.dns-shop.ru/thumb/st4/fit/200/200/1aad8caf22813be6928ab6d70a258b14/cdad721e9cd2a8cacfaca6d2b8ac34c14d5c04a672ab3ced1960a0dc19d73081.jpg.webp",
        price: 1799,
    },
    {
        name: "Оперативная память DEXP [DEXP16GD4UD32] 16 ГБ [DDR4, 16 ГБx1 шт, 3200 МГц, 22-22-22-52]",
        image: "https://c.dns-shop.ru/thumb/st4/fit/200/200/10511680692290badbf35270781109d4/2ab2318b171497ec17f5a6e691cae9091003460cfee6db84287c8b4dd9a4db43.jpg.webp",
        price: 2899,
    },
    {
        name: "Оперативная память AMD Radeon R9 Gamer Series [R9S416G3206U2S] 16 ГБ [DDR4, 16 ГБx1 шт, 3200 МГц, 16]",
        image: "https://c.dns-shop.ru/thumb/st1/fit/200/200/d5ae83d34e492ac1f82e974799afe206/554986f7c8aefaa846e5777a80f008f10f807ef3eb134f4485bf4472f1b5b93d.jpg.webp",
        price: 3799,
    },
    {
        name: "Серверная оперативная память Samsung [M393AAG40M32-CAE] 128 ГБ [DDR4, 128 ГБx1 шт, 3200 МГц, 22]",
        image: "https://c.dns-shop.ru/thumb/st1/fit/200/200/13e73c31b4df5d26a399af7033684adb/52a9fe6681ad7cf7bc9a2c521b700a755b1aa9fc8f73acc25e552334aedf1b83.jpg.webp",
        price: 65999,
    }
]

let ramName = document.getElementById('ram-name')
let ramList = document.querySelector('.product-list__ram')
let ramAddBtn = ramList.getElementsByClassName('list-item__add')
let openRamList = document.getElementById('ram-list__open')

ramList.style.display = "none"

let ramIsAdd = false
let ramListIsOpen = true
let ramPriceStory = []

rams.forEach((item) => {
    ramList.innerHTML += `
    <div class="product-item">
        <img class="list-item__img" src="${item.image}">
        <div class="list-item__name">${item.name}</div>
        <div class = "item-add__form">
            <div class="list-item__price">${item.price}₽</div>
            <button class="list-item__add">В комплект</button>
        </div> 
    `
})

openRamList.addEventListener('click', (event) => {
    event.preventDefault()

    if (ramIsAdd == true && ramListIsOpen == false) {
        openRamList.innerHTML = "+ Добавить"
        ramList.style.display = "block"
        ramName.innerHTML = "Оперативаня память:"
        totalPricePC -= ramPriceStory[ramPriceStory.length-1]
        totalPriceForm.innerHTML = `Цена: ${totalPricePC}₽`
        ramIsAdd = false
        ramListIsOpen = false
    } else if (ramListIsOpen == false) {
        ramList.style.display = "none"
        ramListIsOpen = true
    } else if (ramListIsOpen == true) {
        ramList.style.display = "block"
        ramListIsOpen = false
    }   
})

for (let i = 0; i < rams.length; i++) {
    ramAddBtn[i].addEventListener('click', (event) => {
        event.preventDefault()
        ramName.innerHTML = `Оперативная память: ${rams[i].name}`

        openRamList.innerHTML = "- Убрать"
        ramList.style.display = "none"

        ramPriceStory.push(rams[i].price)
        totalPricePC += rams[i].price
        totalPriceForm.innerHTML = `Цена: ${totalPricePC}₽`
        totalPriceForm.style.display = "block"
        
        ramIsAdd = true
        ramListIsOpen = false
    })
}