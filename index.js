let form=document.querySelector("form");

let dataCity=JSON.parse(localStorage.getItem("dataCity")) || [];
form.addEventListener("submit",function(event){
    event.preventDefault();
    let selectCity=document.querySelector("#select-city").value;
    let startDateTime=document.querySelector("#start-date").value;
    let endDateTime=document.querySelector("#end-date").value;



    console.log(startDateTime,endDateTime)
    let obj={
        city: selectCity,
        startDateTime: startDateTime,
        endDateTime: endDateTime
    }
    localStorage.setItem("dataCity",JSON.stringify(dataCity))
    dataCity.push(obj);
    console.log(dataCity)
})

let featureImagesLink=["https://revvselfdrivecar.s3.us-west-2.amazonaws.com/offers/Banner-Flat+500+off+blue.png",
"https://revvselfdrivecar.s3.us-west-2.amazonaws.com/5+days.png","https://revvselfdrivecar.s3.us-west-2.amazonaws.com/10+days.png","https://revvselfdrivecar.s3.us-west-2.amazonaws.com/15+days.png","https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/subscriptions_banners_01-min.jpg","https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/subscriptions_banners_02-min.jpg","https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/subscriptions_banners_03-min.jpg","https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/subscriptions_banners_04-min.jpg"
]

let leftbtn=document.querySelector("#left-btn");
let rightbtn=document.querySelector("#right-btn");

let imageState1=0;
let imageState2=1;
let imageState3=2;

rightbtn.addEventListener("click",function(){
    if(imageState3==featureImagesLink.length-1){
        imageState3=0;
    }
    if(imageState2==featureImagesLink.length-1){
        imageState2=0;
    }
    if(imageState1==featureImagesLink.length-1){
        imageState1=0;
    }
    let image1=document.querySelector("#image1");
    image1.src=featureImagesLink[++imageState1];

    let image2=document.querySelector("#image2");
    image2.src=featureImagesLink[++imageState2];

    let image3=document.querySelector("#image3");
    image3.src=featureImagesLink[++imageState3];
})

leftbtn.addEventListener("click",function(){
    if(imageState3==0){
        imageState3=featureImagesLink.length-1;
    }
    if(imageState2==0){
        imageState2=featureImagesLink.length-1;
    }
    if(imageState1==0){
        imageState1=featureImagesLink.length-1;
    }
    let image1=document.querySelector("#image1");
    image1.src=featureImagesLink[--imageState1];

    let image2=document.querySelector("#image2");
    image2.src=featureImagesLink[--imageState2];

    let image3=document.querySelector("#image3");
    image3.src=featureImagesLink[--imageState3];
})

