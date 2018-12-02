// Defining Variables
$(document).on("click", ".crystal", crystalClick);

var targetNumber = "";
var wins = 0;
var losses = 0;
var counter = 0;
var images = ["./assets/images/blue.jpeg","./assets/images/green.jpeg", "./assets/images/red.jpeg", "./assets/images/yellow.jpeg"];

// Click Functions
function crystalClick () {
    //attr returns first value of selected html element
    counter += parseInt($(this).attr("value"));
    $(".finalScore").html(counter);
    if (counter == targetNumber) {
        wins++;
        totalReset();
    }
    else if (counter > targetNumber) {
        losses++;
        totalReset();
    };
};

// Functions

function randomTargetNumber () {
    targetNumber = Math.floor(Math.random() * 102) + 19;
}

function resetCrystals () {
    for (var i = 0; i < images.length; i++) {
        var crystal = $("<img>");
        crystal.addClass("crystal");
        crystal.attr("src", images[i]);
        crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
        crystal.attr("height", "100");
        $(".gem-images").append(crystal);
    }
}

function resetHTML () {
    $(".target").html(targetNumber);
    $(".tablescore").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
    $(".finalScore").html(counter);
    $(".gem-images").empty();
}

function totalReset () {
    randomTargetNumber ();
    counter = 0;
    resetHTML ();
    resetCrystals ();
}

// Running Code

	// Inital Page Set Up
	randomTargetNumber();
	resetHTML ();
	resetCrystals ();


