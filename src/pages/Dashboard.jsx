import React, { useEffect, useState } from 'react'
import { listTickets } from '../services/ticketService'

export default function Dashboard(){
  const [stats, setStats] = useState({ total:0, open:0, closed:0 })

  useEffect(()=>{
    listTickets().then(ts=>{
      setStats({
        total: ts.length,
        open: ts.filter(t=>t.status==='open').length,
        closed: ts.filter(t=>t.status==='closed').length
      })
    }).catch(()=>{})
  },[])

  return (
    <main className="container-max px-4 py-8">
      <h2 className="text-2xl font-semibold">Dashboard</h2>
      <div className="mt-6 grid sm:grid-cols-3 gap-6">
        <div className="bg-slate-800 rounded-2xl p-6 shadow">
          <div className="text-sm text-slate-300">Total tickets</div>
          <div className="mt-2 text-3xl font-bold">{stats.total}</div>
        </div>
        <div className="bg-slate-800 rounded-2xl p-6 shadow">
          <div className="text-sm text-slate-300">Open tickets</div>
          <div className="mt-2 text-3xl font-bold text-green-400">{stats.open}</div>
        </div>
        <div className="bg-slate-800 rounded-2xl p-6 shadow">
          <div className="text-sm text-slate-300">Resolved tickets</div>
          <div className="mt-2 text-3xl font-bold text-gray-300">{stats.closed}</div>
        </div>
      </div>
    </main>
  )
}
