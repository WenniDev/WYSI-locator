(function() {
    'use strict';

    let regex727 = new RegExp(/7[.\/\-_|()"'~}{\[\]:;,+=*<>! ]?2[.\/_\-|()"'~}{\[\]:;,+=*<>! ]?7/, "g");

    function find727(element, regex) {
        return element.innerText.match(regex) !== null;
    }

    function is727() {
        const body = document.querySelector("body");

        if (!find727(body, regex727)) return;
        console.log("Found!");
        alert("WHEN YOU SEE IT!");
        return;

    }


    window.addEventListener("load", is727);
    // $(document).ready( () => {
    //     is727();
    // });
})();