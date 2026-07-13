import './globals.css'
import Header from './components/Header'

export const metadata = {
  title: 'Zanesville Knights of Columbus',
  description: 'Catholic Fellowship',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Arial Condensed, Arial Narrow, Arial, sans-serif', background: '#f5f5f5 ', color: '#ffffff', lineHeight: 1.6 }}>
        <Header />
        <main style={{ padding: '0', minHeight: '100vh', background: '#f5f5f5' }}>{children}</main>
      </body>
    </html>
  )
}
