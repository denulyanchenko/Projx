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

button.onclick = function(){
    called = true;
    animate(called);
    prompt("Set your billing account");
    var notification = new Notification('Succes!');
    //setTimeout(notification.close.bind(notification), 4000);
};

function animate(called){
    button.style.transitionDuration = '800ms';
    if (called) {
        button.style.transform = 'rotate(270deg)';
    } else {
        button.style.transform = 'rotate(0deg)'
    }
};
