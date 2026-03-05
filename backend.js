


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

function setBadge(card, status) {
  const badge = card.querySelector(".status-badge");
  if (!badge) return;

  // base badge style (small badge)
  badge.className = "status-badge inline-block px-3 py-1 rounded-sm font-semibold text-sm";

  if (status === "not_applied") {
    badge.textContent = "NOT APPLIED";
    badge.classList.add("bg-[#EEF4FF]", "text-[#002C5C]");
  } else if (status === "interview") {
    badge.textContent = "INTERVIEW";
    badge.classList.add("bg-[#ECFDF5]", "text-[#10B981]");
  } else if (status === "rejected") {
    badge.textContent = "REJECTED";
    badge.classList.add("bg-[#FEF2F2]", "text-[#EF4444]");
  }
}


function updateCounts() {
  const cards = getCards();

  const total = cards.length;
  const interview = cards.filter(card => card.dataset.status === "interview").length;
  const rejected = cards.filter(card => card.dataset.status === "rejected").length;

  // Available jobs rule: NOT rejected
  const available = cards.filter(card => card.dataset.status !== "rejected").length;

  if (countTotal) countTotal.textContent = total;
  if (countInterview) countInterview.textContent = interview;
  if (countRejected) countRejected.textContent = rejected;
  if (countAvailable) countAvailable.textContent = available;
}


function render() {
  const cards = getCards();
  let visibleCount = 0;

  cards.forEach(card => {
    const status = card.dataset.status;

    
    const shouldShow = (activeTab === "all") ? true : (status === activeTab);

    
    card.classList.toggle("hidden", !shouldShow);

    if (shouldShow) visibleCount++;
  });

  
  if (emptyState) {
    emptyState.classList.toggle("hidden", visibleCount !== 0);
  }

  updateCounts();
}


function setActiveTab(tabName) {
  activeTab = tabName;

  
  [tabAll, tabInterview, tabRejected].forEach(btn => {
    if (!btn) return;
    btn.classList.remove("bg-[#3B82F6]", "text-white");
    btn.classList.add("bg-white", "text-[#002C5C]");
  });

 
  let activeBtn = tabAll;
  if (tabName === "interview") activeBtn = tabInterview;
  if (tabName === "rejected") activeBtn = tabRejected;

  if (activeBtn) {
    activeBtn.classList.add("bg-[#3B82F6]", "text-white");
    activeBtn.classList.remove("bg-white", "text-[#002C5C]");
  }

  render();
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

  
  if (e.target.closest(".btn-interview")) {
    card.dataset.status = "interview";
    setBadge(card, "interview");
    render();
  }

  
  if (e.target.closest(".btn-rejected")) {
    card.dataset.status = "rejected";
    setBadge(card, "rejected");
    render();
  }

  
  if (e.target.closest(".btn-delete")) {
    card.remove();
    render();
  }
});


getCards().forEach(card => {
  setBadge(card, card.dataset.status);
});

let activeTab = "all";
setActiveTab("all");