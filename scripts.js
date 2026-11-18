document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector(".newsletter form");
    let emailInput = document.getElementById("email");
    let message = document.querySelector(".message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let email = emailInput.value.trim();

        if (email === "") {
            message.textContent = "Please enter a valid email address.";
        } else {
            message.textContent = "Thank you! Your email address " + email + " has been added to our mailing list!";
        }
    });
});