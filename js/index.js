fetch('data/index.json')
  .then(response => response.json())
  .then(data => {
    console.log("Conteúdo do JSON:", data);
    const container = document.querySelector('#deals-list');

    data.deals.forEach(deal => {
      const item = document.createElement('div');
      item.className = 'deal';
      item.innerHTML = `
        <div class="left">
          <span class="badge">${deal.badge}</span>
          <span class="title">${deal.route}</span>
        </div>
        <div class="price">${deal.price}</div>
      `;
      container.appendChild(item);
    });
  })
  .catch(error => console.error('Erro ao carregar JSON:', error));
