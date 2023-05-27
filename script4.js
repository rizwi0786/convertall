const lt4=document.querySelector(".type4");
const overlay4 = document.querySelector(".overlay");
const mod4=document.querySelector(".modal4");
const cls4=document.querySelector(".cm4");
const hidd4=document.querySelectorAll(".hidden");
const no41=document.getElementById("no41");
const no42=document.getElementById("no42");
const unit41=document.getElementById("unit41");
const unit42=document.getElementById("unit42");

const openm4=function () {
    window.scrollTo({ top: '50%', behavior: 'smooth' });
    mod4.classList.remove("hidden");
    overlay4.classList.remove("hidden");
}
const clom4=function(){
    mod4.classList.add("hidden");
    overlay4.classList.add("hidden");
    // console.log(5);
}
lt4.addEventListener("click",openm4);
cls4.addEventListener("click",clom4);
overlay4.addEventListener("click",clom4);
document.addEventListener("keydown",function (e) {
    if(e.key==="Escape" && !mod4.classList.contains("hidden"))
    {
        clom4();
    }
});
// console.log(10);

function func41()
{
    let unv=unit41.value;
    let unv2=unit42.value;
    let nov=no41.value;
    // no12.value=no11.value;
    // no12.value=unit11.value;
    if(unv==1)
    {
        nov=nov*60;
    }
    else if(unv==2)
        nov=nov*60*60;
    else if(unv==3)
        nov=nov*24*60*60;
    else if(unv==4)
        nov=nov/1000;
    else if(unv==5)
        nov=nov/1000000;
    else if(unv==6)
        nov=nov/1000000000;
   


    if(unv2==1)
    {
        nov=nov/60;
    }
    else if(unv2==2)
        nov=nov/(60*60);
    else if(unv2==3)
        nov=nov/(24*60*60);
    else if(unv2==4)
        nov=nov*1000;
    else if(unv2==5)
        nov=nov*1000000;
    else if(unv2==6)
        nov=nov*1000000000;
    
    no42.value=nov;  
}
function func42()
{
    let unv=unit42.value;
    let unv2=unit41.value;
    let nov=no42.value;
    // no12.value=no11.value;
    // no12.value=unit11.value;
    if(unv==1)
    {
        nov=nov*60;
    }
    else if(unv==2)
        nov=nov*60*60;
    else if(unv==3)
        nov=nov*24*60*60;
    else if(unv==4)
        nov=nov/1000;
    else if(unv==5)
        nov=nov/1000000;
    else if(unv==6)
        nov=nov/1000000000;
   


    if(unv2==1)
    {
        nov=nov/60;
    }
    else if(unv2==2)
        nov=nov/(60*60);
    else if(unv2==3)
        nov=nov/(24*60*60);
    else if(unv2==4)
        nov=nov*1000;
    else if(unv2==5)
        nov=nov*1000000;
    else if(unv2==6)
        nov=nov*1000000000;
    
    no41.value=nov;  
}


