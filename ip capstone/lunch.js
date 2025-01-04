// Manage favorites
document.addEventListener("DOMContentLoaded", () => {
    const loadFavorites = () => {
        return JSON.parse(localStorage.getItem("favorites")) || [];
    };

    const saveFavorites = (favorites) => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    };

    const toggleFavorite = (recipe, element) => {
        let favorites = loadFavorites();
        if (favorites.includes(recipe)) {
            favorites = favorites.filter((item) => item !== recipe);
            element.classList.remove("liked");
        } else {
            favorites.push(recipe);
            element.classList.add("liked");
        }
        saveFavorites(favorites);
    };

    // Initialize heart icons based on favorites
    document.querySelectorAll(".heart").forEach((heart) => {
        const recipe = heart.previousElementSibling.textContent;
        if (loadFavorites().includes(recipe)) {
            heart.classList.add("liked");
        }
    });

    // Expose the toggleFavorite function globally
    window.toggleFavorite = toggleFavorite;
});
