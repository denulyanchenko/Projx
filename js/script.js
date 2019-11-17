var userName;
var button = document.getElementById('button');

var person = {
    firstName: 'Den',
    lastName: 'Ulyanchenko',
    id: 1305
};
userName = person.firstName;
console.log(userName);
console.log(person);
var called = false;

function spawnNotification(body, icon, title) {
  var options = {
      body: body,
      icon: icon
  };
  var n = new Notification(title, options);
}

button.onclick = function(){
    if (called) {
        called = false;
    } else called = true;
    animate(called);
    //prompt("Set your billing account");
}

function notifyMe() {
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  else if (Notification.permission === "granted") {
    var notification = new Notification("Hi there!");
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission === "denied") {
    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        var notification = new Notification("Hi there!");
      }
    });
  }
}

function animate(called){
    button.style.transitionDuration = '800ms';
    if (called) {
        button.style.transform = 'rotate(270deg)';
    } else button.style.transform = 'rotate(0deg)';
};
