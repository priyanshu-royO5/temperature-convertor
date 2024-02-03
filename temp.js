const degree = document.querySelector('#degree');
const cels = document.querySelector('#cel_val');
const cnvrt = document.querySelector('#cnvrt');
const temptyp = document.querySelector('#temp_type');


window.addEventListener("load", () => {
    degree.value = "";
    cels.style.borderColor = 'black'
    cels.style.color = 'white'
    cels.innerHTML = "<center>--ºC</center>";
});

if (degree.value == "") {
    cnvrt.setAttribute("disabled", "");
    // setTimeout(() => {
    cnvrt.removeAttribute('disabled');
    // }, 4000);
}

cnvrt.addEventListener("click", (e) => {
    e.preventDefault();
    cels.innerHTML = "<center>--ºC</center>";
    convert();
    cnvrt.innerHTML = "CONVERTING..."
    setTimeout(() => {
        cnvrt.innerHTML = "<span>Convert</span>"
    }, 1000);
})

function convert() {
    let input = degree.value;

    setTimeout(() => {

        if (temptyp.value === "fahrenheit") {
            const ftc = (input - 32) * (5 / 9);
            cels.innerHTML = "<center>" + `${ftc.toFixed(3)} ºC` + "</center>";
            cels.style.color = 'white'
            cels.style.borderColor = 'black'

        }
        else if (temptyp.value === "kelvin") {
            const ktc = input - 273.15;
            cels.innerHTML = "<center>" + `${ktc.toFixed(3)} ºC` + "</center>";
        }
    }, 1200);
}