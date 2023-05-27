const lt2=document.querySelector(".type2");
const overlay2 = document.querySelector(".overlay");
const mod2=document.querySelector(".modal2");
const cls2=document.querySelector(".cm2");
const hidd2=document.querySelectorAll(".hidden");
const no21=document.getElementById("no21");
const no22=document.getElementById("no22");
const unit21=document.getElementById("unit21");
const unit22=document.getElementById("unit22");

const openm2=function () {
    window.scrollTo({ top: '50%', behavior: 'smooth' });
    mod2.classList.remove("hidden");
    overlay2.classList.remove("hidden");
}
const clom2=function(){
    mod2.classList.add("hidden");
    overlay2.classList.add("hidden");
    // console.log(5);
}
lt2.addEventListener("click",openm2);
cls2.addEventListener("click",clom2);
overlay2.addEventListener("click",clom2);
document.addEventListener("keydown",function (e) {
    if(e.key==="Escape" && !mod2.classList.contains("hidden"))
    {
        clom2();
    }
});
console.log(10);

function func21()
{
    let unv=unit21.value;
    let unv2=unit22.value;
    let nov=no21.value;
    // no12.value=no11.value;
    // no12.value=unit11.value;
    if(unv==1)
    {
        nov=nov/1000;
    }
    else if(unv==2)
        nov=nov/1000000;
    else if(unv==3)
        nov=nov/1000000000;
    else if(unv==4)
        nov=nov/1000000000000;
    else if(unv==5)
        nov=nov*1000;
    else if(unv==6)
        nov=nov*100;
    else if(unv==7)
        nov=nov*0.454;


    if(unv2==1)
    {
        nov=nov*1000;
    }
    else if(unv2==2)
        nov=nov*1000000;
    else if(unv2==3)
        nov=nov*1000000000;
    else if(unv2==4)
        nov=nov*1000000000000;
    else if(unv2==5)
        nov=nov/1000;
    else if(unv2==6)
        nov=nov/100;
    else if(unv2==7)
        nov=nov/0.454;
    
    
    
    no22.value=nov;  
}
function func22()
{
    let unv=unit21.value;
    let unv2=unit22.value;
    let nov2=no22.value;
    if(unv2==1)
    {
        nov2=nov2/1000;
    }
    else if(unv2==2)
        nov2=nov2/1000000;
    else if(unv2==3)
        nov2=nov2/1000000000;
    else if(unv2==4)
        nov2=nov2/1000000000000;
    else if(unv2==5)
        nov2=nov2*1000;
    else if(unv2==6)
        nov2=nov2*100;
    else if(unv2==7)
        nov2=nov2*0.454;


    if(unv==1)
    {
        nov2=nov2*1000;
    }
    else if(unv==2)
        nov2=nov2*1000000;
    else if(unv==3)
        nov2=nov2*1000000000;
    else if(unv==4)
        nov2=nov2*1000000000000;
    else if(unv==5)
        nov2=nov2/1000;
    else if(unv==6)
        nov2=nov2/100;
    else if(unv==7)
        nov2=nov2/0.454;
    
    no21.value=nov2;
    
}
