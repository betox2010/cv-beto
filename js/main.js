$(document).ready(function() {

  var tl = new TimelineLite,
    splitTextTitle = new SplitText("h1 span", {
      type: "chars"
    }),
    splitTextSub = new SplitText("h2 span", {
      type: "chars"
    }),
    lettersTitle = splitTextTitle.chars,
    lettersSub = splitTextSub.chars;

  for (i = 0; i < lettersTitle.length; i++) {
    tl.to(lettersTitle[i], .4, {
      ease: Power2.easeOut,
      y: 80
    }, 0.3 + i * 0.06);
  }

  for (i = 0; i < lettersSub.length; i++) {
    var temp = lettersSub.length - 1 - i;
    tl.to(lettersSub[temp], .4, {
      ease: Power2.easeOut,
      y: -160
    }, 0.8 - temp * 0.06);
  }
});