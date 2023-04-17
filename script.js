var data=0;
    document.getElementById("number").innerText=data;
function decrease(){
    data=data-1;
    document.getElementById("number").innerText=data;
    if (data>0){
        document.getElementById("number").style.color="green";
    }
    else if (data <0){
        document.getElementById("number").style.color="red";
    }
    else {
        document.getElementById("number").style.color="black";
    }

}

function reset(){
    data=0;
    document.getElementById("number").innerText=data;
    if (data>0){
        document.getElementById("number").style.color="green";
    }
    else if (data <0){
        document.getElementById("number").style.color="red";
    }
    else {
        document.getElementById("number").style.color="black";
    }
}

function increase(){
    data= data+1;
    document.getElementById("number").innerText=data;
    if (data>0){
        document.getElementById("number").style.color="green";
    }
    else if (data <0){
        document.getElementById("number").style.color="red";
    }
    else {
        document.getElementById("number").style.color="black";
    }
}