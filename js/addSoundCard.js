let soundcards = [
    {
        name: "Внешняя звуковая карта Creative SB Play!4 [формат звуковой карты 2.0, USB Type-A, USB Type-C, 24 бит/192 кГц]",
        image: "https://c.dns-shop.ru/thumb/st1/fit/200/200/7bde19ce5dcbcdc07666263c4d35b836/5e4137778521deec2cd89be402aa2b7d7278001f94aec82c3ac0e70a9ad03f00.jpg.webp",
        price: 3699,
    },
    {
        name: "Внутренняя звуковая карта Creative SB AUDIGY RX 7.1 [формат звуковой карты 7.1, PCI-E, 24 бит/192 кГц, ASIO]",
        image: "https://c.dns-shop.ru/thumb/st1/fit/200/200/167bfec0ee441d16f157f079b2a51345/1188c0e879fba5c9460d2981de04c7a7d2a779d358254167e2daea951d0b773a.jpg.webp",
        price: 8099,
    },
    {
        name: "Внешняя звуковая карта Creative Sound BlasterX G6 [формат звуковой карты 7.1, USB Type-A, 32 бит/384 кГц, ASIO]",
        image: "https://c.dns-shop.ru/thumb/st1/fit/200/200/d8305b191a12dd45f9bd4166bbacb763/ff8a7ae3ed6f33187bb8acd032d67282cead3174d884a20e01ed4973d88312bc.jpg.webp",
        price: 16499,
    },
    {
        name: "Внутренняя звуковая карта Creative Sound BlasterX AE-5 Plus [формат звуковой карты 5.1, PCI-E, 32 бит/384 кГц, ASIO]",
        image: "https://c.dns-shop.ru/thumb/st1/fit/200/200/22afe38326e482f00a38269a338c5e97/28c5965ce995702498a963cf7dbacb49112af0912d8702b16a890e6fd441e4d6.jpg.webp",
        price: 16699,
    },
    {
        name: "Внешняя звуковая карта Arturia Audiofuse Rev2 [формат звуковой карты 2.0, USB Type-A, 24 бит/192 кГц]",
        image: "https://c.dns-shop.ru/thumb/st4/fit/200/200/62f2a8d7c3f795644656eae65f243fe7/53a26407c86c499595cd49c727ba48f90248e6f699657292ad8f6638277c1499.jpg.webp",
        price: 71999,
    },
]

let soundcardName = document.getElementById('soundcard-name')
let soundcardList = document.querySelector('.product-list__soundcard')
let soundcardAddBtn = soundcardList.getElementsByClassName('list-item__add')
let openSoundcardList = document.getElementById('soundcard-list__open')

soundcardList.style.display = "none"

let soundcardIsAdd = false
let soundcardListIsOpen = true
let soundcardPriceStory = []

soundcards.forEach((item) => {
    soundcardList.innerHTML += `
    <div class="product-item">
        <img class="list-item__img" src="${item.image}">
        <div class="list-item__name">${item.name}</div>
        <div class = "item-add__form">
            <div class="list-item__price">${item.price}₽</div>
            <button class="list-item__add">В комплект</button>
        </div> 
    `
})

openSoundcardList.addEventListener('click', (event) => {
    event.preventDefault()

    if (soundcardIsAdd == true && soundcardListIsOpen == false) {
        openSoundcardList.innerHTML = "+ Добавить"
        soundcardList.style.display = "block"
        soundcardName.innerHTML = "Звуковая карта:"
        totalPricePC -= soundcardPriceStory[soundcardPriceStory.length-1]
        totalPriceForm.innerHTML = `Цена: ${totalPricePC}₽`
        soundcardIsAdd = false
        soundcardListIsOpen = false
    } else if (soundcardListIsOpen == false) {
        soundcardList.style.display = "none"
        soundcardListIsOpen = true
    } else if (soundcardListIsOpen == true) {
        soundcardList.style.display = "block"
        soundcardListIsOpen = false
    }   
})

for (let i = 0; i < soundcards.length; i++) {
    soundcardAddBtn[i].addEventListener('click', (event) => {
        event.preventDefault()
        soundcardName.innerHTML = `Звуковая карта: ${soundcards[i].name}`

        openSoundcardList.innerHTML = "- Убрать"
        soundcardList.style.display = "none"

        soundcardPriceStory.push(soundcards[i].price)
        totalPricePC += soundcards[i].price
        totalPriceForm.innerHTML = `Цена: ${totalPricePC}₽`
        totalPriceForm.style.display = "block"
        
        soundcardIsAdd = true
        soundcardListIsOpen = false
    })
}