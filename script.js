function select(element){
    const auxi = document.querySelectorAll(".frame")
    for(let i = 0; i<auxi.length; i++){
        auxi[i].classList.add("hide");
    }
    const aux = element.querySelector(".frame");
    aux.classList.remove("hide");
}


