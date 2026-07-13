"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    try {
      const raw = localStorage.getItem('kofc_currentUser')
      if (raw) setUser(JSON.parse(raw))
    } catch (e) {
      console.error('reading user', e)
    }
  }, [])

  function handleLogout() {
    localStorage.removeItem('kofc_currentUser')
    setUser(null)
    router.push('/')
  }

  const closeMenu = () => setOpen(false)

  const linkStyle = {
    textDecoration: 'none',
    color: '#ffffff',
    fontWeight: 600,
    padding: '0.35rem 0.6rem',
    borderRadius: 999,
    fontFamily: 'Arial Condensed, Arial Narrow, Arial, sans-serif',
  }

  return (
    <header style={{ position: 'sticky', top: 0, background: '#112866', borderBottom: '1px solid rgba(255,255,255,0.16)', padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', gap: '1rem', zIndex: 100, fontFamily: 'Arial Condensed, Arial Narrow, Arial, sans-serif' }}>
      <button aria-label="Toggle menu" onClick={() => setOpen(!open)} style={{ background: 'transparent', border: 'none', padding: 8, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 4, cursor: 'pointer' }}>
        <span style={{ display: 'block', width: 22, height: 2, background: '#ffffff' }} />
        <span style={{ display: 'block', width: 16, height: 2, background: '#ffffff' }} />
        <span style={{ display: 'block', width: 10, height: 2, background: '#ffffff' }} />
      </button>

      <div style={{ fontWeight: 700, fontSize: '1.1rem', fontFamily: 'McGivney, Georgia, serif', letterSpacing: '0.02em' }}>KofC Zanesville</div>

      <nav style={{ display: 'flex', gap: '0.35rem', marginLeft: '1rem', flexWrap: 'wrap' }}>
        <Link href="/" style={linkStyle} onClick={closeMenu}>Home</Link>
        <Link href="/events" style={linkStyle} onClick={closeMenu}>Events</Link>
        <Link href="/newsletters" style={linkStyle} onClick={closeMenu}>Newsletters</Link>
        {user && user.isAdmin && (
          <Link href="/admin" style={linkStyle} onClick={closeMenu}>Admin</Link>
        )}
      </nav>

      <div style={{ marginLeft: 'auto', display: 'flex', gap: 8, alignItems: 'center' }}>
        {user ? (
          <>
            <Link href="/profile" style={{ textDecoration: 'none', color: '#ffffff', fontWeight: 600, fontFamily: 'Arial Condensed, Arial Narrow, Arial, sans-serif' }} onClick={closeMenu}>{user.name || user.email}</Link>
            <button onClick={() => { closeMenu(); handleLogout() }} style={{ background: '#F7b718', color: '#ffffff', border: '1px solid #F7b718', padding: '0.5rem 0.75rem', borderRadius: 999, cursor: 'pointer', fontWeight: 700, fontFamily: 'Arial Condensed, Arial Narrow, Arial, sans-serif' }}>Logout</button>
          </>
        ) : (
          <Link href="/auth" style={{ textDecoration: 'none' }} onClick={closeMenu}>
            <button style={{ background: '#ffffff', color: '#112866', border: '1px solid #ffffff', padding: '0.5rem 0.75rem', borderRadius: 999, cursor: 'pointer', fontWeight: 700, fontFamily: 'Arial Condensed, Arial Narrow, Arial, sans-serif' }}>Login</button>
          </Link>
        )}
      </div>

      {open && (
        <div style={{ position: 'fixed', left: 0, top: 0, height: '100vh', width: 280, background: '#112866', color: '#ffffff', boxShadow: '2px 0 16px rgba(0,0,0,0.2)', padding: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <div style={{ fontWeight: 700, fontFamily: 'McGivney, Georgia, serif' }}>Menu</div>
            <button aria-label="Close menu" onClick={() => setOpen(false)} style={{ background: 'transparent', border: 'none', fontSize: 20, color: '#ffffff', cursor: 'pointer' }}>×</button>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <li><Link href="/" onClick={closeMenu} style={{ textDecoration: 'none', color: '#ffffff', fontWeight: 600, fontFamily: 'Arial Condensed, Arial Narrow, Arial, sans-serif' }}>Home</Link></li>
            <li><Link href="/events" onClick={closeMenu} style={{ textDecoration: 'none', color: '#ffffff', fontWeight: 600, fontFamily: 'Arial Condensed, Arial Narrow, Arial, sans-serif' }}>Events</Link></li>
            <li><Link href="/profile" onClick={closeMenu} style={{ textDecoration: 'none', color: '#ffffff', fontWeight: 600, fontFamily: 'Arial Condensed, Arial Narrow, Arial, sans-serif' }}>Users</Link></li>
            <li><Link href="/newsletters" onClick={closeMenu} style={{ textDecoration: 'none', color: '#ffffff', fontWeight: 600, fontFamily: 'Arial Condensed, Arial Narrow, Arial, sans-serif' }}>Newsletters</Link></li>
            <li><Link href="/meetings" onClick={closeMenu} style={{ textDecoration: 'none', color: '#ffffff', fontWeight: 600, fontFamily: 'Arial Condensed, Arial Narrow, Arial, sans-serif' }}>Meetings</Link></li>
          </ul>
        </div>
      )}
    </header>
  )
}
