const lt9=document.querySelector(".type9");
const overlay9 = document.querySelector(".overlay");
const mod9=document.querySelector(".modal9");
const cls9=document.querySelector(".cm9");
const hidd9=document.querySelectorAll(".hidden");
const no91=document.getElementById("no91");
const no92=document.getElementById("no92");
const unit91=document.getElementById("unit91");
const unit92=document.getElementById("unit92");

const openm9=function () {
    window.scrollTo({ top: '50%', behavior: 'smooth' });
    mod9.classList.remove("hidden");
    overlay9.classList.remove("hidden");
}
const clom9=function(){
    mod9.classList.add("hidden");
    overlay9.classList.add("hidden");
    // console.log(5);
}
lt9.addEventListener("click",openm9);
cls9.addEventListener("click",clom9);
overlay9.addEventListener("click",clom9);
document.addEventListener("keydown",function (e) {
    if(e.key==="Escape" && !mod9.classList.contains("hidden"))
    {
        clom9();
    }
});
// console.log(10);

function func91()
{
    let unv=unit91.value;
    let unv2=unit92.value;
    let nov=no91.value;
    // no12.value=no11.value;
    // no12.value=unit11.value;
    if(unv==1)
    {
        nov=nov/1000000;
    }
    else if(unv==2)
        nov=nov*(0.0254*0.0254*0.0254);
    else if(unv==3)
        nov=nov/1000;
    else if(unv==4)
        nov=nov/1000000;
    else if(unv==5 )
        nov=nov*0.00378541;
   

    if(unv2==1)
    {
        nov=nov*1000000;
    }
    else if(unv2==2)
        nov=nov/(0.0254*0.0254*0.0254);
    else if(unv2==3)
        nov=nov*1000;
    else if(unv2==4)
        nov=nov*1000000;
    else if(unv2==5 )
        nov=nov/0.00378541;
    
    
    no92.value=nov;  
}
function func92()
{
    let unv=unit92.value;
    let unv2=unit91.value;
    let nov=no92.value;
    // no12.value=no11.value;
    // no12.value=unit11.value;
    if(unv==1)
    {
        nov=nov/1000000;
    }
    else if(unv==2)
        nov=nov*(0.0254*0.0254*0.0254);
    else if(unv==3)
        nov=nov/1000;
    else if(unv==4)
        nov=nov/1000000;
    else if(unv==5 )
        nov=nov*0.00378541;
   

    if(unv2==1)
    {
        nov=nov*1000000;
    }
    else if(unv2==2)
        nov=nov/(0.0254*0.0254*0.0254);
    else if(unv2==3)
        nov=nov*1000;
    else if(unv2==4)
        nov=nov*1000000;
    else if(unv2==5 )
        nov=nov/0.00378541;
    
    no91.value=nov;  
}


