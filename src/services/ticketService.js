const TKEY = 'ticketapp_tickets'
function load(){ try{ return JSON.parse(localStorage.getItem(TKEY) || '[]') }catch(e){ return [] } }
function save(t){ localStorage.setItem(TKEY, JSON.stringify(t)) }

export function listTickets(){ return new Promise((res,rej)=>{ setTimeout(()=>{ try{ res(load()) }catch(e){ rej({ message: 'Failed to load tickets' }) } }, 150) }) }
export function createTicket(ticket){ return new Promise((res,rej)=>{ setTimeout(()=>{ try{ if(!ticket.title) return rej({ message: 'Title required' }); if(!['open','in_progress','closed'].includes(ticket.status)) return rej({ message: 'Invalid status' }); const ts = load(); ticket.id = Date.now(); ts.unshift(ticket); save(ts); res(ticket) }catch(e){ rej({ message: 'Failed to create ticket' }) } }, 150) }) }
export function updateTicket(id, patch){ return new Promise((res,rej)=>{ setTimeout(()=>{ try{ const ts = load(); const i = ts.findIndex(t=>t.id===id); if(i===-1) return rej({ message: 'Ticket not found' }); ts[i] = { ...ts[i], ...patch }; save(ts); res(ts[i]) }catch(e){ rej({ message: 'Failed to update ticket' }) } },150) }) }
export function deleteTicket(id){ return new Promise((res,rej)=>{ setTimeout(()=>{ try{ let ts = load(); ts = ts.filter(t=>t.id!==id); save(ts); res({ ok:true }) }catch(e){ rej({ message: 'Failed to delete ticket' }) } },150) }) }
