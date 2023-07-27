let three = document.querySelector("footer .title")

window.addEventListener('scroll',function(){
    let value = window.scrollY
    console.log("scrollY",value);

    if(value>10300){
        three.style.animation="slide 1s ease-out";
    }else{
        three.style.animation="disappear 1s ease-out forwards";
    }

});