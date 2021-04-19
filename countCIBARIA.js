function countCIBARIA(e) {

	var tasklib = libByName("𝗖𝗔𝗥𝗠780    CIBARIA");
	

	var fldLinks = "▫️ CIBARIA Links";
 var fldTotalScore = "▫️ CIBARIA Total Score";
 var fldUpvotes = "Upvotes";

var links = tasklib.linksTo(e);
	var total = links.length;

	var numLinks = 0;
	var totalScore = 0;

	for (var i = 0; i < total; i++) {

	  var score = links[i].field(fldUpvotes);

  totalScore += score;	
		numLinks++

	
	  }
	  
	

	e.set(fldLinks, numLinks);
	e.set(fldTotalScore, totalScore);
	
	message("CIBARIA: " + numLinks + " links • " + totalScore + " hits" );

	// message(numActive + " active links");


}
