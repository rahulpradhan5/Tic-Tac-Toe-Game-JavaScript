
let td1 = document.getElementById("td1");
let td2 = document.getElementById("td2");
let td3 = document.getElementById("td3");
let td4 = document.getElementById("td4");
let td5 = document.getElementById("td5");
let td6 = document.getElementById("td6");
let td7 = document.getElementById("td7");
let td8 = document.getElementById("td8");
let td9 = document.getElementById("td9");
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let winnerTag = document.getElementById("winner-tag");
let playerNum = document.getElementById("player-num");
let player;
let draw = 1;


$("#b1").click(function() {
    player = "x";
    $(".selection").css("display", "none");
    $(".game-table").css("display", "block");
    playerNum.innerHTML = "player 1";
})

$("#b2").click(function() {
    player = "o";
    $(".selection").css("display", "none");
    $(".game-table").css("display", "block");
    playerNum.innerHTML = "player 1";
})

$("#td1").click(function() {
    if (td1.innerHTML == "") {
        if (playerNum.innerHTML == "player 1" && player == "x") {
            td1.innerHTML = "x";
            playerNum.innerHTML = "player 2";
            player = "o"
        } else if (playerNum.innerHTML == "player 1" && player == "o") {
            td1.innerHTML = "o";
            playerNum.innerHTML = "player 2";
            player = "x"
        } else if (playerNum.innerHTML == "player 2" && player == "x") {
            td1.innerHTML = "x";
            playerNum.innerHTML = "player 1";
            player = "o"
        } else if (playerNum.innerHTML == "player 2" && player == "o") {
            td1.innerHTML = "o";
            playerNum.innerHTML = "player 1";
            player = "x"
        }
        td1.disabled = true;
    }
    winnerCheck();
})

$("#td2").click(function() {
    if (td2.innerHTML == "") {
        if (playerNum.innerHTML == "player 1" && player == "x") {
            td2.innerHTML = "x";
            playerNum.innerHTML = "player 2";
            player = "o"
        } else if (playerNum.innerHTML == "player 1" && player == "o") {
            td2.innerHTML = "o";
            playerNum.innerHTML = "player 2";
            player = "x"
        } else if (playerNum.innerHTML == "player 2" && player == "x") {
            td2.innerHTML = "x";
            playerNum.innerHTML = "player 1";
            player = "o"
        } else if (playerNum.innerHTML == "player 2" && player == "o") {
            td2.innerHTML = "o";
            playerNum.innerHTML = "player 1";
            player = "x"
        }
        td2.disabled = true;
    }
    winnerCheck();
})

$("#td3").click(function() {
    if (td3.innerHTML == "") {
        if (playerNum.innerHTML == "player 1" && player == "x") {
            td3.innerHTML = "x";
            playerNum.innerHTML = "player 2";
            player = "o"
        } else if (playerNum.innerHTML == "player 1" && player == "o") {
            td3.innerHTML = "o";
            playerNum.innerHTML = "player 2";
            player = "x"
        } else if (playerNum.innerHTML == "player 2" && player == "x") {
            td3.innerHTML = "x";
            playerNum.innerHTML = "player 1";
            player = "o"
        } else if (playerNum.innerHTML == "player 2" && player == "o") {
            td3.innerHTML = "o";
            playerNum.innerHTML = "player 1";
            player = "x"
        }
        td3.disabled = true;
    }
    winnerCheck();
})

$("#td4").click(function() {
    if (td4.innerHTML == "") {
        if (playerNum.innerHTML == "player 1" && player == "x") {
            td4.innerHTML = "x";
            playerNum.innerHTML = "player 2";
            player = "o"
        } else if (playerNum.innerHTML == "player 1" && player == "o") {
            td4.innerHTML = "o";
            playerNum.innerHTML = "player 2";
            player = "x"
        } else if (playerNum.innerHTML == "player 2" && player == "x") {
            td4.innerHTML = "x";
            playerNum.innerHTML = "player 1";
            player = "o"
        } else if (playerNum.innerHTML == "player 2" && player == "o") {
            td4.innerHTML = "o";
            playerNum.innerHTML = "player 1";
            player = "x"
        }
        td4.disabled = true;
    }
    winnerCheck();
})

