document.addEventListener("DOMContentLoaded", () => {
    // Handle Login
    if (localStorage.getItem("loggedIn") === "true") {
        document.getElementById("loginBtn").style.display = "none";
        document.getElementById("profileBtn").style.display = "inline-block";
    }

    // Add to Favorites
    const addToFavorites = (item) => {
        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        if (!favorites.includes(item)) {
            favorites.push(item);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            alert(`${item} added to favorites!`);
        } else {
            alert(`${item} is already in favorites.`);
        }
    };

    // Show Favorites in Modal (on the homepage)
    const showFavorites = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        const favoritesList = document.getElementById("favoritesList");

        // Clear any existing content
        favoritesList.innerHTML = '';

        if (favorites.length === 0) {
            favoritesList.innerHTML = "<li>No favorites added yet.</li>";
        } else {
            favorites.forEach((item) => {
                const listItem = document.createElement("li");
                listItem.textContent = item.charAt(0).toUpperCase() + item.slice(1);
                favoritesList.appendChild(listItem);
            });
        }

        // Show the modal
        document.getElementById("favoritesModal").style.display = "flex";
    };

    // Close Favorites Modal
    const closeFavoritesModal = () => {
        document.getElementById("favoritesModal").style.display = "none";
    };

    // Logout Functionality
    const logout = () => {
        localStorage.removeItem("loggedIn");
        localStorage.removeItem("favorites");
        alert("You have been logged out.");
        location.reload();
    };

    // Expose functions globally so they can be called from the HTML
    window.addToFavorites = addToFavorites;
    window.showFavorites = showFavorites;
    window.closeFavoritesModal = closeFavoritesModal;
    window.logout = logout;
});
