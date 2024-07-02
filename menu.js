let btnmenu = document.getElementById('btn-abrir')
let menu = document.getElementById('menu-mobile')
let overL = document.getElementById('over')
btnmenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overL.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})