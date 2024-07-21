const btn = document.querySelector(".btn");
const add_style = document.querySelector(".main_ul");

btn.addEventListener("click", function(){

    if(add_style.classList.contains("active")){
        add_style.classList.remove("active");
    }else{
        add_style.classList.add("active");
    }

});


const light = document.querySelector(".bi-lightbulb");
const dark  = document.querySelector(".bi-lightbulb-off");
const body = document.querySelector("body");
const colors = document.querySelectorAll("a");
const main_box = document.querySelector(".main_box");

dark.addEventListener("click", function(){
    if(dark){
        dark.style.display = "none";
        light.style.display = "block";
        body.style.backgroundColor = "black";
        btn.style.color = "white";
        main_box.style.backgroundColor = "#000";
        add_style.style.backgroundColor = "#000000ae";

        colors.forEach((e)=>{
            e.style.color = "white";
        });

    }
});

light.addEventListener("click", function(){
    if(light){
        light.style.display = "none";
        dark.style.display ="block";
        body.style.backgroundColor = "white";
        btn.style.color = "black";
        main_box.style.backgroundColor = "#fff";
        add_style.style.backgroundColor = "#ffffffc1";


        colors.forEach((e)=>{
            e.style.color = "black";
        });

    }
});