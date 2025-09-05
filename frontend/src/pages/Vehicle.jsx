import { useParams } from 'react-router-dom'
‎import { useEffect, useState } from 'react'
‎import { db } from '../utils/firebase'
‎import { doc, getDoc } from 'firebase/firestore'
‎import { formatCurrency, km } from '../utils/format.js'
‎
‎export default function Vehicle() {
‎  const { id } = useParams()
‎  const [car, setCar] = useState(null)
‎
‎  useEffect(() => {
‎    const run = async () => {
‎      const snap = await getDoc(doc(db, 'vehicles', id))
‎      if (snap.exists()) setCar({ docId: snap.id, ...snap.data() })
‎    }
‎    run().catch(console.error)
‎  }, [id])
‎
‎  if (!car) return <div className="max-w-5xl mx-auto px-4 py-10">Car not found.</div>
‎
‎  return (
‎    <div className="max-w-5xl mx-auto px-4 py-8">
‎      <div className="grid md:grid-cols-2 gap-6">
‎        <img src={car.imageUrl} alt={car.title} className="w-full rounded-2xl border" />
‎        <div>
‎          <h1 className="text-3xl font-bold">{car.title}</h1>
‎          <p className="text-slate-600 mt-1">{car.year} • {km(car.mileage)} km • Grade {car.grade}</p>
‎          <p className="text-primary font-bold text-2xl mt-4">{formatCurrency(car.price)}</p>
‎          <a href={`#/contact?car=${encodeURIComponent(car.title)}`} className="inline-block mt-4 rounded-2xl px-5 py-3 bg-accent text-white">Reserve This Unit</a>
‎          <div className="mt-6">
‎            <h3 className="font-semibold">Specs</h3>
‎            <ul className="text-sm text-slate-700 mt-2 space-y-1">
‎              <li>Engine: {car.engine}</li>
‎              <li>Transmission: {car.transmission}</li>
‎              <li>Fuel: {car.fuel}</li>
‎              <li>Auction House: {car.auctionHouse}</li>
‎            </ul>
‎          </div>
‎        </div>
‎      </div>
‎    </div>
‎  )
‎}