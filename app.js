var t = setInterval(() => {
    var blink1 = document.querySelector('#blink1');
    var blink2 = document.querySelector('#blink2');
    blink1.style.visibility = (blink1.style.visibility == 'hidden' ? '' : 'hidden');
    blink2.style.visibility = (blink2.style.visibility == 'hidden' ? '' : 'hidden');
}, 500);