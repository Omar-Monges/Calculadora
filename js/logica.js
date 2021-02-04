const screen = document.querySelector('#display'),
      btns = document.getElementById("button-container");
let data;
const getData = (ref) => {
    let value = ref.value;
    data = data == undefined ? value : parseInt(data += value);
    screen.value += value;
    if (parseInt(value) || parseInt(value) == 0) {
        return parseInt(data);
    } else {
    console.log(value);
        if (value === "c"){
            clear();
        } else if (value === "+") {
            clear();
            console.log("Sumamos");
        } else if (value === "-") {
            console.log("Restamos");
        } else if (value === "*") {
            console.log("Multi");
        } else if (value === "/") {
            console.log("Dividimos");
        }
    }
}
const clear = () => {
    screen.value = '';
}
const sumar = (a, b) => {
    return a + b;
}