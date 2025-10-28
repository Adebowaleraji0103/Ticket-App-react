import React from 'react'

export default function TicketCard({ ticket, onEdit, onDelete }){
  const statusClass = ticket.status === 'open' ? 'bg-green-700/10 text-green-300' : ticket.status === 'in_progress' ? 'bg-amber-600/10 text-amber-300' : 'bg-gray-600/10 text-gray-300'
  return (
    <article className="bg-slate-800 rounded-2xl p-4 shadow flex justify-between items-start">
      <div>
        <div className="flex items-center gap-3">
          <h4 className="font-semibold">{ticket.title}</h4>
          <span className={`text-xs px-3 py-1 rounded-full ${statusClass}`}>{ticket.status.replace('_',' ')}</span>
        </div>
        {ticket.description && <p className="text-slate-300 mt-2">{ticket.description}</p>}
      </div>
      <div className="flex flex-col gap-2">
        <button onClick={()=>onEdit(ticket)} className="px-3 py-1 rounded-md border border-slate-700 text-sm">Edit</button>
        <button onClick={()=>onDelete(ticket)} className="px-3 py-1 rounded-md bg-red-600 hover:bg-red-500 text-white text-sm">Delete</button>
      </div>
    </article>
  )
}
