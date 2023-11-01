var lock = "An Empty String";
let select = document.getElementById("Search-select");
let place_hold = document.getElementById("search-input");
var java = null;

function search() {
    select = document.getElementById("Search-select");
    java = select.value;
    var check = true;

    if (java == "Google") {
        lock = 'https://www.google.com/search?q=';
    } else if (java == "Amazon") {
        lock = 'https://www.amazon.in/s?k=';
    } else if (java == "Youtube") {
        lock = 'https://www.youtube.com/results?search_query=';
    } else {
        alert("Please select a branch to search...");
        check = false;
    }
    if (check) {
        broadcast("Normal");
    }
}

function broadcast(type) {
    let text = document.getElementById("search-input");
    var url = lock + encodeURIComponent(text.value);
    window.open(url, '_blank').focus();
}

function OpenPanel() {
    let sidebar = document.querySelector(".sidebar");
    let cross = document.querySelector(".fa-xmark");
    let black = document.querySelector(".black");
    sidebar.classList.add("active");
    cross.classList.add("active");
    black.classList.add("active");
    document.body.classList.add("stop-scroll");
}

function ClosePanel() {
    let sidebar = document.querySelector(".sidebar");
    let cross = document.querySelector(".fa-xmark");
    let black = document.querySelector(".black");
    sidebar.classList.remove("active");
    cross.classList.remove("active");
    black.classList.remove("active");
    document.body.classList.remove("stop-scroll");
}
