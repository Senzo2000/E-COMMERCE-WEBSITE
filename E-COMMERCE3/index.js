var hiddenNavBar = document.querySelector('.hidden-navbar');
const nav = document.querySelector('.hidden-items');
// menuButton
const openMenu = document.getElementById("menu-btn");
const closemenu = document.querySelector('.iconclose');


// OPENING AND CLOSING THE MENU IN RESPONSIVENESS
openMenu.addEventListener("click", ()=>{

    console.log("MENU IS OPENING");
    hiddenNavBar.style.display = "block";
})





const closeBtn = document.querySelector(".close-btn");


const mainThumbnail = document.querySelector(".main-thumbnail");
// TAKES ALL THE IMAGES
const images = document.querySelectorAll(".preview img");
const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
const amount = document.querySelector(".amount");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("previous");
const slider = document.querySelector(".mobile-thumb");
// THUMB-MOB IS THE ELEMENT(img section) IN WHICH PICTURES WILL BE CHANGED
const thumbMob = document.querySelector(".thumb-mob");
const cartButton = document.querySelector(".cart-btn");
const cart = document.querySelector(".cart-wrp");

const addBtn = document.querySelector(".add-btn");
const indicator = document.querySelector(".indicator");
const cartContent = document.querySelector(".cart-content");
let amountValue = 0;
let currentImg = 1;

indicator.style.display = "none";

function addNumber() {
  amountValue++;
  amount.innerText = amountValue;
}
function minusNumber() {
  if (amountValue > 0) {
    amountValue--;
  }
  amount.innerText = amountValue;
}



function nextImage() {
  if (currentImg == 4) {
    currentImg = 1;
  } else {
    currentImg++;
  }
//   CHANGING THE IMAGE NUMBER WILL BE LIKE CHANGING THE PICTURE 
  thumbMob.src = `image-product-${currentImg}.jpg`;
}
function prevImage() {
  if (currentImg == 1) {
    currentImg = 4;
  } else {
    currentImg--;
  }
  thumbMob.src = `image-product-${currentImg}.jpg`;
}



function DisplayCart() {
    // Toggle is adding or removing a class name from an element with javascript
  cart.classList.toggle("invisible");
}

function deleteItem() {
    // EMPTY IS A VARIBALE CREATED IN HTML, centered within the cart content div element, we can add it and remove it based on certain onditions
    cartContent.classList.add("empty");
    cartContent.innerHTML = `<p>Your cart is empty</p>`;
    indicator.style.display = "none";
}

images.forEach((image) => {
  image.addEventListener("click", () => {
    const lastImg = document.querySelectorAll(".selected");
    if (lastImg) {
      lastImg[0].classList.remove("selected");
    }
    image.classList.add("selected");
    const selectedImg = document.querySelector(".selected");
    switch (selectedImg.getAttribute("src")) {
      case "image-product-1-thumbnail.jpg":
        mainThumbnail.src = "image-product-1.jpg";       
        break;
      case "image-product-2-thumbnail.jpg":
        mainThumbnail.src = "image-product-2.jpg";       
        break;
      case "image-product-3-thumbnail.jpg":
        mainThumbnail.src = "image-product-3.jpg";
               break;
      case "image-product-4-thumbnail.jpg":
        mainThumbnail.src = "image-product-4.jpg";
                break;
    }
  });
});



plusBtn.addEventListener("click", addNumber);
minusBtn.addEventListener("click", minusNumber);
nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);


cartButton.addEventListener("click", DisplayCart);







addBtn.addEventListener("click", ()=>{
    console.log("addButton is being clicked");

    if(amountValue > 0){
        const total = 125 * amountValue;
        cartContent.classList.remove("empty");
        // CREATED A NEW CLASS THAT HAS BEEN CUSTOMIZED IN CSS
        cartContent.innerHTML = `<div class="product">
                    <div>
                      <img src="image-product-1-thumbnail.jpg" class="product-img" alt="product">
                      <div class="product-info">
                        <p class="product-title">Fall Limited Edition Sneakers</p>
                       <p><span>$125.00</span> × <span class="number">${amountValue}</span> <b>$${total}</b></p>
                      </div>
                      <button class="delete-btn" onclick="deleteItem()"><img src="icon-delete.svg" alt="delete"></button>
                    </div>
                    <button class="checkout-btn">Checkout</button>
                  </div>`;
        indicator.style.display = "block";
        indicator.innerText = amountValue;
    }

    
});
