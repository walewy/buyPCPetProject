'use strict'

let cases = [
    {
        name: "Корпус DEXP DC-302B [DC302B] синий [Mid-Tower, Micro-ATX, Standard-ATX, USB 2.0 Type-A]",
        image: "DEXPDC-302B.jpg",
        price: 1750,
    },
    {
        name: "Корпус DEXP DC-201M черный [Mini-Tower, Micro-ATX, Mini-ITX, USB 2.0 Type-A]",
        image: "DEXPDC-201M.jpg",
        price: 1799,
    },
    {
        name: "Корпус DEXP DC-302R красный [Mid-Tower, Micro-ATX, Standard-ATX, USB 2.0 Type-A]",
        image: "DEXPDC-302R.jpg",
        price: 1850,
    },
    {
        name: "Корпус DEEPCOOL MATREXX 30 [DP-MATX-MATREXX30] черный [Mini-Tower, Micro-ATX, Mini-ITX, USB 2.0 Type-A, USB 3.2 Gen1 Type-A, 1 x 120 мм]",
        image: "DEEPCOOLMATREXX30.jpg",
        price: 3399,
    },
    {
        name: "Корпус ARDOR GAMING Rare Minicase MS4 GG серый [Mini-Tower, Micro-ATX, Mini-ITX, USB 2.0 Type-A, USB 3.2 Gen1 Type-A]",
        image: "ARDORGAMINGMiniCase.jpg",
        price: 3499,
    }
]

let caseName = document.getElementById('case-name')
let caseList = document.querySelector('.product-list__case')
let caseAddBtn = caseList.getElementsByClassName('list-item__add')
let openCaseList = document.getElementById('case-list__open')

caseList.style.display = "none"

let caseIsAdd = false
let caseListIsOpen = true
let casePriceStory = []

cases.forEach(item => {
    caseList.innerHTML += `
    <div class="product-item">
        <img class="list-item__img" src="images/Case's/${item.image}">
        <div class="list-item__name">${item.name}</div>
        <div class = "item-add__form">
            <div class="list-item__price">${item.price}₽</div>
            <button class="list-item__add">В комплект</button>
        </div> 
    `
})

openCaseList.addEventListener('click', (event) => {
    event.preventDefault()

    if (caseIsAdd == true && caseListIsOpen == false) {
        openCaseList.innerHTML = "+ Добавить"
        caseList.style.display = "block"
        caseName.innerHTML = "Корпус:"
        totalPricePC -= casePriceStory[casePriceStory.length-1]
        totalPriceForm.innerHTML = `Цена: ${totalPricePC}₽`
        caseIsAdd = false
        caseListIsOpen = false
    } else if (caseListIsOpen == false) {
        caseList.style.display = "none"
        caseListIsOpen = true
    } else if (caseListIsOpen == true) {
        caseList.style.display = "block"
        caseListIsOpen = false
    }   
})

for (let i = 0; i < cases.length; i++) {
    caseAddBtn[i].addEventListener('click', (event) => {
        event.preventDefault()
        caseName.innerHTML = `Корпус: ${cases[i].name}`

        openCaseList.innerHTML = "- Убрать"
        caseList.style.display = "none"

        casePriceStory.push(cases[i].price)
        totalPricePC += cases[i].price
        totalPriceForm.innerHTML = `Цена: ${totalPricePC}₽`
        totalPriceForm.style.display = "block"
        
        caseIsAdd = true
        caseListIsOpen = false
    })
}