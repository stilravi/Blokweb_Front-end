// JavaScript Document

var mobileOverlay = document.querySelector('#mobile-overlay');
var mobileMenuButton = document.querySelector('#mobile-menu-button');
var mobileCloseButton = document.querySelector('#mobile-close-button')

function openMobileMenu() {
    mobileOverlay.classList.add('active');
} 

function closeMobileMenu() {
    mobileOverlay.classList.remove('active');
} 

mobileMenuButton.addEventListener('click', openMobileMenu);
mobileCloseButton.addEventListener('click', closeMobileMenu);