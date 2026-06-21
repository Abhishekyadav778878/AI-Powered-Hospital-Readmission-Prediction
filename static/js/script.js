// ==========================================
// MULTI STEP FORM CONTROLLER
// ==========================================
alert("JS Loaded Successfully");
document.addEventListener("DOMContentLoaded", function () {

    const steps = document.querySelectorAll(".form-step");
    const nextBtns = document.querySelectorAll(".next-btn");
    const prevBtns = document.querySelectorAll(".prev-btn");
    const indicators = document.querySelectorAll(".step");

    let currentStep = 0;

    // ==========================================
    // SHOW STEP
    // ==========================================

    function showStep(stepIndex) {

        steps.forEach((step, index) => {
            step.classList.remove("active");

            if (index === stepIndex) {
                step.classList.add("active");
            }
        });

        updateProgress(stepIndex);
    }

    // ==========================================
    // UPDATE PROGRESS BAR
    // ==========================================

    function updateProgress(stepIndex) {

        indicators.forEach((indicator, index) => {

            if (index <= stepIndex) {
                indicator.classList.add("active");
            } else {
                indicator.classList.remove("active");
            }

        });
    }

    // ==========================================
    // VALIDATE CURRENT STEP
    // ==========================================

    function validateStep(stepIndex) {

        const currentFormStep = steps[stepIndex];

        const inputs = currentFormStep.querySelectorAll(
            "input, select, textarea"
        );

        let valid = true;

        inputs.forEach(input => {

            if (input.hasAttribute("required")) {

                if (input.value.trim() === "") {

                    input.classList.add("is-invalid");
                    valid = false;

                } else {

                    input.classList.remove("is-invalid");
                    input.classList.add("is-valid");

                }
            }

        });

        return valid;
    }

    // ==========================================
    // NEXT BUTTON
    // ==========================================

    nextBtns.forEach(btn => {

        btn.addEventListener("click", () => {

            if (!validateStep(currentStep)) {

                alert(
                    "Please complete all required fields before continuing."
                );

                return;
            }

            if (currentStep < steps.length - 1) {

                currentStep++;

                showStep(currentStep);

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }

        });

    });

    // ==========================================
    // PREVIOUS BUTTON
    // ==========================================

    prevBtns.forEach(btn => {

        btn.addEventListener("click", () => {

            if (currentStep > 0) {

                currentStep--;

                showStep(currentStep);

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }

        });

    });

    // ==========================================
    // INITIAL STEP
    // ==========================================

    showStep(currentStep);

});


// ==========================================
// LOADING SCREEN
// ==========================================

const form = document.getElementById("multiStepForm");

if (form) {

    form.addEventListener("submit", function () {

        const loadingOverlay =
            document.getElementById("loadingOverlay");

        if (loadingOverlay) {

            loadingOverlay.style.display = "flex";

        }

    });

}


// ==========================================
// ANIMATION EFFECTS
// ==========================================

const cards = document.querySelectorAll(
    ".stats-card, .prediction-card, .about-card"
);

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-8px)";

        card.style.transition =
            "all 0.3s ease";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0px)";

    });

});


// ==========================================
// AUTO HIDE ALERTS
// ==========================================

setTimeout(() => {

    const alerts =
        document.querySelectorAll(".alert");

    alerts.forEach(alert => {

        alert.style.transition =
            "opacity 0.5s ease";

        alert.style.opacity = "0";

        setTimeout(() => {

            alert.style.display = "none";

        }, 500);

    });

}, 5000);


// ==========================================
// NUMBER FIELD VALIDATION
// ==========================================

document.querySelectorAll(
    'input[type="number"]'
).forEach(input => {

    input.addEventListener("input", function () {

        if (this.value < 0) {

            this.value = 0;

        }

    });

});


// ==========================================
// PREDICTION RESULT SCROLL
// ==========================================

window.addEventListener("load", () => {

    const resultCard =
        document.querySelector(".prediction-card");

    if (resultCard) {

        resultCard.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }

});


// ==========================================
// FOOTER YEAR AUTO UPDATE
// ==========================================

const yearElement =
    document.getElementById("currentYear");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}