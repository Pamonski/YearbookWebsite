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
const filtering = document.querySelectorAll(".image");

window.onload = ()=> {
    filterItem.onclick = (selectedItem)=> {
        if(selectedItem.target.classList.contains("item")){
            filterItem.querySelector(".active").classList.remove("active");
            selectedItem.target.classList.add("active")
            let filterName = selectedItem.target.getAttribute("data-name");
            filtering.forEach((image)=>{
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
}