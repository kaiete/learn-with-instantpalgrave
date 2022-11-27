const questions = ["q1"]
function check(x) {
    let y = document.getElementById(questions[x]).value
    if (y.toLowerCase() == "hola") {
        alert("Correct!")
    } else {
        alert("Not quite, but mistakes help you learn!")
    }
}