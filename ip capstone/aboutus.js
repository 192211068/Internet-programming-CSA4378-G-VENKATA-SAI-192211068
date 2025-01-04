// Get the modal and button elements
const aboutUsBtn = document.getElementById('aboutUsBtn');
const aboutUsModal = document.getElementById('aboutUsModal');
const closeAboutUs = document.querySelector('.close-about-us');

// When the user clicks the "About Us" button, show the modal
aboutUsBtn.addEventListener('click', function() {
    aboutUsModal.style.display = 'flex'; // Show the modal
});

// When the user clicks the "Close" button in the modal, hide the modal
closeAboutUs.addEventListener('click', function() {
    aboutUsModal.style.display = 'none'; // Hide the modal
});

// If the user clicks anywhere outside the modal, close it
window.addEventListener('click', function(event) {
    if (event.target === aboutUsModal) {
        aboutUsModal.style.display = 'none'; // Hide the modal
    }
});
