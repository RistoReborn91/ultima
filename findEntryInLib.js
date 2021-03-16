function findEntryInLib (_q, _db) {


var lib = libByName(_db);
var e = lib.find(_q);

message("Searching '" + _q + "' in '" + _db);
e[0].show();

}
