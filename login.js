function adduser(){
    player1_name = document.getElementById("p1_input").value;
    player2_name = document.getElementById("p2_input").value;

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    window.location.replace("gamepage.html");
}

document.getElementById()