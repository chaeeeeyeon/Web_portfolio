let first = document.querySelector(".first .title")
let two = document.querySelector(".two .title")

window.addEventListener('scroll', function () {
    let value = window.scrollY
    console.log("scrollY", value);

    if(value > 1277){
        first.style.animation = "slide 1s ease-out";
    }else{
        first.style.animation = "disappear 1s ease-out forwards";
    }if(value > 3700) {
        two.style.animation = "slide 1s ease-out";
    }else{
        two.style.animation = "disappear 1s ease-out forwards";
    }

});
