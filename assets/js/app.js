// $(function () {});

let output = document.calc.txt;

function getNumber(input) {
    document.calc.txt.value += input;
}

function getResult(){
    output.value = eval(output.value);
}

function clearEntry() {
    output.value = output.value.slice(0, (output.value.length -1));
}

function getPercent(){
    output.value = eval(output.value)/100;
}

function getReset() {
    output.value = '';
}