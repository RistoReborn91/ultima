function PassiveStateNotetags(e) {

var states = e.field("Passive States");
var result = "";

for (var i = 0; i < states.length; i++) {
 result += states[i].field("Notetag");
 result += "\n";

}
return result;

}
