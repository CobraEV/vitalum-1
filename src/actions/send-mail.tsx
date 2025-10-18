'use server'

export async function sendMail(formData: FormData) {
  try {
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const email = formData.get('email') as string
    const tel = formData.get('tel') as string
    const message = formData.get('message') as string

    // 🔹 1. Access Token holen
    const tokenRes = await fetch(
      `https://login.microsoftonline.com/${process.env.MS_TENANT_ID}/oauth2/v2.0/token`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          client_id: process.env.MS_CLIENT_ID!,
          client_secret: process.env.MS_CLIENT_SECRET!,
          scope: 'https://graph.microsoft.com/.default',
          grant_type: 'client_credentials',
        }),
      }
    )

    const tokenData = await tokenRes.json()
    const accessToken = tokenData.access_token

    if (!accessToken) {
      console.error('❌ Kein Access Token erhalten:', tokenData)
      return { success: false }
    }

    // 🔹 2. E-Mail Layout (HTML mit eingebettetem Logo)
    const htmlContent = `
      <div style="font-family:system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#222;background:#f7f9f8;padding:30px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 14px rgba(0,0,0,0.05);">
          <tr>
            <td style="background:#ffffff;padding:24px 30px;text-align:center;border-bottom:3px solid #4CC3AA;">
              <img src="https://vitalum.vercel.app/Logo_Vitalum.svg" alt="Spitex Vitalum" style="height:42px;width:auto;" />
              <p style="margin-top:10px;font-size:14px;color:#4CC3AA;font-weight:600;letter-spacing:0.3px;">Neue Kontaktanfrage</p>
            </td>
          </tr>
          <tr>
            <td style="padding:30px;">
              <p style="font-size:15px;margin-bottom:18px;">Es wurde eine neue Nachricht über das Kontaktformular gesendet:</p>

              <table cellpadding="0" cellspacing="0" width="100%" style="font-size:14px;line-height:1.6;border-collapse:collapse;">
                <tr>
                  <td width="160" style="font-weight:600;padding:4px 0;">Vorname:</td>
                  <td>${firstName || '-'}</td>
                </tr>
                <tr>
                  <td width="160" style="font-weight:600;padding:4px 0;">Nachname:</td>
                  <td>${lastName || '-'}</td>
                </tr>
                <tr>
                  <td width="160" style="font-weight:600;padding:4px 0;">E-Mail:</td>
                  <td><a href="mailto:${email}" style="color:#4CC3AA;text-decoration:none;">${email}</a></td>
                </tr>
                <tr>
                  <td width="160" style="font-weight:600;padding:4px 0;">Telefon:</td>
                  <td>${tel || '-'}</td>
                </tr>
                <tr>
                  <td colspan="2" style="padding-top:20px;font-weight:600;">Nachricht:</td>
                </tr>
                <tr>
                  <td colspan="2" style="border-left:3px solid #4CC3AA;padding:12px 15px;background:#f9fdfb;border-radius:8px;font-size:14px;white-space:pre-line;">
                    ${message}
                  </td>
                </tr>
              </table>

              <p style="margin-top:30px;font-size:13px;color:#777;">
                Diese Nachricht wurde automatisch über das Kontaktformular auf <strong>spitex-vitalum.ch</strong> gesendet.
              </p>
            </td>
          </tr>
          <tr>
            <td style="background:#f2f7f6;padding:20px;text-align:center;font-size:12px;color:#777;">
              <p style="margin:0;">
                Spitex Vitalum &middot; Postweg 18 &middot; 8754 Netstal<br/>
                <a href="https://spitex-vitalum.ch" style="color:#4CC3AA;text-decoration:none;">www.spitex-vitalum.ch</a>
              </p>
            </td>
          </tr>
        </table>
      </div>
    `

    // 🔹 3. E-Mail über Microsoft Graph senden
    const mailRes = await fetch(
      'https://graph.microsoft.com/v1.0/users/info@spitex-vitalum.ch/sendMail',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: {
            subject: `Neue Kontaktanfrage von ${firstName} ${lastName}`,
            body: {
              contentType: 'HTML',
              content: htmlContent,
            },
            toRecipients: [
              // Testempfänger
              // { emailAddress: { address: 'veliji.endrit@hotmail.com' } },
              // Produktion:
              { emailAddress: { address: 'info@spitex-vitalum.ch' } },
            ],
          },
          saveToSentItems: 'false',
        }),
      }
    )

    if (!mailRes.ok) {
      const errText = await mailRes.text()
      console.error('❌ Fehler beim Senden:', errText)
      return { success: false }
    }

    return { success: true }
  } catch (err) {
    console.error('Server Action Fehler:', err)
    return { success: false }
  }
}
