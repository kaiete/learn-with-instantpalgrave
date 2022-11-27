function check(x) {
    x = "q" + x
    let y = document.getElementById(x).textContent
    if (y.toLowerCase == "hola") {
        alert("Correct!")
    } else {
        alert("Not quite, but mistakes help you learn!")
    }
}