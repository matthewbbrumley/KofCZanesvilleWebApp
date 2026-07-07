import Header from './components/Header'

export const metadata = {
  title: 'KofC Zanesville',
  description: 'A basic Next.js website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Arial, Arial Narrow, sans-serif', background: '#112866', color: '#ffffff', lineHeight: 1.6 }}>
        <Header />
        <main style={{ padding: '2rem 0 3rem', minHeight: '100vh', background: '#112866' }}>{children}</main>
      </body>
    </html>
  )
}
