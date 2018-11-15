function fib(input){
    if(input <= 1)
        return 1;
    return fib(input - 1) + fib(input-2);
}

function fibHelper(){
var input =  document.getElementById('input').value;   
var diff = document.getElementById('result'); // Get element
diff.textContent = fib(input);
}

