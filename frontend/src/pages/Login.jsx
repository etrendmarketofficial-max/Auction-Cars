import { useState } from 'react'
‎import { signInWithEmailAndPassword } from 'firebase/auth'
‎import { auth } from '../utils/firebase'
‎import { useNavigate } from 'react-router-dom'
‎
‎export default function Login() {
‎  const [email, setEmail] = useState('')
‎  const [password, setPassword] = useState('')
‎  const [error, setError] = useState('')
‎  const navigate = useNavigate()
‎
‎  const onSubmit = async (e) => {
‎    e.preventDefault()
‎    setError('')
‎    try {
‎      await signInWithEmailAndPassword(auth, email, password)
‎      navigate('/admin')
‎    } catch (err) {
‎      setError(err.message)
‎    }
‎  }
‎
‎  return (
‎    <div className="max-w-md mx-auto px-4 py-10">
‎      <h1 className="text-3xl font-bold">Admin Login</h1>
‎      <form onSubmit={onSubmit} className="mt-6 grid gap-4 rounded-2xl border bg-white p-5">
‎        {error && <p className="text-sm text-red-600">{error}</p>}
‎        <input className="border rounded-xl px-3 py-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
‎        <input className="border rounded-xl px-3 py-2" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
‎        <button className="rounded-2xl px-5 py-3 bg-primary text-white font-medium">Login</button>
‎      </form>
‎    </div>
‎  )
‎}
‎