"use strict";

// header
renderFirstLevelMenu(menu);
// hero

// clients

// about me

// numbers

// skills

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

// brands

renderBrands(brands);

// footer

