var lt=document.querySelector(".type1");
var overlay = document.querySelector(".overlay");
var mod1=document.querySelector(".modal1");
var cls=document.querySelector(".close-modal");
var hidd=document.querySelectorAll(".hidden");
var no11=document.getElementById("no11");
var no12=document.getElementById("no12");
var unit11=document.getElementById("unit11");
var unit12=document.getElementById("unit12");

var openm=function () {
    window.scrollTo({ top: '50%', behavior: 'smooth' });
    mod1.classList.remove("hidden");
    overlay.classList.remove("hidden");
}
var clom=function(){
    mod1.classList.add("hidden");
    overlay.classList.add("hidden");
}
lt.addEventListener("click",openm);
cls.addEventListener("click",clom);
overlay.addEventListener("click",clom);
document.addEventListener("keydown",function (e) {
    if(e.key==="Escape" && !mod1.classList.contains("hidden"))
    {
        clom();
    }
})
function func11()
{
    let unv=unit11.value;
    let unv2=unit12.value;
    let nov=no11.value;
    // no12.value=no11.value;
    // no12.value=unit11.value;
    if(unv==1)
    {
        nov=nov/10;
    }
    else if(unv==2)
        nov=nov/100;
    else if(unv==3)
        nov=nov/1000;
    else if(unv==4)
        nov=nov/1000000;
    else if(unv==5)
        nov=nov/1000000000;
    else if(unv==6)
        nov=nov*1000;
    else if(unv==7)
        nov=nov*1609.344;
    else if(unv==8)
        nov=nov* 0.3048;
    else if(unv==9)
        nov=nov* 0.0254;
    
        if(unv2==1)
        {
            nov=nov*10;
        }
        else if(unv2==2)
            nov=nov*100;
        else if(unv2==3)
            nov=nov*1000;
        else if(unv2==4)
            nov=nov*1000000;
        else if(unv2==5)
            nov=nov*1000000000;
        else if(unv2==6)
            nov=nov/1000;
        else if(unv2==7)
            nov=nov/1609.344;
        else if(unv2==8)
            nov=nov/0.3048;
        else if(unv2==9)
            nov=nov/0.0254;
    no12.value=nov;  
}
function func12()
{
    let unv=unit11.value;
    let unv2=unit12.value;
    let nov2=no12.value;
    if(unv2==1)
    {
        nov2=nov2/10;
    }
    else if(unv2==2)
        nov2=nov2/100;
    else if(unv2==3)
        nov2=nov2/1000;
    else if(unv2==4)
        nov2=nov2/1000000;
    else if(unv2==5)
        nov2=nov2/1000000000;
    else if(unv2==6)
        nov2=nov2*1000;
    else if(unv2==7)
        nov2=nov2*1609.344;
    else if(unv2==8)
        nov2=nov2*0.3048;
    else if(unv2==9)
        nov2=nov2*0.0254;


    if(unv==1)
    {
        nov2=nov2*10;
    }
    else if(unv==2)
        nov2=nov2*100;
    else if(unv==3)
        nov2=nov2*1000;
    else if(unv==4)
        nov2=nov2*1000000;
    else if(unv==5)
        nov2=nov2*1000000000;
    else if(unv==6)
        nov2=nov2/1000;
    else if(unv==7)
        nov2=nov2/1609.344;
    else if(unv==8)
        nov2=nov2/0.3048;
    else if(unv==9)
        nov2=nov2/0.0254;
    
    no11.value=nov2;
    
}