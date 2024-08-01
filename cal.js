var str="";
for (var i=0;i<=15;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var d=this.value;
        call(d)
        

    
    })
}
document.addEventListener("keypress",function(event){
     var e=""
     e=event.key;
    call(e)
})
function call(make){
    if (make=="="){
        str=eval(str);
        ab.value=str;

    }
    else
    if(make=="a" ){
        str="";
        ab.value=str;

    }
    else
    str=str+make;
    ab.value=str;
}

