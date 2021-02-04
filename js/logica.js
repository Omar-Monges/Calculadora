const screen = document.querySelector('#display'),
      btns = document.getElementById("button-container");
let data = null, x = 0, opc;
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
            clear();
            x += data;
            data = 0;
            opc = value;
        } else if (value === "-") {
            clear();
            x = data;
            data = 0;
            opc = value;
        } else if (value === "*") {
            clear();
            x = data;
            data = 0;
            opc = value;
        } else if (value === "/") {
            clear();
            x = data;
            data = 0;
            opc = value;
        } else if (value === "=") {
            clear();
            switch (opc) {
                case '+':
                    screen.value = sumar(x, data);
                    data = 0;
                    x = 0;
                    break;
                case '-':
                    screen.value = restar(x, data);
                    data = 0;
                    x = 0;
                    break;
                case '*':
                    screen.value = multiplicar(x, data);
                    data = 0;
                    x = 0;
                    break;
                case '/':
                    screen.value = dividir(x, data);
                    data = 0;
                    x = 0;
                    break;
                default:
                    console.log("Nos fui"); 
            }
        }
    }
}
const clear = () => {
    screen.value = '';
}
const sumar = (a, b) => {
    return a + b;
}
const restar = (a, b) => {
    return a - b;
}
const multiplicar = (a, b) => {
    return a * b;
}
const dividir = (a, b) => {
    return a / b;
}