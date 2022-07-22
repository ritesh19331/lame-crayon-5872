let search=document.querySelector("#search");
search.addEventListener("click",function(){
    let city_searched=document.querySelector("#city-location");
    city_searched=city_searched.value;
    localStorage.setItem("city-searched",city_searched);
    console.log(city_searched);
    window.location.href="hyundai-subscription-car-list.html";
})