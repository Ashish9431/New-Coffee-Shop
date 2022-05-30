// Add the coffee to local storage with key "coffee"

let read = (id)=>{
    return document.getElementById(id).value
}

let creat = (id)=>{
   return document.createElement(id);
}

let get = (id)=>{
return document.getElementById(id);
}


let coffeearr = JSON.parse(document.getElementById("coffee")) || [];
async function myfun(){
    let url = "https://masai-mock-api.herokuapp.com/coffee/menu";
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.menu.data);
    add(data.menu.data);
}




function add(data){
    get("display").innerHTML=null;



    data.forEach(function(el){

    let box = creat("div");
    box.id="poster"
    // box.style.height="300px";
    // box.style.width="300px";
    let img11 = creat("img");
    img11.src = el.image;
    img11.id="cimage"

    let title = creat("h4");
    title.innerText = `coffee: ${el.title}`;

    let price = creat("h3");
    price .innerText=`price:${el.price}`;

    let btn = creat("button");
    btn.innerText="Add to Bucket";
    btn.id="btn1";
    btn.addEventListener("click",function(){
        addcoffee(el);
    })

    box.append(img11,title,price,btn);
    get("display").append(box);








    })
}


function addcoffee(el){
    coffeearr.push(el);
    get("count").innerText=coffeearr.length;
    localStorage.setItem("coffee",JSON.stringify(coffeearr));
}

myfun();

