let prod=JSON.parse(localStorage.getItem("selected-for-order"));

let image_info=document.querySelector("#image-info");
let h1=document.createElement("h1");
image_info.append(h1);
h1.innerText=prod.carName;

let spanFuel=document.createElement("span");
spanFuel.innerText=prod.Fuel;
image_info.append(spanFuel);
spanFuel.style.color="grey"
spanFuel.style.marginRight="40px"

let spanTransmission=document.createElement("span");
spanTransmission.innerText=prod.Transmission;
image_info.append(spanTransmission);
spanTransmission.style.color="grey"

let City=document.createElement("p");
City.innerText=prod.city;
image_info.append(City);
City.style.color="grey";

let carimage=document.createElement("img");
carimage.setAttribute("src",prod.carimage);
carimage.style.width="100%"
image_info.append(carimage);


let promo=document.querySelector("#promocode");
promo.addEventListener("click",function(event){
    event.preventDefault();
    document.querySelector("#promo-section").innerHTML="";
    let inputpromo=document.createElement("input");
    document.querySelector("#price-info").append(inputpromo);
    inputpromo.setAttribute("id","inputpromo");
    inputpromo.setAttribute("placeholder","Enter the promo code");
    let divSuccess=document.createElement("div");
    divSuccess.setAttribute("id","promoSuccess");
    document.querySelector("#price-info").append(divSuccess);
    let applypromo=document.querySelector("#inputpromo");
    applypromo.addEventListener("input",function(){
        if(applypromo.value=="REVV30"){
            applypromo.style.backgroundColor="green";
            applypromo.style.color="white"
            divSuccess.innerText="PROMO  CODE APPLIED"
            document.querySelector("#promoSuccess").style.color="green";
            let amount=localStorage.getItem("booking-amount");
            amount=amount-(amount*30)/100;
            document.querySelector("#booking-amount>h1").innerText="₹ "+amount;
        }else if(applypromo.value==""){
            divSuccess.innerText="ENTER YOUR PROMO";
            document.querySelector("#promoSuccess").style.color="black";
            applypromo.style.backgroundColor="white";
            document.querySelector("#booking-amount>h1").innerText="₹ "+ ((+prod.price)+4000+11000);
        }else{
            applypromo.style.backgroundColor="initial";
            applypromo.style.color="red";
            document.querySelector("#promoSuccess").innerText="NOT A PROMO CODE";
            document.querySelector("#promoSuccess").style.color="red"
            document.querySelector("#booking-amount>h1").innerText="₹ "+ ((+prod.price)+4000+11000);
        }
    })
})

let price_info=document.querySelector("#price-info");

document.querySelector("#subscription-tenure").innerText=localStorage.getItem("subscription-tenure") +" months";

document.querySelector("#monthly-fee").innerText="₹ " +prod.price +"/mo";
document.querySelector("#Insurance-and-maintenance").innerText="₹ " +4000 +"/mo";

document.querySelector("#total-monthly-fee").innerText="₹ "+ ((+prod.price)+4000) + "/mo";

document.querySelector("#processing-fee").innerText="₹ "+ 1000;
document.querySelector("#refundable-fee").innerText="₹ "+ 10000;

document.querySelector("#booking-amount>h1").innerText="₹ "+ ((+prod.price)+4000+11000);
let booking_amount=((+prod.price)+4000+11000);
localStorage.setItem("booking-amount",booking_amount);

let buttonProceed=document.createElement("button");
buttonProceed.innerText="Reserve";
buttonProceed.setAttribute("id","Reserve")
document.querySelector("#price-info").append(buttonProceed);
buttonProceed.addEventListener("click",function(){
    event.preventDefault();
    window.location.href="login.html"
})


