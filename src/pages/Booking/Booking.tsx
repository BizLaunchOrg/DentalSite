import type { FC } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Booking: FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased min-h-screen overflow-x-hidden">
      {/* Top Utility Bar (Lagos, Nigeria) */}
      <div className="bg-primary text-white py-2 px-6 lg:px-20 text-xs md:text-sm flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-sm">call</span> +234 (0) 809 000 0000
          </span>
          <span className="flex items-center gap-1.5 hidden md:flex">
            <span className="material-symbols-outlined text-sm">mail</span> care@emeralddentallagos.ng
          </span>
          <span className="flex items-center gap-1.5 hidden lg:flex">
            <span className="material-symbols-outlined text-sm">location_on</span> Lagos, Nigeria
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:opacity-80">
            <span className="material-symbols-outlined text-base">share</span>
          </a>
          <a
            href="#"
            className="hover:opacity-80 text-xs font-bold border-l border-white/30 pl-4 uppercase tracking-wider"
          >
            HMO Partners
          </a>
        </div>
      </div>

      {/* Global Navbar */}
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Side: Form Content */}
          <div className="lg:col-span-8">
            <div className="mb-10">
              <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">
                Premium Dental Care
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                Request Your Visit in Lagos
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Experience world-class dentistry in Lagos. Complete the form below to begin your journey to a perfect
                smile.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900/50 rounded-2xl p-8 border border-primary/5 shadow-xl shadow-primary/5">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Full Name</label>
                    <input
                      type="text"
                      placeholder="Johnathan Doe"
                      className="w-full h-14 px-4 rounded-xl bg-background-light dark:bg-slate-800 border-transparent focus:border-primary focus:ring-0 text-slate-900 dark:text-white transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+234 809 000 0000"
                      className="w-full h-14 px-4 rounded-xl bg-background-light dark:bg-slate-800 border-transparent focus:border-primary focus:ring-0 text-slate-900 dark:text-white transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Email Address</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full h-14 px-4 rounded-xl bg-background-light dark:bg-slate-800 border-transparent focus:border-primary focus:ring-0 text-slate-900 dark:text-white transition-all"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Preferred Lagos Branch</label>
                    <select className="w-full h-14 px-4 rounded-xl bg-background-light dark:bg-slate-800 border-transparent focus:border-primary focus:ring-0 text-slate-900 dark:text-white transition-all">
                      <option>Victoria Island Clinic</option>
                      <option>Lekki Phase 1 Clinic</option>
                      <option>Ikeja GRA Clinic</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Service Required</label>
                    <select className="w-full h-14 px-4 rounded-xl bg-background-light dark:bg-slate-800 border-transparent focus:border-primary focus:ring-0 text-slate-900 dark:text-white transition-all">
                      <option>Cosmetic Consultation</option>
                      <option>Teeth Whitening</option>
                      <option>Dental Implants</option>
                      <option>Routine Checkup</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Preferred Date</label>
                    <input
                      type="date"
                      className="w-full h-14 px-4 rounded-xl bg-background-light dark:bg-slate-800 border-transparent focus:border-primary focus:ring-0 text-slate-900 dark:text-white transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Preferred Time</label>
                    <select className="w-full h-14 px-4 rounded-xl bg-background-light dark:bg-slate-800 border-transparent focus:border-primary focus:ring-0 text-slate-900 dark:text-white transition-all">
                      <option>Morning (08:00 - 12:00)</option>
                      <option>Afternoon (12:00 - 17:00)</option>
                      <option>Evening (17:00 - 20:00)</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Message (Optional)</label>
                  <textarea
                    rows={4}
                    placeholder="Share any specific concerns, medical history, or HMO details..."
                    className="w-full px-4 py-3 rounded-xl bg-background-light dark:bg-slate-800 border-transparent focus:border-primary focus:ring-0 text-slate-900 dark:text-white transition-all"
                  />
                </div>
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full h-16 bg-primary text-white rounded-xl font-bold text-lg shadow-xl shadow-primary/30 hover:bg-primary/90 transition-all flex items-center justify-center gap-3"
                  >
                    Request Appointment
                    <span className="material-symbols-outlined">calendar_today</span>
                  </button>
                  <div className="mt-6 flex items-center justify-center gap-2 text-primary/80">
                    <span className="material-symbols-outlined text-sm">verified_user</span>
                    <p className="text-sm font-medium">
                      Our Lagos team will confirm your appointment within 24 hours.
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Right Side: Info Panel */}
          <div className="lg:col-span-4 space-y-8">
            {/* Quick Contact */}
            <div className="bg-primary text-white rounded-2xl p-8 shadow-2xl relative overflow-hidden min-h-[220px]">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6">Immediate Assistance</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <span className="material-symbols-outlined">call</span>
                    </div>
                    <div>
                      <p className="text-sm opacity-80">Call Us</p>
                      <p className="font-bold text-lg">+234 809 000 0000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                    <div>
                      <p className="text-sm opacity-80">Email Us</p>
                      <p className="font-bold">concierge@emeralddentallagos.ng</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -right-6 -bottom-6 opacity-60 pointer-events-none">
                <span className="material-symbols-outlined text-[220px] text-white/70">health_and_safety</span>
              </div>
            </div>

            {/* Emergency Note */}
            <div className="bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30 rounded-2xl p-6">
              <div className="flex gap-3 items-center mb-3 text-red-600 dark:text-red-400">
                <span className="material-symbols-outlined">emergency</span>
                <h4 className="font-bold">Dental Emergency?</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                If you are experiencing severe pain, bleeding, or a broken tooth, please call our Lagos emergency
                hotline immediately for priority care.
              </p>
            </div>

            {/* Opening Hours */}
            <div className="bg-white dark:bg-slate-900 border border-primary/5 rounded-2xl p-8">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">schedule</span>
                Opening Hours (Lagos)
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">Mon - Thu</span>
                  <span className="font-bold">08:00 AM - 08:00 PM</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">Friday</span>
                  <span className="font-bold">08:00 AM - 06:00 PM</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">Saturday</span>
                  <span className="font-bold">09:00 AM - 03:00 PM</span>
                </div>
                <div className="flex justify-between items-center text-sm pt-4 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500">Sunday</span>
                  <span className="text-primary font-bold">Closed</span>
                </div>
              </div>
            </div>

            {/* Clinic Location Preview */}
            <div className="rounded-2xl overflow-hidden h-48 relative group">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIWSNrP0GZaKgf0nE-z9umH2hn7FndPlTH8g5Bagcdnx6lC4X6GzwJLfVim8fKelFQMI2C8NEkfj_0f8l5Wr28eQ03M-MZCJLRH5SPJOR7F0iwBS-CXAnjxCKvL3eO_VFYbYu_vb8HzOdVY-9BM_-5gR0913_udUIr_11V1B4gOyuUAN8ROokndNOOGWJSAE2jQWOiFy5DijPQaB2G8v4XH1dgEKXpLin-msMHMaxjALAVpWChKyURzS-shzyw64hNL5t-Y60A3rE"
                alt="Modern minimalist dental clinic interior view in Lagos"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-6">
                <p className="text-white font-bold">Victoria Island, Lagos</p>
                <p className="text-white/70 text-xs">Adeola Odeku Street</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  )
}

export default Booking

