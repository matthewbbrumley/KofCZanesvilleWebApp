"use client"
import { useEffect, useState } from 'react'

export default function AdminPage() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    try {
      const raw = localStorage.getItem('kofc_users') || '[]'
      setUsers(JSON.parse(raw))
    } catch (e) {
      setUsers([])
    }
  }, [])

  function save(newUsers) {
    setUsers(newUsers)
    try { localStorage.setItem('kofc_users', JSON.stringify(newUsers)) } catch (e) { console.error(e) }
    // if current user is in the list, refresh kofc_currentUser
    try {
      const current = JSON.parse(localStorage.getItem('kofc_currentUser') || 'null')
      if (current) {
        const found = newUsers.find(u => u.email === current.email)
        if (found) localStorage.setItem('kofc_currentUser', JSON.stringify(found))
      }
    } catch (e) { }
  }

  function toggleAdmin(i) {
    const copy = users.map((u, idx) => idx === i ? { ...u, isAdmin: !u.isAdmin } : u)
    save(copy)
  }

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Admin Portal</h1>
      <p>Manage users and toggle admin privileges.</p>
      <div style={{ overflowX: 'auto', marginTop: 12 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ textAlign: 'left', borderBottom: '1px solid #e6e9ef' }}>
              <th style={{ padding: '8px' }}>Name</th>
              <th style={{ padding: '8px' }}>Email</th>
              <th style={{ padding: '8px' }}>Admin</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 && (
              <tr><td style={{ padding: 8 }} colSpan={3}>No users found.</td></tr>
            )}
            {users.map((u, i) => (
              <tr key={u.email} style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: 8 }}>{u.name || '-'}</td>
                <td style={{ padding: 8 }}>{u.email}</td>
                <td style={{ padding: 8 }}>
                  <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                    <input type="checkbox" checked={!!u.isAdmin} onChange={() => toggleAdmin(i)} />
                    <span>{u.isAdmin ? 'Yes' : 'No'}</span>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}