$("#td5").click(function() {
    if (td5.innerHTML == "") {
        if (playerNum.innerHTML == "player 1" && player == "x") {
            td5.innerHTML = "x";
            playerNum.innerHTML = "player 2";
            player = "o"
        } else if (playerNum.innerHTML == "player 1" && player == "o") {
            td5.innerHTML = "o";
            playerNum.innerHTML = "player 2";
            player = "x"
        } else if (playerNum.innerHTML == "player 2" && player == "x") {
            td5.innerHTML = "x";
            playerNum.innerHTML = "player 1";
            player = "o"
        } else if (playerNum.innerHTML == "player 2" && player == "o") {
            td5.innerHTML = "o";
            playerNum.innerHTML = "player 1";
            player = "x"
        }
        td5.disabled = true;
    }
    winnerCheck();
})

$("#td6").click(function() {
    if (td6.innerHTML == "") {
        if (playerNum.innerHTML == "player 1" && player == "x") {
            td6.innerHTML = "x";
            playerNum.innerHTML = "player 2";
            player = "o"
        } else if (playerNum.innerHTML == "player 1" && player == "o") {
            td6.innerHTML = "o";
            playerNum.innerHTML = "player 2";
            player = "x"
        } else if (playerNum.innerHTML == "player 2" && player == "x") {
            td6.innerHTML = "x";
            playerNum.innerHTML = "player 1";
            player = "o"
        } else if (playerNum.innerHTML == "player 2" && player == "o") {
            td6.innerHTML = "o";
            playerNum.innerHTML = "player 1";
            player = "x"
        }
        td6.disabled = true;
    }
    winnerCheck();
})

$("#td7").click(function() {
    if (td7.innerHTML == "") {
        if (playerNum.innerHTML == "player 1" && player == "x") {
            td7.innerHTML = "x";
            playerNum.innerHTML = "player 2";
            player = "o"
        } else if (playerNum.innerHTML == "player 1" && player == "o") {
            td7.innerHTML = "o";
            playerNum.innerHTML = "player 2";
            player = "x"
        } else if (playerNum.innerHTML == "player 2" && player == "x") {
            td7.innerHTML = "x";
            playerNum.innerHTML = "player 1";
            player = "o"
        } else if (playerNum.innerHTML == "player 2" && player == "o") {
            td7.innerHTML = "o";
            playerNum.innerHTML = "player 1";
            player = "x"
        }
        td7.disabled = true;
    }
    winnerCheck();
})

$("#td8").click(function() {
    if (td8.innerHTML == "") {
        if (playerNum.innerHTML == "player 1" && player == "x") {
            td8.innerHTML = "x";
            playerNum.innerHTML = "player 2";
            player = "o"
        } else if (playerNum.innerHTML == "player 1" && player == "o") {
            td8.innerHTML = "o";
            playerNum.innerHTML = "player 2";
            player = "x"
        } else if (playerNum.innerHTML == "player 2" && player == "x") {
            td8.innerHTML = "x";
            playerNum.innerHTML = "player 1";
            player = "o"
        } else if (playerNum.innerHTML == "player 2" && player == "o") {
            td8.innerHTML = "o";
            playerNum.innerHTML = "player 1";
            player = "x"
        }
        td8.disabled = true;
    }
    winnerCheck();
})

$("#td9").click(function() {
    if (td9.innerHTML == "") {
        if (playerNum.innerHTML == "player 1" && player == "x") {
            td9.innerHTML = "x";
            playerNum.innerHTML = "player 2";
            player = "o"
        } else if (playerNum.innerHTML == "player 1" && player == "o") {
            td9.innerHTML = "o";
            playerNum.innerHTML = "player 2";
            player = "x"
        } else if (playerNum.innerHTML == "player 2" && player == "x") {
            td9.innerHTML = "x";
            playerNum.innerHTML = "player 1";
            player = "o"
        } else if (playerNum.innerHTML == "player 2" && player == "o") {
            td9.innerHTML = "o";
            playerNum.innerHTML = "player 1";
            player = "x"
        }
        td9.disabled = true;
    }
    winnerCheck();
})

