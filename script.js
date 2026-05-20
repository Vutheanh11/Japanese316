function showTab(name) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  event.target.classList.add('active');
}

function filterVocab() {
  const q = document.getElementById('vocab-search').value.trim().toLowerCase();
  const all = document.getElementById('vocab-all');
  const results = document.getElementById('vocab-results');
  const filtered = document.getElementById('vocab-filtered');
  const empty = document.getElementById('vocab-empty');

  if (!q) {
    all.style.display = '';
    results.style.display = 'none';
    return;
  }

  all.style.display = 'none';
  results.style.display = '';

  const cards = document.querySelectorAll('#vocab-all .vocab-card');
  const matched = [];
  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    if (text.includes(q)) {
      matched.push(card.cloneNode(true));
    }
  });

  filtered.innerHTML = '';
  matched.forEach(c => filtered.appendChild(c));

  empty.style.display = matched.length === 0 ? '' : 'none';
}

function filterTenses() {
  const q = document.getElementById('tense-search').value.trim().toLowerCase();
  const all = document.getElementById('tenses-all');
  const results = document.getElementById('tenses-results');
  const filtered = document.getElementById('tenses-filtered');
  const empty = document.getElementById('tenses-empty');
  if (!q) { all.style.display = ''; results.style.display = 'none'; return; }
  all.style.display = 'none';
  results.style.display = '';
  const cards = document.querySelectorAll('#tenses-all .grammar-card');
  const matched = [];
  cards.forEach(card => {
    const text = (card.innerText + card.getAttribute('data-tags')).toLowerCase();
    if (text.includes(q)) matched.push(card.cloneNode(true));
  });
  filtered.innerHTML = '';
  matched.forEach(c => filtered.appendChild(c));
  empty.style.display = matched.length === 0 ? '' : 'none';
}
