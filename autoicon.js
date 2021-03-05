var e = entry();

function updateIcon(_e) {


var uri = _e.field("IconJS");


uri = uri.replace("[", "");
uri = uri.replace("]", "");

_e.set("Icon", uri);

message("Icon updated");
  
}
