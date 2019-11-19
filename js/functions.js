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

// brands

function renderBrands ( data ) {
    let HTML = '';

    for( let i=0; i<data.length; i++) {
        HTML += `<a href="#"><img src="./img/brands/${data[i].source}" alt="${data[i].name}"></a>`
    }

    return document.querySelector(".brands").innerHTML = HTML;
}

// footer

