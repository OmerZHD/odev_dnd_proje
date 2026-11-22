const eventSearchInput = document.getElementById("event-search-input");
const clearEventSearchButton = document.getElementById("clear-event-search");
const eventResultsCount = document.getElementById("event-results-count");
const eventNoResults = document.getElementById("event-no-results");
const eventCards = Array.from(document.querySelectorAll(".event-card"));

const normalizeText = (text) => text.trim().toLocaleLowerCase("tr-TR");

if (eventSearchInput) {
    const filterEvents = () => {
        const query = normalizeText(eventSearchInput.value);
        let visibleCount = 0;

        eventCards.forEach((card) => {
            const title = normalizeText(card.querySelector("h2").textContent);
            const matches = title.includes(query);
            card.hidden = !matches;

            if (matches) {
                visibleCount += 1;
            }
        });

        eventResultsCount.textContent = `${visibleCount} etkinlik gösteriliyor`;
        eventNoResults.hidden = visibleCount > 0;
    };

    eventSearchInput.addEventListener("input", filterEvents);

    filterEvents();

    clearEventSearchButton.addEventListener("click", () => {
        eventSearchInput.value = "";
        filterEvents();
        eventSearchInput.focus();
    });
}

const registrationForm = document.getElementById("registration-form");
const registrationMessage = document.getElementById("registration-message");

if (registrationForm) {
    registrationForm.addEventListener("submit", (event) => {
        event.preventDefault();
        registrationMessage.hidden = false;
    });
}

const aboutCarousel = document.querySelector("[data-carousel]");

if (aboutCarousel) {
    const slides = Array.from(aboutCarousel.querySelectorAll(".about-slide"));
    const slideDots = Array.from(aboutCarousel.querySelectorAll(".about-slide-dot"));
    const caption = aboutCarousel.querySelector("#about-slide-caption");
    const arrowButtons = aboutCarousel.querySelectorAll(".about-slide-arrow");
    let activeSlide = 0;

    const showSlide = (index, announce = true) => {
        activeSlide = (index + slides.length) % slides.length;

        slides.forEach((slide, slideIndex) => {
            const isActive = slideIndex === activeSlide;
            slide.classList.toggle("is-active", isActive);
            slide.setAttribute("aria-hidden", String(!isActive));
        });

        slideDots.forEach((dot, dotIndex) => {
            const isActive = dotIndex === activeSlide;
            dot.classList.toggle("is-active", isActive);
            dot.setAttribute("aria-pressed", String(isActive));
        });

        caption.textContent = slides[activeSlide].dataset.caption;
        caption.setAttribute("aria-live", announce ? "polite" : "off");
    };

    slideDots.forEach((dot) => {
        dot.addEventListener("click", () => {
            showSlide(Number(dot.dataset.slideTo));
        });
    });

    arrowButtons[0].addEventListener("click", () => {
        showSlide(activeSlide - 1);
    });

    arrowButtons[1].addEventListener("click", () => {
        showSlide(activeSlide + 1);
    });

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        window.setInterval(() => {
            showSlide(activeSlide + 1, false);
        }, 5000);
    }
}