export interface VCardInfo {
  fullName: string;
  title: string;
  organization: string;
  phone?: string;
  email?: string;
  url?: string;
  address: string;
  note: string;
  fileName: string;
}

export function downloadVCard(info: VCardInfo): void {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${info.fullName}`,
    `TITLE:${info.title}`,
    `ORG:${info.organization}`,
    info.phone ? `TEL;TYPE=CELL:${info.phone}` : null,
    info.email ? `EMAIL;TYPE=INTERNET:${info.email}` : null,
    info.url ? `URL:${info.url}` : null,
    `ADR;TYPE=WORK:${info.address}`,
    `NOTE:${info.note}`,
    "END:VCARD",
  ].filter(Boolean);

  const vcardData = lines.join("\r\n");
  const blob = new Blob([vcardData], { type: "text/vcard;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", info.fileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
