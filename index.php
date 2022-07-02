<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="jquery.js"></script>
    <title>Document</title>
</head>
<style>
    body {
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    table,
    td,
    tr,
    th {
        border: 2px solid black;
    }

    .game-table {
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 100px;
        margin-left: 480px;
    }

    table {
        width: 200px;
        height: 200px;
    }

    td {
        width: 60px;
        height: 60px
    }

    .selection {
        margin: 150px;
    }

    .select {
        display: flex;
        justify-content: center;
        column-gap: 50px;
    }

    .select button {
        width: 80px;
        height: 30px;
        text-align: center;
        font-size: medium;
    }

    .select button:hover {
        background-color: wheat;

    }

    .game-table {
        display: none;
    }

    .winner{
        display: none;
        margin-top: 150px;
    }
    .winner h1{
        color: greenyellow;
    }
    .winner button{
        width: 80px;
        height: 30px;
        text-align: center;
        font-size: medium;
    }

    .winner button:hover{
        background-color: red;
    }
</style>

<body>
    <h1> Let's Play</h1>
    <div class="selection">
        <h2>Select One for First Player</h2>
        <div class="select">
            <button id="b1">x</button>
            <button id="b2">o</button>
        </div>
    </div>
    <div class="game-table">
        <table>
            <tr>
                <td id="td1"></td>
                <td id="td2"></td>
                <td id="td3"></td>
            </tr>
            <tr>
                <td id="td4"></td>
                <td id="td5"></td>
                <td id="td6"></td>
            </tr>
            <tr>
                <td id="td7"></td>
                <td id="td8"></td>
                <td id="td9"></td>
            </tr>
        </table>
        <h4 id="player-num" style="margin-right: 470px;"></h4>
    </div>
    <div class="winner">
        <h1 id="winner-tag"></h1>
        <button onclick="relode()">ok</button>
    </div>
   <script src="game.js"></script>
</body>

</html>