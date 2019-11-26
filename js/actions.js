"use strict";

// header
renderHeadMenu(menu);
renderMobileMenu(menu);
const hamburger = document.querySelector('.hamburger')
const overlay = document.querySelector('.overlay')
const mContainer = document.querySelector('.m-container')
let nera = true
let neraPosition = 0
hamburger.addEventListener('click', () => {
    const child = hamburger.childNodes[0]
    child.classList.toggle('lnr-menu')
    child.classList.toggle('lnr-cross')
    mContainer.style.display = mContainer.style.display === 'grid' ? 'none' : 'grid'
    nera = false
    neraPosition = window.scrollY
})

overlay.addEventListener('click', () => {
    const child = hamburger.childNodes[0]
    child.classList.toggle('lnr-menu')
    child.classList.toggle('lnr-cross')
    mContainer.style.display = mContainer.style.display === 'none' ? 'grid' : 'none'
    nera = true
})


window.addEventListener('scroll', (e) => {
    if (nera === false) {
        window.scrollTo({
            top: neraPosition,
            left: 0,
            behavior: 'smooth'
        })
    }
})


document.addEventListener('click', (e) => {
    let item = e.target
    console.log(item)
    let a = document.querySelector('.menu-item-active').classList.remove('menu-item-active')
    console.log(a)
    item.classList.add('menu-item-active')
    console.log(document.querySelector('.menu-item-active'))
})




const menuItemToggle = document.querySelectorAll('.menu-item > span')
const child = document.querySelectorAll('.has-child > ul > .show')
child.forEach((e) => {
    e.classList.remove('show')
})
/**
 * @param
 * @returns
 */
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

// job history

// projects

renderProjectFilters(categories)
renderGallery(projects)
let activeFilter = document.querySelector('.gallery .filters li.filter-active')
var category = activeFilter.getAttribute('filter-data')
const ul = document.querySelector('.filters')
ul.addEventListener('click', (e) => {
    activeFilter = document.querySelector('.gallery .filters li.filter-active')
    let target = e.target
    activeFilter.classList.remove('filter-active')
    target.classList.add('filter-active')
    category = target.getAttribute('filter-data')
    let data = getGalleryData(projects, category)
    renderGallery(data)
})


// testimonials

renderTestimonials(testimonials);
testimonialControl();
setTimeout(autoFeedback, 5000);

//pricing

renderPlans(plans);

// brands

renderBrands(brands);

// footer

