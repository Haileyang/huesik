// HEADER STICKY
window.onscroll = function () {
    headerSticky()
    
};
window.onload = function () {
    headerSticky()
};

const header = document.querySelector('header')
var sticky = header.offsetTop;
function headerSticky() {
    if (window.pageYOffset > sticky) {
        header.classList.add("header-sticky");
    } else {
        header.classList.remove("header-sticky");
    }
}

// SELECT ALL
function selectAll(selectAll)  {
    const checkboxes = document.getElementsByName('agree-post');
    const checkAll = document.querySelector('.check-all')
    checkAll.classList.toggle('on')
    checkboxes.forEach((checkbox) => {
        checkbox.checked = selectAll.checked;
    })
}

// MODAL
function modalClose(event){
    let target = event.target;
    let modal = target.closest('.modal')
    modal.classList.remove('.show')

}

// ACCORDIAN
const accordianItemHeaders = document.querySelectorAll(
    ".accordian-item-header"
);

accordianItemHeaders.forEach(accordianItemHeader => {
    accordianItemHeader.addEventListener("click", () => {
        const current = document.querySelector(".accordian-item-header.active");

        if (current && current !== accordianItemHeader) {
            current.classList.toggle("active");
            current.nextElementSibling.style.maxHeight = 0;
        }
        accordianItemHeader.classList.toggle("active");

        const accordianItemBody = accordianItemHeader.nextElementSibling;

        if (accordianItemHeader.classList.contains("active")) {
            accordianItemBody.style.maxHeight = accordianItemBody.scrollHeight + "px";
        } else {
            accordianItemBody.style.maxHeight = 0;
        }
    });
});

// ROLLING
jQuery(document).ready(function ($) {
    $('.my-news-ticker').AcmeTicker({
        type:'horizontal',
        direction: 'right',
        
    });
})

//TAB MENU VISIBILITY EVENT -start
const tabContents = document.querySelectorAll('.tab-content')
const tabLists = document.querySelectorAll('.tab-list')

tabLists.forEach((item, idx) => {
    item.addEventListener('click', () => {
      hideAllContents()
      hideAllItems()
      item.classList.add('on')
      tabContents[idx].classList.add('on')
    })

})

function hideAllContents() {
    tabContents.forEach(tabContent => tabContent.classList.remove('on'))
}

function hideAllItems() {
    tabLists.forEach(tabList => tabList.classList.remove('on'))
}

// CALENDAR
$( function() {
    $( "#datepicker" ).datepicker({
        dayNames: ['SUN', 'MON', 'TUE','WED','THU','FRI','SAT'],
        dayNamesMin: ['SUN', 'MON', 'TUE','WED','THU','FRI','SAT'],
        monthNames: ['1','2','3','4','5','6','7','8','9','10','11','12']
    })
} );


// LOADING ANIMATION JS
document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('.loading-wrap').classList.add('on')
    document.querySelector('body').classList.add('loading')
});
window.addEventListener("load", function(){
    document.querySelector('.loading-wrap').classList.remove('on')
    document.querySelector('body').classList.remove('loading')
});