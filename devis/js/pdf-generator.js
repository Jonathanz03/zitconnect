/* ZIT Connect — PDF Generator for Devis */

function generateDevisPDF(devis) {
  // Calcular fechas
  const emissionDate = new Date(devis.date);
  const validityDate = new Date(emissionDate);
  validityDate.setDate(validityDate.getDate() + devis.validityDays);

  // Crear HTML del devis - OPTIMIZADO PARA UNA SOLA PÁGINA
  const devisHTML = `
    <div style="font-family: Arial, sans-serif; max-width: 210mm; margin: 0; padding: 10mm; color: #333; line-height: 1.3;">

      <!-- ENCABEZADO COMPACTO -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15mm; margin-bottom: 8mm; padding-bottom: 8mm; border-bottom: 2px solid #667eea;">

        <!-- INFORMACIÓN EMPRESA -->
        <div>
          <h1 style="margin: 0; color: #667eea; font-size: 18px; font-weight: bold;">ZIT Connect</h1>
          <p style="margin: 2px 0; color: #333; font-size: 9px;">Jonathan ZAMBRANO</p>
          <p style="margin: 2px 0; color: #666; font-size: 8px;">Consultant IT & Ingénieur VoIP – Entrepreneur Individuel</p>
          <p style="margin: 4px 0 0 0; color: #999; font-size: 7px; line-height: 1.4;">
            198 Route de Launaguet, Bât B, App 104, 31200 Toulouse, France<br>
            SIRET: 878 527 688 00021 | APE: 7112B<br>
            Tél: +33 7 59 67 40 23 | Email: jonathan.zambrano@zitconnect.fr
          </p>
        </div>

        <!-- NÚMERO Y FECHAS -->
        <div style="text-align: right;">
          <p style="margin: 0 0 3px 0; color: #667eea; font-size: 16px; font-weight: bold;">DEVIS</p>
          <p style="margin: 0 0 5px 0; color: #333; font-size: 10px; font-weight: bold;">${devis.number}</p>
          <p style="margin: 3px 0; color: #666; font-size: 8px;">
            <strong>Date d'émission:</strong> ${formatDateFR(devis.date)}<br>
            <strong>Validité:</strong> ${devis.validityDays} jours (jusqu'au ${formatDateFR(validityDate.toISOString().slice(0, 10))})
          </p>
        </div>
      </div>

      <!-- CLIENTE COMPACTO -->
      <div style="margin-bottom: 6mm;">
        <h3 style="margin: 0 0 3mm 0; color: #333; font-size: 9px; font-weight: bold;">CLIENT</h3>
        <div style="background: #f9f9f9; padding: 5mm; border-radius: 3px; font-size: 8px;">
          <p style="margin: 0; color: #333; font-weight: bold;">${devis.clientName}</p>
          <p style="margin: 1px 0;">À l'attention de: ${devis.clientContact}</p>
          <p style="margin: 1px 0;">${devis.clientAddress}, ${devis.clientCity}</p>
          ${devis.clientEmail ? `<p style="margin: 1px 0;">${devis.clientEmail}</p>` : ''}
        </div>
      </div>

      <!-- OBJETO COMPACTO -->
      <div style="margin-bottom: 6mm;">
        <h3 style="margin: 0 0 3mm 0; color: #333; font-size: 9px; font-weight: bold;">OBJET</h3>
        <div style="background: #fafbfc; padding: 5mm; border-left: 2px solid #667eea; font-size: 8px; line-height: 1.3;">
          ${devis.object.split('\n').map(line => `<p style="margin: 0 0 2px 0;">${line}</p>`).join('')}
        </div>
      </div>

      <!-- TABLA DE PRESTACIONES COMPACTA -->
      <div style="margin-bottom: 6mm;">
        <h3 style="margin: 0 0 3mm 0; color: #333; font-size: 9px; font-weight: bold;">DÉTAIL DE LA PRESTATION</h3>
        <table style="width: 100%; border-collapse: collapse; font-size: 8px;">
          <thead>
            <tr style="background: #667eea; color: white;">
              <th style="padding: 3mm; text-align: left; font-weight: bold; border: 1px solid #667eea;">Désignation</th>
              <th style="padding: 3mm; text-align: center; font-weight: bold; border: 1px solid #667eea; width: 20mm;">Quantité</th>
              <th style="padding: 3mm; text-align: right; font-weight: bold; border: 1px solid #667eea; width: 20mm;">PU HT</th>
              <th style="padding: 3mm; text-align: right; font-weight: bold; border: 1px solid #667eea; width: 25mm;">Total HT</th>
            </tr>
          </thead>
          <tbody>
            ${devis.items.map((item, idx) => `
              <tr style="background: ${idx % 2 === 0 ? '#fff' : '#f9f9f9'};">
                <td style="padding: 3mm; border: 1px solid #ddd; word-wrap: break-word;">${item.description}</td>
                <td style="padding: 3mm; text-align: center; border: 1px solid #ddd;">${item.quantity}h</td>
                <td style="padding: 3mm; text-align: right; border: 1px solid #ddd;">${item.price.toFixed(2)}€</td>
                <td style="padding: 3mm; text-align: right; font-weight: bold; border: 1px solid #ddd;">${item.total.toFixed(2)}€</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <!-- TOTALES COMPACTOS -->
      <div style="margin-bottom: 6mm; display: grid; grid-template-columns: 1fr 60mm;">
        <div></div>
        <div>
          <table style="width: 100%; border-collapse: collapse; font-size: 8px;">
            <tr style="background: #f9f9f9;">
              <td style="padding: 2mm 3mm; border: 1px solid #ddd;">Total HT</td>
              <td style="padding: 2mm 3mm; text-align: right; border: 1px solid #ddd; font-weight: bold;">${devis.totalHT.toFixed(2)}€</td>
            </tr>
            <tr>
              <td style="padding: 2mm 3mm; border: 1px solid #ddd; font-size: 7px;">TVA N/A (art. 293 B)</td>
              <td style="padding: 2mm 3mm; text-align: right; border: 1px solid #ddd;">0,00€</td>
            </tr>
            <tr style="background: #667eea; color: white;">
              <td style="padding: 2mm 3mm; border: 1px solid #667eea; font-weight: bold;">Total TTC</td>
              <td style="padding: 2mm 3mm; text-align: right; border: 1px solid #667eea; font-weight: bold;">${devis.totalHT.toFixed(2)}€</td>
            </tr>
          </table>
        </div>
      </div>

      <!-- CONDITIONS COMPACTAS -->
      <div style="margin-bottom: 6mm;">
        <h3 style="margin: 0 0 2mm 0; color: #333; font-size: 8px; font-weight: bold;">CONDITIONS</h3>
        <ul style="margin: 0; padding-left: 5mm; font-size: 7px; line-height: 1.4;">
          <li style="margin-bottom: 1mm;">Facturation avec rapport d'activité obligatoire</li>
          <li style="margin-bottom: 1mm;">Délai de paiement: ${devis.paymentDays} jours</li>
          <li>Pénalités retard: 40€ + 3x taux légal (art. L441-10)</li>
        </ul>
      </div>

      <!-- SIGNATURES COMPACTAS -->
      <div style="border-top: 1px solid #ddd; padding-top: 8mm;">
        <table style="width: 100%; font-size: 8px;">
          <tr>
            <td style="width: 50%; text-align: center; padding-top: 12mm;">
              <p style="margin: 0; font-weight: bold;">Pour ZIT Connect</p>
              <p style="margin: 3mm 0 0 0; color: #666;">Jonathan ZAMBRANO</p>
              <p style="margin: 3mm 0 0 0; font-size: 7px;">Date: ${formatDateFR(devis.date)}</p>
            </td>
            <td style="width: 50%; text-align: center; padding-top: 12mm;">
              <p style="margin: 0; font-weight: bold;">Pour ${devis.clientName}</p>
              <p style="margin: 3mm 0 0 0; color: #666;">Nom:</p>
              <p style="margin: 3mm 0 0 0; font-size: 7px;">Date:</p>
            </td>
          </tr>
        </table>
      </div>

      <div style="margin-top: 3mm; text-align: center; font-size: 6px; color: #999;">
        ZIT Connect • SIRET 878 527 688 00021 • Toulouse, France
      </div>
    </div>
  `;

  // Crear elemento temporal
  const element = document.createElement('div');
  element.innerHTML = devisHTML;

  // Configurar opciones de html2pdf - OPTIMIZADO PARA UNA PÁGINA
  const opt = {
    margin: [0, 0, 0, 0],  // Sin márgenes (usamos padding interno)
    filename: `DEVIS${devis.number.replace(/-/g, '')}_${devis.clientName.replace(/\s+/g, '')}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' },
    pagebreak: { mode: 'avoid' }  // Evitar saltos de página
  };

  // Generar PDF
  html2pdf().set(opt).from(element).save();
}

function formatDateFR(dateStr) {
  const date = new Date(dateStr);
  const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin',
                  'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}
