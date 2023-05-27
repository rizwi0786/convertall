const lt6=document.querySelector(".type6");
const overlay6 = document.querySelector(".overlay");
const mod6=document.querySelector(".modal6");
const cls6=document.querySelector(".cm6");
const hidd6=document.querySelectorAll(".hidden");
const no61=document.getElementById("no61");
const no62=document.getElementById("no62");
const unit61=document.getElementById("unit61");
const unit62=document.getElementById("unit62");

const openm6=function () {
    window.scrollTo({ top: '50%', behavior: 'smooth' });
    mod6.classList.remove("hidden");
    overlay6.classList.remove("hidden");
}
const clom6=function(){
    mod6.classList.add("hidden");
    overlay6.classList.add("hidden");
    // console.log(5);
}
lt6.addEventListener("click",openm6);
cls6.addEventListener("click",clom6);
overlay6.addEventListener("click",clom6);
document.addEventListener("keydown",function (e) {
    if(e.key==="Escape" && !mod6.classList.contains("hidden"))
    {
        clom6();
    }
});
// console.log(10);

function func61()
{
    let unv=unit61.value;
    let unv2=unit62.value;
    let nov=no61.value;
    // no12.value=no11.value;
    // no12.value=unit11.value;
    if(unv==1)
    {
        nov=nov/60;
    }
    else if(unv==2)
        nov=nov/(60*60);
    else if(unv==3)
        nov=nov*5/18;
    else if(unv==4)
        nov=nov*1609.344/(60*60);
    else if(unv==5)
        nov=nov*300000000;
   

    if(unv2==1)
    {
        nov=nov*60;
    }
    else if(unv2==2)
        nov=nov*(60*60);
    else if(unv2==3)
        nov=nov*18/5;
    else if(unv2==4)
        nov=nov*(3600)/1609.344;
    else if(unv2==5)
        nov=nov/300000000;
    
    
    no62.value=nov;  
}
function func62()
{
    let unv=unit62.value;
    let unv2=unit61.value;
    let nov=no62.value;
    // no12.value=no11.value;
    // no12.value=unit11.value;
    if(unv==1)
    {
        nov=nov/60;
    }
    else if(unv==2)
        nov=nov/(60*60);
    else if(unv==3)
        nov=nov*5/18;
    else if(unv==4)
        nov=nov*1609.344/(60*60);
    else if(unv==5)
        nov=nov*300000000;
   

    if(unv2==1)
    {
        nov=nov*60;
    }
    else if(unv2==2)
        nov=nov*(60*60);
    else if(unv2==3)
        nov=nov*18/5;
    else if(unv2==4)
        nov=nov*(3600)/1609.344;
    else if(unv2==5)
        nov=nov/300000000;
    
    no61.value=nov;  
}


