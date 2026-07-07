"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabaseClient'

export default function AuthPage() {
  const [mode, setMode] = useState('login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  async function handleSignup(e) {
    e.preventDefault()
    if (!supabase) {
      setMessage('Supabase is not configured yet.')
      return
    }

    setIsLoading(true)
    setMessage('')

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: name },
      },
    })

    setIsLoading(false)

    if (error) {
      setMessage(error.message)
      return
    }

    if (data?.user) {
      router.push('/profile')
    } else {
      setMessage('Please check your email to confirm your account.')
    }
  }

  async function handleLogin(e) {
    e.preventDefault()
    if (!supabase) {
      setMessage('Supabase is not configured yet.')
      return
    }

    setIsLoading(true)
    setMessage('')

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    setIsLoading(false)

    if (error) {
      setMessage(error.message)
      return
    }

    router.push('/profile')
  }

  return (
    <main style={{ display: 'grid', placeItems: 'center', padding: '2rem' }}>
      <div style={{ width: '100%', maxWidth: 480, background: 'white', padding: '2rem', borderRadius: 12, boxShadow: '0 10px 25px rgba(0,0,0,0.06)' }}>
        <h2>{mode === 'login' ? 'Login' : 'Sign up'}</h2>
        {message && <div style={{ color: 'crimson', marginBottom: 8 }}>{message}</div>}
        <form onSubmit={mode === 'login' ? handleLogin : handleSignup}>
          {mode === 'signup' && (
            <label style={{ display: 'block', marginBottom: 8 }}>
              Name
              <input required value={name} onChange={e => setName(e.target.value)} style={{ width: '100%', padding: 8, marginTop: 4 }} />
            </label>
          )}
          <label style={{ display: 'block', marginBottom: 8 }}>
            Email
            <input required type="email" value={email} onChange={e => setEmail(e.target.value)} style={{ width: '100%', padding: 8, marginTop: 4 }} />
          </label>
          <label style={{ display: 'block', marginBottom: 8 }}>
            Password
            <input required type="password" value={password} onChange={e => setPassword(e.target.value)} style={{ width: '100%', padding: 8, marginTop: 4 }} />
          </label>
          <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
            <button type="submit" disabled={isLoading} style={{ background: '#2563eb', color: '#fff', border: 'none', padding: '0.6rem 1rem', borderRadius: 8, opacity: isLoading ? 0.7 : 1 }}>
              {isLoading ? 'Please wait...' : mode === 'login' ? 'Login' : 'Create account'}
            </button>
            <button type="button" onClick={() => setMode(mode === 'login' ? 'signup' : 'login')} style={{ background: 'transparent', border: '1px solid #e6e9ef', padding: '0.6rem 1rem', borderRadius: 8 }}>
              {mode === 'login' ? 'Switch to Sign up' : 'Switch to Login'}
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}
