import React from 'react'
export default function Footer(){
  return (
    <footer className="container-max py-6 text-center text-sm text-slate-400">
      © {new Date().getFullYear()} TicketApp — Built with care
    </footer>
  )
}
