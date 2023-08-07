function search() {
    let a = document.getElementById("search-input");
    const google = 'https://www.google.com/search?q=';
    var url = google + '+' + a.value;
    window.open(url, '_blank').focus;
}