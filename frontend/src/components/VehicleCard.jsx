import { Link } from 'react-router-dom'
‎import { formatCurrency, km } from '../utils/format.js'
‎
‎export default function VehicleCard({ car }) {
‎  return (
‎    <article className="rounded-2xl border border-slate-200 bg-white shadow-soft overflow-hidden flex flex-col">
‎      <img src={car.imageUrl || car.image} alt={car.title} className="h-48 w-full object-cover" loading="lazy"/>
‎      <div className="p-4 flex-1 flex flex-col">
‎        <h3 className="font-semibold text-lg">{car.title}</h3>
‎        <p className="text-sm text-slate-600">{car.year} • {km(car.mileage)} km • {car.grade}</p>
‎        <p className="mt-2 text-primary font-bold text-xl">{formatCurrency(car.price)}</p>
‎        <div className="mt-auto pt-4 flex justify-between items-center">
‎          <Link to={`/vehicle/${car.id || car.docId}`} className="text-sm font-medium text-accent hover:underline">Details</Link>
‎          <a href={`#/contact?car=${encodeURIComponent(car.title)}`} className="text-sm rounded-xl px-3 py-1.5 bg-primary text-white">Reserve</a>
‎        </div>
‎      </div>
‎    </article>
‎  )
‎}
‎