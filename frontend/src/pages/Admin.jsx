import { useEffect, useState } from 'react'
‎import { db, storage } from '../utils/firebase'
‎import {
‎  addDoc, collection, serverTimestamp, onSnapshot, deleteDoc, doc, updateDoc
‎} from 'firebase/firestore'
‎import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
‎
‎export default function Admin() {
‎  const [cars, setCars] = useState([])
‎  const [form, setForm] = useState({
‎    title:'', make:'', year:'', grade:'', mileage:'', price:'',
‎    engine:'', transmission:'', fuel:'', auctionHouse:''
‎  })
‎  const [file, setFile] = useState(null)
‎  const [editingId, setEditingId] = useState(null)
‎  const [loading, setLoading] = useState(false)
‎  const col = collection(db, 'vehicles')
‎
‎  useEffect(() => {
‎    const unsub = onSnapshot(col, snap => {
‎      const list = snap.docs.map(d => ({ docId: d.id, ...d.data() }))
‎      setCars(list.sort((a,b)=> (b.createdAt?.seconds||0) - (a.createdAt?.seconds||0)))
‎    })
‎    return () => unsub()
‎  }, [])
‎
‎  const reset = () => {
‎    setForm({ title:'', make:'', year:'', grade:'', mileage:'', price:'', engine:'', transmission:'', fuel:'', auctionHouse:'' })
‎    setFile(null); setEditingId(null)
‎  }
‎
‎  const uploadImage = async () => {
‎    if (!file) return ''
‎    const path = `vehicles/${Date.now()}_${file.name}`
‎    const r = ref(storage, path)
‎    await uploadBytes(r, file)
‎    return await getDownloadURL(r)
‎  }
‎
‎  const onCreate = async (e) => {
‎    e.preventDefault()
‎    setLoading(true)
‎    try {
‎      const imageUrl = await uploadImage()
‎      await addDoc(col, {
‎        ...form,
‎        year: Number(form.year) || null,
‎        mileage: Number(form.mileage) || null,
‎        price: Number(form.price) || null,
‎        imageUrl,
‎        createdAt: serverTimestamp()
‎      })
‎      reset()
‎    } finally {
‎      setLoading(false)
‎    }
‎  }
‎
‎  const onUpdate = async (e) => {
‎    e.preventDefault()
‎    if (!editingId) return
‎    setLoading(true)
‎    try {
‎      let imageUrl = form.imageUrl || ''
‎      if (file) {
‎        imageUrl = await uploadImage()
‎      }
‎      await updateDoc(doc(db, 'vehicles', editingId), {
‎        ...form,
‎        year: Number(form.year) || null,
‎        mileage: Number(form.mileage) || null,
‎        price: Number(form.price) || null,
‎        imageUrl
‎      })
‎      reset()
‎    } finally {
‎      setLoading(false)
‎    }
‎  }
‎
‎  const onEdit = (car) => {
‎    setEditingId(car.docId)
‎    setForm({
‎      title: car.title || '', make: car.make || '', year: car.year || '',
‎      grade: car.grade || '', mileage: car.mileage || '', price: car.price || '',
‎      engine: car.engine || '', transmission: car.transmission || '', fuel: car.fuel || '',
‎      auctionHouse: car.auctionHouse || '', imageUrl: car.imageUrl || ''
‎    })
‎    setFile(null)
‎    window.scrollTo({ top: 0, behavior: 'smooth' })
‎  }
‎
‎  const onDelete = async (car) => {
‎    if (!confirm('Delete this vehicle?')) return
‎    await deleteDoc(doc(db, 'vehicles', car.docId))
‎    // Optional: if you stored storage path, you could delete file too
‎    // if (car.imagePath) await deleteObject(ref(storage, car.imagePath))
‎  }
‎
‎  const Input = ({ label, name, type='text', placeholder='' }) => (
‎    <label className="text-sm text-slate-700">
‎      <span className="font-medium">{label}</span>
‎      <input
‎        className="mt-1 border rounded-xl px-3 py-2 w-full"
‎        type={type}
‎        value={form[name] ?? ''}
‎        onChange={(e)=> setForm(f => ({ ...f, [name]: e.target.value }))}
‎        placeholder={placeholder}
‎        required={['title','make','year','price'].includes(name)}
‎      />
‎    </label>
‎  )
‎
‎  return (
‎    <div className="max-w-7xl mx-auto px-4 py-8">
‎      <h1 className="text-3xl font-bold">Admin Panel</h1>
‎      <p className="text-slate-600 mt-1">Add, edit, and delete car listings.</p>
‎
‎      <form onSubmit={editingId ? onUpdate : onCreate} className="mt-6 grid md:grid-cols-3 gap-4 rounded-2xl border bg-white p-5">
‎        <Input label="Title" name="title" placeholder="Toyota Prius S Touring" />
‎        <Input label="Make" name="make" placeholder="Toyota" />
‎        <Input label="Year" name="year" type="number" placeholder="2018" />
‎        <Input label="Grade" name="grade" placeholder="4.5" />
‎        <Input label="Mileage (km)" name="mileage" type="number" placeholder="52000" />
‎        <Input label="Price (USD)" name="price" type="number" placeholder="14500" />
‎        <Input label="Engine" name="engine" placeholder="1.8L Hybrid" />
‎        <Input label="Transmission" name="transmission" placeholder="Automatic" />
‎        <Input label="Fuel" name="fuel" placeholder="Hybrid" />
‎        <Input label="Auction House" name="auctionHouse" placeholder="USS Tokyo" />
‎
‎        <label className="text-sm text-slate-700 md:col-span-3">
‎          <span className="font-medium">Image</span>
‎          <input className="mt-1 block" type="file" accept="image/*" onChange={(e)=> setFile(e.target.files?.[0] || null)} />
‎          {form.imageUrl && <img src={form.imageUrl} alt="" className="mt-2 h-24 rounded border" />}
‎        </label>
‎
‎        <div className="md:col-span-3 flex gap-3">
‎          <button disabled={loading} className="rounded-2xl px-5 py-3 bg-primary text-white font-medium">{editingId ? 'Update' : 'Add Vehicle'}</button>
‎          {editingId && <button type="button" onClick={reset} className="rounded-2xl px-5 py-3 border">Cancel</button>}
‎        </div>
‎      </form>
‎
‎      <div className="mt-10">
‎        <h2 className="text-xl font-semibold mb-3">All Vehicles</h2>
‎        <div className="overflow-x-auto rounded-2xl border bg-white">
‎          <table className="min-w-full text-sm">
‎            <thead className="bg-slate-100">
‎              <tr>
‎                <th className="text-left p-3">Title</th>
‎                <th className="text-left p-3">Make</th>
‎                <th className="text-left p-3">Year</th>
‎                <th className="text-left p-3">Price</th>
‎                <th className="text-left p-3">Grade</th>
‎                <th className="text-left p-3">Actions</th>
‎              </tr>
‎            </thead>
‎            <tbody>
‎              {cars.map(car => (
‎                <tr key={car.docId} className="border-t">
‎                  <td className="p-3">{car.title}</td>
‎                  <td className="p-3">{car.make}</td>
‎                  <td className="p-3">{car.year}</td>
‎                  <td className="p-3">${car.price}</td>
‎                  <td className="p-3">{car.grade}</td>
‎                  <td className="p-3 flex gap-2">
‎                    <button className="text-accent" onClick={()=>onEdit(car)}>Edit</button>
‎                    <button className="text-red-600" onClick={()=>onDelete(car)}>Delete</button>
‎                  </td>
‎                </tr>
‎              ))}
‎              {cars.length === 0 && <tr><td className="p-3 text-slate-500" colSpan="6">No vehicles yet.</td></tr>}
‎            </tbody>
‎          </table>
‎        </div>
‎      </div>
‎    </div>
‎  )
‎}
‎