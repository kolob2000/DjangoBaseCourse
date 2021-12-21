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
const cross = document.querySelector(".menu-icons__cross");
const cartBlock = document.querySelector(".popup-cart");
const popupCartItem = document.querySelector(".popup-cart_item");
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
    console.dir(product);
    console.log(product.dataset.id);
    console.log(product.children[0].src);

    popupCartItem.innerHTML =
      popupCartItem.innerHTML +
      `<div class="popup-cart__title product">hjhj</div>
                    <div class="popup-cart__img product">Image</div>
                    <div class="popup-cart__quantity product">Quantity</div>
                    <div class="popup-cart__price product">Price</div>
                    <div class="popup-cart__sum product">Total</div>`;
  }
});

///////////////////////////////////////////////////////////////////

class product {
  constructor(product) {
    this.title = product.children[1].innerText;
    this.img = product.children[0].src;
    this.price = product.dataset.price;
    this.total = product.dataset.price;
    this.count = 1;
  }

  totalPrice() {
    this.total = this.price * this.count;
  }

  productCount() {
    this.count++;
  }
}

function makeHtml(product) {
  return `<div class="popup-cart__title product">${product.title}</div>
                    <div class="popup-cart__img product"><img src="${product.img}" alt=""></div>
                    <div class="popup-cart__quantity product">${product.count}</div>
                    <div class="popup-cart__price product">${product.price}</div>
                    <div class="popup-cart__sum product">${product.total}</div>`;
}
