// Utility to generate and download company profile PDF
export const downloadCompanyProfile = () => {
  // Create a simple PDF using a data URL approach
  // Using a template to create the PDF content
  
  const pdfContent = `
%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length 2500 >>
stream
BT
/F1 24 Tf
50 750 Td
(Colors Signs & Copiers) Tj
0 -40 Td
/F1 16 Tf
(Company Profile) Tj
0 -50 Td
/F1 12 Tf
(Leading Advertising Company in Uttar Pradesh) Tj
0 -30 Td
/F1 11 Tf
(About Us) Tj
0 -20 Td
(Colors Signs & Copiers is one of the leading advertising companies in Uttar Pradesh) Tj
0 -15 Td
(with 15+ years of excellence in outdoor and indoor advertising solutions.) Tj
0 -30 Td
(Contact Information) Tj
0 -20 Td
(Head Office - Lucknow) Tj
0 -15 Td
(Shop No.1 Naubullah Road, Opp. Kavash Chhatrawala, Lucknow-18) Tj
0 -15 Td
(Phone: +91-9198690007) Tj
0 -15 Td
(Email: info@colorssigns.com) Tj
0 -15 Td
(Working Hours: Mon-Sat: 9 AM - 7 PM) Tj
0 -25 Td
(Allahabad Branch) Tj
0 -15 Td
(85/70 Maharajan Lane, Mutthiganj, Allahabad-20) Tj
0 -15 Td
(Phone: 9506711035) Tj
0 -15 Td
(Working Hours: Mon-Sat: 9 AM - 6 PM) Tj
0 -25 Td
(Bahraich Branch) Tj
0 -15 Td
(C1Husaini Chauraha, Near Paras Builder, Bahraich-01) Tj
0 -15 Td
(Phone: 0522-2541521) Tj
0 -15 Td
(Working Hours: Mon-Sat: 9 AM - 6 PM) Tj
0 -30 Td
(Our Services) Tj
0 -20 Td
(- Outdoor Advertising & Billboards) Tj
0 -15 Td
(- Digital Printing Solutions) Tj
0 -15 Td
(- Signage Fabrication) Tj
0 -15 Td
(- Mobile Van Advertising) Tj
0 -15 Td
(- LED Boards) Tj
0 -15 Td
(- CNC Router Cutting) Tj
0 -15 Td
(- Laser Cutting) Tj
0 -30 Td
(Why Choose Us) Tj
0 -20 Td
(500+ Happy Clients | 15+ Years Experience | 50+ Expert Team | 24/7 Support) Tj
0 -40 Td
(Thank you for your interest in our services!) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000244 00000 n 
0000002795 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
2880
%%EOF
`;

  // Create blob from PDF content
  const blob = new Blob([pdfContent], { type: 'application/pdf' })
  
  // Create download link
  const url = window.URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'Colors-Copiers-Company-Profile.pdf'
  
  // Trigger download
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  window.URL.revokeObjectURL(url)
}
