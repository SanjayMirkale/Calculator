const input=document.getElementById("input");

const rendering=(display)=>{
    input.value+=display;
}

const clearing=()=>{
    input.value="";
}

const removing=()=>{
    input.value=input.value.slice(0,-1);
}

const result=()=>{
    try{
        input.value=eval(input.value);
    }
    catch{
        input.value="Error";
    }
}