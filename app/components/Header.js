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

  return (
    <header style={{ position: 'sticky', top: 0, background: '#fff', borderBottom: '1px solid #e6e9ef', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '1rem', zIndex: 100 }}>
      <button aria-label="Toggle menu" onClick={() => setOpen(!open)} style={{ background: 'transparent', border: 'none', padding: 8, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 4 }}>
        <span style={{ display: 'block', width: 22, height: 2, background: '#111' }} />
        <span style={{ display: 'block', width: 16, height: 2, background: '#111' }} />
        <span style={{ display: 'block', width: 10, height: 2, background: '#111' }} />
      </button>

      <div style={{ fontWeight: 700 }}>KofC Zanesville</div>

      <nav style={{ display: 'flex', gap: '0.75rem', marginLeft: '1rem' }}>
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
        <Link href="/events" style={{ textDecoration: 'none', color: 'inherit' }}>Events</Link>
        <Link href="/newsletters" style={{ textDecoration: 'none', color: 'inherit' }}>Newsletters</Link>
        {user && user.isAdmin && (
          <Link href="/admin" style={{ textDecoration: 'none', color: 'inherit' }}>Admin</Link>
        )}
      </nav>

      <div style={{ marginLeft: 'auto', display: 'flex', gap: 8, alignItems: 'center' }}>
        {user ? (
          <>
            <Link href="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>{user.name || user.email}</Link>
            <button onClick={handleLogout} style={{ background: '#ef4444', color: '#fff', border: 'none', padding: '0.4rem 0.6rem', borderRadius: 6, cursor: 'pointer' }}>Logout</button>
          </>
        ) : (
          <Link href="/auth">
            <button style={{ background: '#2563eb', color: '#fff', border: 'none', padding: '0.5rem 0.75rem', borderRadius: 6, cursor: 'pointer' }}>Login</button>
          </Link>
        )}
      </div>

      {open && (
        <div style={{ position: 'fixed', left: 0, top: 0, height: '100vh', width: 260, background: '#fff', boxShadow: '2px 0 12px rgba(0,0,0,0.12)', padding: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <div style={{ fontWeight: 700 }}>Menu</div>
            <button aria-label="Close menu" onClick={() => setOpen(false)} style={{ background: 'transparent', border: 'none', fontSize: 18 }}>×</button>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/events">Events</Link></li>
            <li><Link href="/profile">Users</Link></li>
            <li><Link href="/newsletters">Newsletters</Link></li>
            <li><Link href="/meetings">Meetings</Link></li>
          </ul>
        </div>
      )}
    </header>
  )
}
