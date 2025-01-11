const button = document.getElementById("btn-submit");
const thankYouContainer = document.getElementById("ThankYou-container");

button.addEventListener("click", () => {
    thankYouContainer.style.display = "block";
    
});
const cancelButton = document.getElementById("cancelButton");

cancelButton.addEventListener("click", () => {
    thankYouContainer.style.display = "none";
});

const ratingButtons = document.querySelectorAll(".btn");
const ratingFeedback = document.getElementById("rating-feedback");
const whatSelected = document.getElementById("what-selected");

ratingButtons.forEach((b) => {
    b.addEventListener('click', () => {
        ratingButtons.forEach((b) => 
        b.classList.remove('selected'));
        b.classList.add('selected');

        whatSelected.textContent = b.dataset.rating;
    });
});

// const ratingValue = localStorage.getItem('what-selected');

// if(!ratingValue) {
//     ratingFeedback.innerHTML = "No rating provided";
// }
// else {
//     ratingFeedback.innerHTML = ${ratingValue};
// }