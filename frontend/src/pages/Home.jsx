import Hero from '../components/Hero.jsx'
‎import { Link } from 'react-router-dom'
‎import { useEffect, useState } from 'react'
‎import { db } from '../utils/firebase'
‎import { collection, getDocs, query, limit, orderBy } from 'firebase/firestore'
‎import VehicleCard from '../components/VehicleCard.jsx'
‎
‎export default function Home() {
‎  const [cars, setCars] = useState([])
‎
‎  useEffect(() => {
‎    const run = async () => {
‎      const q = query(collection(db, 'vehicles'), orderBy('createdAt', 'desc'), limit(6))
‎      const snap = await getDocs(q)
‎      const list = snap.docs.map(d => ({ docId: d.id, ...d.data() }))
‎      setCars(list)
‎    }
‎    run().catch(console.error)
‎  }, [])
‎
‎  return (
‎    <div>
‎      <Hero />
‎      <section className="max-w-7xl mx-auto px-4 py-10">
‎        <div className="flex items-end justify-between">
‎          <h2 className="text-2xl font-bold">Featured Stock</h2>
‎          <Link to="/stock" className="text-accent">See All</Link>
‎        </div>
‎        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
‎          {cars.map(car => <VehicleCard key={car.docId} car={car} />)}
‎          {cars.length === 0 && <p className="text-slate-600">No cars yet. Check back soon.</p>}
‎        </div>
‎      </section>
‎
‎      <section className="bg-white border-t border-b">
‎        <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
‎          <div>
‎            <h3 className="font-semibold text-lg">Verified Auction Grades</h3>
‎            <p className="text-slate-600 text-sm mt-2">Original inspection sheets, repair history, and grade notes before you bid.</p>
‎          </div>
‎          <div>
‎            <h3 className="font-semibold text-lg">Transparent Costs</h3>
‎            <p className="text-slate-600 text-sm mt-2">FOB, freight, duty—clear breakdown before you commit.</p>
‎          </div>
‎          <div>
‎            <h3 className="font-semibold text-lg">Fast Logistics</h3>
‎            <p className="text-slate-600 text-sm mt-2">Weekly sailings to Karachi. End-to-end tracking until handover.</p>
‎          </div>
‎        </div>
‎      </section>
‎    </div>
‎  )
‎}
‎