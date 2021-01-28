/* owl carousel */
$(document).ready(function(){
    $(".owl-carousel__main-banner").owlCarousel({
        items:1,
        nav: true
    });
});

/* burger menu */
(function ($) {
    $(function(){
        $('.icon').on('click', function(){
            $(this).closest('.menu').toggleClass('menu-open');
        });
    });
})(jQuery);

/* city dropdown */
document.getElementById('top-line__menu-city').onclick = function() {
    document.getElementById('city-dropdown').classList.toggle('display-block');
}


/* input type file */
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah').attr('src', e.target.result);
            document.getElementById('information__form-file-p').classList.add('display-none');
            document.getElementById('information__form-clippaper').classList.add('display-none');

            document.getElementById('blah').classList.add('display-block');
            document.getElementById('information__form-remove').classList.add('display-block');
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#file-input").change(function(){
    readURL(this);
});

function  RemoveInputImg() {
    document.getElementById('information__form-file-p').classList.remove('display-none');
    document.getElementById('information__form-clippaper').classList.remove('display-none');
    document.getElementById('information__form-remove').classList.remove('display-block');
    document.getElementById('blah').classList.remove('display-block');

    $('#blah').attr('src', '#');
}

/* modal window - registration */
function displayBlockRegister() {
    var modalRegister = document.getElementById('myModalRegister');
    modalRegister.style.display = "block";
}

function displayNoneRegister() {
    var modalRegister = document.getElementById('myModalRegister');
    modalRegister.style.display = "none";
}

window.addEventListener("click", function(event) {
    var modalRegister = document.getElementById('myModalRegister');
    if (event.target == modalRegister) {
        modalRegister.style.display = "none"
    }
});

/* modal window - login */
function modalStyleDisplayBlockLogin() {
    var modalLogin = document.getElementById('myModalLogin');
    modalLogin.style.display = "block";
}

function modalStyleDisplayNoneLogin() {
    var modalLogin = document.getElementById('myModalLogin');
    modalLogin.style.display = "none";
}

window.addEventListener("click", function(event) {
    var modalLogin = document.getElementById('myModalLogin');
    if (event.target == modalLogin) {
        modalLogin.style.display = "none"
    }
});

/* modal window - adding a product */
function addingProductBlock() {
    var modalLogin = document.getElementById('adding-product');
    modalLogin.style.display = "block";
}

function addingProductNone() {
    var modalLogin = document.getElementById('adding-product');
    modalLogin.style.display = "none";
}

window.addEventListener("click", function(event) {
    var modalLogin = document.getElementById('adding-product');
    if (event.target == modalLogin) {
        modalLogin.style.display = "none"
    }
});

/* modal window - import price list */
function importPriceBlock() {
    var modalLogin = document.getElementById('importPrice');
    modalLogin.style.display = "block";
}

function importPriceNone() {
    var modalLogin = document.getElementById('importPrice');
    modalLogin.style.display = "none";
}

window.addEventListener("click", function(event) {
    var modalLogin = document.getElementById('importPrice');
    if (event.target == modalLogin) {
        modalLogin.style.display = "none"
    }
});

/* question - tabs */
$('.question').click(function() {
    $(this).toggleClass('question__title-color');

    var parent = $(this).closest('.question__wrapper');
    parent.find('.question__text').toggleClass('question-active');
});

/* adding a product - tabs */
var tab;
var tabContent;

window.onload=function () {
    tabContent=document.getElementsByClassName('tabContent');
    tab=document.getElementsByClassName('tab');
    hideTabsContent(1);
}

function hideTabsContent(a) {
    for (var i=a; i<tabContent.length; i++){
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('active');
    }
}

document.getElementById('tabs').onclick=function (event) {
    var target=event.target;
    if (target.className=='tab'){
        for (var i=0; i<tab.length; i++){
            if(target == tab[i]){
                showTabsContent(i);
                break;
            }
        }
    }
}

function showTabsContent(b) {
    if(tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('active');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}

/* adding a product - catalog dropdown */
$('.tab-2__catalog-p').click(function() {
    var parent = $(this).closest('.tab-2__catalog-li');
    parent.find('.tab-2__catalog-ul:first').toggleClass('catalog-active');
});

$('.tab-2__catalog-p').click(function() {
    $(this).toggleClass('tab-2__catalog-p-bold');

    var parent = $(this).closest('.tab-2__catalog-li');
    parent.toggleClass('arrow-down');
});

