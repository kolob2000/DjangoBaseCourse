"use strict"
const productCount = document.querySelector('.count_product');
const cardItem = document.querySelectorAll('.cart_link');

for (const i of cardItem) {
    i.addEventListener('click', productToCart);

}

let count = 0;

function productToCart(event) {
    event.preventDefault();
    // console.log(this.innerText);
    if (this.innerText === 'Add to Cart') {
        this.innerHTML = '<span class="cart_text" style="color: #a4a3a3;">Product in cart</span>';
        this.style = 'pointer-events: none; cursor: default; border: #a4a3a3 1px solid;'
        count += 1;
        productCount.textContent = count;
        productCount.style = 'display: inline;'
    }
}

