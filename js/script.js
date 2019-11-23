let button = document.getElementById('button');

button.onclick = ()=> {
    let r = confirm('Do you want take image from server?');
    if (r == true){
        alert('Ok, see this?');
    } else alert('Sorry, maybe later?');
    
    
};
