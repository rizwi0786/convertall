const lt8=document.querySelector(".type8");
const overlay8 = document.querySelector(".overlay");
const mod8=document.querySelector(".modal8");
const cls8=document.querySelector(".cm8");
const hidd8=document.querySelectorAll(".hidden");
const no81=document.getElementById("no81");
const no82=document.getElementById("no82");
const unit81=document.getElementById("unit81");
const unit82=document.getElementById("unit82");

const openm8=function () {
    window.scrollTo({ top: '50%', behavior: 'smooth' });
    mod8.classList.remove("hidden");
    overlay8.classList.remove("hidden");
}
const clom8=function(){
    mod8.classList.add("hidden");
    overlay8.classList.add("hidden");
    // console.log(5);
}
lt8.addEventListener("click",openm8);
cls8.addEventListener("click",clom8);
overlay8.addEventListener("click",clom8);
document.addEventListener("keydown",function (e) {
    if(e.key==="Escape" && !mod8.classList.contains("hidden"))
    {
        clom8();
    }
});
// console.log(10);

function func81()
{
    let unv=unit81.value;
    let unv2=unit82.value;
    let nov=no81.value;
    // no12.value=no11.value;
    // no12.value=unit11.value;
    if(unv==1)
    {
        nov=nov*1000;
    }
    else if(unv==2)
        nov=nov*(101325);
    else if(unv==5)
        nov=nov*100;
    else if(unv==4)
        nov=nov*100000;
    else if(unv==6 ||unv==7)
        nov=nov*133.322368;
   

    if(unv2==1)
    {
        nov=nov/1000;
    }
    else if(unv2==2)
        nov=nov/(101325);
    else if(unv2==5)
        nov=nov/100;
    else if(unv2==4)
        nov=nov/100000;
    else if(unv2==6 ||unv2==7)
        nov=nov/133.322368;
    
    
    no82.value=nov;  
}
function func82()
{
    let unv=unit82.value;
    let unv2=unit81.value;
    let nov=no82.value;
    // no12.value=no11.value;
    // no12.value=unit11.value;
    if(unv==1)
    {
        nov=nov*1000;
    }
    else if(unv==2)
        nov=nov*(101325);
    else if(unv==5)
        nov=nov*100;
    else if(unv==4)
        nov=nov*100000;
    else if(unv==6 ||unv==7)
        nov=nov*133.322368;
   

    if(unv2==1)
    {
        nov=nov/1000;
    }
    else if(unv2==2)
        nov=nov/(101325);
    else if(unv2==5)
        nov=nov/100;
    else if(unv2==4)
        nov=nov/100000;
    else if(unv2==6 ||unv2==7)
        nov=nov/133.322368;
    
    no81.value=nov;  
}


