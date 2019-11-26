"use strict";

// header
renderHeadMenu(menu);
renderMobileMenu(menu);
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

