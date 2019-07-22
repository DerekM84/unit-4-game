console.log("game.js linked");

$(document).ready(function() {
console.log("document ready");


var wins = 0;
var losses = 0;
var totalScore = 0;

function reset() {
    totalScore=0;
}
// Clicking any button will add the data-value to the total score
$(".gem button").on("hover", function() {
    var gemValue = parseInt($(this).attr("data-value"));
    console.log(gemValue);
    $(".gem-value").empty();
    $(".gem-value").append(gemValue);
})

$(".gem").on("click", function() {
    console.log("clicked a button worth " + $(this).attr("data-value"));
    totalScore = totalScore + parseInt($(this).attr("data-value"));
    console.log(totalScore);
    $(".net-worth").empty();
    $(".net-worth").append(totalScore);

    console.log(typeof totalScore);
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

} );


$(".reset-button").on("click", function() {
console.log("reset clicked");
totalScore = 0;

} );

});