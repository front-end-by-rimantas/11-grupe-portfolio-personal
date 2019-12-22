"use strict";

// header
function hamburgerIconChange() {
    const hamburger = document.querySelector('.hamburger')
    const child = hamburger.childNodes[0]
    child.classList.toggle('lnr-menu')
    child.classList.toggle('lnr-cross')
}

function addActiveClass(allMenuItems, itemText) {
    allMenuItems.forEach((i) => {
        if (i.textContent === itemText) {
            i.classList.add('menu-item-active')
        }
    })
}

function renderMainMenu(mobileMenuItems, menuType) {
    mobileMenuItems.forEach((i) => {
        i.addEventListener('click', (e) => {
            let activeElements = document.querySelectorAll('.menu-item-active')
            activeElements.forEach((el) => {
                el.classList.remove('menu-item-active')
            })
            scroll = true
            if (menuType === 'desktop') {
                mContainer.style.display = 'none'
            }

            if (menuType === 'mobile') {
                mContainer.style.display = mContainer.style.display === 'grid' ? 'none' : 'grid'
                hamburgerIconChange()
                activeElements.forEach((el) => {
                    el.classList.remove('menu-item-active')
                })
            }

            let item = e.target
            let itemText = item.textContent

            addActiveClass(allMenuItems, itemText)
        })
    })

}

function mobileMenuToggling() {
    const menuItemToggle = document.querySelectorAll('.menu-item > span')
    const child = document.querySelectorAll('.has-child > ul > .show')
    child.forEach((e) => {
        e.classList.remove('show')
    })

    menuItemToggle.forEach((i) => {
        i.addEventListener('click', (e) => {
            i.classList.toggle('fa-angle-down')
            i.classList.toggle('fa-angle-up')
            let children = i.nextElementSibling.childNodes

            children.forEach((e) => {
                e.classList.toggle('show')
            })
        })
    })
}

function renderSubLevelMenu(data) {
    if (!Array.isArray(data)) {
        console.error('ERROR: Data Type must by array')
        return
    }
    if (data.length === 0) {
        console.error("ERROR: Data array can't by empty")
        return
    }

    let subMenu = ''

    for (let i = 0; i < data.length; i++) {
        const item = data[i]
        let after = ''
        let hasChild = ''
        let sub = ''

        if (item.children) {
            after += `<span class="fa fa-angle-right"></span>`
            sub += renderSubLevelMenu(item.children)
        }
        subMenu += `<li >
                <a class=" ${hasChild}" href="${item.link}">${item.name}${after}</a>
                ${sub}
                </li>`
    }

    return `<ul class="sub-menu">${subMenu}</ul>`
}

function renderMenu(data) {
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
        let subMenu = ''

        if (data[i].id === 1) {
            active = 'menu-item-active'
        }
        if (item.children) {
            after += `<span class="fa fa-angle-down"></span>`
            withChild += 'has-child'
            subMenu += renderSubLevelMenu(item.children)
        }
        HTML += `<div class="menu-item">
                <a class="${active} ${withChild}" href="${item.link}">${item.name}${after}</a>
                ${subMenu}
                </div>`
    }
    return HTML
}

function renderMobile(data) {
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
        let subMenu = ''

        if (data[i].id === 1) {
            active = 'menu-item-active'
        }
        if (item.children) {
            after += `<span class="fa fa-angle-down"></span>`
            withChild += 'has-child'
            subMenu += renderMobile(item.children)
        }
        HTML += `<li class="menu-item ${withChild} show">
                <a class="${active}" href="${item.link}">${item.name}</a>
                ${after}
                ${subMenu}
                </li>`
    }
    return `<ul>${HTML}</ul>`
}

function renderHeadMenu(data) {
    return document.querySelector('.top-menu').innerHTML = renderMenu(data)
}

function renderMobileMenu(data) {
    return document.querySelector('.m-menu').innerHTML = renderMobile(data)
}


function headerShadow() {
    if (window.scrollY > 80) {
        document.querySelector('#header').classList.add('header-shadow')
    } else {
        document.querySelector('#header').classList.remove('header-shadow')
    }
}

// hero

// clients

// about me

// numbers

function renderNumbers(data) {
    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        HTML += `<div class="numbers-col">
                    <h2 class="numcounter">${data[i].number}</h2>
                    <p>${data[i].name}</p>
                </div>`
    }

    return document.querySelector('.numbers').innerHTML = HTML;
}

