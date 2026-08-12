/* ZIT Connect — PDF Generator for Devis */

function generateDevisPDF(devis) {
  // Calcular fechas
  const emissionDate = new Date(devis.date);
  const validityDate = new Date(emissionDate);
  validityDate.setDate(validityDate.getDate() + devis.validityDays);

  // Crear HTML del devis
  const devisHTML = `
    <div style="font-family: Arial, sans-serif; max-width: 900px; margin: 0 auto; padding: 20px; color: #333;">

      <!-- ENCABEZADO -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 3px solid #667eea;">

        <!-- INFORMACIÓN EMPRESA -->
        <div>
          <h1 style="margin: 0; color: #667eea; font-size: 28px;">ZIT Connect</h1>
          <p style="margin: 5px 0; color: #666; font-size: 12px;">Jonathan ZAMBRANO</p>
          <p style="margin: 5px 0; color: #666; font-size: 11px;">Consultant IT & Ingénieur VoIP – Entrepreneur Individuel</p>
          <p style="margin: 8px 0 0 0; color: #999; font-size: 10px; line-height: 1.6;">
            198 Route de Launaguet, Bât B, App 104<br>
            31200 Toulouse, France<br>
            <br>
            SIRET: 878 527 688 00021<br>
            APE: 7112B – Ingénierie, études techniques<br>
            <br>
            Tél: +33 7 59 67 40 23<br>
            Email: jonathan.zambrano@zitconnect.fr<br>
            Web: www.zitconnect.fr
          </p>
        </div>

        <!-- NÚMERO Y FECHAS -->
        <div style="text-align: right;">
          <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
            <p style="margin: 0; color: #667eea; font-size: 20px; font-weight: bold;">DEVIS</p>
            <p style="margin: 8px 0 0 0; color: #333; font-size: 14px; font-weight: bold;">${devis.number}</p>
          </div>

          <p style="margin: 10px 0; color: #666; font-size: 12px;">
            <strong>Date d'émission:</strong><br>
            ${formatDateFR(devis.date)}
          </p>

          <p style="margin: 10px 0; color: #666; font-size: 12px;">
            <strong>Validité de l'offre:</strong><br>
            ${devis.validityDays} jours<br>
            (jusqu'au ${formatDateFR(validityDate.toISOString().slice(0, 10))})
          </p>
        </div>
      </div>

      <!-- CLIENTE -->
      <div style="margin-bottom: 30px;">
        <h3 style="margin: 0 0 10px 0; color: #333; font-size: 14px; font-weight: bold; text-transform: uppercase;">CLIENT</h3>
        <div style="background: #f9f9f9; padding: 15px; border-radius: 6px;">
          <p style="margin: 0; color: #333; font-weight: bold; font-size: 12px;">${devis.clientName}</p>
          <p style="margin: 5px 0; color: #666; font-size: 11px;">À l'attention de: ${devis.clientContact}</p>
          <p style="margin: 5px 0; color: #666; font-size: 11px;">${devis.clientAddress}</p>
          <p style="margin: 5px 0; color: #666; font-size: 11px;">${devis.clientCity}</p>
          ${devis.clientEmail ? `<p style="margin: 5px 0; color: #666; font-size: 11px;">${devis.clientEmail}</p>` : ''}
        </div>
      </div>

      <!-- OBJET -->
      <div style="margin-bottom: 30px;">
        <h3 style="margin: 0 0 10px 0; color: #333; font-size: 14px; font-weight: bold; text-transform: uppercase;">OBJET</h3>
        <div style="background: #fafbfc; padding: 15px; border-left: 4px solid #667eea; border-radius: 4px; font-size: 12px; line-height: 1.6; color: #555;">
          ${devis.object.split('\n').map(line => `<p style="margin: 0 0 5px 0;">${line}</p>`).join('')}
        </div>
      </div>

      <!-- DÉTAIL DE PRESTATION -->
      <div style="margin-bottom: 30px;">
        <h3 style="margin: 0 0 15px 0; color: #333; font-size: 14px; font-weight: bold; text-transform: uppercase;">DÉTAIL DE LA PRESTATION</h3>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <thead>
            <tr style="background: #667eea; color: white;">
              <th style="padding: 12px; text-align: left; font-size: 12px; font-weight: bold; border: 1px solid #667eea;">Désignation</th>
              <th style="padding: 12px; text-align: center; font-size: 12px; font-weight: bold; border: 1px solid #667eea; width: 80px;">Quantité</th>
              <th style="padding: 12px; text-align: right; font-size: 12px; font-weight: bold; border: 1px solid #667eea; width: 100px;">PU HT</th>
              <th style="padding: 12px; text-align: right; font-size: 12px; font-weight: bold; border: 1px solid #667eea; width: 100px;">Total HT</th>
            </tr>
          </thead>
          <tbody>
            ${devis.items.map((item, idx) => `
              <tr style="background: ${idx % 2 === 0 ? '#fff' : '#f9f9f9'}; border-bottom: 1px solid #eee;">
                <td style="padding: 12px; font-size: 11px; border: 1px solid #ddd;">${item.description}</td>
                <td style="padding: 12px; text-align: center; font-size: 11px; border: 1px solid #ddd;">${item.quantity} h</td>
                <td style="padding: 12px; text-align: right; font-size: 11px; border: 1px solid #ddd;">${item.price.toFixed(2)} €</td>
                <td style="padding: 12px; text-align: right; font-size: 11px; font-weight: bold; border: 1px solid #ddd;">${item.total.toFixed(2)} €</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <!-- TOTALES -->
      <div style="margin-bottom: 30px; display: grid; grid-template-columns: 1fr 250px;">
        <div></div>
        <div>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="background: #f9f9f9; border: 1px solid #ddd;">
              <td style="padding: 12px; font-size: 12px; font-weight: bold; border: 1px solid #ddd;">Total HT</td>
              <td style="padding: 12px; text-align: right; font-size: 12px; font-weight: bold; border: 1px solid #ddd;">${devis.totalHT.toFixed(2)} €</td>
            </tr>
            <tr style="background: #fff; border: 1px solid #ddd;">
              <td style="padding: 12px; font-size: 12px; border: 1px solid #ddd;">TVA non applicable, art. 293 B du CGI</td>
              <td style="padding: 12px; text-align: right; font-size: 12px; border: 1px solid #ddd;">0,00 €</td>
            </tr>
            <tr style="background: #667eea; color: white; border: 1px solid #667eea;">
              <td style="padding: 12px; font-size: 12px; font-weight: bold; border: 1px solid #667eea;">Total TTC</td>
              <td style="padding: 12px; text-align: right; font-size: 12px; font-weight: bold; border: 1px solid #667eea;">${devis.totalHT.toFixed(2)} €</td>
            </tr>
          </table>
        </div>
      </div>

      <!-- CONDITIONS -->
      <div style="margin-bottom: 30px;">
        <h3 style="margin: 0 0 12px 0; color: #333; font-size: 12px; font-weight: bold; text-transform: uppercase;">CONDITIONS</h3>
        <ul style="margin: 0; padding-left: 20px; font-size: 10px; line-height: 1.8; color: #555;">
          <li style="margin-bottom: 8px;">
            Facturation accompagnée obligatoirement du rapport d'activité WebApp2. Aucun règlement ne pourra être effectué sans ce rapport joint en annexe.
          </li>
          <li style="margin-bottom: 8px;">
            Délai de paiement: ${devis.paymentDays} jours à réception de facture.
          </li>
          <li>
            En cas de retard de paiement: indemnité forfaitaire de 40 € et pénalités au taux de 3 fois le taux d'intérêt légal (art. L441-10 du Code de commerce).
          </li>
        </ul>
      </div>

      <!-- SIGNATURES -->
      <div style="margin-top: 50px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="width: 50%; padding-top: 30px; text-align: center; border-top: 1px solid #ddd;">
              <p style="margin: 5px 0; font-size: 11px; font-weight: bold;">Pour ZIT Connect</p>
              <p style="margin: 20px 0; font-size: 10px;">Jonathan ZAMBRANO</p>
            </td>
            <td style="width: 50%; padding-top: 30px; text-align: center; border-top: 1px solid #ddd;">
              <p style="margin: 5px 0; font-size: 11px; font-weight: bold;">Pour ${devis.clientName}</p>
              <p style="margin: 20px 0; font-size: 10px;">Nom:</p>
            </td>
          </tr>
          <tr>
            <td style="padding-top: 20px; text-align: center; font-size: 10px;">Date: ${formatDateFR(devis.date)}</td>
            <td style="padding-top: 20px; text-align: center; font-size: 10px;">Date:</td>
          </tr>
          <tr>
            <td style="padding-top: 20px; text-align: center; font-size: 10px;">Signature:</td>
            <td style="padding-top: 20px; text-align: center; font-size: 10px;">Signature et cachet:</td>
          </tr>
        </table>
      </div>

      <div style="margin-top: 40px; text-align: center; padding-top: 20px; border-top: 1px solid #ddd; font-size: 9px; color: #999;">
        <p style="margin: 0;">ZIT Connect • Jonathan Zambrano • Entrepreneur Individuel • SIRET 878 527 688 00021 • 198 Route de Launaguet, 31200 Toulouse, France</p>
      </div>
    </div>
  `;

  // Crear elemento temporal
  const element = document.createElement('div');
  element.innerHTML = devisHTML;

  // Configurar opciones de html2pdf
  const opt = {
    margin: 10,
    filename: `DEVIS${devis.number.replace(/-/g, '')}_${devis.clientName.replace(/\s+/g, '')}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
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
