var lock = "An Empty String";

function search() {
    let select = document.getElementById("Search-select");
    var java = select.value;
    if (java == "Google") {
        lock = 'https://www.google.com/search?q=';
    } else if (java == "Amazon") {
        lock = 'https://amazon.in/s?k=';
    } else if (java == "All") {
        lock = 'https://www.google.com/search?q=';
        broadcast("Both");
        lock = 'https://amazon.in/s?k=';
    }
    broadcast("Normal");
}

function broadcast(type) {
    let text = document.getElementById("search-input");
    if (type == "Normal") {
        var url = lock + '+' + text.value;
        window.open(url, '_blank').focus;
    } else {
        var url = lock + '+' + text.value;
        window.open(url, '_blank');
    }
}
