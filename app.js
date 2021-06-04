const burger = document.querySelector('.burger')
const navbar = document.querySelector('.navbar')
burger.addEventListener('click', () => {
    navbar.classList.toggle('open')
})


const scrollBtn = document.querySelector('.circleBtn')

scrollBtn.addEventListener('click', () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})