import React, { useEffect, useState } from 'react'
import { listTickets, createTicket, updateTicket, deleteTicket } from '../../services/ticketService'
import TicketCard from '../../components/TicketCard'

export default function TicketManager(){
  const [tickets, setTickets] = useState([])
  const [form, setForm] = useState({ title:'', description:'', status:'open' })
  const [editing, setEditing] = useState(null)
  const [errors, setErrors] = useState({})

  function load(){ listTickets().then(setTickets).catch(()=>{}) }

  useEffect(()=>{ load() },[])

  function validate(f){
    const e = {}
    if(!f.title || f.title.trim().length < 3) e.title = 'Title is required (min 3 chars)'
    if(!['open','in_progress','closed'].includes(f.status)) e.status = 'Invalid status'
    return e
  }

  async function handleCreate(e){
    e.preventDefault()
    const ev = validate(form); setErrors(ev); if(Object.keys(ev).length) return
    try{ await createTicket(form); setForm({ title:'', description:'', status:'open' }); load() }catch(err){}
  }
  async function handleUpdate(e){
    e.preventDefault()
    const ev = validate(form); setErrors(ev); if(Object.keys(ev).length) return
    try{ await updateTicket(editing.id, form); setEditing(null); setForm({ title:'', description:'', status:'open' }); load() }catch(err){}
  }
  async function handleDelete(t){
    if(!confirm('Delete ticket?')) return
    try{ await deleteTicket(t.id); load() }catch(err){}
  }
  function startEdit(t){ setEditing(t); setForm({ title: t.title, description: t.description || '', status: t.status }) }

  return (
    <main className="container-max px-4 py-8">
      <h2 className="text-2xl font-semibold">Tickets</h2>
      <div className="mt-6 grid lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          {tickets.length === 0 ? <div className="bg-slate-800 rounded-2xl p-4 text-slate-300">No tickets yet</div> : tickets.map(t=> <TicketCard key={t.id} ticket={t} onEdit={startEdit} onDelete={handleDelete} />)}
        </div>
        <aside className="bg-slate-800 rounded-2xl p-4 shadow">
          <h3 className="font-semibold">{editing ? 'Edit Ticket' : 'Create Ticket'}</h3>
          <form onSubmit={editing ? handleUpdate : handleCreate} className="mt-4 space-y-3">
            <div>
              <label className="block text-sm text-slate-300">Title</label>
              <input className="input-default mt-1 bg-slate-900 text-slate-100" value={form.title} onChange={e=>setForm({...form, title: e.target.value})} />
              {errors.title && <div className="text-sm text-red-400 mt-1">{errors.title}</div>}
            </div>
            <div>
              <label className="block text-sm text-slate-300">Description</label>
              <textarea className="input-default mt-1 bg-slate-900 text-slate-100" rows="4" value={form.description} onChange={e=>setForm({...form, description: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm text-slate-300">Status</label>
              <select className="input-default mt-1 bg-slate-900 text-slate-100" value={form.status} onChange={e=>setForm({...form, status: e.target.value})}>
                <option value="open">Open</option>
                <option value="in_progress">In Progress</option>
                <option value="closed">Closed</option>
              </select>
              {errors.status && <div className="text-sm text-red-400 mt-1">{errors.status}</div>}
            </div>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white" type="submit">{editing ? 'Update' : 'Create'}</button>
              {editing && <button type="button" className="px-4 py-2 rounded-md border border-slate-700 text-slate-200" onClick={()=>{ setEditing(null); setForm({ title:'', description:'', status:'open' }) }}>Cancel</button>}
            </div>
          </form>
        </aside>
      </div>
    </main>
  )
}
