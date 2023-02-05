// variables
const ratingBtn = document.querySelectorAll(".btn");

// iterate over rating buttons and removes additional styling
// on click it will add desired class and styles
ratingBtn.forEach(button => {
    button.addEventListener("click", function(e) {
        ratingBtn.forEach(b => {
            b.style.backgroundColor = "";
            b.style.color = "";
            b.classList.remove("active")
        });
        this.style.backgroundColor = "hsl(216, 12%, 54%)";
        this.style.color = "#f1f1f1";
        this.classList.add("active");
    });
});

// if click does not match a button, clear styling and return to default style
document.addEventListener("click", function(e) {
    if(!event.target.matches("button")) {
        ratingBtn.forEach(b => {
            b.style.backgroundColor = "";
            b.style.color = "";
            b.classList.remove("active")
        })
    }
})

// on submit, switch hidden class between rating card and thank you card
const submitBtn = document.getElementById("submit");
const thankYou = document.querySelector(".thanks");
const ratingCard = document.querySelector(".rating");

submitBtn.addEventListener("click", function(e) {
    thankYou.classList.remove("hidden");
    ratingCard.classList.add("hidden");
})

// parse through rating values and insert selection on thank you card
const result = document.querySelector(".target")

ratingBtn.forEach(btn => {
    btn.addEventListener("click", function() {
        const selectedRating = this.value;
        result.textContent = `You selected ${selectedRating} out of 5`;
    })
})