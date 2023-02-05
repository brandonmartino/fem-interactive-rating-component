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