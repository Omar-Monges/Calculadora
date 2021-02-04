const screen = document.querySelector('#display'),
      btns = document.getElementById("button-container");
let data = null, x = 0;
const getData = (ref) => {
    let value = ref.value;
    // data = data == undefined ? value : console.log(parseInt(data += value));
    screen.value += value;
    if (parseInt(value) || value == "0") {
        data = data == null ? value : parseInt(data += value);
    } else {
        if (value === "c"){
            clear();
            data = 0;
        } else if (value === "+") {
            x += parseInt(data);
            data = 0;
        } else if (value === "-") {
            console.log("Restamos");
        } else if (value === "*") {
            console.log("Multi");
        } else if (value === "/") {
            console.log("Dividimos");
        } else if (value === "=") {
            clear();
            screen.value = sumar(x, data);
        }
    }
}
const clear = () => {
    screen.value = '';
}
const sumar = (a, b) => {
    return a + b;
}