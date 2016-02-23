//Feel free to change these words:
var nouns = ["Hammer","Cat","Tree", "Silence", "Umbrella","Sofa","Shirt","Jacket"];
var articles = ["the", "a", "an"];
var adjectives = ["solid", "empty", "strong", "intimidating", "wicked"];
var colors = ["blue", "green", "yellow", "black", "red", "orange"];
var myVars = [articles, adjectives, nouns, colors];


var randNum;

function setup(){
	createCanvas(windowWidth, windowHeight);

	randNum1 = floor(random(0,nouns.length));
	randNum2 = floor(random(0,articles.length));
	randNum3 = floor(random(0,adjectives.length));
	randNum4 = floor(random(0, colors.length));


}

function draw(){
	background("silver");
	textFont("didot");
	textSize(70);
	fill(colors[randNum4]);

	text(articles[randNum2]+ " "+adjectives[randNum3]+ " "+nouns[randNum1], 100,200)





}
