if (localStorage.getItem("accepted") == "true") {
    location.href = "https://learn.k.vu/lessons/"
}
function letsgo() {
    let x = document.getElementById("continue")
    var agreed = x.checked
    if (agreed != true) {
        alert("You need to accept the Terms to continue.")
    } else {
        localStorage.setItem("accepted","true")
        location.reload()
    }
}