"use strict";

// header

// hero

// clients

// about me

// numbers

// skills

// latest work

// job history

// services

// testimonials

// brands

function renderBrands ( data ) {
    let HTML = '';

    for( let i=0; i<data.length; i++) {
        HTML += `<a href="#"><img src="./img/brands/${data[i].source}" alt="${data[i].name}"></a>`
    }

    return document.querySelector(".brands").innerHTML = HTML;
}

// footer

