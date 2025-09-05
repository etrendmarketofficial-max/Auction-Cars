import { Link } from 'react-router-dom'
‎
‎export default function Hero() {
‎  return (
‎    <section className="relative">
‎      <div className="max-w-7xl mx-auto px-4 pt-10 pb-16 grid md:grid-cols-2 gap-8 items-center">
‎        <div>
‎          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
‎            Drive Trust. Import Smart.
‎          </h1>
‎          <p className="mt-4 text-lg text-slate-700">
‎            Access 200+ Japan auction houses with transparent fee breakdowns, live bids, and verified grades.
‎          </p>
‎          <div className="mt-6 flex gap-3">
‎            <Link className="rounded-2xl px-5 py-3 bg-accent text-white font-medium shadow-soft" to="/stock">Browse Stock</Link>
‎            <Link className="rounded-2xl px-5 py-3 border border-slate-300 font-medium" to="/how-it-works">How It Works</Link>
‎          </div>
‎        </div>
‎        <div className="glass rounded-2xl p-4">
‎          <img className="rounded-xl w-full" src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200&q=80&auto=format&fit=crop" alt="Japanese sports car" />
‎        </div>
‎      </div>
‎    </section>
‎  )
‎}