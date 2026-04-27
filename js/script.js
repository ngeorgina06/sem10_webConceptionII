const buttons = document.querySelectorAll('.bouton');

const modal = document.querySelector(".modal");

for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];

    button.addEventListener("click", openModal);
}

function openModal() {
    const path = this.previousElementSibling.src;
    const text = document.createElement("textContent");
    text.textContent = "FIN";
    text.classList.add('zoom');

    modal.appendChild(text);
    modal.classList.add('visible');

    /* Fermeture modale */
    text.addEventListener("click", closeModal);
}

function closeModal(event) {
    modal.classList.remove("visible");
    modal.removeChild(event.currentTarget);
}