function winnerCheck() {
    if(playerNum.innerHTML == "player 1"){
            winnerTag.innerHTML = "Winner player 2";
        }else if(playerNum.innerHTML == "player 2"){
            winnerTag.innerHTML = "Winner player 1";
        }
    if (td1.innerHTML == "x" && td2.innerHTML == "x" && td3.innerHTML == "x") {
        $(".game-table").css("display","none");
        $(".winner").css("display","block");
    } else if (td1.innerHTML == "x" && td4.innerHTML == "x" && td7.innerHTML == "x") {
        $(".game-table").css("display","none");
        $(".winner").css("display","block");
    } else if (td1.innerHTML == "x" && td5.innerHTML == "x" && td9.innerHTML == "x") {
        $(".game-table").css("display","none");
        $(".winner").css("display","block");
    } else if (td2.innerHTML == "x" && td5.innerHTML == "x" && td8.innerHTML == "x") {
        $(".game-table").css("display","none");
        $(".winner").css("display","block");
    } else if (td3.innerHTML == "x" && td6.innerHTML == "x" && td9.innerHTML == "x") {
        $(".game-table").css("display","none");
        $(".winner").css("display","block");
    } else if (td4.innerHTML == "x" && td5.innerHTML == "x" && td6.innerHTML == "x") {
        $(".game-table").css("display","none");
        $(".winner").css("display","block");
    } else if (td7.innerHTML == "x" && td8.innerHTML == "x" && td9.innerHTML == "x") {
        $(".game-table").css("display","none");
        $(".winner").css("display","block");
    } else if (td3.innerHTML == "x" && td5.innerHTML == "x" && td7.innerHTML == "x") {
        $(".game-table").css("display","none");
        $(".winner").css("display","block");
    } else if (td1.innerHTML == "o" && td2.innerHTML == "o" && td3.innerHTML == "o") {
        $(".game-table").css("display","none");
        $(".winner").css("display","block");
    } else if (td1.innerHTML == "o" && td4.innerHTML == "o" && td7.innerHTML == "o") {
        $(".game-table").css("display","none");
        $(".winner").css("display","block");
    } else if (td1.innerHTML == "o" && td5.innerHTML == "o" && td9.innerHTML == "o") {
        $(".game-table").css("display","none");
        $(".winner").css("display","block");
    } else if (td2.innerHTML == "o" && td5.innerHTML == "o" && td8.innerHTML == "o") {
        $(".game-table").css("display","none");
        $(".winner").css("display","block");
    } else if (td3.innerHTML == "o" && td6.innerHTML == "o" && td9.innerHTML == "o") {
        $(".game-table").css("display","none");
        $(".winner").css("display","block");
    } else if (td4.innerHTML == "o" && td5.innerHTML == "o" && td6.innerHTML == "o") {
        $(".game-table").css("display","none");
        $(".winner").css("display","block");
    } else if (td7.innerHTML == "o" && td8.innerHTML == "o" && td9.innerHTML == "o") {
        $(".game-table").css("display","none");
        $(".winner").css("display","block");
    } else if (td3.innerHTML == "o" && td5.innerHTML == "o" && td7.innerHTML == "o") {
        $(".game-table").css("display","none");
        $(".winner").css("display","block");
    }else if(td1.innerHTML != "" && td2.innerHTML != "" && td3.innerHTML != "" && td4.innerHTML != "" && td5.innerHTML != "" && td6.innerHTML != "" && td7.innerHTML != "" && td8.innerHTML != "" && td9.innerHTML != ""){
        $(".game-table").css("display","none");
        $(".winner").css("display","block");
        draw = 2;
        winns(draw);
    }
    
   
    
}

function winns(){
    if(draw == 2){
            console.log
            winnerTag.innerHTML = "Match Draw Try Again!";
            
        }
}
function relode(){
window.location.href = "index.php";
}
