(function() {
    'use strict';

    let regex727;
    regex727 = new RegExp(/7[.\/\-_|()"'~}{\[\]:;,+=*<>! ]?2[.\/_\-|()"'~}{\[\]:;,+=*<>! ]?7/, "g");

    function find727(element, regex) {
        return element.innerText.match(regex) !== null;
    }

    function is727() {
        const body = document.querySelector("body");

        console.log(find727(body, regex727));
        if (!find727(body, regex727)) return;
        console.log("Found!");
        chrome
        alert("WHEN YOU SEE IT!");
        return;

    }

    $(document).ready( () => {
        is727();
    });
})();