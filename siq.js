const form = document.querySelector('#contact-form');
const table = document.querySelector('#contacts tbody');

form.addEventListener('submit', event => {
    event.preventDefault();

    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const row = table.insertRow();
    row.insertCell().textContent = name;
    row.insertCell().textContent = number;

    form.reset();
});