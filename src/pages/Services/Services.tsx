import type { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Services: FC = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 overflow-x-hidden min-h-screen">
      {/* Top Utility Bar (shared style with Home, localized to Lagos) */}
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

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40 z-10" />
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM2nBviTp1-KeEVSSqoXDi5eeoqHCHra3kaeQVYTUWDkHorqspx_KtHxXUNMvoASBeE6avqcRjEKxVhbbpQosBhZBvkeHbKZvxvCqU2LaX8qKppgg2XL9Znl4JaelpLoBlcZrQWp6jaQpF_UXztGG0TSGcED02Ub1NJigk3IhhzQG1aA8dQhWxjRf7TLRgZEXlSyfLZ5yhEuHBeYgVAQmve6caCMysKBSpgyoOMibWNYLnjI-6FAu3d3lh-u4H46gvyuekfdSaD2o"
              alt="Modern high-tech dental clinic interior room in Lagos"
            />
          </div>
          <div className="relative z-20 text-center px-6 max-w-3xl">
            <h1 className="text-white text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Our Expertise in Lagos
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed mb-8">
              World-class dental care in Lagos, Nigeria. Discover our comprehensive range of premium services designed
              for lasting health and beauty.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                type="button"
                onClick={() => navigate('/book')}
                className="bg-white text-primary rounded-lg px-8 py-4 font-bold hover:bg-slate-50 transition-all"
              >
                Schedule Consultation
              </button>
              <button
                type="button"
                onClick={() => navigate('/contact')}
                className="bg-transparent border-2 border-white text-white rounded-lg px-8 py-4 font-bold hover:bg-white/10 transition-all"
              >
                View Price List (₦)
              </button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="flex flex-col gap-24">
            {/* Cosmetic Dentistry */}
            <div className="group">
              <div className="flex items-center justify-between mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-3">
                  <span className="p-2 rounded-lg bg-primary/10 text-primary material-symbols-outlined">
                    auto_fix_high
                  </span>
                  Cosmetic Dentistry
                </h2>
              </div>
              <div className="grid @container lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 overflow-hidden rounded-xl shadow-2xl">
                  <img
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHJN6oeDABBl3JPDUjBcUAbCTI4trHo-oBv0F7hT0fWxqBiebk4nC6TPsW8wraL-YrQh2l6peCYrclAxIC7UtUpzVz8JYQ_qSANxBmRR7weu81mBZqXmZJMXMZUiraGcKdSrLLKGX-DUuhaiRhBrMPvmixYdzqqZ_wQXcbhZb1v4C9uBbmK1OvmuPDq8n8ExgNKqatW7rUnHHr3NFRva8TiptQf24Hshsj__lXKBZnbrRII-eze-KW3wpyt0LzxvuQMg_dhgbVuy4"
                    alt="Close up of a bright Lagos smile"
                  />
                </div>
                <div className="lg:col-span-5 flex flex-col gap-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Smile Makeovers</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                      Transform your appearance with our advanced cosmetic treatments in Lagos. We combine artistry with
                      medical precision to create the smile you&apos;ve always dreamed of.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                      <div>
                        <p className="font-bold text-slate-800 dark:text-slate-200">Natural Results</p>
                        <p className="text-sm text-slate-500">
                          Meticulously crafted veneers that match your facial features and skin tone.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                      <div>
                        <p className="font-bold text-slate-800 dark:text-slate-200">Long-lasting Durability</p>
                        <p className="text-sm text-slate-500">
                          Using the highest grade porcelain and composite materials available in Nigeria.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link
                    to="/services/invisalign"
                    className="bg-primary text-white rounded-lg w-fit px-8 py-3 font-bold hover:bg-primary/90 transition-all flex items-center gap-2"
                  >
                    Invisalign Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* General Dentistry */}
            <div className="group">
              <div className="flex items-center justify-between mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-3">
                  <span className="p-2 rounded-lg bg-primary/10 text-primary material-symbols-outlined">
                    health_and_safety
                  </span>
                  General Dentistry
                </h2>
              </div>
              <div className="grid @container lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col gap-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Preventative Care</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                      A healthy foundation is key. Our general services cover everything from routine cleanings to
                      complex screenings to ensure lifelong oral health for families in Lagos.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-100 dark:bg-slate-800/50 p-4 rounded-lg">
                      <p className="font-bold text-primary">Bi-Annual</p>
                      <p className="text-sm text-slate-500">Check-ups &amp; Scaling in Lagos</p>
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-800/50 p-4 rounded-lg">
                      <p className="font-bold text-primary">Advanced</p>
                      <p className="text-sm text-slate-500">Digital X-Ray Diagnostics</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => navigate('/contact')}
                    className="bg-primary text-white rounded-lg w-fit px-8 py-3 font-bold hover:bg-primary/90 transition-all flex items-center gap-2"
                  >
                    Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
                <div className="lg:col-span-7 order-1 lg:order-2 overflow-hidden rounded-xl shadow-2xl">
                  <img
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1GJsaFKBZAqj7XyuHlEyigWoJC5fmNQdkLAvP7Us6xDIa5Flxd49OApE21XC2iFA35rSIhCEPVDxcBpJW3vfSdpiCxoccoce088yvxYNipucQUgfDtXEC5mytf9gEhOrIkYvX-qP1T3DI2SM2aNAMmjgivlc4GzA0pa9CQm8wzVC3EfG4uXgaqsB6jAEcq5h0zPFgDha6kvB66mpaOeVVusTwAfYT6HaI43Twgb9CleyQ802S6qS3o7lcOYLxOzp57RsMA1sFKTU"
                    alt="Dental professional performing a routine examination in Lagos"
                  />
                </div>
              </div>
            </div>

            {/* Restorative Dentistry */}
            <div className="group">
              <div className="flex items-center justify-between mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-3">
                  <span className="p-2 rounded-lg bg-primary/10 text-primary material-symbols-outlined">
                    build_circle
                  </span>
                  Restorative Dentistry
                </h2>
              </div>
              <div className="grid @container lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 overflow-hidden rounded-xl shadow-2xl">
                  <img
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA70WftqBcwGfhpL209Tw4kACC5vkI25wn7HnZf4tOjsQu8X8MjNPcW_2hnYFgHCMx_Xy1d389XhxThDvkwJLJYXD_qTPqqlOihe6PsFmHJa9lf63E__pMa9FEt_PPF4YYEn3rvDO0oRtDOemPUIm4TgEP4RhZnkWWmtcdcy4ztwP-GE-u5SgCfyMtsvmIj8Q4m3KDSv-vhfN5mLBekOy9DdzHA8-yLpFBs9gfuzH8Z9eCPdGaXp9se8TDoTUujX_NIY_WIwgUlR00"
                    alt="High quality dental implant used in Lagos"
                  />
                </div>
                <div className="lg:col-span-5 flex flex-col gap-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Dental Implants &amp; Crowns</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                      Restore function and confidence with our state-of-the-art restorative solutions in Lagos. We use
                      3D imaging to ensure perfect fit and alignment.
                    </p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <span className="material-symbols-outlined text-primary">circle</span>
                      Metal-free Zirconia Crowns
                    </li>
                    <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <span className="material-symbols-outlined text-primary">circle</span>
                      Guided Implant Placement
                    </li>
                    <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <span className="material-symbols-outlined text-primary">circle</span>
                      Full-mouth Rehabilitation
                    </li>
                  </ul>
                  <button
                    type="button"
                    onClick={() => navigate('/results')}
                    className="bg-primary text-white rounded-lg w-fit px-8 py-3 font-bold hover:bg-primary/90 transition-all flex items-center gap-2"
                  >
                    Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ/CTA Section */}
        <section id="contact" className="bg-slate-100 dark:bg-slate-900/50 py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-6">Need a custom treatment plan in Lagos?</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-10">
              Our specialists in Lagos, Nigeria are ready to help you navigate your options and find the perfect path to
              your ideal smile.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-4 px-6 py-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                <span className="material-symbols-outlined text-primary text-3xl">call</span>
                <div className="text-left">
                  <p className="text-xs uppercase tracking-widest font-bold text-slate-400">Call Us (Lagos)</p>
                  <p className="text-lg font-bold">+234 809 000 0000</p>
                </div>
              </div>
              <div className="flex items-center gap-4 px-6 py-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                <span className="material-symbols-outlined text-primary text-3xl">mail</span>
                <div className="text-left">
                  <p className="text-xs uppercase tracking-widest font-bold text-slate-400">Email Us</p>
                  <p className="text-lg font-bold">care@emeralddentallagos.ng</p>
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

export default Services

