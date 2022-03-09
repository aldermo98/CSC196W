function bigger() {
    document.getElementById("textarea").style.fontSize = "24pt";
}

function fancify() {
    let words = document.getElementById("textarea");
    if(document.getElementById("fancy").checked) {
        words.style.fontWeight = "bold";
        words.style.color = "blue";
        words.style.textDecoration = "underline";
        words.style.textShadow = "10px 10px 10px black";
        document.getElementById("boring").checked = false;
    }
}

function reset() {
    let words = document.getElementById("textarea");
    if(document.getElementById("boring").checked) {
        words.style.fontweight = "normal";
        words.style.color = "black";
        words.style.textDecoration = "none";
        words.style.textShadow = "none";
        words.style.fontSize = "10pt";
        document.getElementById("fancy").checked = false;
    }
}

function moo() {
    let words = document.getElementById("textarea");
    words.style.textTransform = "uppercase";
    let parts = words.value.split(".");
    words.value = parts.join("-Moo.");
}