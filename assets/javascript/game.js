console.log("game.js linked");

$(document).ready(function() {
    console.log("document ready function");


var wins = 0;
var losses = 0;
var totalScore = 0;

function reset() {
    totalScore=0;
    $(".net-worth").empty();
    $(".gem-value").empty();
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

    if (totalScore === 100) {
        wins++;
        $(".net-worth").empty();
        $(".wins").empty();
        $(".wins").append(wins);
        reset();
    }

    else if (totalScore > 100) {
        losses++;
        $(".net-worth").empty();
        $(".losses").empty();
        $(".losses").append(losses);
        reset();
    }
});
});