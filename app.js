var input = document.getElementById('inputHere');
input.focus();
input.select();

document.getElementById('inputHere').onkeypress = function(event) {
    if (event.keyCode === 13) {
        result();
    }
}


function inputKeys(key) {
    var char = document.getElementById('inputHere');
    char.value += key;
}

function clearAll() {
    var char = document.getElementById('inputHere');
    var detail = document.getElementById('detailed');
    char.value = "";
    detail.value = "";
    char.focus();
    char.select();
}

function deleteLast() {
    var ans = document.getElementById('inputHere');
    var last = ans.value;
    var edited = last.slice(0,-1);
    ans.value = edited;
}

function signChange() {
    var char = document.getElementById('inputHere');
    var temp = char.value;
    if (temp.charAt(0) !== '-') {
        temp = "-" + temp;
    }
    else if (temp.charAt(0) === '-') {
        temp = temp.slice(1);
    }
    char.value = temp;
}

function result() {
    var ans = document.getElementById('inputHere');
    var detail = document.getElementById('detailed');
    detail.value = ans.value + "=";
    var flag = false;
    var temp = 1;
    for(var i = 0; i < (ans.value).length; i++) {
        if(ans.value[i] === '^') {
            var power = (ans.value).indexOf("^")
            var op1 = (ans.value).slice(0,power);
            var op2 = (ans.value).slice(power+1);
            for(var i = 0; i < op2; i++) {
                temp = temp * op1;
            }
            ans.value = temp;
            flag = true;
        }
    }
    if(flag === false) {
        ans.value = eval(ans.value);
    }
    var historyPara = document.createElement("P");
    historyPara.innerText = detailed.value + ans.value;
    document.getElementById("paraHistory").appendChild(historyPara); 
}

function squareFunc() {
    var ans = document.getElementById('inputHere');
    var detail = document.getElementById('detailed');
    detail.value = "sqr(" + ans.value + ")=";
    ans.value = ans.value * ans.value;
    var historyPara = document.createElement("P");
    historyPara.innerText = detailed.value + ans.value;
    document.getElementById("paraHistory").appendChild(historyPara); 
}

function cubeFunc() {
    var ans = document.getElementById('inputHere');
    var detail = document.getElementById('detailed');
    detail.value = "cube(" + ans.value + ")=";
    ans.value = ans.value * ans.value * ans.value;
    var historyPara = document.createElement("P");
    historyPara.innerText = detailed.value + ans.value;
    document.getElementById("paraHistory").appendChild(historyPara);
}

function squareRoot() {
    var ans = document.getElementById('inputHere');
    var detail = document.getElementById('detailed');
    detail.value = ans.value + "=";
    ans.value = Math.sqrt(ans.value);
    var historyPara = document.createElement("P");
    historyPara.innerText = detailed.value + ans.value;
    document.getElementById("paraHistory").appendChild(historyPara);
}

function deleteHistory() {
    var deleteHistory = document.getElementById('paraHistory');
    deleteHistory.remove();
}