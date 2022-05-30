// On clicking remove button the item should be removed from DOM as well as localstorage.

let read = (id)=>{
    return document.getElementById(id).value
}

let creat = (id)=>{
   return document.createElement(id);
}

let get = (id)=>{
return document.getElementById(id);
}

// On clicking remove button the item should be removed from DOM as well as localstorage.
let coffeeitem = JSON.parse(localStorage.getItem("coffee"));
add(coffeeitem);
function add(coffeeitem) {

    let total = coffeeitem.reduce(function (sum, el) {
        return sum + Number(el.price);
    }, 0)
    //console.log(total);
    document.getElementById("amount").innerText = total;

    document.getElementById("display").innerHTML = null;
    coffeeitem.map(function (el, i) {
        let box = document.createElement("div");
        box.id="main"
        
        let img11 = document.createElement("img");
        img11.src = el.image;
        img11.id="poster"

        let title = document.createElement("h3");
        title.innerText = `Coffee Name: ${el.title}`;

        let price = document.createElement("h3");
        price.innerText = `Price: ${el.price}`;

        let btn = document.createElement("button");
        btn.innerText = "Remove";
      
        btn.addEventListener("click", function () {
            remove(el, i);
        })

        box.append(img11, title, price, btn);
        document.getElementById("display").append(box);

    })
}
function remove(el, i) {
    coffeeitem.splice(i, 1);
    localStorage.setItem("coffee", JSON.stringify(coffeeitem));
    add(coffeeitem);
}

function check() {
    window.location.href = "checkout.html"
}