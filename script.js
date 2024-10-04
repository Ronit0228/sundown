const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

function page4Animation(){
    var elemcon = document.querySelector("#elem-container") 
    var fixed = document.querySelector("#fixed-img")
    elemcon.addEventListener("mouseenter",function(){
        fixed.style.display = "block"
    })
    elemcon.addEventListener("mouseleave",function(){
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem");
    elems.forEach(function(pic){
        pic.addEventListener("mouseenter",function(){
            var image = pic.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}
page4Animation()

function imagepick(){
    var image = document.querySelector("#bottom-1")
    var image2 = document.querySelector("#bottom-2")

    image.addEventListener("mouseenter",function(){
        image2.style.display = "block"
    })
    image.addEventListener("mouseleave",function(){
        image2.style.display = "block"
    })


    var img = document.querySelectorAll(".elem2");
    img.forEach(function(pic2){
        pic2.addEventListener('click',function(){
            var images = pic2.getAttribute("data-image")
            image2.style.backgroundImage = `url(${images})`
            image2.style.display = "block";
        })
    })
}
imagepick()

var writen = document.querySelector("#bottom-1")
var writen2 = document.querySelector("#bottom-3")

var text = document.querySelectorAll(".elem2");
text.forEach(function(tex){
    tex.addEventListener('click',function(){
        var textContent = tex.getAttribute("data-text")
        writen2.textContent = textContent;
        writen2.style.display = "block";
        text.style.display = "block" 
    })
})

function swipper(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}
swipper()
