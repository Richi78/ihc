document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.querySelector('.search-button');
    const searchInput = document.querySelector('input[type="text"]');

    searchButton.addEventListener('click', () => {
        alert(`Buscando destinos para: ${searchInput.value}`);
    });
});
