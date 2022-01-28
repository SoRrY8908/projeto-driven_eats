function select_food(element){
    const food_items = document.querySelectorAll(".food .frame")
    for(let i = 0; i<food_items.length; i++){
        food_items[i].classList.add("hide");
    }
    const aux = element.querySelector(".frame");
    aux.classList.remove("hide");
}

function select_beverage(element){
    const beverage_items = document.querySelectorAll(".beverage .frame")
    for(let i = 0; i<beverage_items.length; i++){
        beverage_items[i].classList.add("hide");
    }
    const aux = element.querySelector(".frame");
    aux.classList.remove("hide");
}

function select_dessert(element){
    const dessert_items = document.querySelectorAll(".dessert .frame")
    for(let i = 0; i<dessert_items.length; i++){
        dessert_items[i].classList.add("hide");
    }
    const aux = element.querySelector(".frame");
    aux.classList.remove("hide");
}


