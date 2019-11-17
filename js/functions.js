"use strict";

// header
function renderMenuOneLevel(menuItems) {
    const oneLevel = ''


    return oneLevel
}

function renderFirstLevelMenu(data) {
    let HTML = ''

    if (!Array.isArray(data)) {
        console.error('ERROR: Data Type must by array')
        return
    }
    if (data.length === 0) {
        console.error("ERROR: Data array can't by empty")
        return
    }

    for (let i = 0; i < data.length; i++) {
        const item = data[i]
        let after = ''
        let active = ''
        let withChild = ''

        if (i === 0) {
            active = 'menu-item-active'
        }
        if (item.children) {
            after += `<span class="fa fa-angle-down"></span>`
            withChild += 'with-child'
        }
        HTML += `<div class="menu-item"><a class="${active} ${withChild}" href="${item.link}">${item.name}${after}</a></div>`
    }

    return document.querySelector('#menu').innerHTML = HTML
}
// hero

// clients

// about me

// numbers

// skills

// latest work

// job history

// services

// testimonials

function renderTestimonials ( data ) {
    let HTML = '';

    for( let i=0; i<data.length; i++) {

        HTML += `<div class="testimonials">
                    <div class="face-icon">
                        <img src="./img/elements/${data[i].icon}" alt="User photo">
                    </div>
                    <div class="testimonial-message">
                        <div class="testimonial-text">
                            <p>${data[i].text}</p>
                        </div>
                        <div class="testimonial-name">
                            <h4>${data[i].name}</h4>
                        </div>
                        <div class="testimonial-job">
                            <p>${data[i].jobtitle}</p>
                        </div>
                    </div>
                </div>`
    }

    return document.querySelector(".row#testimonials").innerHTML = HTML;
}

// brands

function renderBrands ( data ) {
    let HTML = '';

    for( let i=0; i<data.length; i++) {
        HTML += `<a href="#"><img src="./img/brands/${data[i].source}" alt="${data[i].name}"></a>`
    }

    return document.querySelector(".brands").innerHTML = HTML;
}

// footer

