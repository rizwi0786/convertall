const lt5=document.querySelector(".type5");
const overlay5 = document.querySelector(".overlay");
const mod5=document.querySelector(".modal5");
const cls5=document.querySelector(".cm5");
const hidd5=document.querySelectorAll(".hidden");
const no51=document.getElementById("no51");
const no52=document.getElementById("no52");
const unit51=document.getElementById("unit51");
const unit52=document.getElementById("unit52");

const openm5=function () {
    window.scrollTo({ top: '50%', behavior: 'smooth' });
    mod5.classList.remove("hidden");
    overlay5.classList.remove("hidden");
}
const clom5=function(){
    mod5.classList.add("hidden");
    overlay5.classList.add("hidden");
    // console.log(5);
}
lt5.addEventListener("click",openm5);
cls5.addEventListener("click",clom5);
overlay5.addEventListener("click",clom5);
document.addEventListener("keydown",function (e) {
    if(e.key==="Escape" && !mod5.classList.contains("hidden"))
    {
        clom5();
    }
});

function func51()
{
    let unv=unit51.value;
    let unv2=unit52.value;
    let nov=no51.value;
    // no12.value=no11.value;
    // no12.value=unit11.value;
    if(unv==1)
    {
        nov=nov/100;
    }
    else if(unv==2)
        nov=nov/10000;
    else if(unv==3)
        nov=nov/1000000;
    else if(unv==4)
        nov=nov/1000000000000;
    else if(unv==5)
        nov=nov/100000000000000000n;
    else if(unv==6)
        nov=nov*1000*1000;
    else if(unv==7)
        nov=nov*1609.344*1609.344;
    else if(unv==8)
        nov=nov* 0.3048* 0.3048;
    else if(unv==9)
        nov=nov* 0.0254* 0.0254;
    
        if(unv2==1)
        {
            nov=nov*10*10;
        }
        else if(unv2==2)
            nov=nov*100*100;
        else if(unv2==3)
            nov=nov*1000*1000;
        else if(unv2==4)
            nov=nov*1000000*1000000;
        else if(unv2==5)
            nov=nov*1000000000*1000000000;
        else if(unv2==6)
            nov=nov/1000000;
        else if(unv2==7)
            nov=nov/(1609.344*1609.344);
        else if(unv2==8)
            nov=nov/(0.3048)* 0.3048;
        else if(unv2==9)
            nov=nov/(0.0254* 0.0254);
        
            no52.value=nov; 
        ;  
        
}
function func52()
{
    let unv=unit51.value;
    let unv2=unit52.value;
    let nov2=no52.value;
    if(unv2==1)
    {
        nov2=nov2/100;
    }
    else if(unv2==2)
        nov2=nov2/10000;
    else if(unv2==3)
        nov2=nov2/1000000;
    else if(unv2==4)
        nov2=nov2/1000000000000;
    else if(unv2==5)
        nov2=nov2/1000000000000000000n;
    else if(unv2==6)
        nov2=nov2*1000*1000;
    else if(unv2==7)
        nov2=nov2*1609.344*1609.344;
    else if(unv2==8)
        nov2=nov2*0.3048* 0.3048;
    else if(unv2==9)
        nov2=nov2*0.0254* 0.0254;


    if(unv==1)
    {
        nov2=nov2*100;
    }
    else if(unv==2)
        nov2=nov2*10000;
    else if(unv==3)
        nov2=nov2*1000000;
    else if(unv==4)
        nov2=nov2*1000000000000;
    else if(unv==5)
        nov2=nov2*1000000000000000000n;
    else if(unv==6)
        nov2=nov2/1000000;
    else if(unv==7)
        nov2=nov2/(1609.344*1609.344);
    else if(unv==8)
        nov2=nov2/(0.3048* 0.3048);
    else if(unv==9)
        nov2=nov2/(0.0254* 0.0254);
    
        
            no51.value=nov2; 
          
    
    
}