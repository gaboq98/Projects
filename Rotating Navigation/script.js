const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')
const circle = document.querySelector('.circle-container')

open.addEventListener('click', () => container.classList.add('show-nav'))
open.addEventListener('click', () => circle.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))
close.addEventListener('click', () => circle.classList.remove('show-nav'))