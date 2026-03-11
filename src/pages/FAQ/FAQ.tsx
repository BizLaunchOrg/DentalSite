import type { FC } from 'react'
import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

type FaqCategory = 'general' | 'billing' | 'pediatric' | 'locations'

const FAQ: FC = () => {
  const [activeCategory, setActiveCategory] = useState<FaqCategory>('general')

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased min-h-screen">
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

      <main className="flex-grow">
        {/* Hero / Search Section */}
        <section className="relative py-20 overflow-hidden bg-primary/5">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[100px] -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary rounded-full blur-[80px] -ml-36 -mb-36" />
          </div>
          <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
              Help Center
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
              Expert Advice &amp; <br />
              <span className="text-primary">Common Questions</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10">
              Everything you need to know about our premium dental services in Lagos, treatment options, and patient
              care.
            </p>
            <div className="max-w-xl mx-auto relative">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-primary">
                <span className="material-symbols-outlined">help</span>
              </div>
              <input
                type="text"
                placeholder="Search for questions..."
                className="w-full pl-14 pr-6 py-5 bg-white dark:bg-slate-900 border-none rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none focus:ring-2 focus:ring-primary text-lg"
              />
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20 bg-background-light dark:bg-background-dark">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              {/* Sidebar */}
              <div className="md:col-span-4 space-y-4">
                <div className="sticky top-28">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 px-4">Categories</h3>
                  <nav className="space-y-2">
                    <button
                      type="button"
                      onClick={() => setActiveCategory('general')}
                      className={`flex w-full items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${
                        activeCategory === 'general'
                          ? 'bg-primary text-white shadow-lg shadow-primary/20'
                          : 'text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800'
                      }`}
                    >
                      <span className="material-symbols-outlined">clinical_notes</span> General Care
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveCategory('billing')}
                      className={`flex w-full items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                        activeCategory === 'billing'
                          ? 'bg-primary text-white shadow-lg shadow-primary/20'
                          : 'text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800'
                      }`}
                    >
                      <span className="material-symbols-outlined">payments</span> Billing &amp; Plans
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveCategory('pediatric')}
                      className={`flex w-full items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                        activeCategory === 'pediatric'
                          ? 'bg-primary text-white shadow-lg shadow-primary/20'
                          : 'text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800'
                      }`}
                    >
                      <span className="material-symbols-outlined">child_care</span> Pediatric Dentistry
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveCategory('locations')}
                      className={`flex w-full items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                        activeCategory === 'locations'
                          ? 'bg-primary text-white shadow-lg shadow-primary/20'
                          : 'text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800'
                      }`}
                    >
                      <span className="material-symbols-outlined">location_on</span> Lagos Locations
                    </button>
                  </nav>
                  <div className="mt-12 p-6 bg-primary/10 rounded-2xl border border-primary/20">
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">Still need help?</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                      Our Lagos concierge team is available 24/7 for urgent inquiries.
                    </p>
                    <button className="w-full py-3 bg-white dark:bg-slate-800 text-primary font-bold rounded-xl text-sm border border-primary/20 hover:bg-primary hover:text-white transition-all">
                      Contact Support
                    </button>
                  </div>
                </div>
              </div>

              {/* Questions */}
              <div className="md:col-span-8">
                <div className="space-y-4">
                  {/* Booking – General */}
                  {(activeCategory === 'general' || activeCategory === 'billing') && (
                  <details className="group bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden transition-all duration-300 open:shadow-md" open>
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <div className="flex items-center gap-4">
                        <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-xl">event_available</span>
                        </div>
                        <span className="font-bold text-lg text-slate-900 dark:text-white">
                          How do I book an appointment?
                        </span>
                      </div>
                      <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-slate-400">
                        expand_more
                      </span>
                    </summary>
                    <div className="px-6 pb-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed">
                      Booking is effortless. You can schedule your visit via our{' '}
                      <a href="#" className="text-primary font-bold underline underline-offset-4">
                        online portal
                      </a>
                      , WhatsApp line, or by calling our Lagos reception. We recommend securing your preferred slot at
                      least 48 hours in advance.
                    </div>
                  </details>
                  )}

                  {/* Walk-ins – General */}
                  {activeCategory === 'general' && (
                  <details className="group bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden transition-all duration-300 open:shadow-md">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <div className="flex items-center gap-4">
                        <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-xl">directions_walk</span>
                        </div>
                        <span className="font-bold text-lg text-slate-900 dark:text-white">
                          Do you accept walk-in patients?
                        </span>
                      </div>
                      <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-slate-400">
                        expand_more
                      </span>
                    </summary>
                    <div className="px-6 pb-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed">
                      We prioritize emergency walk-ins during clinical hours at our Lagos branches. For routine
                      consultations, we recommend calling ahead to confirm real-time availability.
                    </div>
                  </details>
                  )}

                  {/* Payment plans (₦) – Billing */}
                  {activeCategory === 'billing' && (
                  <details className="group bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden transition-all duration-300 open:shadow-md">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <div className="flex items-center gap-4">
                        <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-xl">account_balance_wallet</span>
                        </div>
                        <span className="font-bold text-lg text-slate-900 dark:text-white">
                          What payment plans are available?
                        </span>
                      </div>
                      <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-slate-400">
                        expand_more
                      </span>
                    </summary>
                    <div className="px-6 pb-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed">
                      We offer flexible plans with Nigerian banks and HMOs. You can choose 0% interest monthly
                      instalments for up to 6–12 months on procedures above ₦500,000. Our admin team will help set this
                      up during your first visit.
                    </div>
                  </details>
                  )}

                  {/* Pediatric – Pediatric */}
                  {activeCategory === 'pediatric' && (
                  <details className="group bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden transition-all duration-300 open:shadow-md">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <div className="flex items-center gap-4">
                        <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-xl">family_restroom</span>
                        </div>
                        <span className="font-bold text-lg text-slate-900 dark:text-white">
                          Do you provide dental care for children?
                        </span>
                      </div>
                      <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-slate-400">
                        expand_more
                      </span>
                    </summary>
                    <div className="px-6 pb-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed">
                      Yes. Our pediatric suite in Lagos is designed to be anxiety-free and engaging for children. Our
                      specialists provide gentle care for toddlers, school-age children, and teenagers.
                    </div>
                  </details>
                  )}

                  {/* Whitening time – General */}
                  {activeCategory === 'general' && (
                  <details className="group bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden transition-all duration-300 open:shadow-md">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <div className="flex items-center gap-4">
                        <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-xl">auto_awesome</span>
                        </div>
                        <span className="font-bold text-lg text-slate-900 dark:text-white">
                          How long does whitening take?
                        </span>
                      </div>
                      <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-slate-400">
                        expand_more
                      </span>
                    </summary>
                    <div className="px-6 pb-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed">
                      Our in-clinic whitening in Lagos takes about 60–90 minutes and can brighten your smile by up to 8
                      shades in a single session. We also provide take-home kits for maintenance.
                    </div>
                  </details>
                  )}

                  {/* HMOs – Billing */}
                  {activeCategory === 'billing' && (
                  <details className="group bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden transition-all duration-300 open:shadow-md">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <div className="flex items-center gap-4">
                        <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-xl">verified_user</span>
                        </div>
                        <span className="font-bold text-lg text-slate-900 dark:text-white">
                          Which HMOs and insurance providers do you accept?
                        </span>
                      </div>
                      <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-slate-400">
                        expand_more
                      </span>
                    </summary>
                    <div className="px-6 pb-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed">
                      We work with leading Nigerian HMOs and insurers, including AXA Mansard, Reliance HMO, Hygeia, and
                      others. Please share your HMO details when booking so we can pre-verify your coverage.
                    </div>
                  </details>
                  )}

                  {/* Costs in ₦ – Billing */}
                  {activeCategory === 'billing' && (
                  <details className="group bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden transition-all duration-300 open:shadow-md">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <div className="flex items-center gap-4">
                        <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-xl">price_check</span>
                        </div>
                        <span className="font-bold text-lg text-slate-900 dark:text-white">
                          What are the typical costs in Lagos?
                        </span>
                      </div>
                      <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-slate-400">
                        expand_more
                      </span>
                    </summary>
                    <div className="px-6 pb-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed">
                      Standard cleanings start from around ₦40,000, while specialist consultations begin from about
                      ₦60,000. Comprehensive cosmetic treatments are individually planned and priced with a full
                      transparent breakdown before any procedure.
                    </div>
                  </details>
                  )}

                  {/* Locations (Lagos) – Locations */}
                  {activeCategory === 'locations' && (
                  <details className="group bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden transition-all duration-300 open:shadow-md">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <div className="flex items-center gap-4">
                        <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-xl">apartment</span>
                        </div>
                        <span className="font-bold text-lg text-slate-900 dark:text-white">
                          Where are your Lagos branches located?
                        </span>
                      </div>
                      <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-slate-400">
                        expand_more
                      </span>
                    </summary>
                    <div className="px-6 pb-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed">
                      We currently have flagship branches in Victoria Island, Lekki Phase 1, and Ikeja GRA, Lagos. During
                      booking, you&apos;ll be able to select your preferred branch and available time slot.
                    </div>
                  </details>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white dark:bg-background-dark/50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="bg-primary rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-blue-900 opacity-90" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                  Experience the future of dentistry in Lagos.
                </h2>
                <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
                  Join patients across Lagos and Nigeria who trust our team for premium dental care.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 bg-white text-primary font-extrabold rounded-full hover:bg-slate-100 transition-colors">
                    Schedule Consultation
                  </button>
                  <button className="px-8 py-4 bg-primary/20 backdrop-blur-md border border-white/20 text-white font-extrabold rounded-full hover:bg-white/10 transition-colors">
                    Our Specialists
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  )
}

export default FAQ

