let main = document.querySelector('.main');
let mainBtn = document.querySelector('.main-btn')

main.style.display = "none"

mainBtn.addEventListener('click', function() {
    main.classList.toggle('active');
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
})