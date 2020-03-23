
/* Giveaway Tool functions */

function showInfo() {
    var contestTitle = document.getElementById("title_input").value;
    document.getElementById('contestTitle').innerHTML = 
        "Pocket's presents: " + contestTitle;
    var contestDate = document.getElementById("date_input").value;
    document.getElementById('contestDate').innerHTML =
        "Draw date: " + contestDate;
   
    var contestants_list = document.getElementById('contestants_input').value.split("\n");
    var contestants = contestants_list.join(", ");
    document.getElementById('contestants').innerHTML = 
        "The contestants: " + contestants;
    var numberOfContestants = contestants_list.length;
    document.getElementById('numberOfContestants').innerHTML =
        "Number of contestants: " + numberOfContestants;
}

function showWinner() {
    var contestants_list = document.getElementById('contestants_input').value.split("\n");
    var numberOfContestants = contestants_list.length;
    var contestTitle = document.getElementById("title_input").value;
    var winner = contestants_list[Math.floor(Math.random() * numberOfContestants)];
    document.getElementById('winner').innerHTML = 
        "The winner of the " + contestTitle + " is " + winner + "! Congratulations!";
}