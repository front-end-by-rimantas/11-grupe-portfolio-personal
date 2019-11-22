"use strict";

// header
renderTopMenu(menu);
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

