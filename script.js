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

  // Countdown to the convention: Oct 24, 2026, 3:00 PM Eastern (UTC-4, EDT).
  var clock = document.getElementById("countdown");
  if (clock) {
    var target = new Date("2026-10-24T15:00:00-04:00").getTime();
    var els = {
      days:  clock.querySelector("[data-days]"),
      hours: clock.querySelector("[data-hours]"),
      mins:  clock.querySelector("[data-mins]"),
      secs:  clock.querySelector("[data-secs]")
    };
    var pad = function (n) { return (n < 10 ? "0" : "") + n; };
    var tick = function () {
      var diff = target - Date.now();
      if (diff <= 0) {
        els.days.textContent = els.hours.textContent =
          els.mins.textContent = els.secs.textContent = "00";
        clock.classList.add("countdown--live");
        clearInterval(timer);
        return;
      }
      var s = Math.floor(diff / 1000);
      els.days.textContent  = Math.floor(s / 86400);
      els.hours.textContent = pad(Math.floor((s % 86400) / 3600));
      els.mins.textContent  = pad(Math.floor((s % 3600) / 60));
      els.secs.textContent  = pad(s % 60);
    };
    tick();
    var timer = setInterval(tick, 1000);
  }
})();
