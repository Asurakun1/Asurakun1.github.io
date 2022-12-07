let header = document.querySelectorAll("h1")[0];
let header2 = document.querySelectorAll("h1")[1];
let button = document.querySelector("button");

let fonts = ['cursive', 'Helvetica', 'Arial', 'Verdana', 'Trebuchet', 'Script', 'Impact'];

let state = 0;
let change = () => {
    let random = Math.floor(Math.random() * 7);
    button.style.backgroundColor = 'lightblue';
    switch(state){
        case 0:
            header.innerHTML = "I changed!";
            header.style.fontFamily = fonts[random];
            header2.innerHTML = "This is also a header!";
            header2.style.fontFamily = fonts[random];
            state++;
            break;
        case 1:
            header2.textContent = "I also changed!";
            header2.style.fontFamily = fonts[random];
            header.textContent = "This is a test!";
            header.style.fontFamily = fonts[random];
            state--;
            button.style.backgroundColor = 'grey';
            break;
    }
}

button.addEventListener('click', change);