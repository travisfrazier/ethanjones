// Scroll Reveal jQuery plug-in on the youtube videos

window.sr = ScrollReveal({ reset: true });

// Custom Settings

sr.reveal('.foo', {
    duration: 1000
});


// Drop down captions

$(".iframe-one").hover(function(e) {
  $(".caption-div").slideToggle();
});

$(".iframe-two").hover(function(e) {
  $(".caption-div-two").slideToggle();
});

$(".iframe-three").hover(function(e) {
  $(".caption-div-three").slideToggle();
});

$(".iframe-four").hover(function(e) {
  $(".caption-div-four").slideToggle();
});

$(".iframe-five").hover(function(e) {
  $(".caption-div-five").slideToggle();
});

$(".iframe-six").hover(function(e) {
  $(".caption-div-six").slideToggle();
});