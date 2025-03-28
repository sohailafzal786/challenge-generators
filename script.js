document.addEventListener("DOMContentLoaded", function () {
    // Challenge Generator Functionality on Home Page
    const generateButton = document.getElementById("generateChallengeBtn");
    const challengeText = document.getElementById("randomChallengeDisplay");

    if (generateButton && challengeText) {
        generateButton.addEventListener("click", function () {
            const challenges = [
                "Do 20 push-ups!",
                "Write a short poem!",
                "Learn 5 new words in a different language!",
                "Take a 10-minute meditation break!",
                "Drink a full glass of water!"
            ];
            const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];
            challengeText.textContent = "Your Challenge: " + randomChallenge;
        });
    }

    // FAQ Toggle Functionality
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", function () {
            this.nextElementSibling.classList.toggle("visible");
        });
    });

    // Contact Form Validation
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Please fill out all fields.");
                return;
                ;
            }

            alert("Thank you for your message! We will get back to you soon.");
            contactForm.reset();
        });
    }
})