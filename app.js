                                                //CALCULATOR
//FUNCTIONS:
//number_function
let displayvalue='';

function number_function(value)
{
    displayvalue += value;
    document.getElementById('display').value = displayvalue;
}

//calculate_operator
function calculate_operator() {
    try 
    {
        displayvalue = eval(displayvalue);// The "eval()" function is used to evaluate a JavaScript expression in a string. 
        document.getElementById('display').value = displayvalue; // it's used to perform the arithmetic calculation.
    } 
    catch (error)
    {
        document.getElementById('display').value = 'Error';
    }
}

//clear_Display
function clear_Display() {
    displayvalue = '';
    document.getElementById('display').value = '';
}

//clearLastDigit
function clearLastDigit() {
    displayvalue = displayvalue.slice(0, +1);
    document.getElementById('display').value = displayvalue;
}