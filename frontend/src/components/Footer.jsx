export default function Footer() {
‎  return (
‎    <footer className="mt-16 border-t border-slate-200">
‎      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
‎        <div>
‎          <h4 className="font-semibold mb-3">Trustline Auto Japan</h4>
‎          <p className="text-sm text-slate-600">
‎            Premium Japanese auction car imports & local stock. Transparent fees, verified grades, and fast delivery.
‎          </p>
‎        </div>
‎        <div>
‎          <h5 className="font-semibold mb-3">Contact</h5>
‎          <p className="text-sm text-slate-600">Email: hello@trustlineauto.jp</p>
‎          <p className="text-sm text-slate-600">WhatsApp: +92-300-0000000</p>
‎          <p className="text-sm text-slate-600">Hours: Mon–Sat 10:00–19:00 PKT</p>
‎        </div>
‎        <div>
‎          <h5 className="font-semibold mb-3">Legal</h5>
‎          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Trustline Auto Japan.</p>
‎          <p className="text-xs text-slate-500 mt-2">Auction data for demonstration only.</p>
‎        </div>
‎      </div>
‎    </footer>
‎  )
‎}
‎