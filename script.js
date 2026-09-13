/* BloodCon IV — minimal enhancement only.
   The page is fully functional without JavaScript. */
(function () {
  "use strict";

  // Pause the solidarity ticker when a member hovers or focuses it,
  // so slogans can actually be read.
  var track = document.querySelector(".ticker__track");
  if (track) {
    var ticker = track.closest(".ticker");
    var pause = function () { track.style.animationPlayState = "paused"; };
    var run   = function () { track.style.animationPlayState = "running"; };
    ticker.addEventListener("mouseenter", pause);
    ticker.addEventListener("mouseleave", run);
    ticker.addEventListener("focusin", pause);
    ticker.addEventListener("focusout", run);
  }
})();
