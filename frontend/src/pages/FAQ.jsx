export default function FAQ() {
‎  const items = [
‎    { q: 'Are auction grades reliable?', a: 'Yes, when interpreted with the inspection sheet and photos. We assist with translations and context.' },
‎    { q: 'How long from bid to delivery?', a: 'Typically 4–8 weeks depending on sailing schedules and customs clearance.' },
‎    { q: 'Can I finance an auction car?', a: 'Yes, with pre-approval from our partners. Terms depend on unit and profile.' },
‎  ]
‎  return (
‎    <div className="max-w-5xl mx-auto px-4 py-8">
‎      <h1 className="text-3xl font-bold">FAQ</h1>
‎      <div className="mt-6 divide-y">
‎        {items.map((it, i) => (
‎          <div key={i} className="py-4">
‎            <h3 className="font-semibold">{it.q}</h3>
‎            <p className="text-slate-600 mt-1 text-sm">{it.a}</p>
‎          </div>
‎        ))}
‎      </div>
‎    </div>
‎  )
‎}
‎