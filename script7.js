const lt7=document.querySelector(".type7");
const overlay7 = document.querySelector(".overlay");
const mod7=document.querySelector(".modal7");
const cls7=document.querySelector(".cm7");
const hidd7=document.querySelectorAll(".hidden");
const no71=document.getElementById("no71");
const no72=document.getElementById("no72");
const unit71=document.getElementById("unit71");
const unit72=document.getElementById("unit72");

const openm7=function () {
    window.scrollTo({ top: '50%', behavior: 'smooth' });
    mod7.classList.remove("hidden");
    overlay7.classList.remove("hidden");
}
const clom7=function(){
    mod7.classList.add("hidden");
    overlay7.classList.add("hidden");
    // console.log(5);
}
lt7.addEventListener("click",openm7);
cls7.addEventListener("click",clom7);
overlay7.addEventListener("click",clom7);
document.addEventListener("keydown",function (e) {
    if(e.key==="Escape" && !mod7.classList.contains("hidden"))
    {
        clom7();
    }
});
// console.log(10);

function func71()
{
    let unv=unit71.value;
    let unv2=unit72.value;
    let nov=no71.value;
    // no12.value=no11.value;
    // no12.value=unit11.value;
    if(unv==1)
    {
        nov=nov*1000;
    }
    else if(unv==2)
        nov=nov/(1000);
    else if(unv==3)
        nov=nov*0.00980665;
    else if(unv==4)
        nov=nov*0.00001;
   

    if(unv2==1)
    {
        nov=nov/1000;
    }
    else if(unv2==2)
        nov=nov*(1000);
    else if(unv2==3)
        nov=nov/0.00980665;
    else if(unv2==4)
        nov=nov/0.00001;
    
    
    no72.value=nov;  
}
function func72()
{
    let unv=unit72.value;
    let unv2=unit71.value;
    let nov=no72.value;
    // no12.value=no11.value;
    // no12.value=unit11.value;
    if(unv==1)
    {
        nov=nov*1000;
    }
    else if(unv==2)
        nov=nov/(1000);
    else if(unv==3)
        nov=nov*0.00980665;
    else if(unv==4)
        nov=nov*0.00001;
   

    if(unv2==1)
    {
        nov=nov/1000;
    }
    else if(unv2==2)
        nov=nov*(1000);
    else if(unv2==3)
        nov=nov/0.00980665;
    else if(unv2==4)
        nov=nov/0.00001;
    
    no71.value=nov;  
}


