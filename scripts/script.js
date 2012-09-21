var obamaHate   = 9923;
var obamaLove   = 2250;
var obamaTotal  = obamaHate + obamaLove;

var romneyHate  = 8898;
var romneyLove  = 1667;
var romneyTotal = romneyHate + romneyLove;

var totalHate   = obamaHate + romneyHate;
var totalLove   = obamaLove + romneyLove;
var tweetsTotal = obamaTotal + romneyTotal;

function main() {
	$(".bar").each(function(){
		var thisBar  = $(this).attr("id");
		var toPrint  = window[thisBar]; // THERE'S OFTEN NOT ROOM TO DISPLAY: " + thisBar.match(/love|hate/i);
		var maxWidth = $(".max-bar-width").width();
		var barWidth = window[thisBar] * maxWidth / tweetsTotal;

		$("#" + thisBar).css("width", barWidth).html(toPrint);
	});
}

$(document).ready(function(){
	main();
});