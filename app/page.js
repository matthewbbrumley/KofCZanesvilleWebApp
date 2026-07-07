export default function Home() {
  return (
    <main>
      <section style={{ height: '60vh', width: '100%', backgroundImage: "url('https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1600&q=60')", backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: 1100, padding: '2rem', color: '#fff', textAlign: 'center', background: 'linear-gradient(180deg, rgba(0,0,0,0.28), rgba(0,0,0,0.46))' }}>
          <h1 style={{ fontSize: '3rem', margin: 0 }}>Welcome</h1>
          <p style={{ fontSize: '1.125rem', marginTop: '0.5rem' }}>Explore public events or sign in to manage your profile.</p>
          <div style={{ marginTop: '1.25rem', display: 'flex', gap: 12, justifyContent: 'center' }}>
            <a href="/events" style={{ background: '#fff', color: '#111', padding: '0.6rem 1rem', borderRadius: 8, textDecoration: 'none' }}>View Public Events</a>
            <a href="/profile" style={{ background: 'rgba(255,255,255,0.16)', color: '#fff', padding: '0.6rem 1rem', borderRadius: 8, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>Login</a>
          </div>
        </div>
      </section>
      <section style={{ padding: '2rem', display: 'grid', placeItems: 'center' }}>
        <div style={{ width: '100%', maxWidth: 900, background: 'white', padding: '2rem', borderRadius: 12, boxShadow: '0 10px 25px rgba(0,0,0,0.06)' }}>
          <h2>Welcome</h2>
          <p>This area can hold featured content or upcoming events.</p>
        </div>
      </section>
    </main>
  )
}
