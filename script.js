let pictures = document.querySelectorAll(".images");
let imgName = document.querySelectorAll(".img_name");
imgName.forEach((elem)=>{
    elem.addEventListener("click", showImage);
})

     