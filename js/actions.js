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
    const child = hamburger.childNodes[0]
    child.classList.toggle('lnr-menu')
    child.classList.toggle('lnr-cross')
    mContainer.style.display = mContainer.style.display === 'grid' ? 'none' : 'grid'
    scroll = false
    scrollPosition = window.scrollY
})

overlay.addEventListener('click', () => {
    const child = hamburger.childNodes[0]
    child.classList.toggle('lnr-menu')
    child.classList.toggle('lnr-cross')
    mContainer.style.display = mContainer.style.display === 'none' ? 'grid' : 'none'
    scroll = true
})

const mobileMenuItems = document.querySelectorAll('.m-menu .menu-item > a')
const desktopMenuItems = document.querySelectorAll('.top-menu .menu-item > a')

desktopMenuItems.forEach((i) => {
    i.addEventListener('click', (e) => {
        let activeElements = document.querySelectorAll('.menu-item-active')
        scroll = true
        activeElements.forEach((el) => {
            el.classList.remove('menu-item-active')
        })
        let item = e.target
        let itemText = item.textContent

        allMenuItems.forEach((i) => {
            if (i.textContent === itemText) {
                i.classList.add('menu-item-active')
            }
        })
    })
})

mobileMenuItems.forEach((i) => {
    i.addEventListener('click', (e) => {
        let activeElements = document.querySelectorAll('.menu-item-active')
        scroll = true
        mContainer.style.display = mContainer.style.display === 'none' ? 'grid' : 'none'
        const child = hamburger.childNodes[0]
        child.classList.toggle('lnr-menu')
        child.classList.toggle('lnr-cross')
        activeElements.forEach((el) => {
            el.classList.remove('menu-item-active')
        })

        let item = e.target
        let itemText = item.textContent

        allMenuItems.forEach((i) => {
            if (i.textContent === itemText) {
                i.classList.add('menu-item-active')
            }
        })
    })
})

window.addEventListener('scroll', () => {
    if (scroll === false) {
        window.scrollTo({
            top: scrollPosition,
            left: 0,
            behavior: 'smooth'
        })
    }
})

document.addEventListener('click', (e) => {
    // let item = e.target
    // console.log(item.text)
    // console.log(item.tagName)
    // console.log(item.tagName)
    // console.log(item.classList)
    // let a = document.querySelector('.menu-item-active').classList.remove('menu-item-active')
    // item.classList.add('menu-item-active')
    // console.log(document.querySelector('.menu-item-active'))
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

// blogs

renderBlogs(blogs);

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
let brandsInterval = setInterval(brandsAnimation, 2000);

// footer
