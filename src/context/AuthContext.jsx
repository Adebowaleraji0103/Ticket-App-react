import React, { createContext, useContext, useState, useEffect } from 'react'
const KEY = 'ticketapp_session'
const Users_KEY = 'ticketapp_users'
const AuthContext = createContext()

export function AuthProvider({ children }){
  const [user, setUser] = useState(null)

  useEffect(()=>{
    try{
      const raw = localStorage.getItem(KEY)
      if(raw) setUser(JSON.parse(raw).user || { email: JSON.parse(raw).email })
    }catch(e){ setUser(null) }
  },[])

  function isAuthenticated(){ try{ return !!localStorage.getItem(KEY) }catch(e){ return false } }

  function login({ email, password }){
    const users = JSON.parse(localStorage.getItem(Users_KEY) || '[]')
    const u = users.find(x=>x.email===email && x.password===password)
    if(!u) return Promise.reject({ message: 'Invalid credentials' })
    const token = Math.random().toString(36).slice(2)
    const payload = { token, user: { email } }
    localStorage.setItem(KEY, JSON.stringify(payload))
    setUser({ email })
    return Promise.resolve(payload)
  }

  function signup({ name, email, password }){
    const users = JSON.parse(localStorage.getItem(Users_KEY) || '[]')
    if(users.some(x=>x.email===email)) return Promise.reject({ message: 'User already exists' })
    users.push({ id: Date.now(), name, email, password })
    localStorage.setItem(Users_KEY, JSON.stringify(users))
    const token = Math.random().toString(36).slice(2)
    const payload = { token, user: { email } }
    localStorage.setItem(KEY, JSON.stringify(payload))
    setUser({ email })
    return Promise.resolve(payload)
  }

  function logout(){
    localStorage.removeItem(KEY)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(){ return useContext(AuthContext) }
