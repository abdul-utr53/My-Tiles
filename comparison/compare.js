(function () {
  const STORAGE_KEY = 'florenza_compare';

  
  function getCompare() {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  
  function setCompare(arr) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
  }

  
  function renderCompareBar() {
    const compareBar = document.getElementById('compareBar');
    const compareItemsWrap = document.getElementById('compareItems');
    const compareGo = document.getElementById('compareGo');

    const items = getCompare();
    compareItemsWrap.innerHTML = '';

    if (items.length === 0) {
      compareBar.style.display = 'none';
      return;
    }

    compareBar.style.display = 'flex';
    items.forEach(item => {
      const div = document.createElement('div');
      div.className = 'd-flex align-items-center me-2';
      div.innerHTML = `
        <div class="compare-thumb me-2"><img src="${item.img}" alt="${item.name}"></div>
        <div class="d-flex flex-column">
          <small style="font-weight:600">${item.name}</small>
          <button class="btn btn-sm compare-remove" data-id="${item.id}">remove</button>
        </div>
      `;
      compareItemsWrap.appendChild(div);
    });

    compareGo.disabled = items.length < 2;
  }

  
  function initCompareButtons() {
    const addBtns = document.querySelectorAll('.btn-add-compare');

    addBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const card = btn.closest('.tile-card');
        const item = {
          id: card.dataset.id,
          name: card.dataset.name,
          size: card.dataset.size,
          material: card.dataset.material,
          finish: card.dataset.finish,
          water: card.dataset.water,
          price: card.dataset.price,
          img: card.dataset.img
        };

        let items = getCompare();

        if (items.some(i => i.id === item.id)) return;
        if (items.length >= 2) {
          alert('You can compare only 2 tiles at a time. Remove one to add another.');
          return;
        }

        items.push(item);
        setCompare(items);
        renderCompareBar();

        btn.innerText = 'Added';
        btn.disabled = true;
        btn.style.opacity = '0.85';
      });
    });
  }

  function initCompareRemove() {
    const compareItemsWrap = document.getElementById('compareItems');

    compareItemsWrap.addEventListener('click', e => {
      const btn = e.target.closest('.compare-remove');
      if (!btn) return;
      const id = btn.dataset.id;

      let items = getCompare();
      items = items.filter(i => i.id !== id);
      setCompare(items);
      renderCompareBar();

      const cardBtn = document.querySelector(`.tile-card[data-id="${id}"] .btn-add-compare`);
      if (cardBtn) {
        cardBtn.disabled = false;
        cardBtn.innerText = 'Compare';
        cardBtn.style.opacity = '1';
      }
    });
  }

  function initCompareGo() {
    const compareGo = document.getElementById('compareGo');
    compareGo.addEventListener('click', () => {
      const items = getCompare();
      if (items.length < 2) return;
      window.location.href = 'result.html';
    });
  }

  function renderResultPage() {
    const wrap = document.getElementById('comparisonWrap');
    if (!wrap) return;

    const items = getCompare();
    if (items.length < 2) {
      wrap.innerHTML = '<p class="text-muted">No tiles selected. Go back to <a href="compare.html">selection</a> to choose tiles.</p>';
      return;
    }

    const left = items[0];
    const right = items[1];

    wrap.innerHTML = `
      <div class="row g-4 align-items-start">
        <div class="col-md-6">
          <img src="${left.img}" alt="${left.name}" class="tile-image mb-3">
          <h5>${left.name}</h5>
          <dl class="row specs">
            <dt class="col-4">Size</dt><dd class="col-8">${left.size}</dd>
            <dt class="col-4">Material</dt><dd class="col-8">${left.material}</dd>
            <dt class="col-4">Finish</dt><dd class="col-8">${left.finish}</dd>
            <dt class="col-4">Water Abs.</dt><dd class="col-8">${left.water}</dd>
            <dt class="col-4">Price</dt><dd class="col-8">${left.price}</dd>
          </dl>
        </div>

        <div class="col-md-6">
          <img src="${right.img}" alt="${right.name}" class="tile-image mb-3">
          <h5>${right.name}</h5>
          <dl class="row specs">
            <dt class="col-4">Size</dt><dd class="col-8">${right.size}</dd>
            <dt class="col-4">Material</dt><dd class="col-8">${right.material}</dd>
            <dt class="col-4">Finish</dt><dd class="col-8">${right.finish}</dd>
            <dt class="col-4">Water Abs.</dt><dd class="col-8">${right.water}</dd>
            <dt class="col-4">Price</dt><dd class="col-8">${right.price}</dd>
          </dl>
        </div>

        <div class="col-12">
          <div class="divider"></div>
          <h5>Images</h5>
          <div class="row g-3">
            <div class="col-12 col-md-6"><img src="${left.img}" class="tile-image"></div>
            <div class="col-12 col-md-6"><img src="${right.img}" class="tile-image"></div>
          </div>
        </div>
      </div>
    `;
  }

  if (document.querySelector('.container-compare')) {
    renderCompareBar();
    initCompareButtons();
    initCompareRemove();
    initCompareGo();
  }

  renderResultPage();

})();
