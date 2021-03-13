function playBGM(e) {

var q = e.field("BGM ID");

i = intent("android.media.action.MEDIA_PLAY_FROM_SEARCH");

i.extra("query", q);

message("Playing " + q);

i.send();

}
