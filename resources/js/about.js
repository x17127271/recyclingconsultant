
function counter() {
    var i = 423039;

    function increment() {      
        i++;
        document.getElementById('number').innerHTML = i;    
    }

    setInterval(increment, 1000);       
}


 window.onload = counter;