function counterDontWorry(data) {
    let counter = [0, 0, 0, 0];
    let step = 100;
    let increment = 0;
    const query = document.querySelectorAll('.numcounter'); 
    const numbersSection = document.querySelector('.numbers');

    let counterFunction = function() {
        if (window.scrollY + window.innerHeight > numbersSection.offsetTop){
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
    }
    setInterval(counterFunction, 20);
}

// services

function renderServices(data) {
    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        HTML += `<div class="services">
                    <i class="${data[i].icon}"></i><br>
                    <h4>${data[i].title}</h4>
                    <p>${data[i].text}</p>
                </div>`;
    }

    return document.querySelector('#services').innerHTML = HTML;
}

// latest work

// blogs

function renderBlogs (data) {
    let HTML = '';

    for (let i=0; i<data.length; i++) {
        HTML += `<div class="blog">
                    <div class="top">
                        <div class="toptop">
                            <div class="blogpic"><img src="./img/blog/${data[i].image}" alt="blog-pic"></div>
                        </div>
                            <img src="./img/${data[i].authorimage}" alt="user-pic" id="user">
                    <p class="under-blog">${data[i].date}<i class="lnr lnr-heart"></i>${data[i].likes}<i class="lnr lnr-bubble"></i>${data[i].comments}</p>
                    </div>
                        <h4 class="uppercase">${data[i].title}</h4>
                        <p>${data[i].text}</p>
                </div>`
    }

    return document.querySelector('#blogs').innerHTML = HTML;
}

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

function renderGallery(data, categories, itemsPerPage) {
    let HTML = ''
    for (let i = 0; i < itemsPerPage; i++) {
        if (data.length < itemsPerPage) {
            itemsPerPage = data.length
        }
        let catName = ''
        for (let j = 0; j < categories.length; j++) {
            if (data[i].category_id === categories[j].id) {
                catName = categories[j].name
            }
        }

        HTML += `<div class="f-content">
                        <div class="thumb">
                            <div class="img-overlay"></div>
                            <img src="./img/projects/${data[i].image}" alt="${data[i].image}">
                            <a href="#" class="cont-link fa fa-eye"></a>
                        </div>
                        <div class="cont-description">
                            <h4>${data[i].title}</h4>
                            <p class="c-category">${catName}</p>
                        </div>
                    </div>`
    }


    return document.querySelector(".filters-content").innerHTML = HTML;

}
// testimonials

function renderTestimonials(data) {
    let HTML = '';

    for (let i = 0; i < data.length; i++) {

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


function testimonialControl () {

    const carousel = document.querySelector('.carousel');
    const slider = document.querySelector('.slider');

    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');
    let direction;

    next.addEventListener('click', function () {
        direction = -1;
        carousel.style.justifyContent = 'flex-start';
        slider.style.transform = 'translate(-20%)';
    });

    prev.addEventListener('click', function () {
        if (direction === -1) {
            direction = 1;
            slider.appendChild(slider.firstElementChild);
        }
        carousel.style.justifyContent = 'flex-end';
        slider.style.transform = 'translate(20%)';

    });

    slider.addEventListener('transitionend', function () {
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

function autoFeedback() {
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

function renderBrands(data) {
    let HTML = '';

    for( let i=0; i<data.length; i++) {
        HTML += `<div class="soloBrand">
                    <a href="#"><img src="./img/brands/${data[i].source}" alt="${data[i].name}"></a>
                </div>`;
    }

    return document.querySelector(".brands").innerHTML = HTML;
}

function autoBrandsNext() {
    const brands = document.querySelector('.brands');
    let w = window.innerWidth;
    let translate = 0;
    
    if(w > 1040) {
        translate = 20;
    }
    if(w < 1040) {
        translate = 35;
    }
    if(w < 640) {
        translate = 70;
    }
    brands.style.transform = 'translate(-'+translate+'%)';
}

function autoBrandsDelete() {
    const brands = document.querySelector('.brands');

    brands.removeChild(brands.childNodes[0]);
    brands.style.transition = 'none';
    brands.style.transform = 'translate(0)';
    setTimeout(() => {
        brands.style.transition = 'all 0.5s';
      })
}

function brandsAnimation() {
    const soloBrand = document.querySelector('.soloBrand');
    const allBrands = document.querySelector('.brands');

    // Padarom pirmo vaiko klona ir nukeliam ji i gala
    let firstBrandClone = soloBrand.cloneNode(true);
    allBrands.appendChild(firstBrandClone);

    // Paslenkam brandus i sona
    autoBrandsNext();

    // Istrinam pirma vaika, kuris nuejo i sona ir pakeiciam antra vaika pirmu, kai pasislinkimas baigtas

    allBrands.addEventListener('transitionend', autoBrandsDelete);

    // Kartojam funkcija per nauja

    setTimeout(brandsAnimation, 2000);
}
