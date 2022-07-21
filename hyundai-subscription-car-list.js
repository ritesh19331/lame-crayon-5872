
let product=[
    {
        carName: "Hyundai Santro",
        carimage: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/hyundai_santro.jpg",
        Transmission: "Manual",
        Fuel: "Diesel",
        price: 20000  
    },

    {
        carName: "Hyundai Santro AT",
        carimage: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/hyundai_santro.jpg",
        Transmission: "Automatic",
        Fuel: "Petrol",
        price: 21000  
    },

    {
        carName: "Hyundai Grand i10",
        carimage: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Hyundai_grand_i10.jpg",
        Transmission: "Manual",
        Fuel: "Diesel",
        price: 20000  
    },

    {
        carName: "Hyundai Venue",
        carimage: "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/Open/SUV_new/Hyundai_Venue.jpg",
        Transmission: "Manual",
        Fuel: "Diesel",
        price: 24000  
    },

    {
        carName: "Hyundai Creta",
        carimage: "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/Open/SUV_new/Hyundai_creta.jpg",
        Transmission: "Automatic",
        Fuel: "Petrol",
        price: 42000  
    },

    {
        carName: "Hyundai Creta",
        carimage: "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/Open/SUV_new/Hyundai_creta.jpg",
        Transmission: "Manual",
        Fuel: "Petrol",
        price: 31000  
    },

    {
        carName: "Hyundai Grand i10",
        carimage: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Hyundai_grand_i10.jpg",
        Transmission: "Automatic",
        Fuel: "Petrol",
        price: 30000  
    }
];

let car_list=document.querySelector("#car-list");
localStorage.setItem("car-list",JSON.stringify(car_list)) || [];
Display(product);
function Display(product){
    car_list=document.querySelector("#car-list");
    product.forEach(function(el,i){
        let divblock=document.createElement("div");
        let divblock1=document.createElement("div");
        let divblock2=document.createElement("div");
        car_list.append(divblock);
        let count=0;
        divblock.addEventListener("click",function(){
            event.preventDefault();
            if(count==0){
                divblock.style.zoom="150%";
                count++;
            }else{
                divblock.style.zoom="initial"
            }
        })
        let carimage=document.createElement("img");
        carimage.style.width="100%";
        carimage.src=el.carimage;
        divblock1.append(carimage)
    
        divblock.append(divblock1,divblock2);
    
        let divblock1prodNameType=document.createElement("div");
        let divblock1prodPrice=document.createElement("div");
    
    
        divblock2.append(divblock1prodNameType,divblock1prodPrice)
        divblock2.setAttribute("id","car-info")
        let h1=document.createElement("h1");
        divblock1prodNameType.append(h1);
        h1.innerText=el.carName;
    
        let p1=document.createElement("p");
        divblock1prodNameType.append(p1);
        p1.innerText="Unboxed";
        p1.style.color="grey"
    
        let  span1=document.createElement("span");
        span1.innerText=el.Fuel;
    
        let span2=document.createElement("span");
        span2.innerText=el.Transmission;
    
        let h1price=document.createElement("h1");
        h1price.innerText=el.price+"/month"
        divblock1prodPrice.append(h1price);
        divblock1prodPrice.style.display="grid"
        divblock1prodPrice.style.alignItems="center"
        
        divblock1prodNameType.append(span1,span2)
    })
    localStorage.setItem("car-list",JSON.stringify(product))


}

let sort=document.querySelector("#Sort>select");
sort.addEventListener("change",function(){
    event.preventDefault();
    document.querySelector("#car-list").innerHTML="";
    let prod=JSON.parse(localStorage.getItem("car-list"));
    console.log(prod)
    let val=sort.value;
    console.log(val)
    if(val=="Low to High"){
        prod=prod.sort(function(a,b){
            return a.price-b.price;
        })
        
        Display(prod);
    }
    if(val=="High to Low"){
        prod=prod.sort(function(a,b){
            return b.price-a.price;
        })
        Display(prod)
    }
    else{
        Display(product)
    }
    
})

let price_range=document.querySelectorAll("#price-range>input");
let min_price=[];
price_range[0].addEventListener("change",function(){
    document.querySelector("#car-list").innerHTML="";
    event.preventDefault();
    let val=price_range.value;
    min_price=product.filter(function(el){
        return el.price>=val;
    })
    Display(min_price);
})
price_range[1].addEventListener("change",function(){
    event.preventDefault();
    let val=price_range.value;
    let prod=[];
    prod=min_price.filter(function(el){
        return el.price>=val;
    })
    Display(prod)
})