const buttons = document.querySelectorAll(".button")
const characters = document.querySelectorAll(".character")

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const button_selected = document.querySelector(".button.selected");
        button_selected.classList.remove("selected")

        const character_selected = document.querySelector(".character.selected");
        character_selected.classList.remove("selected");

        button.classList.add("selected");
        
        characters[index].classList.add("selected")
    })
})
