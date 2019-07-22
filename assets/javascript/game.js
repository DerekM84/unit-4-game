console.log("game.js linked");

$(document).ready(function() {
    console.log("document ready function");


var wins = 0;
var losses = 0;
var totalScore = 0;
var targetScore = (Math.floor((Math.random() * 101)+30));
            $(".target-score").empty();
            $(".target-score").append(targetScore);

var randomNumbers = ["1","3","7","11"];
            $(".one").attr("data-value",randomNumbers[0]);
            $(".two").attr("data-value",randomNumbers[1]);
            $(".three").attr("data-value",randomNumbers[2]);
            $(".four").attr("data-value",randomNumbers[3]);

function reset() {
    totalScore=0;
    targetScore = (Math.floor((Math.random() * 101)+30));
            $(".target-score").empty();
            $(".target-score").append(targetScore);
            $(".net-worth").empty();
            $(".gem-value").empty();

    function buttonValues() {
        var newRandoms =[0,0,0,0];
        for (let i = 0; i < newRandoms.length; i++) {
            newRandoms[i]=(Math.floor((Math.random() * 15)+1));
            };
            $(".one").attr("data-value",newRandoms[0]);
            $(".two").attr("data-value",newRandoms[1]);
            $(".three").attr("data-value",newRandoms[2]);
            $(".four").attr("data-value",newRandoms[3]);
    }
        buttonValues();
}
// Reset variables and clear numbers from boxes

$(".reset-button").on("click", function() {
        console.log("reset clicked");
    reset();
} );

// Display gem value while hovering over one, and no value while not hovering.
$(".gem").on("mouseenter", function() {
    var gemValue = parseInt($(this).attr("data-value"));
        console.log("Hovering over a gem worth " + gemValue);
    $(".gem-value").empty();
    $(".gem-value").append(gemValue);
});

$(".gem").on("mouseleave", function() {
    $(".gem-value").empty();
})

// Clicking any button will add the unique data-value to the total score and check to see if 100 has been reached yet

$(".gem").on("click", function() {
    console.log("clicked a button worth " + $(this).attr("data-value"));
    totalScore = totalScore + parseInt($(this).attr("data-value"));
        console.log(totalScore);

    $(".net-worth").empty();
    $(".net-worth").append(totalScore);

        console.log("totalScore is a " + typeof totalScore);

    if (totalScore === targetScore) {
        wins++;
        $(".net-worth").empty();
        $(".wins").empty();
        $(".wins").append(wins);
        reset();
    }

    else if (totalScore > targetScore) {
        losses++;
        $(".net-worth").empty();
        $(".losses").empty();
        $(".losses").append(losses);
        reset();
    }
});
});