function imageLink(e, _localImageFieldName, _dbFieldName, _dbImageFieldName) {

  // var l = e.field(_localImageFieldName);
  // var d = e.field(_dbFieldName);
  var j = e.field(_dbImageFieldName);



  e.set(_localImageFieldName, resb(j));

  message("ℹ Updated " +  _localImageFieldName + " field from " + _dbFieldName + " field");


}


function resb(s) { // Remove Enclosing Square Brackets
  
  s = s.toString();
  
  s = s.replace("[", "");
  s = s.replace("]", "");
  return s;

}
  
