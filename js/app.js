"use strict";

const cartCount = document.querySelector(".menu-icons__product-count");
const buttonCards = document.querySelectorAll(".cards__button");
let count = 0;
for (const i of buttonCards) {
    i.addEventListener("click", (event) => {
        event.preventDefault();
        count++;
        cartCount.innerHTML = `<span class="menu-icons__cart-text">${count}</span>`;
        cartCount.style = "display:flex;";
    });
}
////////////////////////////////////////////////////
let products = Array();
const cross = document.querySelector(".menu-icons__cross");
const cartBlock = document.querySelector(".popup-cart");
const popupCartItem = document.querySelector(".popup-cart_item");
const tableTitle = popupCartItem.innerHTML;

class Product {
    constructor(product) {
        this.id = product.dataset.id;
        this.title = product.children[1].innerText;
        this.img = product.children[0].src;
        this.price = product.dataset.price;
        this.total = product.dataset.price;
        this.count = 1;
    }

    totalPrice() {
        this.total = (parseFloat(this.price) * this.count).toFixed(2);
    }

    productCount() {
        this.count++;
    }
}

document.addEventListener("click", (event) => {
    if (event.target.id === "cart-icon") {
        event.preventDefault();
        cartBlock.classList.toggle("hidden");
        cross.classList.toggle("hidden");
    } else if (event.target.id === "cart-cross") {
        cartBlock.classList.toggle("hidden");
        cross.classList.toggle("hidden");
    } else if (
        event.target.classList.contains("cards__button") ||
        event.target.classList.contains("cards__link")
    ) {
        let product;
        if (event.target.parentElement.classList.contains("cards__item")) {
            product = event.target.parentElement;
        } else {
            product = event.target.parentElement.parentElement;
        }
        let prod = new Product(product);
        if (products.hasOwnProperty(product.dataset.id)) {
            products[product.dataset.id].productCount();
            products[product.dataset.id].totalPrice();
        } else {
            products[product.dataset.id] = prod;
        }
        let cartHtml = '';
        for (const i of products) {
            if (i !== undefined) {
                cartHtml += makeHtml(i);
            }
        }
        popupCartItem.innerHTML = tableTitle + cartHtml + `<a href="" class="popup-cart__clear button">Clear cart</a>`;

    } else if (event.target.classList.contains("popup-cart__clear")) {
        event.preventDefault();
        popupCartItem.innerHTML = tableTitle;
    }
});

function makeHtml(product) {
    return `<div class="popup-cart__title product">${product.title}</div>
                    <div class="product "><img  class="popup-cart__img" src="${product.img}" alt="prod_img" ></div>
                    <div class="popup-cart__quantity product">${product.count}</div>
                    <div class="popup-cart__price product">${product.price}</div>
                    <div class="popup-cart__sum product">${product.total}</div>`;
}


///////////////////////////////////////////////////////////////////
