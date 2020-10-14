// JavaScript Document

var mobileOverlay = document.querySelector('#mobile-overlay');
var mobileMenuButton = document.querySelector('#mobile-menu-button');
var mobileCloseButton = document.querySelector('#mobile-close-button');
var shoppingCartButton = document.querySelector('#shopping-cart-button');
var cartText = document.querySelector('#cartText');
var addToCartButtons = document.querySelectorAll('.addToCart');

// Producten in winkelmand op 0 zetten
cart = 0;


// Mobiele menu functies
function openMobileMenu() {
    mobileOverlay.classList.add('active');
} 

function closeMobileMenu() {
    mobileOverlay.classList.remove('active');
}


// Winkelmand functies

var mobileOverlayBlock = document.querySelector('#shoppingCartOverlay section');
var mobileOverlay = document.querySelector('#shoppingCartOverlay');

function addOverlay() {
    mobileOverlay.classList.add('visible');
}

shoppingCartButton.addEventListener('click', addOverlay);


addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        cart = cart + 1;
        updateCart()
    })
});

function updateCart() {
    if ( cart > 0) {
        cartText.classList.add('visible');
        cartText.textContent = cart;
    }
}


// Event Listeners van mobiele menu
mobileMenuButton.addEventListener('click', openMobileMenu);
mobileCloseButton.addEventListener('click', closeMobileMenu);