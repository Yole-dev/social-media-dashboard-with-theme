'use strict';

//layout variables
const body = document.querySelector('body');
const header = document.querySelector('header');

//text variables
const h2 = document.querySelectorAll('h2');
const h3 = document.querySelectorAll('h3');
const h5 = document.querySelectorAll('h5');
const p = document.querySelectorAll('p');

//theme toggle variables
const toggleBar = document.querySelector('.toggleBar');
const darkBtn = document.querySelector('.darkTheme');
const lightBtn = document.querySelector('.lightTheme');
const dark = document.querySelector('.dark');
const light = document.querySelector('.light');
const card = document.querySelectorAll('.card');


//function for darkTheme
const darkTheme = function() {
    body.style.background = 'hsl(230, 17%, 14%)';
    header.style.background = 'hsl(232, 19%, 15%)';
    light.style.display = 'none';
    dark.style.display = 'block';
    p.forEach(e => e.style.color = 'white');
    h2.forEach(e => e.style.color = 'white');
    h3.forEach(e => e.style.color = 'white');
    toggleBar.style.background = 'linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))';
    card.forEach(e => e.style.background = 'hsl(228, 28%, 20%)');
    // card.forEach(card.addEventListener('mouseover', function() {
    //     card.style.background = 'white';
    // }))
    // card.forEach(card.addEventListener('mouseout', function() {
    //     card.style.background = 'hsl(228, 28%, 20%)';
    // }))
};

const lightTheme = function() {
    body.style.background = 'hsl(0, 0%, 100%)';
    header.style.background = 'hsl(225, 100%, 98%)';
    dark.style.display = 'none';
    light.style.display = 'block';
    p.forEach(e => e.style.color = 'hsl(230, 17%, 14%)' );
    h2.forEach(e => e.style.color = 'hsl(230, 17%, 14%)');
    h3.forEach(e => e.style.color = 'hsl(230, 17%, 14%)');
    toggleBar.style.background = 'hsl(230, 22%, 74%)';
    lightBtn.style.background = 'white';
    card.forEach(e => e.style.background = 'hsl(227, 47%, 96%)');
    // card.forEach(card.addEventListener('mouseover', function() {
    //     card.style.background = 'white';
    // }))
    // card.forEach(card.addEventListener('mouseout', function() {
    //     card.style.background = 'hsl(228, 28%, 20%)';
    // }))
}

darkBtn.addEventListener('click', function() {
    darkTheme();
    darkBtn.style.opacity = '1';
    lightBtn.style.opacity = '0';
});

lightBtn.addEventListener('click', function() {
    lightTheme();
    darkBtn.style.opacity = '0';
    lightBtn.style.opacity = '1';
});

// default state/theme
window.onload = function() {
    darkTheme();
    lightBtn.style.opacity = '0';
};