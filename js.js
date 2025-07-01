const a=document.getElementById("d1");
const w=document.getElementById("d2");
const s=document.getElementById("d3");
const uu=document.getElementById("ko");
const ju=document.getElementById("go");
const min=0;
const max=3;
const y=document.getElementById("jk");
const z=document.getElementById("lo");
let b;
let count=0;
let mount=0;
a.addEventListener("click",()=>{  
    const c=Math.floor(Math.random() * (max-min));
    b=0;
    if(c==1){
        y.innerText="You Lost! Paper beats Rock";
        z.style.backgroundColor="red";
        mount=mount+1;
        ju.innerText=mount;
    }
    else if(c==2){
        y.innerText="You Won! Rock beats Scissor";
        z.style.backgroundColor="green";
        count=count+1;
        uu.innerText=count;
    }
    else if(c==0){
        y.innerText="It's a Draw";
        z.style.backgroundColor="rgb(57, 81, 89)";
    }
});
w.addEventListener("click",()=>{  
    const c=Math.floor(Math.random() * (max-min));
    b=1;
    if(c==1){
        y.innerText="It's a Draw";
        z.style.backgroundColor="rgb(57, 81, 89)";
    }
    else if(c==2){
        y.innerText="You Lost! Scissor beats Paper";
        z.style.backgroundColor="red"; 
        mount=mount+1;
        ju.innerText=mount;
    }
    else if(c==0){
        y.innerText="You Won! Paper beats Rock";
        z.style.backgroundColor="green";
        count=count+1;
        uu.innerText=count;
    }
});
s.addEventListener("click",()=>{  
    const c=Math.floor(Math.random() * (max-min));
    b=2;
    if(c==1){
        y.innerText="You Won! Scissor beats Paper";
        z.style.backgroundColor="green";
        count=count+1;
        uu.innerText=count;
    }
    else if(c==2){
        y.innerText="It's a Draw";
        z.style.backgroundColor="rgb(57, 81, 89)";
    }
    else if(c==0){
        y.innerText="You Lost! Rock beats Scissor";
        z.style.backgroundColor="red"; 
        mount=mount+1;
        ju.innerText=mount;
    }
});