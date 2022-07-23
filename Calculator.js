function f(value){
   document.getElementById("display").value+=value ;
}

function clearss(){
    document.getElementById("display").value ="";

};

function calculate(){
    document.getElementById("display").value=eval(document.getElementById("display").value) ;
    // console.log(document.getElementById("display").value);
}

function E(){
    document.getElementById("display").value+=(Math.round(100000*Math.E))/100000;
}
