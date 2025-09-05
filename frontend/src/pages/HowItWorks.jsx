export default function HowItWorks() {
‎  const steps = [
‎    { title: 'Consultation', text: 'Define budget, model, use-case. We share recent hammer prices.' },
‎    { title: 'Search & Inspect', text: 'We shortlist units and review auction sheets. Pre-bid checks as needed.' },
‎    { title: 'Bid & Win', text: 'Proxy-bid in your budget. If we miss, we try again next auction.' },
‎    { title: 'Payment', text: 'Secure invoice. Pay to Japan account. Receipts and contracts shared.' },
‎    { title: 'Ship & Clear', text: 'Booking, BL, insurance, customs, duty. Weekly sailings to Karachi.' },
‎    { title: 'Handover', text: 'Port pickup or doorstep delivery. Post-sale support.' },
‎  ]
‎  return (
‎    <div className="max-w-7xl mx-auto px-4 py-8">
‎      <h1 className="text-3xl font-bold">How It Works</h1>
‎      <div className="mt-8 grid md:grid-cols-3 gap-6">
‎        {steps.map((s,i) => (
‎          <div key={i} className="rounded-2xl border bg-white p-5">
‎            <div className="text-accent font-semibold">{String(i+1).padStart(2,'0')}</div>
‎            <h3 className="mt-2 font-semibold text-lg">{s.title}</h3>
‎            <p className="text-slate-600 text-sm mt-1">{s.text}</p>
‎          </div>
‎        ))}
‎      </div>
‎    </div>
‎  )
‎}