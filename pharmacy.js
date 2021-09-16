const mainMenu = document.querySelector('.nav-area');
const closeMenu = document.querySelector('.closeMenu');
const openMneu = document.querySelector('.openMenu');

openMneu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display ='flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}