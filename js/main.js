$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY >20){
            $('.navBar').addClass("sticky");
        }else{
            $('.navBar').removeClass("sticky");
        }
    });
    
    // TOGGLE MENU
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // OWL CAROUSEL
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText:[$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')]
    });
    
});

// GALLERY
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".image");

window.onload = ()=> {
    filterItem.onclick = (selectedItem)=> {
        if(selectedItem.target.classList.contains("item")){
            filterItem.querySelector(".active").classList.remove("active");
            selectedItem.target.classList.add("active")
            let filterName = selectedItem.target.getAttribute("data-name");
            filterImg.forEach((image)=>{
                let filterImages = image.getAttribute("data-name");
                if((filterImages == filterName) || filterName == "all") {
                    image.classList.remove("hide");
                    image.classList.add("show");
                }
                else {
                    image.classList.add("hide");
                    image.classList.remove("show");
                }
            });
        }
    }

    for (let index = 0; index < filterImg.length ; index++) {
        filterImg[index].setAttribute("onclick", "preview(this)");
    }
}

// FULLSCREEN PREVIEW (GALLERY)
const previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
categoryName = previewBox.querySelector(".title p"),
closeIcon = previewBox.querySelector(".icon"),
shadow = document.querySelector(".shadow");

function preview(element) {
    document.querySelector("body").style.overflow = "hidden";
    let selectedPrevImg = element.querySelector("img").src;
    let selectedImgCategory = element.getAttribute("data-name");
    categoryName.textContent = selectedImgCategory;
    previewImg.src = selectedPrevImg;
    previewBox.classList.add("show");
    shadow.classList.add("show");
    closeIcon.onclick = ()=>{
        previewBox.classList.remove("show");
        shadow.classList.remove("show");
        document.querySelector("body").style.overflow = "scroll";
    }
}