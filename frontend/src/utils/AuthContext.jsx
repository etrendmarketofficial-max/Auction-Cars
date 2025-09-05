import { createContext, useContext, useEffect, useState } from 'react'
‎import { auth } from './firebase'
‎import { onAuthStateChanged, signOut } from 'firebase/auth'
‎
‎const Ctx = createContext(null)
‎
‎export function AuthProvider({ children }) {
‎  const [user, setUser] = useState(null)
‎  const [loading, setLoading] = useState(true)
‎
‎  useEffect(() => {
‎    const unsub = onAuthStateChanged(auth, u => {
‎      setUser(u || null)
‎      setLoading(false)
‎    })
‎    return () => unsub()
‎  }, [])
‎
‎  const logout = () => signOut(auth)
‎
‎  return <Ctx.Provider value={{ user, loading, logout }}>{children}</Ctx.Provider>
‎}
‎
‎export const useAuth = () => useContext(Ctx)
‎