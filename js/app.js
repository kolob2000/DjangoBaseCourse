"use strict";

const cartCount = document.querySelector(".menu-icons__product-count");
const buttonCards = document.querySelectorAll(".cards__button");
let count = 0;
for (const buttonCard of buttonCards) {
    buttonCard.addEventListener("click", (event) => {
        event.preventDefault();
        count++;
        viewQuantity(count, cartCount);
    });

    buttonCard.addEventListener('click', (event) => {

        let productHtml;
        if (event.target.parentElement.classList.contains("cards__item")) {
            productHtml = event.target.parentElement;
        }
        else {
            productHtml = event.target.parentElement.parentElement;
        }
        let product = new Product(productHtml);
        if (products.hasOwnProperty(productHtml.dataset.id)) {
            products[productHtml.dataset.id].productCount();
            products[productHtml.dataset.id].totalPrice();
        } else {
            products[productHtml.dataset.id] = product;
        }
        updateHtml(products, popupCartItem);
    });
}
////////////////////////////////////////////////////

let products = Object();
const cross = document.querySelector(".menu-icons__cross");
const cartBlock = document.querySelector(".popup-cart");
const popupCartItem = document.querySelector(".popup-cart_item");
const tableTitle = popupCartItem.innerHTML;
const cartIcon = document.querySelector("#cart-icon");
const cartCross = document.querySelector("#cart-cross");
let id;

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

/////////////////////////////////// OPEN CART
cartIcon.addEventListener("click", (event) => {
    event.preventDefault();
    cartBlock.classList.toggle("hidden");
    cross.classList.toggle("hidden");
});
////////////////////////////////////  CART CLOSE
cartCross.addEventListener("click", () => {
    cartBlock.classList.toggle("hidden");
    cross.classList.toggle("hidden");
});
////////////////////////////////////// ADD PRODUCT TO CART


//////////////////////////////////
document.addEventListener("click", (event) => {


    if (event.target.classList.contains("popup-cart__clear")) {
        event.preventDefault();
        cartClear(products, cartCount, popupCartItem, tableTitle);
    } else if (event.target.classList.contains("popup-cart__trash")) {
        event.preventDefault();
        id = event.target.dataset.id;
        delete products[id];
        updateHtml(products, popupCartItem);
    }
});

function makeHtml(product) {
    return `<div class="popup-cart__title product" data-id="${product.id}">${product.title}</div>
                    <div class="product "><img  class="popup-cart__img" src="${product.img}" alt="prod_img" ></div>
                    <div class="popup-cart__quantity product">${product.count}</div>
                    <div class="popup-cart__price product">$ ${product.price}</div>
                    <div class="popup-cart__sum product">$ ${product.total}</div>
                    <div class="popup-cart__add product">
                        <a href="#" class="popup-cart__minus far fa-minus-square" ></a>
                        <a href="#" class="popup-cart__plus far fa-plus-square" ></a>
                    </div>
                    <div class="popup-cart__trash product">
                        <a href="" class="popup-cart__trash far fa-trash-alt" data-id="${product.id}"></a>
                    </div>`;
}

function updateHtml(products, popupCartItem) {

    let cartHtml = "";
    for (const i in products) {
        cartHtml += makeHtml(products[i]);
    }
    popupCartItem.innerHTML =
        tableTitle +
        cartHtml +
        `<a href="" class="popup-cart__clear button">Clear cart</a>`;
}

function cartClear(products, cartCount, popupCartItem, tableTitle) {
    products = {}
    cartCount.style = "display:none;";
    count = 0;
    popupCartItem.innerHTML = tableTitle;
}

function viewQuantity(count, cartCount) {
    cartCount.innerHTML = `<span class="menu-icons__cart-text">${count}</span>`;
    cartCount.style = "display:flex;";
}

///////////////////////////////////////////////////////////////////
