import { useEffect, useMemo, useState } from 'react'
‎import { db } from '../utils/firebase'
‎import { collection, getDocs } from 'firebase/firestore'
‎import VehicleCard from '../components/VehicleCard.jsx'
‎import FilterBar from '../components/FilterBar.jsx'
‎
‎export default function Stock() {
‎  const [data, setData] = useState([])
‎  const [filters, setFilters] = useState({ make:'', minYear:'', maxPrice:'', grade:'', maxKm:'' })
‎
‎  useEffect(() => {
‎    const run = async () => {
‎      const snap = await getDocs(collection(db, 'vehicles'))
‎      const list = snap.docs.map(d => ({ docId: d.id, ...d.data() }))
‎      setData(list)
‎    }
‎    run().catch(console.error)
‎  }, [])
‎
‎  const counts = useMemo(() => {
‎    const makes = [...new Set(data.map(d => d.make).filter(Boolean))].sort()
‎    return { makes }
‎  }, [data])
‎
‎  const filtered = useMemo(() => {
‎    return data.filter(d => {
‎      if (filters.make && d.make !== filters.make) return false
‎      if (filters.minYear && d.year < Number(filters.minYear)) return false
‎      if (filters.maxPrice && d.price > Number(filters.maxPrice)) return false
‎      if (filters.grade && String(d.grade) !== String(filters.grade)) return false
‎      if (filters.maxKm && d.mileage > Number(filters.maxKm)) return false
‎      return true
‎    })
‎  }, [data, filters])
‎
‎  return (
‎    <div className="max-w-7xl mx-auto px-4 py-8">
‎      <h1 className="text-3xl font-bold">Available Stock</h1>
‎      <p className="text-slate-600 mt-1">Hand-picked units ready for export or local delivery.</p>
‎
‎      <div className="mt-6">
‎        <FilterBar filters={filters} setFilters={setFilters} counts={counts} />
‎      </div>
‎
‎      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
‎        {filtered.map(car => <VehicleCard key={car.docId} car={car} />)}
‎        {filtered.length === 0 && <p className="text-slate-600">No cars match the filters. Try widening your criteria.</p>}
‎      </div>
‎    </div>
‎  )
‎}