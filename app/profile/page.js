"use client"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabaseClient'

export default function Profile() {
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    async function loadUser() {
      if (!supabase) {
        setUser(null)
        return
      }

      const { data: { session } } = await supabase.auth.getSession()
      const currentUser = session?.user

      if (currentUser) {
        setUser({
          id: currentUser.id,
          email: currentUser.email,
          name: currentUser.user_metadata?.full_name || currentUser.email,
          isAdmin: false,
        })
      } else {
        setUser(null)
      }
    }

    loadUser()
  }, [])

  async function handleLogout() {
    if (supabase) {
      await supabase.auth.signOut()
    }
    setUser(null)
    router.push('/')
  }

  if (!user) {
    return (
      <main style={{ display: 'grid', placeItems: 'center', minHeight: '70vh' }}>
        <section style={{ width: '100%', maxWidth: 900, background: 'white', padding: '2rem', borderRadius: 12, boxShadow: '0 10px 25px rgba(0,0,0,0.06)' }}>
          <h1>Not signed in</h1>
          <p>Please <a href="/auth">login or sign up</a>.</p>
        </section>
      </main>
    )
  }

  return (
    <main style={{ display: 'grid', placeItems: 'center', minHeight: '70vh' }}>
      <section style={{ width: '100%', maxWidth: 900, background: 'white', padding: '2rem', borderRadius: 12, boxShadow: '0 10px 25px rgba(0,0,0,0.06)' }}>
        <h1>{user.name || user.email}</h1>
        <p>Email: {user.email}</p>
        <p>Role: {user.isAdmin ? 'Admin' : 'Member'}</p>
        <div style={{ marginTop: 12 }}>
          <button onClick={handleLogout} style={{ background: '#ef4444', color: '#fff', border: 'none', padding: '0.5rem 0.75rem', borderRadius: 6 }}>Sign out</button>
        </div>
      </section>
    </main>
  )
}
