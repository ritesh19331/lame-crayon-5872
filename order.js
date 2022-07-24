let prod=JSON.parse(localStorage.getItem("selected-for-order"));
let div=document.querySelector("#car-image");
div.setAttribute("src",prod.carimage);

let h1=document.createElement("h1");
h1.innerText=prod.carName;

let container_months=document.createElement("div");
container_months.setAttribute("id","container_months")
let h2=document.createElement("h2");
h2.innerText="Subscription tenure";
document.querySelector("#price-info-and-all").append(h1,h2,container_months)
for(let x=0; x<4; x++){
    let box=document.createElement("div");
    container_months.append(box);
    box.setAttribute("id","months");
    box.innerText=x+1+"\nMonths";
    if(x==3){
        box.innerText=x+3+"\nMonths";
    }
}

let subscription_array=document.querySelectorAll("#months");
subscription_array.forEach(function(el,i){
    let count=0;
    el.addEventListener("click",function(){
        subscription_array.forEach(function(ele){
            ele.style.backgroundColor="white";
        })
        el.style.backgroundColor="#49a6ba";
        let SubscriptionTenure=i+1;
        if(i==3){
            SubscriptionTenure=i+3;
        }
        localStorage.setItem("subscription-tenure",SubscriptionTenure);
    })
})

let price=document.createElement("span");
price.setAttribute("id","price")
price.innerText="₹ "+prod.price;
price.style.fontSize="60px"
document.querySelector("#price-info-and-all").append(price)

let permonth=document.createElement("span");
permonth.innerText="/month               ";
permonth.setAttribute("id","permonth");
document.querySelector("#price-info-and-all").append(permonth);

let permonthMRP=document.createElement("span");

let mrp=0;
for(let i=0; i<=(prod.price+8000); i+=5000){
    permonthMRP.innerText="₹ "+i;
    mrp=i;
}
permonthMRP.setAttribute("id","permonthMRP");
document.querySelector("#price-info-and-all").append(permonthMRP);

let discount=document.createElement("span");
discount.setAttribute("id","discount")
discount.innerText=" \("+Math.floor(((mrp-prod.price)/mrp)*100)+" % Off \)";
console.log(prod.price)
document.querySelector("#price-info-and-all").append(discount);

let inclusiveOfTax=document.createElement("h3");
inclusiveOfTax.innerText="\( Inclusive of taxes \)";
inclusiveOfTax.style.color="grey";
inclusiveOfTax.style.fontFamily="-apple"
inclusiveOfTax.style.marginTop="-25px;"
document.querySelector("#price-info-and-all").append(inclusiveOfTax);

let proceed=document.createElement("div");
proceed.setAttribute("id","proceed");
document.querySelector("#price-info-and-all").append(proceed);
proceed.innerText="Proceed";
proceed.addEventListener("click",function(){
    event.preventDefault();
    window.location.href="reserve.html"
})

let fuel=document.querySelector("#fuel>p");
fuel.innerText=prod.Fuel;

let transmission=document.querySelector("#transmission>p");
transmission.innerText=prod.Transmission;





