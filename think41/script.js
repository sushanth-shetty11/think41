// Store history in memory
let history = [];

function visitPage() {
  const urlInput = document.getElementById("urlInput");
  const url = urlInput.value.trim();

  if (!url) return;

  // Remove duplicates
  history = history.filter(entry => entry.url !== url);

  // Add new entry with current timestamp
  history.unshift({
    url: url,
    time: new Date().toLocaleString()
  });

  // Limit history size
  const max = parseInt(document.getElementById("historyLength").value) || 5;
  history = history.slice(0, max);

  renderHistory();
  urlInput.value = "";
}

function clearHistory() {
  history = [];
  renderHistory();
}

function renderHistory() {
  const list = document.getElementById("historyList");
  list.innerHTML = "";

  history.forEach((item, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span class="url-number">${index + 1}.</span>
      <span class="url-text">${item.url}</span>
      <span class="timestamp">(Visited at ${item.time})</span>
    `;

    list.appendChild(li);
  });
}
