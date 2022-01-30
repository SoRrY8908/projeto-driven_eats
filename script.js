let food_selected = false;
let beverage_selected = false;
let dessert_selected = false;

let food_name = "";
let beverage_name = "";
let dessert_name = "";

let food_price = 0.0;
let beverage_price = 0.0;
let dessert_price = 0.0;

let total_price = 0.0;

let username = "";
let address ="";

function select_food(element, foodName, foodPrice){
    food_name = foodName;
    food_price = foodPrice;
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

function select_beverage(element, beverageName, beveragePrice){
    beverage_name = beverageName;
    beverage_price = beveragePrice;
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

function select_dessert(element, dessertName, dessertPrice){
    dessert_name = dessertName;
    dessert_price = dessertPrice;
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
    total_price = food_price + beverage_price + dessert_price;
    const name = document.querySelectorAll(".names p");
    name[0].innerHTML = food_name;
    name[1].innerHTML = beverage_name;
    name[2].innerHTML = dessert_name;
    const price = document.querySelectorAll(".prices p");
    price[0].innerHTML = food_price.toFixed(2);
    price[1].innerHTML = beverage_price.toFixed(2);
    price[2].innerHTML = dessert_price.toFixed(2);
    price[3].innerHTML = "R$ " + total_price.toFixed(2);
    username = prompt("Qual seu nome?");
    address = prompt("Qual seu endereço?");
    const msg = encodeURIComponent('Olá, gostaria de fazer o pedido:' +
    '\n - Prato: ' + food_name +
    '\n - Bebida: ' + beverage_name +
    '\n - Sobremesa: ' + dessert_name +
    '\n Total: *R$ ' + total_price.toFixed(2) + '*' +
    '\n\n Nome: ' + username +
    '\n Endereço: ' + address);
    document.querySelector(".checkout-info button").innerHTML = "<a href=https://wa.me/5519981356521?text=" + msg + ">Tudo certo, pode pedir!</a>";
    
}

function cancel_items(){
    document.querySelector(".checkout").classList.add("hide");
}


