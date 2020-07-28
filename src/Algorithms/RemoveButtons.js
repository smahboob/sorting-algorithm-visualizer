
export default function removeButton () {
    let buttons = document.querySelectorAll(".btn");
    buttons.forEach((button) => {
        button.disabled = true;
    })
}


