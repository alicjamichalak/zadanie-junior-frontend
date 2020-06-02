let numbers = [];
let stringNumbers;
let operator;
let history = [];
var wynik = 0;
let numberClicked = false;
let isFloat = false;

let lastOperation;

class MyNumber {
    constructor(number, operator) {
        this.number = number;
        this.operator = operator;
    }
}

$('#one').click(function() {
    clickNumber(1);
});

$('#two').click(function() {
    clickNumber(2);
});

$('#three').click(function() {
    clickNumber(3);
});

$('#four').click(function() {
    clickNumber(4);
});

$('#five').click(function() {
    clickNumber(5);
});

$('#six').click(function() {
    clickNumber(6);
});

$('#seven').click(function() {
    clickNumber(7);
});

$('#eight').click(function() {
    clickNumber(8);
});

$('#nine').click(function() {
    clickNumber(9);
});

$('#zero').click(function() {
    clickNumber(0);
});

$('#coma').click(function() {
    if (isFloat === false) {
        clickNumber('.');
        isFloat = true;
    }
});

$('#functionPlus').click(function() {
    if (numberClicked === true) {
        saveOperation('+');
        makeAnOperation();
    }
});

$('#functionMinus').click(function() {
    if (numberClicked === true) {
        saveOperation('-');
        makeAnOperation();
    }
});

$('#functionMultiply').click(function() {
    if (numberClicked === true) {
        saveOperation('*');
        makeAnOperation();
    }
});

$('#functionDivide').click(function() {
    if (numberClicked === true) {
        saveOperation('/');
        makeAnOperation();
    }
});

$('#funtionPercent').click(function() {
    if (numberClicked === true) {
        stringNumbers = parseFloat(calculateResult() * stringNumbers * 0.01);
        $('#result').html(stringNumbers);
    }
});

$('#functionSymbol').click(function() {
    if (numberClicked === true) {
        stringNumbers = parseFloat(stringNumbers) * -1;
        $('#result').html(stringNumbers);
        if (history.length < 1) {}
    }
});

$('#functionReset').click(function() {
    clearStringNumbers();
    history = [];
    $('#result').html('');
    $('#numbersContainer').html('');
});

function makeAnOperation() {
    addToHistory();
    clearStringNumbers();
    $('#numbersContainer').html(getFullHistory());
    $('#result').html(calculateResult().toFixed(3));
    numberClicked = false;
    isFloat = false;
}

function calculateResult() {
    if (history.length === 0) {
        return 0;
    }
    let result = parseFloat(history[0].operator + history[0].number);

    for (let i = 1; i < history.length; i++) {
        switch (history[i - 1].operator) {
            case '+':
                result += parseFloat(history[i].number);
                break;
            case '-':
                result -= parseFloat(history[i].number);
                break;
            case '*':
                result *= parseFloat(history[i].number);
                break;
            case '/':
                result /= parseFloat(history[i].number);
                break;
        }
    }

    return result;
}

function getFullHistory() {
    let historyString = '';
    for (let i = 0; i < history.length; i++) {
        historyString += history[i].number + history[i].operator;
    }
    return historyString;
}

function clickNumber(number) {
    numbers.push(number);
    stringNumbers = numbers.join('');
    $('#result').html(stringNumbers);
    numberClicked = true;
}

function clearStringNumbers() {
    numbers = [];
    stringNumbers = '';
}

function saveOperation(operation) {
    lastOperation = operation;
}

function addToHistory() {
    let number = new MyNumber(stringNumbers, lastOperation);
    history.push(number);
}