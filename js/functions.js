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

function counterDontWorry(data) {
    let counter = [0,0,0,0];
    let step = 100;
    let increment = 0;
    const query = document.querySelectorAll('.numcounter'); 

    let counterFunction = function() {
        for(let i=0; i<data.length; i++){
            query[i].textContent = counter[i];
            increment = Math.round(data[i].number / step);
            if (counter[i] >= data[i].number){
                counter[i] = data[i].number;
              clearInterval(this);
            } else {
                counter[i] += increment;
            }
          }
        }
    setInterval(counterFunction, 20);
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

//pricing

function renderPlans(data) {
    let HTML = ''
    for (let i = 0; i < data.length; i++) {
        HTML += `<div class="price-item ">
                    <div class="top-section">
                        <h1>${data[i].id}</h1>
                        <h4>${data[i].title}</h4>
                        <p>${data[i].description}</p>
                    </div>
                    <div class="middle-section">
                        <ul>
                            <li>${data[i].feature1}</li>
                            <li>${data[i].feature2}</li>
                            <li>${data[i].feature3}</li>
                        </ul>
                    </div>
                    <div class="bottom-section">
                        <h4>&euro;${data[i].price}</h4>
                        <a href="" class="btn-white">Buy now</a>
                    </div>
                </div>`
    }

    return document.querySelector(".plans").innerHTML = HTML;
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
