import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function Login(){
  const { login } = useAuth()
  const nav = useNavigate()
  const loc = useLocation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  async function handleSubmit(e){
    e.preventDefault()
    setError('')
    if(!email || !password){ setError('Please enter email and password'); return }
    try{
      await login({ email, password })
      nav(loc.state?.from?.pathname || '/dashboard')
    }catch(er){
      setError(er?.message || 'Failed to login')
    }
  }

  return (
    <main className="container-max px-4 py-8">
      <div className="max-w-lg mx-auto bg-slate-800 rounded-2xl p-6 shadow">
        <h2 className="text-2xl font-semibold">Login</h2>
        <form className="mt-4 space-y-4" onSubmit={handleSubmit} aria-label="login form">
          <div>
            <label className="block text-sm text-slate-300">Email</label>
            <input className="input-default mt-1 bg-slate-900 text-slate-100" value={email} onChange={e=>setEmail(e.target.value)} aria-label="email"/>
          </div>
          <div>
            <label className="block text-sm text-slate-300">Password</label>
            <input type="password" className="input-default mt-1 bg-slate-900 text-slate-100" value={password} onChange={e=>setPassword(e.target.value)} aria-label="password"/>
          </div>
          {error && <div className="text-sm text-red-400">{error}</div>}
          <div className="flex items-center justify-between">
            <button className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white">Login</button>
          </div>
        </form>
      </div>
    </main>
  )
}
