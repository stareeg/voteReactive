const correctValue1 = 1;
const correctValue2 = 2;

/*function check(){
    var e1 = document.getElementById("select-note");
    var value1 = e1.value;
    var e2 = document.getElementById("select-key");
    var value2 = e2.value;
    if (value1 == correctValue1 && value2 == correctValue2) {
        var feedback = document.getElementById("challenge");
        feedback.innerHTML = "correct";
        feedback.style.backgroundColor = "green";
    }
    else {
        var feedback = document.getElementById("challenge");
        feedback.innerHTML = "not correct";
        feedback.style.backgroundColor = "red";
    }
}*/

function check(){
    var e1 = document.getElementById("select-note");
    var value1 = e1.value;
    var e2 = document.getElementById("select-key");
    var value2 = e2.value;
    if (value1 == correctValue1 && value2 == correctValue2) {
        var feedback1 = document.getElementById("block1");
        feedback1.style.display = "none";
        var feedback2 = document.getElementById("block2");
        feedback2.style.display = "flex";
    }
    else {
        var feedback = document.getElementById("challenge");
        feedback.innerHTML = "not correct";
        feedback.style.backgroundColor = "red";
    }
}
function reset(){
    var e1 = document.getElementById("select-note");
    e1.value = "";
    var e2 = document.getElementById("select-key");
    e2.value = "";
    var feedback1 = document.getElementById("block1");
    feedback1.style.display = "block";
    var feedback2 = document.getElementById("block2");
    feedback2.style.display = "none";
}