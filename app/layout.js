import Header from './components/Header'

export const metadata = {
  title: 'KofC Zanesville',
  description: 'A basic Next.js website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif', background: '#f4f7fb', color: '#1f2937' }}>
        <Header />
        <main style={{ padding: '2rem 0', minHeight: '100vh' }}>{children}</main>
      </body>
    </html>
  )
}
