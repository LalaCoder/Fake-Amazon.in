var lock = "An Empty String";
let select = document.getElementById("Search-select");
let place_hold = document.getElementById("search-input");
var java = null;

function search() {
    select = document.getElementById("Search-select");
    java = select.value;
    if (java == "Google") {
        lock = 'https://www.google.com/search?q=';
    } else if (java == "Amazon") {
        lock = 'https://amazon.in/s?k=';
    } else if (java == "Youtube") {
        lock = 'https://www.youtube.com/results?search_query=';
    } else {
        window.open("https://www.java.com/", '_self');
    }
    broadcast("Normal");
}

function broadcast(type) {
    let text = document.getElementById("search-input");
    var url = lock + '+' + text.value;
    window.open(url, '_blank').focus;
}

let OpTiOn = document.querySelector('#Search-select');
console.log(OpTiOn);
OpTiOn.onclick() = (Event) => {
    change();
};

function change() {
    java = select.value;
    document.getElementById("search-input").placeholder = 'Search ' + java;
    console.log(place_hold);
}