let output = document.getElementById("output");

function addition(){
    console.log("running")
    const firstnum = document.getElementById("first-number").value;
    const secondnum = document.getElementById("second-number").value;

    let result = (Number(firstnum) + Number(secondnum))
    output.innerHTML = result;

    checkNegative(result);

}
function subtraction(){
    console.log("running")
    const firstnum = document.getElementById("first-number").value;
    const secondnum = document.getElementById("second-number").value;

    let result = (Number(firstnum) - Number(secondnum))
    output.innerHTML = result;

    checkNegative(result);

}
function multiplication(){
    console.log("running")
    const firstnum = document.getElementById("first-number").value;
    const secondnum = document.getElementById("second-number").value;
    let result = (Number(firstnum) * Number(secondnum))
    output.innerHTML = result;

    checkNegative(result);

}
function division(){
    console.log("running")
    const firstnum = document.getElementById("first-number").value;
    const secondnum = document.getElementById("second-number").value;

    if(secondnum == 0){
        output.innerHTML = "undefined";

    }else {
        let result = (Number(firstnum) / Number(secondnum))
        output.innerHTML = result;
    }

    checkNegative(result);

}
function power(){
    console.log("running")
    const firstnum = document.getElementById("first-number").value;
    const secondnum = document.getElementById("second-number").value;
    let result = 1
    if(secondnum < 0){
        for(let i = 0; i < (secondnum * -1); i++){
            result = result * Number(firstnum)
        }
        output.innerHTML = 1 / result;
    }else if(secondnum == 0) {
        output.innerHTML = 1;
    }else{
        for(let i = 0; i < (secondnum); i++){
            result = result * Number(firstnum)
        }
        output.innerHTML = result;
    }

    checkNegative(result);
}
function clearNums(){
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";
}

function checkNegative(result){
    if(result < 0){
        output.style.color  = "red";
    }else{
        output.style.color  = "#7361A2FF";
    }

}
