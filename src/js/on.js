require("./lib/social"); //Do not delete

// filling in Gray slideshow
// [0,1,2,3,4,5].forEach(function(ff){
//   $("#photo_g0"+ff).append(slideshow_template(eval("photo0"+ff)));
// });

// photo gallery event listeners
var gallery0_idx = 0;
var Ngallery0 = 5;

// set up clicking to update map interactive on mobile
document.getElementById("scroll-right-gallery0").addEventListener("click", function() {
  console.log("clicked right");
  gallery0_idx = gallery0_idx+1;
  $(".photo_g0").removeClass("active");
  $("#photo_g0" + eval("gallery0_idx") ).addClass("active");
  if (gallery0_idx == Ngallery0) {
    $("#scroll-right-gallery0").addClass("last");
  } else {
    $("#scroll-right-gallery0").removeClass("last");
  };
  if (eval("gallery0_idx") == 0) {
    $("#scroll-left-gallery0").addClass("first");
  } else {
    $("#scroll-left-gallery0").removeClass("first");
  };
});
document.getElementById("scroll-left-gallery0").addEventListener("click", function() {
  console.log("clicked left");
  gallery0_idx = gallery0_idx-1;
  $(".photo_g0").removeClass("active");
  $("#photo_g0" + eval("gallery0"+"_idx") ).addClass("active");
  console.log("#photo_g0" + eval("gallery0_idx"));
  console.log(eval("gallery0_idx"));
  if (gallery0_idx == Ngallery0) {
    $("#scroll-right-gallery0").addClass("last");
  } else {
    $("#scroll-right-gallery0").removeClass("last");
  };
  if (eval("gallery0_idx") == 0) {
    $("#scroll-left-gallery0").addClass("first");
  } else {
    $("#scroll-left-gallery0").removeClass("first");
  };
});