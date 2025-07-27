import './globals.css'

export const metadata = {
  title: 'Safar Dil Se - Jiyo Khul Ke! | Adventure Travel Company',
  description: 'Curated Group Adventures & Soulful Journeys Across India. Join our community of travelers and explore the mountains with Safar Dil Se.',
  keywords: 'travel, adventure, India, trekking, group travel, mountains, Himachal Pradesh, Uttarakhand, Delhi NCR',
  openGraph: {
    title: 'Safar Dil Se - Adventure Travel Company',
    description: 'Curated Group Adventures & Soulful Journeys Across India',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
