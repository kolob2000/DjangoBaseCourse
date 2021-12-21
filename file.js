'use strict'
const cross = document.querySelector(".menu-icons__cross");
const cartBlock = document.querySelector('.popup-cart');
cross.addEventListener('click', (event) => {
    cartBlock.style = 'display:none;';
    cross.style = 'display:none';
});

