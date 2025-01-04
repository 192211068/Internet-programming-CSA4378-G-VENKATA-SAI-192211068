window.onload = function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoritesList = document.getElementById('favorites-list');

    favoritesList.innerHTML = ''; // Clear previous content

    if (favorites.length === 0) {
        favoritesList.innerHTML = '<p>No favorite recipes yet.</p>';
    } else {
        favorites.forEach(favorite => {
            const recipeItem = document.createElement('div');
            recipeItem.classList.add('recipe-item');
            recipeItem.innerHTML = `
                <img src="${favorite}.jpg" alt="${favorite}">
                <h3>${favorite.charAt(0).toUpperCase() + favorite.slice(1)}</h3>
            `;
            favoritesList.appendChild(recipeItem);
        });
    }
};
