export default function FilterBar({ filters, setFilters, counts }) {
‎  const onChange = (key) => (e) => setFilters(f => ({ ...f, [key]: e.target.value }))
‎  const Input = ({ label, children }) => (
‎    <label className="text-sm text-slate-700 flex flex-col gap-1">
‎      <span className="font-medium">{label}</span>
‎      {children}
‎    </label>
‎  )
‎  return (
‎    <div className="rounded-2xl border border-slate-200 bg-white p-4 grid md:grid-cols-6 gap-3">
‎      <Input label="Make">
‎        <select value={filters.make} onChange={onChange('make')} className="border rounded-xl px-3 py-2">
‎          <option value="">Any</option>
‎          {counts.makes.map(m => <option key={m} value={m}>{m}</option>)}
‎        </select>
‎      </Input>
‎      <Input label="Min Year">
‎        <input type="number" value={filters.minYear} onChange={onChange('minYear')} placeholder="2015" className="border rounded-xl px-3 py-2"/>
‎      </Input>
‎      <Input label="Max Price (USD)">
‎        <input type="number" value={filters.maxPrice} onChange={onChange('maxPrice')} placeholder="20000" className="border rounded-xl px-3 py-2"/>
‎      </Input>
‎      <Input label="Grade">
‎        <select value={filters.grade} onChange={onChange('grade')} className="border rounded-xl px-3 py-2">
‎          <option value="">Any</option>
‎          {['S','6','5','4.5','4','3.5','3'].map(g => <option key={g} value={g}>{g}</option>)}
‎        </select>
‎      </Input>
‎      <Input label="Mileage Max (km)">
‎        <input type="number" value={filters.maxKm} onChange={onChange('maxKm')} placeholder="80000" className="border rounded-xl px-3 py-2"/>
‎      </Input>
‎      <div className="flex items-end">
‎        <button onClick={() => setFilters({ make:'', minYear:'', maxPrice:'', grade:'', maxKm:'' })} className="w-full rounded-2xl px-3 py-2 border">Reset</button>
‎      </div>
‎    </div>
‎  )
‎}