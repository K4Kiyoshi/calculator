var y;
var operation = "";
var isValid = true;
var lastChar = "0";
var localOperation = "";

const operand = (op) => {

    if(resultGenerated == true && (op != '0' && op != '1' && op != '2' && op != '3' && op!= '4' && op != '5' && op != '6' && op != '7' && op!= '8' && op!='9' && op!='0' && op!='00')){
        resultGenerated = false;
        operation = document.getElementById("display").value;
    }
    else{
        if(operation != "")
        lastChar = operation[operation.length - 1];
    else 
        lastChar = '';

    if(op == lastChar && (op != '0' && op != '1' && op != '2' && op != '3' && op!= '4' && op != '5' && op != '6' && op != '7' && op!= '8' && op!='9' && op!='0' && op!='00' )){
       
        
            document.getElementById("display").value = operation;
            
    } 
    else if((lastChar == '+' || lastChar == '-' || lastChar == '*' || lastChar == '%' || lastChar == '.' || lastChar == '/') && (op == '+' || op == '-' || op == '*' || op == '%' || op == '.' || op == '/')){
            localOperation = "";

            for(let i=0 ; i<operation.length ; i++){
                if(i== operation.length-1)
                    localOperation += op;
                else 
                    localOperation += operation[i];
            }
            operation =  localOperation;

            document.getElementById("display").value = operation;
    }
    else {
        if(operation == '' && (op == '0' || op == '00'))
            operation = '';
        else if(operation == '' && (op == '+' || op == '-' || op == '*' || op == '%' || op == '.' || op == '/')){
            operation = '0' + op;
        }
        else 
            operation += op;
    }
    }
    
}


const deleteLast =  () => {
    localOperation = "";

    for(let i=0 ; i<operation.length-1 ; i++){
            localOperation += operation[i]; 
    }
    operation =  localOperation;

}

const cancel =  () => {
    operation = "";
}



var result = "", lastResult = "", resultGenerated = false; a = ""
function history() {

    resultGenerated = true;
    lastChar = operation[operation.length-1];
    
    if(!(lastChar == '+' || lastChar == '-' || lastChar == '*' || lastChar == '%' || lastChar == '.' || lastChar == '/')){

        // a += operation + document.getElementById("display").value
        result += "<span style='font-size: 25px;'>" + operation + "</span>" + "<br> = " + document.getElementById("display").value + "<br>_____________<br>"; 
        //console.log(a);
        if(document.getElementById("display").value.search("undefined") == -1){
            document.getElementById("history").innerHTML = result;
        
        }
    }
    else {
        document.getElementById("display").value = "Syntax Error!";
    }
    operation = "";
    isValid = true;
}


const resultCreated = () => {
    if(resultGenerated){
        resultGenerated = false;
        return true;
    }
    else 
        return false;
}

const verifyFormat = () => {
    lastChar = operation[operation.length-1];
    
    if(lastChar == '+' || lastChar == '-' || lastChar == '*' || lastChar == '%' || lastChar == '.' || lastChar == '/'){
        return true;
    } 
    else
        return false;
}

const returnMainValue = () => {
    localOperation = "";

    for(let i=0 ; i<operation.length-1 ; i++){
            localOperation += operation[i]; 
    }
    operation =  localOperation;
    return operation;
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  } 