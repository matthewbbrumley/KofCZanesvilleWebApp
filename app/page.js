export default function Home() {
  return (
    <main>
      <section style={{ minHeight: '70vh', width: '100%', background: 'linear-gradient(135deg, rgba(17,40,102,0.96), rgba(31,67,142,0.92))', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 1rem' }}>
        <div style={{ width: '100%', maxWidth: 1100, padding: '2rem', color: '#ffffff', textAlign: 'center', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 20, background: 'rgba(255,255,255,0.08)', boxShadow: '0 18px 45px rgba(0,0,0,0.18)' }}>
          <h1 style={{ fontSize: '3rem', margin: 0, fontFamily: 'McGivney, Georgia, serif' }}>Welcome</h1>
          <p style={{ fontSize: '1.125rem', marginTop: '0.75rem', maxWidth: 760, marginLeft: 'auto', marginRight: 'auto' }}>Explore public events or sign in to manage your profile.</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/events" style={{ background: '#F7b718', color: '#ffffff', padding: '0.7rem 1rem', borderRadius: 999, textDecoration: 'none', fontWeight: 700 }}>View Public Events</a>
            <a href="/profile" style={{ background: '#ffffff', color: '#112866', padding: '0.7rem 1rem', borderRadius: 999, textDecoration: 'none', fontWeight: 700, border: '1px solid #ffffff' }}>Login</a>
          </div>
        </div>
      </section>
      <section style={{ padding: '2rem 1rem 3rem', display: 'grid', placeItems: 'center' }}>
        <div style={{ width: '100%', maxWidth: 900, background: '#ffffff', color: '#112866', padding: '2rem', borderRadius: 16, boxShadow: '0 12px 30px rgba(0,0,0,0.08)', border: '1px solid rgba(17,40,102,0.12)' }}>
          <h2 style={{ marginTop: 0, fontFamily: 'McGivney, Georgia, serif', color: '#112866' }}>Welcome</h2>
          <p style={{ marginBottom: 0 }}>This area can hold featured content or upcoming events.</p>
        </div>
      </section>
    </main>
  )
}
