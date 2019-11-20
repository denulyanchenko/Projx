var isTooSoon = true;
window.addEventListener("beforeinstallprompt", function(e) {
  if (isTooSoon) {
    e.preventDefault(); // Prevents prompt display
    // Prompt later instead:
    setTimeout(function() {
      isTooSoon = false;
      e.prompt(); // Throws if called more than once or default not prevented
    }, 1000);
  }

  // The event was re-dispatched in response to our request
  // ...
});

button.onclick = function(){
    prompt("Set your billing account");
};
