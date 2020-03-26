/********************* Navigation ****************************************/

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myNavigation() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

/* Giveaway Tool functions */

function showWinner() {
    var contestants_list = document.getElementById('contestants_input').value.split("\n");
    var numberOfContestants = contestants_list.length;
    var contestTitle = document.getElementById("title_input").value;
    var winner = contestants_list[Math.floor(Math.random() * numberOfContestants)];
    document.getElementById('winner').innerHTML = 
        "The winner of the " + contestTitle.toUpperCase() + " contest is " + winner.toUpperCase() + "! Congratulations!";
}

function eraseText() {
  document.getElementById("contestants_input").value = "";
}