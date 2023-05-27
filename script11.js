const lt11=document.querySelector(".type11");
const overlay11 = document.querySelector(".overlay");
const mod11=document.querySelector(".modal11");
const cls11=document.querySelector(".cm11");
const hidd11=document.querySelectorAll(".hidden");
const no111=document.getElementById("no111");
const no112=document.getElementById("no112");
const unit111=document.getElementById("unit111");
const unit112=document.getElementById("unit112");

const openm11=function () {
    window.scrollTo({ top: '50%', behavior: 'smooth' });
    mod11.classList.remove("hidden");
    overlay11.classList.remove("hidden");
}
const clom11=function(){
    mod11.classList.add("hidden");
    overlay11.classList.add("hidden");
    // console.log(5);
}
lt11.addEventListener("click",openm11);
cls11.addEventListener("click",clom11);
overlay11.addEventListener("click",clom11);
document.addEventListener("keydown",function (e) {
    if(e.key==="Escape" && !mod11.classList.contains("hidden"))
    {
        clom11();
    }
});

  
// console.log(11);

function func111()
{
    let unv=unit111.value;
    let unv2=unit112.value;
    let nov=no111.value;
    // no12.value=no11.value;
    // no12.value=unit11.value;
    if(unv==1)
        nov=nov*8;
    else if(unv==2)
        nov=nov*4;
    else if(unv==3)
        nov=nov*(2**10);
    else if(unv==4)
        nov=nov*(2**10)*8;
    else if(unv==5)
        nov=nov*(2**20);
    else if(unv==6)
        nov=nov*(2**20)*8;
    else if(unv==7)
        nov=nov*(2**30);
    else if(unv==8)
        nov=nov*(2**30)*8;
    else if(unv==9)
        nov=nov*(2**40);
    else if(unv==10)
        nov=nov*(2**40)*8;

    if(unv2==1)
        nov=nov/8;
    else if(unv2==2)
        nov=nov/4;
    else if(unv2==3)
        nov=nov/(2**10);
    else if(unv2==4)
        nov=nov/((2**10)*8);
    else if(unv2==5)
        nov=nov/(2**20);
    else if(unv2==6)
        nov=nov/((2**20)*8);
    else if(unv2==7)
        nov=nov/(2**30);
    else if(unv2==8)
        nov=nov/((2**30)*8);
    else if(unv2==9)
        nov=nov/(2**40);
    else if(unv2==10)
        nov=nov/((2**40)*8);
    no112.value=nov;  
}
function func112()
{
    let unv=unit112.value;
    let unv2=unit111.value;
    let nov=no112.value;
    // no12.value=no11.value;
    // no12.value=unit11.value;
    if(unv==1)
        nov=nov*8;
    else if(unv==2)
        nov=nov*4;
    else if(unv==3)
        nov=nov*(2**10);
    else if(unv==4)
        nov=nov*(2**10)*8;
    else if(unv==5)
        nov=nov*(2**20);
    else if(unv==6)
        nov=nov*(2**20)*8;
    else if(unv==7)
        nov=nov*(2**30);
    else if(unv==8)
        nov=nov*(2**30)*8;
    else if(unv==9)
        nov=nov*(2**40);
    else if(unv==10)
        nov=nov*(2**40)*8;

    if(unv2==1)
        nov=nov/8;
    else if(unv2==2)
        nov=nov/4;
    else if(unv2==3)
        nov=nov/(2**10);
    else if(unv2==4)
        nov=nov/((2**10)*8);
    else if(unv2==5)
        nov=nov/(2**20);
    else if(unv2==6)
        nov=nov/((2**20)*8);
    else if(unv2==7)
        nov=nov/(2**30);
    else if(unv2==8)
        nov=nov/((2**30)*8);
    else if(unv2==9)
        nov=nov/(2**40);
    else if(unv2==10)
        nov=nov/((2**40)*8);
    
    no111.value=nov;  
}


