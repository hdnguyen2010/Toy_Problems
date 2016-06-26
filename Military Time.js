/*
Military Time
Given a string that represents time in hours and minutes, convert the string to military time (if necessary).

Examples
Input		Output
time:
"3:00pm"	"15:00"
time:
"9:15am"	"09:15"
time:
"12:00am"	"00:00"
time:
"04:00"		"04:00"
*/

function toMilitary (time) {
  var times = time.split(":"), 
  hrs = times[0],
  mins = times[1].slice(0,2),
  meridies = times[1].slice(2).toLowerCase();
  console.log(hrs, mins, meridies)
  if(hrs === "12" && meridies === "am"){
  	return "00" + ":" + mins
  }
  if(meridies === "pm" && hrs !== "12"){
   hrs = (parseInt(hrs) + 12)
  }
  if(hrs.length === 1) {
  	hrs = "0" + hrs
  }
  return "" + hrs + ":" + mins;
}

console.log(toMilitary("3:00pm")) //=> "15:00"