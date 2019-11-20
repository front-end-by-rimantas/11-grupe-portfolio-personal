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

function renderNumbers (data){
    let HTML = '';

    for(let i=0; i<data.length; i++) {
        HTML += `<div class="numbers-col">
                    <h2 class="numcounter">${data[i].number}</h2>
                    <p>${data[i].name}</p>
                </div>`
    }

    return document.querySelector('.numbers').innerHTML = HTML;
}


function counter(data) {
    const counter = document.querySelectorAll('.numcounter');
    let duration = 2000;
    let step = 100;
    const sectionNumbers = document.querySelector('.numbers');

    let count = function () {
        if (window.scrollY + window.innerHeight > sectionNumbers.offsetTop) {
            for (let i = 0; i < counter.length; i++) {
                let grow = data[i].number > step ? Math.floor(data[i].number / step) : Math.floor(-data[i].number / step);
                counter[i].textContent = `${data[i].counter}`;
                data[i].counter += grow;

                if (data[i].counter > data[i].number) {
                    data[i].counter = data[i].number;
                    clearInterval(this);
                }
            }
        }
    };

    setInterval(count, duration / step);

}

// skills

// latest work

// job history

// projects
function renderProjectFilters(data) {
    let HTML = '<li class="filter-item filter-active" filter-data="*">All</li>'

    for (let i = 0; i < data.length; i++) {
        HTML += `<li class="filter-item" filter-data=${data[i].id}>${data[i].name}</li>`
    }

    return document.querySelector(".filters").innerHTML = HTML;
}

function getGalleryData(data, category) {
    let galleryItems = []
    if (category === '*') {
        return data
    }
    data.map((item) => {
        if (item.category_id == category) {
            galleryItems.push(item)
        }
    })
    return galleryItems
}

function renderGallery(data) {
    let HTML = ''
    for (let i = 0; i < data.length; i++) {
        HTML += `<div class="f-content">
                        <div class="thumb">
                            <div class="img-overlay"></div>
                            <img src="./img/projects/${data[i].image}" alt="${data[i].image}">
                            <a href="#" class="cont-link fa fa-eye"></a>
                        </div>
                        <div class="cont-description">
                            <h4>${data[i].title}</h4>
                            <p class="c-category">vector</p>
                        </div>
                    </div>`
    }


    return document.querySelector(".filters-content").innerHTML = HTML;

}



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
    let sectionTestimonials = document.querySelector('.carousel');

    if (window.scrollY + window.innerHeight > sectionTestimonials.offsetTop) {
    slider.style.transform = 'translate(-20%)';
    }
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
