function pick(){
var total = 0;
var whatis = "Pick a Number < 5";
var num = prompt(whatis);
for (var cnt = 1; cnt <= num; cnt++) {
  total = total + cnt;
} 
console.log("The total is:" +total);
}
function game(){
var y = "yes";
var q = "Do you want to play?";
var ent = "Enter a Word.";
final = "";
  do {
  var y = prompt(q);
  var out = prompt(ent);
  var final = final + out;
  var y = prompt(q);
  }while(y === "yes");
  console.log(final)
}
function three(){
  var ans = "yes";
  var name1 = prompt("What is your name?"); 
  var q2 = "Would you like to print your name?";
  while(ans === "yes"){
  var ans = prompt(q2);
  console.log(name1);
  var name1 = name1 + "!";
}
}
function menu(){
	var time = "What time of day is it?";
	var daypart = prompt(time);
	var sent = "Since it is ";
	var sent2 = ", you should be eating ";
	var sent3 = ". We suggest ";
	
	var eggs = "eggs and toast.";
	var lunch = "lunch";
	var salad= "a salad.";
	var dinner = "chicken and rice.";
	
	if(daypart === "morning"){
	console.log("Since it is " + daypart + ", you should be eating " + eggs);
	}else if(daypart === "noon"){
	console.log("since it is " + daypart + ", you should be eating " + salad)
	}else if(daypart === "evening"){
	console.log("since it is " + daypart + ", you should be eating " + dinner)
}


}