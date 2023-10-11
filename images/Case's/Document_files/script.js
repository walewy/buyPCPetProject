'use strict' 

let procesors = [
    {
        name: 'Процессор AMD FX-4300 BOX [AM3+, 4 x 3.8 ГГц, L2 - 4 МБ, L3 - 4 МБ, 2 х DDR3-1866 МГц, TDP 95 Вт, кулер]',
        price: 2199,
        image: 'amdFX-4300.jpg'
    },
    {
        name: 'Процессор AMD Ryzen 7 5700X OEM [AM4, 8 x 3.4 ГГц, L2 - 4 МБ, L3 - 32 МБ, 2 х DDR4-3200 МГц, TDP 65 Вт]',
        price: 20699,
        image: 'amdRyzen.jpg'
    },
    {
        name: 'Процессор Intel Celeron G5905 OEM [LGA 1200, 2 x 3.5 ГГц, L2 - 0.5 МБ, L3 - 4 МБ, 2 х DDR4-2666 МГц, Intel UHD Graphics 610, TDP 58 Вт]',
        price: 3799,
        image: 'intelCeleronG5905.jpg'
    },
    {
        name: 'Процессор Intel Core i5-9400F OEM [LGA 1151-v2, 6 x 2.9 ГГц, L2 - 1.5 МБ, L3 - 9 МБ, 2 х DDR4-2666 МГц, TDP 65 Вт]',
        price: 14899,
        image: 'intelCorei5-9400F.jpg'
    },
    {
        name: 'Процессор Intel Core i5-12490F BOX [LGA 1700, 6 x 3 ГГц, L2 - 7.5 МБ, L3 - 20 МБ, 2 х DDR4, DDR5-4800 МГц, TDP 117 Вт]',
        price: 20999,
        image: 'intelCorei5-12490F.jpg'
    }
]

let procesorsList = document.querySelector('.product-list__cpu')
let openCpuList = document.getElementById('cpu-list__open')
let componentName = document.querySelector('.category-name')
let productAddBtn = procesorsList.getElementsByClassName('list-item__add')
let totalPriceForm = document.querySelector('.total-price')
totalPriceForm.style.display = "none"

let cpuIsAdd = false
let cpuListIsOpen = false
let totalPricePC = 0
let cpuPriceStory = []

procesors.forEach(item => {

    procesorsList.innerHTML += `
    <div class="product-item">
        <img class="list-item__img" src="images/CPU's/${item.image}">
        <div class="list-item__name">${item.name}</div>
        <div class = "item-add__form">
            <div class="list-item__price">${item.price}₽</div>
            <button class="list-item__add">В комплект</button>
        </div> 
    `
});

openCpuList.addEventListener('click', (event) => {
    event.preventDefault();

    if (cpuIsAdd == true && cpuListIsOpen == false) {
        openCpuList.innerHTML = "+ Добавить"
        procesorsList.style.display = "block"
        componentName.innerHTML = "Процессор:"
        totalPricePC -= +cpuPriceStory[cpuPriceStory.length-1]
        totalPriceForm.innerHTML = `Цена: ${totalPricePC}₽`
        cpuIsAdd = false
        cpuListIsOpen = false
    } else if (cpuListIsOpen == false) {
        procesorsList.style.display = "none"
        cpuListIsOpen = true
    } else if (cpuListIsOpen == true) {
        procesorsList.style.display = "block"
        cpuListIsOpen = false
    }


});

for (let i = 0; i < productAddBtn.length; i++) {
    productAddBtn[i].addEventListener('click', (event) => {
        event.preventDefault()
        // console.log(procesors[i].name);
        componentName.innerHTML = `Процессор: ${procesors[i].name}`
        console.log(componentName);

        openCpuList.innerHTML = "- Убрать"
        procesorsList.style.display = "none"

        cpuPriceStory.push(procesors[i].price)
        totalPricePC += procesors[i].price
        // cpuPriceStory.pop()
        totalPriceForm.innerHTML = `Цена: ${totalPricePC}₽`
        totalPriceForm.style.display = "block"
        
        cpuIsAdd = true
        cpuListIsOpen = false
    })
}