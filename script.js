const eventSearchInput = document.getElementById("event-search-input");
const clearEventSearchButton = document.getElementById("clear-event-search");
const eventResultsCount = document.getElementById("event-results-count");
const eventNoResults = document.getElementById("event-no-results");
const eventCards = Array.from(document.querySelectorAll(".event-card"));

const normalizeText = (text) => text.trim().toLocaleLowerCase("tr-TR");

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

clearEventSearchButton.addEventListener("click", () => {
    eventSearchInput.value = "";
    filterEvents();
    eventSearchInput.focus();
});

filterEvents();

const registrationForm = document.getElementById("registration-form");
const registrationMessage = document.getElementById("registration-message");

registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    registrationMessage.hidden = false;
});