const lt3=document.querySelector(".type3");
const overlay3 = document.querySelector(".overlay");
const mod3=document.querySelector(".modal3");
const cls3=document.querySelector(".cm3");
const hidd3=document.querySelectorAll(".hidden");
const no31=document.getElementById("no31");
const no32=document.getElementById("no32");
const unit31=document.getElementById("unit31");
const unit32=document.getElementById("unit32");

const openm3=function () {
    window.scrollTo({ top: '50%', behavior: 'smooth' });
    mod3.classList.remove("hidden");
    overlay3.classList.remove("hidden");
}
const clom3=function(){
    mod3.classList.add("hidden");
    overlay3.classList.add("hidden");
}
lt3.addEventListener("click",openm3);
cls3.addEventListener("click",clom3);
overlay3.addEventListener("click",clom3);
document.addEventListener("keydown",function (e) {
    if(e.key==="Escape" && !mod3.classList.contains("hidden"))
    {
        clom3();
    }
});
console.log(10);

function func31()
{
    let unv=unit31.value;
    let unv2=unit32.value;
    let nov=no31.value;
    // no12.value=no11.value;
    // no12.value=unit11.value;
    if(unv==1)
        nov=nov-273;
    else if(unv==2)
        nov=(nov-32)*5/9;
    if(unv2==1)
        nov=Number(nov)+273;
    else if(unv2==2)
        nov=32+9*nov/5;
    
    no32.value=nov;  
}
function func32()
{
    let unv=unit31.value;
    let unv2=unit32.value;
    let nov2=no32.value;
    // console.log(nov2);
    if(unv2==1)
        nov2=Number(nov2)-273;
    else if(unv2==2)
        nov2=(Number(nov2)-32)*5/9;
    // console.log(nov2);
    if(unv==1)
        nov2=Number(nov2)+273;
    else if(unv==2)
    {
        // console.log(nov2);
        nov2=32+9*nov2/5;
    }
    
    no31.value=nov2;
    
}
