let food_selected = false;
let beverage_selected = false;
let dessert_selected = false;

let food_name = "";
let beverage_name = "";
let dessert_name = "";

let food_price = "";
let beverage_price = "";
let dessert_price = "";


function select_food(element, foodName, foodPrice){
    const food_items = document.querySelectorAll(".food .frame")
    for(let i = 0; i<food_items.length; i++){
        food_items[i].classList.add("hide");
    }
    const aux = element.querySelector(".frame");
    aux.classList.remove("hide");
    food_selected = true;
    if(food_selected && beverage_selected && dessert_selected){
        const foot = document.querySelectorAll("footer button");
        foot[0].classList.add("hide");
        foot[1].classList.remove("hide");
    }
}

function select_beverage(element){
    const beverage_items = document.querySelectorAll(".beverage .frame")
    for(let i = 0; i<beverage_items.length; i++){
        beverage_items[i].classList.add("hide");
    }
    const aux = element.querySelector(".frame");
    aux.classList.remove("hide");
    beverage_selected = true;
    if(food_selected && beverage_selected && dessert_selected){
        const foot = document.querySelectorAll("footer button");
        foot[0].classList.add("hide");
        foot[1].classList.remove("hide");
    }
}

function select_dessert(element){
    const dessert_items = document.querySelectorAll(".dessert .frame")
    for(let i = 0; i<dessert_items.length; i++){
        dessert_items[i].classList.add("hide");
    }
    const aux = element.querySelector(".frame");
    aux.classList.remove("hide");
    dessert_selected = true;
    if(food_selected && beverage_selected && dessert_selected){
        const foot = document.querySelectorAll("footer button");
        foot[0].classList.add("hide");
        foot[1].classList.remove("hide");
    }
}

function confirm_items(){
    document.querySelector(".checkout").classList.remove("hide");
}



