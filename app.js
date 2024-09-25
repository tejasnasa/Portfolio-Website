var t = setInterval(() => {
    var blink = document.getElementById('blink');
    blink.style.visibility = (blink.style.visibility == 'hidden' ? '' : 'hidden');
}, 500);