function countActiveLinks(e) {
var tasklib = libByName("𝗔𝟰160    Assignments");
var links = tasklib.linksTo(e);
var counter = "Active Links";
var total = links.length;
var numActive = 0;

var maxPriorityLevel = 0;

for (var i = 0; i < total; i++) {

  var status = links[i].field("✔ Status");
  var priority = links[i].field("Priority");

  if (status == "⑤  Incomplete" || status == "⑥  Ongoing")
    numActive++

  if (priority > maxPriorityLevel)
	maxPriorityLevel = priority;
  
}

e.set("Active Links", numActive);
e.set("Total Links", total);
e.set("Max Priority Level", maxPriorityLevel);

// message(numActive + " active links");

}
