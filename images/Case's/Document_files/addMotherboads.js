'use strict'

let motherboards = [
    {
        name: "Материнская плата AFOX A88-MA5 [FM2+, AMD A88, 2xDDR3-1600 МГц, 1xPCI-Ex16, Micro-ATX]",
        price: 3999,
        image: "AFOXA88.jpg",
    },
    {
        name: "Материнская плата AFOX IH61-MA2-V3 [LGA 1155, Intel H61, 2xDDR3-1600 МГц, 1xPCI-Ex16, 1xM.2, Mini-DTX]",
        price: 4199,
        image: "AFOXIH61.jpg"
    },
    {
        name: "Материнская плата Biostar A68MHE [FM2+, AMD A68H, 2xDDR3-2133 МГц, 1xPCI-Ex16, Micro-ATX]",
        price: 4299,
        image: "BIOSTARA68MHE.jpg"
    },
    {
        name: "Материнская плата Esonic A88DA with A8-4500M [FS1, AMD A88, AMD A8 4500M 4x1.9 ГГц, 2xDDR3-1600 МГц, 1xPCI-Ex16, Mini-DTX]",
        price: 4399,
        image: "ESONICA88DA.jpg"
    },
    {
        name: "Материнская плата ASRock H310CM-DVS [LGA 1151-v2, Intel H310, 2xDDR4-2666 МГц, 1xPCI-Ex16, Micro-ATX]",
        price: 4899,
        image: "ASROCKH310M.jpg"
    }
]

let motherboadName = document.getElementById('motherboad_name')
let motherboardsList = document.querySelector('.product-list__motherboards')
let motherboadAddBtn = motherboardsList.getElementsByClassName('list-item__add')
let openMotherboadsList = document.getElementById('motherboad-list__open')

let productIsAdd = false
let listIsOpen = false
let motherboadPriceStory = []

motherboards.forEach(item => {
    motherboardsList.innerHTML += `
    <div class="product-item">
        <img class="list-item__img" src="images/Motherboad's/${item.image}">
        <div class="list-item__name">${item.name}</div>
        <div class = "item-add__form">
            <div class="list-item__price">${item.price}₽</div>
            <button class="list-item__add">В комплект</button>
        </div> 
    `
})

openMotherboadsList.addEventListener('click', (event) => {
    event.preventDefault()

    if (productIsAdd == true && listIsOpen == false) {
        openMotherboadsList.innerHTML = "+ Добавить"
        motherboardsList.style.display = "block"
        motherboadName.innerHTML = "Материнская плата:"
        totalPricePC -= motherboadPriceStory[motherboadPriceStory.length-1]
        totalPriceForm.innerHTML = `Цена: ${totalPricePC}₽`
        productIsAdd = false
        listIsOpen = false
    } else if (listIsOpen == false) {
        motherboardsList.style.display = "none"
        listIsOpen = true
    } else if (listIsOpen == true) {
        motherboardsList.style.display = "block"
        listIsOpen = false
    }   
})

for (let i = 0; i < motherboadAddBtn.length; i++) {
    motherboadAddBtn[i].addEventListener('click', (event) => {
        event.preventDefault()
        motherboadName.innerHTML = `Материнская плата: ${motherboards[i].name}`

        openMotherboadsList.innerHTML = "- Убрать"
        motherboardsList.style.display = "none"

        motherboadPriceStory.push(motherboards[i].price)
        totalPricePC += motherboards[i].price
        // motherboadPriceStory.pop()
        totalPriceForm.innerHTML = `Цена: ${totalPricePC}₽`
        totalPriceForm.style.display = "block"
        
        productIsAdd = true
        listIsOpen = false
    })
}