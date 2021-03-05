var e = entry();
var uri = e.field("IconJS");


uri = uri.replace("[", "");
uri = uri.replace("]", "");

  e.set("Icon", uri);
