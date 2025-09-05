import { Link, NavLink } from 'react-router-dom'
‎import Logo from './Logo.jsx'
‎import { useAuth } from '../utils/AuthContext.jsx'
‎
‎const nav = [
‎  { to: '/', label: 'Home' },
‎  { to: '/stock', label: 'Stock' },
‎  { to: '/auctions', label: 'Auctions' },
‎  { to: '/how-it-works', label: 'How It Works' },
‎  { to: '/import-process', label: 'Import' },
‎  { to: '/financing', label: 'Financing' },
‎  { to: '/about', label: 'About' },
‎  { to: '/contact', label: 'Contact' },
‎]
‎
‎export default function Navbar() {
‎  const { user, logout } = useAuth()
‎  return (
‎    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
‎      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
‎        <Link to="/" className="flex items-center gap-2">
‎          <Logo className="w-9 h-9" />
‎          <span className="font-semibold text-lg tracking-wide">Trustline Auto Japan</span>
‎        </Link>
‎        <nav className="hidden md:flex items-center gap-6">
‎          {nav.map(i => (
‎            <NavLink key={i.to} to={i.to}
‎              className={({isActive}) => `text-sm font-medium hover:text-accent ${isActive ? 'text-accent' : 'text-slate-700'}`}
‎              end={i.to === '/'}
‎            >{i.label}</NavLink>
‎          ))}
‎          {!user && <NavLink to="/login" className="text-sm font-medium text-slate-700 hover:text-accent">Admin</NavLink>}
‎          {user && <>
‎            <NavLink to="/admin" className="text-sm font-medium text-slate-700 hover:text-accent">Dashboard</NavLink>
‎            <button onClick={logout} className="text-sm font-medium text-accent">Logout</button>
‎          </>}
‎        </nav>
‎        <a href="#/contact" className="inline-flex items-center rounded-2xl px-4 py-2 bg-primary text-white text-sm shadow-soft hover:opacity-90">Get A Quote</a>
‎      </div>
‎    </header>
‎  )
‎}