let clr = document.getElementById("clr");
let del = document.getElementById("del");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let num4 = document.getElementById("num4");
let num5 = document.getElementById("num5");
let num6 = document.getElementById("num6");
let num7 = document.getElementById("num7");
let num8 = document.getElementById("num8");
let num9 = document.getElementById("num9");
let num0 = document.getElementById("num0");
let add_vals = document.getElementById("plus");
let sub_vals = document.getElementById("minus");
let mul_vals = document.getElementById("mul");
let div_vals = document.getElementById("divide");
let equ_vals = document.getElementById("equ");
let output_vals = document.getElementById("output");
let output_valsTxt = output_vals.value;

function AddValTxtbox(id){
    console.log(output_valsTxt)
    
    output_valsTxt = output_vals.value;

    console.log(typeof(output_valsTxt))

    
    if(Number(output_valsTxt) !== 0){
    
        output_vals.value = output_vals.value + Number(document.getElementById(id).innerHTML);
    }

    else{
        output_vals.value = document.getElementById(id).innerHTML;
    }

}