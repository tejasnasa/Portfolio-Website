// Initialization for ES Users
import { Ripple, initMDB } from "mdb-ui-kit";

initMDB({ Ripple });

var t = setInterval(() => {
    var blink = document.getElementById('blink');
    blink.style.visibility = (blink.style.visibility == 'hidden' ? '' : 'hidden');
}, 500);