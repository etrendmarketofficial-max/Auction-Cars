import { useEffect, useState } from 'react'
‎
‎export default function Contact() {
‎  const [car, setCar] = useState('')
‎  useEffect(() => {
‎    const params = new URLSearchParams(window.location.hash.split('?')[1])
‎    setCar(params.get('car') || '')
‎  }, [])
‎
‎  return (
‎    <div className="max-w-3xl mx-auto px-4 py-8">
‎      <h1 className="text-3xl font-bold">Get A Quote</h1>
‎      <p className="text-slate-600 mt-2">Tell us what you want. We reply within 24 hours.</p>
‎
‎      <form action="https://formspree.io/f/xeoqnkvp" method="POST" className="mt-6 grid gap-4 rounded-2xl border bg-white p-5">
‎        <input type="hidden" name="car" value={car} />
‎        <input className="border rounded-xl px-3 py-2" name="name" placeholder="Full Name" required />
‎        <input className="border rounded-xl px-3 py-2" name="email" type="email" placeholder="Email" required />
‎        <input className="border rounded-xl px-3 py-2" name="phone" placeholder="WhatsApp Number" />
‎        <textarea className="border rounded-xl px-3 py-2" name="message" rows="5" placeholder="Budget, model, year, grade"></textarea>
‎        <button className="rounded-2xl px-5 py-3 bg-primary text-white font-medium">Send</button>
‎      </form>
‎    </div>
‎  )
‎}