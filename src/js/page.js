"use strict";
(function () {

    var time = {
        'visible': 0,
        'hidden': 0
    };
    console.log(localStorage);

    setInterval(function() {
        time[document.webkitVisibilityState] += 1;
//        console.log(time);
    }, 1000);
//    window.onBlur = function() { console.log('blur'); };
//    window.onFocus = function() { console.log('focus'); };

}());
