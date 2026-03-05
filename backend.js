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

