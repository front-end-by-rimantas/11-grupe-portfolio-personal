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

    return document.querySelector(".carousel > .slider").innerHTML = HTML;
}

let pause = 0;

function testimonialControl () {

    const carousel = document.querySelector('.carousel');
    const slider = document.querySelector('.slider');
    
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');
    let direction;

    next.addEventListener('click', function() {
      direction = -1;
      carousel.style.justifyContent = 'flex-start';
      slider.style.transform = 'translate(-20%)';  
    });
    
    prev.addEventListener('click', function() {
      if (direction === -1) {
        direction = 1;
        slider.appendChild(slider.firstElementChild);
      }
      carousel.style.justifyContent = 'flex-end';    
      slider.style.transform = 'translate(20%)';  
      
    });
    
    slider.addEventListener('transitionend', function() {  
      if (direction === 1) {
        slider.prepend(slider.lastElementChild);
      } else {
        slider.appendChild(slider.firstElementChild);
      }
      
      slider.style.transition = 'none';
      slider.style.transform = 'translate(0)';
      setTimeout(() => {
        slider.style.transition = 'all 0.5s';
      })
    }, false);
}

function autoFeedback () {

    const slider = document.querySelector('.slider');
    slider.style.transform = 'translate(-20%)';
    
    setTimeout(autoFeedback, 5000);
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
