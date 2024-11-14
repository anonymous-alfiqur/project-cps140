console.log('Hello!');
// Data block

const todaysDate = () => {
    let d = new Date();
    return "Today's date is" + d
}

const dateBlock = document.getElementById("dateBlock")
dateBlock.innerText = todaysDate();
const body = document.body
const d = new Date();

if (d.getHours() > 20 || d.getHours() < 8) {
    body.styles["backgroundColor"] = "black";
    body.style["color"] = "white";
} else {
    Body.style["backgroundColor"] = "white";
    body.style["color"] = "black";
}