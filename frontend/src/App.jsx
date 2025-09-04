import { Routes, Route } from 'react-router-dom'
‎import Navbar from './components/Navbar.jsx'
‎import Footer from './components/Footer.jsx'
‎import Home from './pages/Home.jsx'
‎import Stock from './pages/Stock.jsx'
‎import Vehicle from './pages/Vehicle.jsx'
‎import Auctions from './pages/Auctions.jsx'
‎import HowItWorks from './pages/HowItWorks.jsx'
‎import ImportProcess from './pages/ImportProcess.jsx'
‎import Financing from './pages/Financing.jsx'
‎import About from './pages/About.jsx'
‎import Contact from './pages/Contact.jsx'
‎import FAQ from './pages/FAQ.jsx'
‎import Login from './pages/Login.jsx'
‎import Admin from './pages/Admin.jsx'
‎import ProtectedRoute from './components/ProtectedRoute.jsx'
‎
‎export default function App() {
‎  return (
‎    <div className="min-h-screen flex flex-col">
‎      <Navbar />
‎      <main className="flex-1">
‎        <Routes>
‎          <Route path="/" element={<Home />} />
‎          <Route path="/stock" element={<Stock />} />
‎          <Route path="/vehicle/:id" element={<Vehicle />} />
‎          <Route path="/auctions" element={<Auctions />} />
‎          <Route path="/how-it-works" element={<HowItWorks />} />
‎          <Route path="/import-process" element={<ImportProcess />} />
‎          <Route path="/financing" element={<Financing />} />
‎          <Route path="/about" element={<About />} />
‎          <Route path="/contact" element={<Contact />} />
‎          <Route path="/faq" element={<FAQ />} />
‎          <Route path="/login" element={<Login />} />
‎          <Route path="/admin" element={
‎            <ProtectedRoute><Admin /></ProtectedRoute>
‎          } />
‎        </Routes>
‎      </main>
‎      <Footer />
‎    </div>
‎  )
‎}