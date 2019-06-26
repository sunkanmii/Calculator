let clr = document.getElementById("clr");
let del = document.getElementById("del");
let add_vals = document.getElementById("plus");
let sub_vals = document.getElementById("minus");
let mul_vals = document.getElementById("mul");
let div_vals = document.getElementById("divide");
let equ_vals = document.getElementById("equ");
let output_vals = document.getElementById("output");
let output_valsTxt = output_vals.value;
let nums = [
    [, ],
    [, ]
];
let i = 0;
let j = 1;
let removedNum;
let newNums;
let num1, num2, ans, newNum1;
let addButton = 0, subButton = 0, mulButton = 0, divButton = 0; 


function clearField() {
    output_vals.value = 0;
    nums = [[,],[,]];
    num1 = 0;
    num2 = 0;
    ans = 0;
    i = 0; 
    j = 1;
    addButton = 0, subButton = 0, mulButton = 0, divButton = 0;
}

function deleteField() {
    
    for (; i < j; i++) {   
        nums[i] = output_vals.value.split("");
    }

    removedNum = nums[i - 1].pop();
    console.log("You just removed " + removedNum);

    console.log(i);
    console.log(nums[i - 1]);

    //Save new numbers back
    newNums = nums[i - 1].join("");
    
    output_vals.value = Number(newNums);
    console.log(output_vals.value);

}

function AddValTxtbox(id) {

    console.log(output_vals.value);

    output_valsTxt = output_vals.value;

    console.log(typeof (output_valsTxt));

    if (Number(output_vals.value) !== 0) {

        output_vals.value = output_vals.value + Number(document.getElementById(id).innerHTML);
    } else {
        output_vals.value = document.getElementById(id).innerHTML;
    }

}

function addNums(){

    if(subButton > 0){
        subNums();
    }
    else if(mulButton > 0){
        mulNums();
    }
    else if(divButton > 0){
        divNums();
    }

    for (; i < j; i++) {   
        nums[i] = output_vals.value.split("");
        output_vals.placeholder = output_vals.value;    
    }
    
    output_vals.value = ""; 

    j++;
    
    let y = i + 1;
    
    if(i > 1){
        
        for(; y > i; y--){
            num1 = Number(nums[i - 2].join("")); 
            console.log(num1);
            
            num2 = Number(nums[i - 1].join(""));
            console.log(num2);
            
            ans = num1 + num2;
            console.log(String(ans));
        }
        
        nums[i - 2] = ans.toString().split("");
        
        console.log(nums);
        
        //same as nums[0]
        newNum1 = nums[i - 2].join("");

        output_vals.value = Number(newNum1);
        
        output_vals.placeholder = output_vals.value; 
        output_vals.value = "";
        
        i = 1;
        j = 2;
    }

    addButton++;
    subButton = 0;
    mulButton = 0;
    divButton = 0;
}

function subNums(){

    if(addButton > 0){
        addNums();
    }
    else if(mulButton > 0){
        mulNums();
    }
    else if(divButton > 0){
        divNums();
    }
    
    for (; i < j; i++) {
        nums[i] = output_vals.value.split("");
        output_vals.placeholder = output_vals.value;    
    }
    
    output_vals.value = ""; 

    j++;
    
    let y = i + 1;
    
    if(i > 1){
        
        for(; y > i; y--){
            
            num1 = Number(nums[i - 2].join("")); 
            console.log(num1);
            
            num2 = Number(nums[i - 1].join(""));
            console.log(num2);
            
            ans = num1 - num2;
            console.log(String(ans));
        }
        
        nums[i - 2] = ans.toString().split("");
        
        console.log(nums);
        
        //same as nums[0]
        newNum1 = nums[i - 2].join("");
        
        output_vals.value = Number(newNum1);
        
        output_vals.placeholder = output_vals.value; 
        output_vals.value = "";
        
        i = 1;
        j = 2;
    }

    addButton = 0;
    subButton++;
    mulButton = 0;
    divButton = 0;    
}

function mulNums(){
    
    if(addButton > 0){
        addNums();
        i = 1;
        j = 1;
    }
    else if(subButton > 0){
        subNums();
        i = 1;
        j = 1;
    }
    else if(divButton > 0){
        divNums();
        i = 1;
        j = 1;
    }
    

    for (; i < j; i++) {   
        nums[i] = output_vals.value.split("");
        
        output_vals.placeholder = output_vals.value;    
    }
    
    output_vals.value = ""; 

    j++;
    
    let y = i + 1;
    
    if(i > 1){
        
        for(; y > i; y--){
            num1 = Number(nums[i - 2].join("")); 
            console.log(num1);
            
            num2 = Number(nums[i - 1].join(""));
            console.log(num2);
            
            ans = num1 * num2;
            console.log(String(ans));
        }
        
        nums[i - 2] = ans.toString().split("");
        
        console.log(nums);
        
        //same as nums[0]
        newNum1 = nums[i - 2].join("");
        
        output_vals.value = Number(newNum1);
        
        output_vals.placeholder = output_vals.value; 
        output_vals.value = "";
        
        i = 1;
        j = 2;
    }

    addButton = 0;
    subButton = 0;
    mulButton++;
    divButton = 0;
}

function divNums(){

    if(addButton > 0){
        addNums();
        i = 1;
        j = 1;
    }
    else if(subButton > 0){
        subNums();
        i = 1;
        j = 1;
    }
    else if(mulButton > 0){
        mulNums();
        i = 1;
        j = 1;
    }

    for (; i < j; i++) {   
        nums[i] = output_vals.value.split("");
        output_vals.placeholder = output_vals.value;    
    }
    
    output_vals.value = ""; 

    j++;
    
    let y = i + 1;
    
    if(i > 1){
        
        for(; y > i; y--){
            num1 = Number(nums[i - 2].join("")); 
            console.log(num1);
            
            num2 = Number(nums[i - 1].join(""));
            console.log(num2);
            
            ans = num1 / num2;
            console.log(String(ans));
        }
        
        nums[i - 2] = ans.toString().split("");
        
        console.log(nums);
        
        //same as nums[0]
        newNum1 = nums[i - 2].join("");
        
        output_vals.value = Number(newNum1);
        
        output_vals.placeholder = output_vals.value; 
        output_vals.value = "";
        
        i = 1;
        j = 2;
    }

    addButton = 0;
    subButton = 0;
    mulButton = 0;
    divButton++;
}

function equalTo(){

    nums[i] = output_vals.value.split("");
    num1 = Number(nums[i - 1].join(""));
    num2 = Number(nums[i].join("")); 

    console.log(nums[0]);

    console.log(num1);
    console.log(num2);

    if(addButton > 0){
        ans = num1 + num2;
    }
    else if(subButton > 0){
        ans = num1 - num2;
    }
    else if(mulButton > 0){
        ans = num1 * num2;
    }
    else if(divButton > 0){
        ans = num1 / num2;
    }

    nums[i - 1] = ans.toString().split("");
    
    console.log(nums);
    
    //same as nums[0]
    newNum1 = nums[i - 1].join("");

    output_vals.value = Number(newNum1);
}