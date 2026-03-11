import type { FC } from 'react'
import { Link } from 'react-router-dom'

const Navbar: FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-1.5 rounded-lg text-white">
            <span className="material-symbols-outlined text-2xl">dentistry</span>
          </div>
          <h2 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase">
            Dental<span className="text-primary">Clinic</span>
          </h2>
        </div>
        <nav className="hidden lg:flex items-center gap-8">
          <Link className="text-sm font-semibold hover:text-primary transition-colors" to="/">
            Home
          </Link>
          <Link className="text-sm font-semibold hover:text-primary transition-colors text-slate-500" to="/about">
            About
          </Link>
          <Link className="text-sm font-semibold hover:text-primary transition-colors text-slate-500" to="/results">
            Results
          </Link>
          <Link className="text-sm font-semibold hover:text-primary transition-colors text-slate-500" to="/services">
            Services
          </Link>
          <Link className="text-sm font-semibold hover:text-primary transition-colors text-slate-500" to="/branches">
            Branches
          </Link>
          <Link className="text-sm font-semibold hover:text-primary transition-colors text-slate-500" to="/faq">
            FAQ
          </Link>
          <Link className="text-sm font-semibold hover:text-primary transition-colors text-slate-500" to="/contact">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:flex px-4 py-2 text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all">
            Patient Login
          </button>
          <Link
            to="/book"
            className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform active:scale-95"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar

