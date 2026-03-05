let activeTab = "all";

const tabAll = document.getElementById("tab-all");
const tabInterview = document.getElementById("tab-interview");
const tabRejected = document.getElementById("tab-rejected");


const countTotal = document.getElementById("count-total");
const countInterview = document.getElementById("count-interview");
const countRejected = document.getElementById("count-rejected");
const countAvailable = document.getElementById("count-available");


const emptyState = document.getElementById("emptyState");

function getCards() {
  return Array.from(document.querySelectorAll(".job-card"));
}


if (tabAll) tabAll.addEventListener("click", function () {
  setActiveTab("all");
});

if (tabInterview) tabInterview.addEventListener("click", function () {
  setActiveTab("interview");
});

if (tabRejected) tabRejected.addEventListener("click", function () {
  setActiveTab("rejected");
});


document.addEventListener("click", function (e) {
  const card = e.target.closest(".job-card");
  if (!card) return;

  // INTERVIEW
  if (e.target.closest(".btn-interview")) {
    card.dataset.status = "interview";
    setBadge(card, "interview");
    render();
  }

  // REJECTED
  if (e.target.closest(".btn-rejected")) {
    card.dataset.status = "rejected";
    setBadge(card, "rejected");
    render();
  }

  // DELETE
  if (e.target.closest(".btn-delete")) {
    card.remove();
    render();
  }
});