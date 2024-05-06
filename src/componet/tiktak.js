import React from 'react'
import './tiktak.css'
function Tiktak() {

    var flag = 1;
    console.log(flag);
    const myfunc_3 = () => {
        if (flag == 1) {
            document.getElementById("b1").value = "X";
            document.getElementById("b1").disabled = true;
            flag = 0;
            console.log(flag,"if");
        } else {
            document.getElementById("b1").value = "O";
            document.getElementById("b1").disabled = true;
            flag = 1;
            console.log(flag,"else");
        }
        console.log(flag,"end");
    }
    const myfunc = () => {
        var b1, b2, b3, b4, b5, b6, b7, b8, b9;
        b1 = document.getElementById("b1").value;
        b2 = document.getElementById("b2").value;
        b3 = document.getElementById("b3").value;
        b4 = document.getElementById("b4").value;
        b5 = document.getElementById("b5").value;
        b6 = document.getElementById("b6").value;
        b7 = document.getElementById("b7").value;
        b8 = document.getElementById("b8").value;
        b9 = document.getElementById("b9").value;
        var b1btn, b2btn, b3btn, b4btn, b5btn, b6btn, b7btn, b8btn, b9btn;
        b1btn = document.getElementById("b1");
        b2btn = document.getElementById("b2");
        b3btn = document.getElementById("b3");
        b4btn = document.getElementById("b4");
        b5btn = document.getElementById("b5");
        b6btn = document.getElementById("b6");
        b7btn = document.getElementById("b7");
        b8btn = document.getElementById("b8");
        b9btn = document.getElementById("b9");
        if (
            (b1 == "x" || b1 == "X") &&
            (b2 == "x" || b2 == "X") &&
            (b3 == "x" || b3 == "X")
        ) {
            document.getElementById("print").innerHTML = "Player X is win";
            b4btn.disabled = true;
            b5btn.disabled = true;
            b6btn.disabled = true;
            b7btn.disabled = true;
            b8btn.disabled = true;
            b9btn.disabled = true;

            b1btn.style.color = "red";
            b2btn.style.color = "red";
            b3btn.style.color = "red";
        } else if (
            (b1 == "x" || b1 == "X") &&
            (b4 == "x" || b4 == "X") &&
            (b7 == "x" || b7 == "X")
        ) {
            document.getElementById("print").innerHTML = "Player X is win";
            b2btn.disabled = true;
            b3btn.disabled = true;
            b5btn.disabled = true;
            b6btn.disabled = true;
            b8btn.disabled = true;
            b9btn.disabled = true;

            b1btn.style.color = "red";
            b4btn.style.color = "red";
            b7btn.style.color = "red";
        } else if (
            (b4 == "x" || b4 == "X") &&
            (b5 == "x" || b5 == "X") &&
            (b6 == "x" || b6 == "X")
        ) {
            document.getElementById("print").innerHTML = "Player X is win";
            b1btn.disabled = true;
            b2btn.disabled = true;
            b3btn.disabled = true;
            b7btn.disabled = true;
            b8btn.disabled = true;
            b9btn.disabled = true;

            b4btn.style.color = "red";
            b5btn.style.color = "red";
            b6btn.style.color = "red";
        } else if (
            (b7 == "x" || b7 == "X") &&
            (b8 == "x" || b8 == "X") &&
            (b9 == "x" || b9 == "X")
        ) {
            document.getElementById("print").innerHTML = "Player X is win";
            b1btn.disabled = true;
            b2btn.disabled = true;
            b3btn.disabled = true;
            b4btn.disabled = true;
            b5btn.disabled = true;
            b6btn.disabled = true;

            b7btn.style.color = "red";
            b8btn.style.color = "red";
            b9btn.style.color = "red";
        } else if (
            (b2 == "x" || b2 == "X") &&
            (b5 == "x" || b5 == "X") &&
            (b8 == "x" || b8 == "X")
        ) {
            document.getElementById("print").innerHTML = "Player X is win";
            b1btn.disabled = true;
            b3btn.disabled = true;
            b4btn.disabled = true;
            b6btn.disabled = true;
            b7btn.disabled = true;
            b9btn.disabled = true;

            b2btn.style.color = "red";
            b5btn.style.color = "red";
            b8btn.style.color = "red";
        } else if (
            (b3 == "x" || b3 == "X") &&
            (b6 == "x" || b6 == "X") &&
            (b9 == "x" || b9 == "X")
        ) {
            document.getElementById("print").innerHTML = "Player X is win";
            b1btn.disabled = true;
            b2btn.disabled = true;
            b4btn.disabled = true;
            b5btn.disabled = true;
            b7btn.disabled = true;
            b9btn.disabled = true;

            b3btn.style.color = "red";
            b6btn.style.color = "red";
            b9btn.style.color = "red";
        } else if (
            (b1 == "x" || b1 == "X") &&
            (b5 == "x" || b5 == "X") &&
            (b9 == "x" || b9 == "X")
        ) {
            document.getElementById("print").innerHTML = "Player X is win";
            b2btn.disabled = true;
            b3btn.disabled = true;
            b4btn.disabled = true;
            b6btn.disabled = true;
            b7btn.disabled = true;
            b8btn.disabled = true;

            b1btn.style.color = "red";
            b5btn.style.color = "red";
            b9btn.style.color = "red";
        } else if (
            (b3 == "x" || b3 == "X") &&
            (b5 == "x" || b5 == "X") &&
            (b7 == "x" || b7 == "X")
        ) {
            document.getElementById("print").innerHTML = "Player X is win";
            b1btn.disabled = true;
            b2btn.disabled = true;
            b4btn.disabled = true;
            b6btn.disabled = true;
            b8btn.disabled = true;
            b9btn.disabled = true;

            b3btn.style.color = "red";
            b5btn.style.color = "red";
            b7btn.style.color = "red";
        } else if (
            (b1 == "o" || b1 == "O") &&
            (b2 == "o" || b2 == "O") &&
            (b3 == "o" || b3 == "O")
        ) {
            document.getElementById("print").innerHTML = "Player O won";
            b4btn.disabled = true;
            b5btn.disabled = true;
            b6btn.disabled = true;
            b7btn.disabled = true;
            b8btn.disabled = true;
            b9btn.disabled = true;

            b1btn.style.color = "red";
            b2btn.style.color = "red";
            b3btn.style.color = "red";
        } else if (
            (b1 == "o" || b1 == "O") &&
            (b4 == "o" || b4 == "O") &&
            (b7 == "o" || b7 == "O")
        ) {
            document.getElementById("print").innerHTML = "Player 0 won";
            b2btn.disabled = true;
            b3btn.disabled = true;
            b5btn.disabled = true;
            b6btn.disabled = true;
            b8btn.disabled = true;
            b9btn.disabled = true;

            b1btn.style.color = "red";
            b4btn.style.color = "red";
            b7btn.style.color = "red";
        } else if (
            (b7 == "o" || b7 == "O") &&
            (b8 == "o" || b8 == "O") &&
            (b9 == "o" || b9 == "O")
        ) {
            document.getElementById("print").innerHTML = "Player 0 won";
            b1btn.disabled = true;
            b2btn.disabled = true;
            b3btn.disabled = true;
            b4btn.disabled = true;
            b5btn.disabled = true;
            b6btn.disabled = true;

            b7btn.style.color = "red";
            b8btn.style.color = "red";
            b9btn.style.color = "red";
        } else if (
            (b3 == "o" || b3 == "O") &&
            (b6 == "o" || b6 == "O") &&
            (b9 == "o" || b9 == "O")
        ) {
            document.getElementById("print").innerHTML = "Player 0 won";
            b1btn.disabled = true;
            b2btn.disabled = true;
            b4btn.disabled = true;
            b5btn.disabled = true;
            b7btn.disabled = true;
            b8btn.disabled = true;
            b3btn.style.color = "red";
            b6btn.style.color = "red";
            b9btn.style.color = "red";
        } else if (
            (b1 == "o" || b1 == "O") &&
            (b5 == "o" || b5 == "O") &&
            (b9 == "o" || b9 == "O")
        ) {
            document.getElementById("print").innerHTML = "Player 0 won";
            b2btn.disabled = true;
            b3btn.disabled = true;
            b4btn.disabled = true;
            b6btn.disabled = true;
            b7btn.disabled = true;
            b8btn.disabled = true;

            b1btn.style.color = "red";
            b5btn.style.color = "red";
            b9btn.style.color = "red";
        } else if (
            (b3 == "o" || b3 == "O") &&
            (b5 == "o" || b5 == "O") &&
            (b7 == "o" || b7 == "O")
        ) {
            document.getElementById("print").innerHTML = "Player 0 won";
            b1btn.disabled = true;
            b2btn.disabled = true;
            b4btn.disabled = true;
            b6btn.disabled = true;
            b8btn.disabled = true;
            b9btn.disabled = true;

            b3btn.style.color = "red";
            b5btn.style.color = "red";
            b7btn.style.color = "red";
        } else if (
            (b2 == "o" || b2 == "O") &&
            (b5 == "o" || b5 == "O") &&
            (b8 == "o" || b8 == "O")
        ) {
            document.getElementById("print").innerHTML = "Player 0 won";
            b1btn.disabled = true;
            b3btn.disabled = true;
            b4btn.disabled = true;
            b6btn.disabled = true;
            b7btn.disabled = true;
            b9btn.disabled = true;

            b2btn.style.color = "red";
            b5btn.style.color = "red";
            b8btn.style.color = "red";
        } else if (
            (b4 == "o" || b4 == "O") &&
            (b5 == "o" || b5 == "O") &&
            (b6 == "o" || b6 == "O")
        ) {
            document.getElementById("print").innerHTML = "Player 0 won";
            b1btn.disabled = true;
            b2btn.disabled = true;
            b3btn.disabled = true;
            b7btn.disabled = true;
            b8btn.disabled = true;
            b9btn.disabled = true;

            b4btn.style.color = "red";
            b5btn.style.color = "red";
            b6btn.style.color = "red";
        } else if (
            (b1 == "X" || b1 == "O") &&
            (b2 == "X" || b2 == "O") &&
            (b3 == "X" || b3 == "O") &&
            (b4 == "X" || b4 == "O") &&
            (b5 == "X" || b5 == "O") &&
            (b6 == "X" || b6 == "O") &&
            (b7 == "X" || b7 == "O") &&
            (b8 == "X" || b8 == "O") &&
            (b9 == "X" || b9 == "O")
        ) {
            document.getElementById("print").innerHTML = "Match Tie";
        } else {
            // Here, Printing Result
            if (flag == 1) {
                document.getElementById("print").innerHTML = "Player X Turn";
            } else {
                document.getElementById("print").innerHTML = "Player 0 Turn";
            }
        }
    }
    const fun2 = () => {
        myfunc_3()
        myfunc()
    }

    const myfunc_4 = () => {
        if (flag == 1) {
            document.getElementById("b2").value = "X";
            document.getElementById("b2").disabled = true;
            flag = 0;
        } else {
            document.getElementById("b2").value = "O";
            document.getElementById("b2").disabled = true;
            flag = 1;
        }
    }

    const fun3 = () => {
        myfunc_4()
        myfunc()
    }

    const myfunc_5 = () => {

        if (flag == 1) {
            document.getElementById("b3").value = "X";
            document.getElementById("b3").disabled = true;
            flag = 0;
        } else {
            document.getElementById("b3").value = "O";
            document.getElementById("b3").disabled = true;
            flag = 1;
        }
    }

    const fun4 = () => {
        myfunc_5()
        myfunc()
    }

    const myfunc_6 = () => {
        if (flag == 1) {
            document.getElementById("b4").value = "X";
            document.getElementById("b4").disabled = true;
            flag = 0;
        } else {
            document.getElementById("b4").value = "O";
            document.getElementById("b4").disabled = true;
            flag = 1;
        }
    }

    const fun5 = () => {
        myfunc_6()
        myfunc()
    }

    const myfunc_7 = () => {

        if (flag == 1) {
            document.getElementById("b5").value = "X";
            document.getElementById("b5").disabled = true;
            flag = 0;
        } else {
            document.getElementById("b5").value = "O";
            document.getElementById("b5").disabled = true;
            flag = 1;
        }
    }

    const fun6 = () => {
        myfunc_7()
        myfunc()
    }

    const myfunc_8 = () => {
        if (flag == 1) {
            document.getElementById("b6").value = "X";
            document.getElementById("b6").disabled = true;
            flag = 0;
        } else {
            document.getElementById("b6").value = "O";
            document.getElementById("b6").disabled = true;
            flag = 1;
        }
    }
    const fun7 = () => {
        myfunc_8()
        myfunc()
    }

    const myfunc_9 = () => {

        if (flag == 1) {
            document.getElementById("b7").value = "X";
            document.getElementById("b7").disabled = true;
            flag = 0;
        } else {
            document.getElementById("b7").value = "O";
            document.getElementById("b7").disabled = true;
            flag = 1;
        }
    }

    const fun8 = () => {
        myfunc_9()
        myfunc()
    }

    const myfunc_10 = () => {
        if (flag == 1) {
            document.getElementById("b8").value = "X";
            document.getElementById("b8").disabled = true;
            flag = 0;
        } else {
            document.getElementById("b8").value = "O";
            document.getElementById("b8").disabled = true;
            flag = 1;
        }
    }
    const fun9 = () => {
        myfunc_10()
        myfunc()
    }

    const myfunc_11 = () => {
        if (flag == 1) {
            document.getElementById("b9").value = "X";
            document.getElementById("b9").disabled = true;
            flag = 0;
        } else {
            document.getElementById("b9").value = "O";
            document.getElementById("b9").disabled = true;
            flag = 1;
        }
    }

    const fun10 = () => {
        myfunc_11()
        myfunc()
    }

    const myfunc_2 = () => {
        // window.location.reload();
        //  b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = "";
    }

    return (
        <div>
            <div id="main">
                <h1>TIC TAC TOE</h1>
                <p id="ins">
                    Game starts by just Tap on box<br /><br />First Player starts as
                    <b>Player X </b>And Second Player as
                    <b>Player 0</b>
                </p>
                <br /><br />
                <div class="ui">
                    <div class="row">
                        <input id="b1" class="cell" onClick={fun2} readonly />
                        <input id="b2" class="cell" onClick={fun3} readonly />
                        <input id="b3" class="cell" onClick={fun4} readonly />
                    </div>
                    <div class="row">
                        <input id="b4" class="cell" onClick={fun5} readonly />
                        <input id="b5" class="cell" onClick={fun6} readonly />
                        <input id="b6" class="cell" onClick={fun7} readonly />
                    </div>
                    <div class="row">
                        <input id="b7" class="cell" onClick={fun8} readonly />
                        <input id="b8" class="cell" onClick={fun9} readonly />
                        <input id="b9" class="cell" onClick={fun10} readonly />
                    </div>
                </div>
                <br /><br /><br />

                <button id="but" onClick={myfunc_2}>RESET</button>
                <br /><br />
                <p id="print"></p>
            </div>
        </div>
    )
}

export default Tiktak