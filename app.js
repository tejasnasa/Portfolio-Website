var typed = new Typed('#typewrite', {
    strings: ['Tejas Nasa'],
    typeSpeed: 70,
    onComplete: function() {
        var t = setInterval(() => {
            var blink1 = document.querySelector('#blink1');
            blink1.style.visibility = (blink1.style.visibility == 'hidden' ? '' : 'hidden');
        }, 500);
    }
});

var t = setInterval(() => {
    var blink2 = document.querySelector('#blink2');
    blink2.style.visibility = (blink2.style.visibility == 'hidden' ? '' : 'hidden');
}, 500);