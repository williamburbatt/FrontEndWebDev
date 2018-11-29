var button = document.getElementById("submitButton");
button.addEventListener("click", fibHelper, true);


function fib(input) {
    if (input <= 1)
        return 1;
    return fib(input - 1) + fib(input - 2);
}

function fibHelper() {
    var input = document.getElementById('input').value;
    var diff = document.getElementById('result'); // Get element
    var finalString = "";
    var x = input;

    while (x > 0) {
        var curr = fib(x);
        finalString = finalString + curr + " ";
        x--;
    }
    diff.textContent = finalString;
}
