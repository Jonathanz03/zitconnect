/* ZIT Connect — Devis & Facturas Manager */

// Cargar configuración desde config.js
if (typeof window.DEVIS_CONFIG === 'undefined') {
  console.error('⚠️ Error: config.js no encontrado. Copia config.example.js como config.js');
  window.DEVIS_CONFIG = { password: '' };
}

const CONFIG = {
  password: window.DEVIS_CONFIG.password,
  companyData: {
    name: 'ZIT Connect',
    ownerName: 'Jonathan ZAMBRANO',
    ownerTitle: 'Consultant IT & Ingénieur VoIP – Entrepreneur Individuel',
    siret: '878 527 688 00021',
    ape: '7112B – Ingénierie, études techniques',
    phone: '+33 7 59 67 40 23',
    email: 'jonathan.zambrano@zitconnect.fr',
    website: 'www.zitconnect.fr',
    address: '198 Route de Launaguet, Bât B, App 104',
    city: '31200 Toulouse, France'
  }
};

// ========================
// AUTENTICACIÓN
// ========================

function handleLogin(e) {
  e.preventDefault();
  const password = document.getElementById('password').value;
  const errorEl = document.getElementById('loginError');

  if (password === CONFIG.password) {
    sessionStorage.setItem('zit-authenticated', 'true');
    showDashboard();
  } else {
    errorEl.textContent = '❌ Contraseña incorrecta';
    errorEl.style.display = 'block';
  }
}

function logout() {
  sessionStorage.removeItem('zit-authenticated');
  document.getElementById('loginForm').style.display = 'block';
  document.getElementById('dashboard').style.display = 'none';
  document.getElementById('password').value = '';
}

// ========================
// INICIALIZACIÓN
// ========================

document.addEventListener('DOMContentLoaded', () => {
  if (sessionStorage.getItem('zit-authenticated')) {
    showDashboard();
  }
});

function showDashboard() {
  document.getElementById('loginForm').style.display = 'none';
  const dashboardEl = document.getElementById('dashboard');
  dashboardEl.style.display = 'block';
  dashboardEl.innerHTML = getDashboardHTML();

  // Inicializar event listeners del dashboard
  initDashboardEvents();
}

// ========================
// HTML DEL DASHBOARD
// ========================

