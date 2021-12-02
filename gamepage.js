p1_name = localStorage.getItem("player1_name");
p2_name = localStorage.getItem("player2_name");
p1_score = 0;
p2_score = 0;
document.getElementById("p1_name").innerHTML = p1_name + ": ";
document.getElementById("p2_name").innerHTML = p2_name + ": ";
document.getElementById("Qturn").innerHTML = p1_name;
document.getElementById("Aturn").innerHTML = p2_name;
document.getElementById("p1_score").innerHTML = p1_score;
document.getElementById("p2_score").innerHTML = p2_score;

function send(){
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;
    actual_ans = parseInt(n1) * parseInt(n2);

    question_number = "<h4>" + n1 + "X" + n2 + "</h4>"
    input_box = "<br> Answer: <input type='text' id = 'input_check_box'>";
    check_button = "<br><br><button onclick = 'check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;

    document.getElementById("n1").innerHTML = "";
    document.getElementById("n2").innerHTML = "";
}
p1_name = localStorage.getItem("player1_name");
p2_name = localStorage.getItem("player2_name");

question_turn = "player1";
answer_turn = "player2";

function check(){
    getAnswer = document.getElementById("input_check_box").value;
    document.getElementById("n1").innerHTML = "";
    document.getElementById("n2").innerHTML = "";
    if(getAnswer == actual_ans){
        console.log(actual_ans);
        if(answer_turn == "player1"){
            p1_score = p1_score + 1;
            document.getElementById("p1_score").innerHTML = p1_score;
            console.log(p1_score);
        }
        else{
            p2_score = p2_score + 1;
            console.log(p2_score);
            document.getElementById("p2_score").innerHTML = p2_score;
        }
    }
    if(question_turn == "player1"){
        question_turn = "player2";
        answer_turn = "player1";
        document.getElementById("Qturn").innerHTML = p2_name;
        document.getElementById("Aturn").innerHTML = p1_name;
    }
    else{
        question_turn = "player1";
        answer_turn = "player2"
        document.getElementById("Qturn").innerHTML = p1_name;
        document.getElementById("Aturn").innerHTML = p2_name;
    }
}
if(p1_score == 5){
    winner = "<h4 id='win_name'></h4>";
    document.getElementById("winner").innerHTML = winner;
    win_name = p1_name + "WINS!!!";
    document.getElementById("win_name").innerHTML = win_name;
}
if(p2_score == 5){
    winner = "<h4 id='win_name'></h4>";
    document.getElementById("winner").innerHTML = winner;
    win_name = p2_name + "WINS!!!";
    document.getElementById("win_name").innerHTML = win_name;
}