import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Header(){
  const { user, logout, isAuthenticated } = useAuth()
  const nav = useNavigate()
  function handleLogout(){ logout(); nav('/auth/login') }
  return (
    <header className="container-max py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Link to='/' className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-slate-900 font-bold">TA</div>
          <div className="text-lg font-semibold">TicketApp</div>
        </Link>
      </div>
      <nav className="flex items-center gap-3">
        {isAuthenticated() ? (
          <>
            <Link to='/dashboard' className="px-3 py-2 rounded-md hover:bg-slate-700">Dashboard</Link>
            <Link to='/tickets' className="px-3 py-2 rounded-md hover:bg-slate-700">Tickets</Link>
            <button onClick={handleLogout} className="px-3 py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white">Logout</button>
          </>
        ) : (
          <>
            <Link to='/auth/signup' className="px-3 py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white">Get Started</Link>
          </>
        )}
      </nav>
    </header>
  )
}
