// Identificar Elementos

const OUTPUT_COLOR = document.querySelector('#output-color span')
const OUTPUT = document.querySelector('#output')
const GENERATE_BTN = document.querySelector('#generate')
const COPY_BTN = document.querySelector('#copy')
const ALERT_ELEMENT = document.querySelector('.alert')

// Adicionar Eventos

window.onload = generate_hexcolor
GENERATE_BTN.addEventListener('click', generate_hexcolor)
GENERATE_BTN.addEventListener('mousedown', add_load)
GENERATE_BTN.addEventListener('mouseup', remove_load)
COPY_BTN.addEventListener('click', copy_to_clipboard)
COPY_BTN.addEventListener('click', add_load)
COPY_BTN.addEventListener('click', remove_load)

// Criar Funções

function generate_hexcolor(){
    let hex_code = '#'
    for (i=0; i<6; i++){
        hex_code += Math.floor(Math.random() * 16).toString(16)
    }
    OUTPUT.value = hex_code
    OUTPUT_COLOR.classList.remove('show-color')
    setTimeout(() => OUTPUT_COLOR.classList.add('show-color'), 10)
    OUTPUT_COLOR.style.backgroundColor = hex_code;
}

function copy_to_clipboard(){
    navigator.clipboard.writeText(OUTPUT.value)
    copy_alert()
}

function copy_alert() {
    ALERT_ELEMENT.classList.add('show')
    setTimeout(() => ALERT_ELEMENT.classList.remove('show'), 2000)
}

function add_load() {
    GENERATE_BTN.classList.add('load')
    COPY_BTN.classList.add('load')
}

function remove_load() {
    GENERATE_BTN.classList.remove('load')
    COPY_BTN.classList.remove('load')
}