"use strict";

// header
renderHeadMenu(menu);
renderMobileMenu(menu);
const hamburger = document.querySelector('.hamburger')
const overlay = document.querySelector('.overlay')
const mContainer = document.querySelector('.m-container')
const allMenuItems = document.querySelectorAll('.menu-item > a')
let scroll = true
let scrollPosition = 0

hamburger.addEventListener('click', () => {
    hamburgerIconChange()
    mContainer.style.display = mContainer.style.display === 'grid' ? 'none' : 'grid'
    scroll = false
    scrollPosition = window.scrollY
})

overlay.addEventListener('click', () => {
    hamburgerIconChange()
    mContainer.style.display = mContainer.style.display === 'grid' ? 'none' : 'grid'
    scroll = true
})

const mobileMenuItems = document.querySelectorAll('.m-menu .menu-item > a')
const desktopMenuItems = document.querySelectorAll('.top-menu .menu-item > a')


renderMainMenu(desktopMenuItems, 'desktop')
renderMainMenu(mobileMenuItems, 'mobile')

window.addEventListener('scroll', () => {
    if (scroll === false) {
        window.scrollTo({
            top: scrollPosition,
            left: 0,
            behavior: 'smooth'
        })
    }
})

mobileMenuToggling()
window.addEventListener('scroll', headerShadow)

// hero

// clients

// about me

// numbers

renderNumbers(numbers);
counterDontWorry(numbers);

// services

renderServices(services);

// latest work

// blogs

renderBlogs(blogs);

// projects

const itemsPerPage = 6

renderProjectFilters(categories)
renderGallery(projects, categories, itemsPerPage)
let activeFilter = document.querySelector('.gallery .filters li.filter-active')
const ul = document.querySelector('.filters')
ul.addEventListener('click', (e) => {
    activeFilter = document.querySelector('.gallery .filters li.filter-active')
    activeFilter.classList.remove('filter-active')

    let target = e.target
    target.classList.add('filter-active')

    let category = target.getAttribute('filter-data')
    let data = getGalleryData(projects, category)
    renderGallery(data, categories, itemsPerPage)
})


// testimonials

renderTestimonials(testimonials);
testimonialControl();
setTimeout(autoFeedback, 5000);

//pricing

renderPlans(plans);

// brands

renderBrands(brands);
setTimeout(brandsAnimation, 2000);

// footer