function getDashboardHTML() {
  const devisList = getDevisList();
  const nextNumber = getNextDevisNumber();

  return `
    <div style="max-width: 1200px; margin: 0 auto; padding: 20px;">
      <div style="background: white; border-radius: 12px; padding: 30px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">

        <!-- HEADER -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 2px solid #f0f0f0;">
          <div>
            <h1 style="color: #333; margin-bottom: 5px;">📊 Devis & Facturas</h1>
            <p style="color: #999; font-size: 14px;">Gestiona tus presupuestos y facturas</p>
          </div>
          <button onclick="logout()" style="padding: 10px 20px; background: #e74c3c; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">
            Cerrar sesión
          </button>
        </div>

        <!-- TABS -->
        <div style="display: flex; gap: 10px; margin-bottom: 20px; border-bottom: 2px solid #f0f0f0;">
          <button onclick="switchTab('crear')" id="tab-crear" style="padding: 12px 20px; background: #667eea; color: white; border: none; cursor: pointer; border-radius: 6px 6px 0 0; font-weight: 600;">
            ✚ Crear Nuevo Devis
          </button>
          <button onclick="switchTab('historial')" id="tab-historial" style="padding: 12px 20px; background: #f0f0f0; border: none; cursor: pointer; border-radius: 6px 6px 0 0; font-weight: 600;">
            📋 Historial (${devisList.length})
          </button>
        </div>

        <!-- CREAR DEVIS -->
        <div id="tab-content-crear">
          <form onsubmit="saveDevis(event)" style="background: #f9f9f9; padding: 20px; border-radius: 8px;">
            <h3 style="color: #333; margin-bottom: 20px;">Nuevo Devis #${nextNumber}</h3>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
              <div>
                <label style="display: block; color: #333; font-weight: 600; margin-bottom: 8px;">Nombre Cliente *</label>
                <input type="text" id="clientName" placeholder="Ej: Dauphin Telecom" required style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px;">
              </div>
              <div>
                <label style="display: block; color: #333; font-weight: 600; margin-bottom: 8px;">Atención a (Contacto) *</label>
                <input type="text" id="clientContact" placeholder="Ej: Frédérique Chevillard" required style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px;">
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
              <div>
                <label style="display: block; color: #333; font-weight: 600; margin-bottom: 8px;">Dirección Cliente *</label>
                <input type="text" id="clientAddress" placeholder="Ej: 12 rue de la République" required style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px;">
              </div>
              <div>
                <label style="display: block; color: #333; font-weight: 600; margin-bottom: 8px;">Ciudad / Código Postal *</label>
                <input type="text" id="clientCity" placeholder="Ej: 97150 Saint-Martin" required style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px;">
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <label style="display: block; color: #333; font-weight: 600; margin-bottom: 8px;">Email Cliente</label>
              <input type="email" id="clientEmail" placeholder="cliente@empresa.com" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px;">
            </div>

            <div style="margin-bottom: 20px;">
              <label style="display: block; color: #333; font-weight: 600; margin-bottom: 8px;">Objeto / Descripción *</label>
              <textarea id="devisObject" placeholder="Descripción de las prestaciones..." required style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px; min-height: 100px;"></textarea>
            </div>

            <!-- ITEMS DEL DEVIS -->
            <div style="margin-bottom: 20px;">
              <h4 style="color: #333; margin-bottom: 15px;">📝 Detalle de Prestaciones</h4>
              <div id="itemsContainer"></div>
              <button type="button" onclick="addItem()" style="padding: 10px 15px; background: #27ae60; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; margin-top: 10px;">
                + Agregar Línea
              </button>
            </div>

            <!-- TOTALES -->
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <div style="display: grid; grid-template-columns: 200px 150px; gap: 15px; margin-bottom: 15px;">
                <div>
                  <label style="color: #999; font-size: 14px;">Validez del devis (días)</label>
                  <input type="number" id="validityDays" value="15" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 6px;">
                </div>
                <div>
                  <label style="color: #999; font-size: 14px;">Plazo de pago (días)</label>
                  <input type="number" id="paymentDays" value="30" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 6px;">
                </div>
              </div>
            </div>

            <div style="display: flex; gap: 10px;">
              <button type="submit" style="flex: 1; padding: 12px; background: #667eea; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 16px;">
                💾 Guardar Devis
              </button>
              <button type="button" onclick="generatePDF()" style="flex: 1; padding: 12px; background: #e74c3c; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 16px;">
                📄 Generar PDF
              </button>
            </div>
          </form>
        </div>

        <!-- HISTORIAL -->
        <div id="tab-content-historial" style="display: none;">
          ${devisList.length === 0 ?
            '<p style="color: #999; text-align: center; padding: 40px;">No hay devis creados aún.</p>' :
            `<table style="width: 100%; border-collapse: collapse;">
              <thead>
                <tr style="background: #f0f0f0; border-bottom: 2px solid #ddd;">
                  <th style="padding: 12px; text-align: left; color: #333; font-weight: 600;">Número</th>
                  <th style="padding: 12px; text-align: left; color: #333; font-weight: 600;">Cliente</th>
                  <th style="padding: 12px; text-align: left; color: #333; font-weight: 600;">Fecha</th>
                  <th style="padding: 12px; text-align: right; color: #333; font-weight: 600;">Total HT</th>
                  <th style="padding: 12px; text-align: center; color: #333; font-weight: 600;">Acciones</th>
                </tr>
              </thead>
              <tbody>
                ${devisList.map((devis, idx) => `
                  <tr style="border-bottom: 1px solid #eee;">
                    <td style="padding: 12px; color: #333;">#${devis.number}</td>
                    <td style="padding: 12px; color: #666;">${devis.clientName}</td>
                    <td style="padding: 12px; color: #999; font-size: 14px;">${formatDate(devis.date)}</td>
                    <td style="padding: 12px; text-align: right; color: #333; font-weight: 600;">${devis.totalHT.toFixed(2)}€</td>
                    <td style="padding: 12px; text-align: center;">
                      <button onclick="editDevis(${idx})" style="padding: 6px 12px; background: #3498db; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px; margin-right: 5px;">
                        ✎ Editar
                      </button>
                      <button onclick="downloadPDF(${idx})" style="padding: 6px 12px; background: #27ae60; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px; margin-right: 5px;">
                        📥 PDF
                      </button>
                      <button onclick="deleteDevis(${idx})" style="padding: 6px 12px; background: #e74c3c; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;">
                        🗑️ Eliminar
                      </button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>`
          }
        </div>

      </div>
    </div>
  `;
}

// ========================
// GESTIÓN DE ITEMS
// ========================

let itemCount = 0;

function addItem() {
  itemCount++;
  const container = document.getElementById('itemsContainer');
  const itemHTML = `
    <div class="devis-item" id="item-${itemCount}" style="background: white; padding: 15px; border-radius: 6px; margin-bottom: 10px; border: 1px solid #ddd;">
      <div style="display: grid; grid-template-columns: 1fr 100px 100px 100px 50px; gap: 10px; align-items: end;">
        <input type="text" placeholder="Descripción de la prestación" class="item-description" style="padding: 8px; border: 1px solid #ddd; border-radius: 4px; font-size: 14px;" required>
        <input type="number" placeholder="Cantidad" class="item-quantity" value="1" style="padding: 8px; border: 1px solid #ddd; border-radius: 4px; font-size: 14px;" required>
        <input type="number" placeholder="Precio unitario" class="item-price" value="0" step="0.01" style="padding: 8px; border: 1px solid #ddd; border-radius: 4px; font-size: 14px;" required>
        <input type="number" placeholder="Total" class="item-total" readonly style="padding: 8px; background: #f9f9f9; border: 1px solid #ddd; border-radius: 4px; font-size: 14px;">
        <button type="button" onclick="removeItem('item-${itemCount}')" style="padding: 8px 12px; background: #e74c3c; color: white; border: none; border-radius: 4px; cursor: pointer;">🗑️</button>
      </div>
    </div>
  `;
  container.insertAdjacentHTML('beforeend', itemHTML);

  // Agregar event listeners para cálculo de total
  const quantityInput = document.querySelector(`#item-${itemCount} .item-quantity`);
  const priceInput = document.querySelector(`#item-${itemCount} .item-price`);
  const totalInput = document.querySelector(`#item-${itemCount} .item-total`);

  [quantityInput, priceInput].forEach(input => {
    input.addEventListener('change', () => {
      totalInput.value = (quantityInput.value * priceInput.value).toFixed(2);
    });
  });
}

function removeItem(id) {
  document.getElementById(id).remove();
}

// ========================
// GESTIÓN DE DEVIS
// ========================

function getDevisList() {
  return JSON.parse(localStorage.getItem('zit-devis') || '[]');
}

function getNextDevisNumber() {
  const devis = getDevisList();
  if (devis.length === 0) return '2026-08-001';
  const lastDevis = devis[devis.length - 1];
  const lastNumber = lastDevis.number.split('-')[2];
  const nextNumber = String(parseInt(lastNumber) + 1).padStart(3, '0');
  const currentMonth = new Date().toISOString().slice(0, 7).replace('-', '-');
  return `2026-${new Date().toISOString().slice(5, 7)}-${nextNumber}`;
}

function saveDevis(e) {
  e.preventDefault();

  // Recopilar datos del formulario
  const items = Array.from(document.querySelectorAll('.devis-item')).map(item => ({
    description: item.querySelector('.item-description').value,
    quantity: parseFloat(item.querySelector('.item-quantity').value),
    price: parseFloat(item.querySelector('.item-price').value),
    total: parseFloat(item.querySelector('.item-total').value)
  }));

  const totalHT = items.reduce((sum, item) => sum + item.total, 0);

  const devis = {
    number: getNextDevisNumber(),
    date: new Date().toISOString().slice(0, 10),
    clientName: document.getElementById('clientName').value,
    clientContact: document.getElementById('clientContact').value,
    clientAddress: document.getElementById('clientAddress').value,
    clientCity: document.getElementById('clientCity').value,
    clientEmail: document.getElementById('clientEmail').value,
    object: document.getElementById('devisObject').value,
    items: items,
    totalHT: totalHT,
    validityDays: parseInt(document.getElementById('validityDays').value),
    paymentDays: parseInt(document.getElementById('paymentDays').value)
  };

  const devisList = getDevisList();
  devisList.push(devis);
  localStorage.setItem('zit-devis', JSON.stringify(devisList));

  alert('✅ Devis guardado correctamente: #' + devis.number);
  showDashboard();
}

function deleteDevis(idx) {
  if (confirm('¿Estás seguro de que quieres eliminar este devis?')) {
    const devisList = getDevisList();
    devisList.splice(idx, 1);
    localStorage.setItem('zit-devis', JSON.stringify(devisList));
    showDashboard();
  }
}

function switchTab(tab) {
  document.getElementById('tab-content-crear').style.display = tab === 'crear' ? 'block' : 'none';
  document.getElementById('tab-content-historial').style.display = tab === 'historial' ? 'block' : 'none';

  document.getElementById('tab-crear').style.background = tab === 'crear' ? '#667eea' : '#f0f0f0';
  document.getElementById('tab-crear').style.color = tab === 'crear' ? 'white' : '#333';
  document.getElementById('tab-historial').style.background = tab === 'historial' ? '#667eea' : '#f0f0f0';
  document.getElementById('tab-historial').style.color = tab === 'historial' ? 'white' : '#333';
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
}

function initDashboardEvents() {
  // Agregar un item de ejemplo al inicio
  if (document.querySelectorAll('.devis-item').length === 0) {
    addItem();
  }
}

// ========================
// GENERACIÓN DE PDF
// ========================

function generatePDF() {
  // Recopilar datos del formulario actual
  const items = Array.from(document.querySelectorAll('.devis-item')).map(item => ({
    description: item.querySelector('.item-description').value,
    quantity: parseFloat(item.querySelector('.item-quantity').value),
    price: parseFloat(item.querySelector('.item-price').value),
    total: parseFloat(item.querySelector('.item-total').value)
  }));

  if (items.length === 0 || items[0].description === '') {
    alert('⚠️ Por favor, completa al menos un item antes de generar el PDF.');
    return;
  }

  const totalHT = items.reduce((sum, item) => sum + item.total, 0);

  const devis = {
    number: getNextDevisNumber(),
    date: new Date().toISOString().slice(0, 10),
    clientName: document.getElementById('clientName').value || 'Cliente',
    clientContact: document.getElementById('clientContact').value || '',
    clientAddress: document.getElementById('clientAddress').value || '',
    clientCity: document.getElementById('clientCity').value || '',
    clientEmail: document.getElementById('clientEmail').value || '',
    object: document.getElementById('devisObject').value || '',
    items: items,
    totalHT: totalHT,
    validityDays: parseInt(document.getElementById('validityDays').value),
    paymentDays: parseInt(document.getElementById('paymentDays').value)
  };

  generateDevisPDF(devis);
}

function downloadPDF(idx) {
  const devisList = getDevisList();
  const devis = devisList[idx];
  generateDevisPDF(devis);
}

function editDevis(idx) {
  const devisList = getDevisList();
  const devis = devisList[idx];

  // Cargar datos en el formulario
  document.getElementById('clientName').value = devis.clientName;
  document.getElementById('clientContact').value = devis.clientContact;
  document.getElementById('clientAddress').value = devis.clientAddress;
  document.getElementById('clientCity').value = devis.clientCity;
  document.getElementById('clientEmail').value = devis.clientEmail;
  document.getElementById('devisObject').value = devis.object;
  document.getElementById('validityDays').value = devis.validityDays;
  document.getElementById('paymentDays').value = devis.paymentDays;

  // Limpiar y cargar items
  document.getElementById('itemsContainer').innerHTML = '';
  itemCount = 0;

  devis.items.forEach((item, i) => {
    addItem();
    const itemEl = document.querySelectorAll('.devis-item')[i];
    itemEl.querySelector('.item-description').value = item.description;
    itemEl.querySelector('.item-quantity').value = item.quantity;
    itemEl.querySelector('.item-price').value = item.price;
    itemEl.querySelector('.item-total').value = item.total;
  });

  // Cambiar a tab de crear
  switchTab('crear');
  alert('✅ Devis cargado. Realiza cambios y guarda nuevamente.');

  // Eliminar el devis viejo
  devisList.splice(idx, 1);
  localStorage.setItem('zit-devis', JSON.stringify(devisList));
}
