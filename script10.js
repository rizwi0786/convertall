const lt10=document.querySelector(".type10");
const overlay10 = document.querySelector(".overlay");
const mod10=document.querySelector(".modal10");
const cls10=document.querySelector(".cm10");
const hidd10=document.querySelectorAll(".hidden");
const no101=document.getElementById("no101");
const no102=document.getElementById("no102");
const unit101=document.getElementById("unit101");
const unit102=document.getElementById("unit102");

const openm10=function () {
    window.scrollTo({ top: '50%', behavior: 'smooth' });
    mod10.classList.remove("hidden");
    overlay10.classList.remove("hidden");
}
const clom10=function(){
    mod10.classList.add("hidden");
    overlay10.classList.add("hidden");
    // console.log(5);
}
lt10.addEventListener("click",openm10);
cls10.addEventListener("click",clom10);
overlay10.addEventListener("click",clom10);
document.addEventListener("keydown",function (e) {
    if(e.key==="Escape" && !mod10.classList.contains("hidden"))
    {
        clom10();
    }
});
function convertBase(number, fromBase, toBase) {
    const parsedNumber = parseInt(number, fromBase);
    return parsedNumber.toString(toBase);
  }
  
// console.log(10);

function func101()
{
    let unv=unit101.value;
    let unv2=unit102.value;
    let nov=no101.value;
    // no12.value=no11.value;
    // no12.value=unit11.value;
    if(unv==1)
        nov=convertBase(nov,2,10);
    else if(unv==2)
        nov=convertBase(nov,16,10);
    else if(unv==3)
        nov=convertBase(nov,8,10);
    if(unv2==1)
        nov=convertBase(nov,10,2);
    else if(unv2==2)
        nov=convertBase(nov,10,16);
    else if(unv2==3)
        nov=convertBase(nov,10,8);
    no102.value=nov;  
}
function func102()
{
    let unv=unit102.value;
    let unv2=unit101.value;
    let nov=no102.value;
    // no12.value=no11.value;
    // no12.value=unit11.value;
    if(unv==1)
    nov=convertBase(nov,2,10);
else if(unv==2)
    nov=convertBase(nov,16,10);
else if(unv==3)
    nov=convertBase(nov,8,10);
if(unv2==1)
    nov=convertBase(nov,10,2);
else if(unv2==2)
    nov=convertBase(nov,10,16);
else if(unv2==3)
    nov=convertBase(nov,10,8);
    
    no101.value=nov;  
}


