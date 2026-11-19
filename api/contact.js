// /api/contact.js — RollerGarázs contact & quote request handler (Vercel serverless function)
// Sends styled inquiry emails to Joe via Resend (https://resend.com).
// Requires RESEND_API_KEY environment variable in Vercel project settings.

function escapeHtml(str) {
  return String(str == null ? '' : str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

module.exports = async (req, res) => {
  // CORS & method check
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'method_not_allowed' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch (e) { body = {}; }
  }
  body = body || {};

  const { name, phone, email, brand, issue, estPrice, estTime, desc, botcheck } = body;

  // Honeypot spam defense: bots fill this hidden field, real humans don't
  if (botcheck) {
    return res.status(200).json({ ok: true });
  }

  // Basic validation: name and phone are essential
  if (!name || !phone) {
    return res.status(400).json({ ok: false, error: 'missing_fields' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toAddress = process.env.CONTACT_TO_EMAIL || 'joe.escooter@gmail.com';
  const fromAddress = process.env.CONTACT_FROM_EMAIL || 'RollerGarázs <onboarding@resend.dev>';

  const safeName = escapeHtml(name);
  const safePhone = escapeHtml(phone);
  const safeEmail = escapeHtml(email || 'Nem adott meg');
  const safeBrand = escapeHtml(brand || 'Nincs megadva').toUpperCase();
  const safeIssue = escapeHtml(issue || 'Általános szerviz / Átvizsgálás');
  const safePrice = escapeHtml(estPrice || '-');
  const safeTime = escapeHtml(estTime || '1 munkanap');
  const safeDesc = escapeHtml(desc || '(Nem adott meg további megjegyzést)');

  const cleanPhone = String(phone).replace(/[^0-9+]/g, '');
  const now = new Date().toLocaleString('hu-HU', { timeZone: 'Europe/Budapest' });

  // If RESEND_API_KEY is not configured yet (e.g. local test or preview before env setup),
  // log it and return success so the front-end flow doesn't break
  if (!apiKey) {
    console.warn('RESEND_API_KEY is not set. Mocking email delivery for lead:', { safeName, safePhone, safeBrand, safeIssue });
    return res.status(200).json({ ok: true, mocked: true });
  }

  const emailHtml = `
    <!DOCTYPE html>
    <html lang="hu">
    <head>
      <meta charset="utf-8">
      <title>Új Árajánlatkérés — RollerGarázs</title>
    </head>
    <body style="margin:0;padding:20px;background-color:#0d0f12;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#f0f3f8;">
      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width:600px;margin:0 auto;background:#14171d;border-radius:12px;overflow:hidden;border:1px solid #222733;">
        <!-- Header -->
        <tr>
          <td style="background:#090a0d;padding:26px 30px;border-bottom:3px solid #e52521;text-align:left;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td>
                  <span style="font-size:24px;font-weight:900;letter-spacing:1px;color:#ffffff;">ROLLER<span style="color:#e52521;">GARÁZS</span></span>
                  <div style="font-size:12px;color:#8a94a6;letter-spacing:1.5px;text-transform:uppercase;margin-top:4px;">Gödi Szerviz Műhely</div>
                </td>
                <td style="text-align:right;">
                  <span style="display:inline-block;background:rgba(229,37,33,0.15);color:#ff4d4d;border:1px solid rgba(229,37,33,0.3);font-size:11px;font-weight:700;padding:4px 10px;border-radius:999px;text-transform:uppercase;">Új ajánlatkérés</span>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:30px;">
            <h2 style="margin:0 0 16px 0;font-size:20px;color:#ffffff;font-weight:800;">Új megkeresés érkezett a weboldalról!</h2>
            <p style="margin:0 0 24px 0;font-size:14px;color:#a0aec0;line-height:1.5;">
              Valaki kitöltötte az online árajánlatkérő űrlapot. Az alábbi adatokkal jelentkezett:
            </p>

            <!-- Quick Action Box (Call Customer) -->
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom:24px;background:#1a1f29;border:1px solid #2d3748;border-radius:8px;padding:16px;">
              <tr>
                <td>
                  <div style="font-size:12px;color:#8a94a6;text-transform:uppercase;font-weight:700;letter-spacing:0.5px;">Ügyfél telefonszáma:</div>
                  <div style="font-size:20px;font-weight:800;color:#22c55e;margin-top:4px;">
                    <a href="tel:${cleanPhone}" style="color:#22c55e;text-decoration:none;">${safePhone}</a>
                  </div>
                </td>
                <td style="text-align:right;">
                  <a href="tel:${cleanPhone}" style="display:inline-block;background:#e52521;color:#ffffff;text-decoration:none;font-weight:700;font-size:13px;padding:10px 18px;border-radius:6px;">Azonnali hívás →</a>
                </td>
              </tr>
            </table>

            <!-- Details Table -->
            <div style="background:#0e1015;border:1px solid #1f242f;border-radius:8px;padding:20px;margin-bottom:24px;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;font-size:14px;">
                <tr>
                  <td style="padding:8px 0;color:#8a94a6;width:38%;">Ügyfél neve:</td>
                  <td style="padding:8px 0;color:#ffffff;font-weight:700;">${safeName}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#8a94a6;">E-mail cím:</td>
                  <td style="padding:8px 0;color:#cbd5e1;">${safeEmail}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#8a94a6;">Roller típusa:</td>
                  <td style="padding:8px 0;color:#ff4d4d;font-weight:700;">${safeBrand}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#8a94a6;">Kért javítás / probléma:</td>
                  <td style="padding:8px 0;color:#ffffff;font-weight:600;">${safeIssue}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#8a94a6;">Becsült irányár:</td>
                  <td style="padding:8px 0;color:#38bdf8;font-weight:700;">${safePrice}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#8a94a6;">Becsült időtartam:</td>
                  <td style="padding:8px 0;color:#cbd5e1;">${safeTime}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#8a94a6;vertical-align:top;">Ügyfél megjegyzése:</td>
                  <td style="padding:8px 0;color:#e2e8f0;font-style:italic;">"${safeDesc}"</td>
                </tr>
              </table>
            </div>

            <div style="font-size:12px;color:#64748b;text-align:right;">
              Beküldve: ${now} (Budapest)
            </div>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#090a0d;padding:16px 30px;border-top:1px solid #1a1f29;text-align:center;">
            <span style="font-size:12px;color:#64748b;">
              RollerGarázs Műhely • 2131 Göd, Mikszáth Kálmán u. 68. • +36 30 894 7739
            </span>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  try {
    const resendPayload = {
      from: fromAddress,
      to: [toAddress],
      subject: `[RollerGarázs Ajánlatkérés] ${safeName} — ${safeBrand} (${safeIssue})`,
      html: emailHtml,
    };

    if (email && email.includes('@')) {
      resendPayload.reply_to = email;
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(resendPayload),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Resend API error:', response.status, errText);
      return res.status(502).json({ ok: false, error: 'email_provider_error', details: errText });
    }

    const data = await response.json();
    return res.status(200).json({ ok: true, id: data.id });
  } catch (error) {
    console.error('Resend serverless error:', error);
    return res.status(500).json({ ok: false, error: 'internal_error' });
  }
};
