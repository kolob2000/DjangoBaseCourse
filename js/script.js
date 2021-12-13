"use strict"
const cardItem = document.querySelectorAll('.cart_link')
for (const i of cardItem) {
    i.addEventListener('click', productToCart)

}
let count = 0;

function productToCart(event) {
    event.preventDefault();


    count += 1;
    if (event.target.localName === 'a'){
        if (event.target.innerText === 'Add to Cart') {
        event.target.textContent = 'Product in cart';
        // event.target.setAttribute('disabled', 'disabled');
    }
    }
}

