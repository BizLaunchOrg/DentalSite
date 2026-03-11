import type { FC } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Branches: FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased font-display min-h-screen overflow-x-hidden">
      {/* Top Utility Bar (Lagos, Nigeria – same everywhere) */}
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
        {/* Hero Section – Lagos Flagship */}
        <section className="px-6 py-8 max-w-7xl mx-auto">
          <div className="relative h-[500px] w-full overflow-hidden rounded-3xl group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
            <img
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOgqFAP_sfqysqvqdUtXL0c9OeUAwn2UI4vKDkL9Ub78QFpCdgZOJfRxiQ8jNvtjPztAXpE7beG3zr0Q5Yhx6kUjk-ZYQR5zU6m-Cl4Bvk3mAwkTFJ22xuRRBE5HaevWCh2AmS2cBfi7uMNlsWX3QCDnneRKGXepZ9xY8OkOcqB7dH_QqMEq2R53vGQhMOofVV6807DwHSydd6--9S1Yt68pmneB3vlfN8FSu5-LXuZkvyHQ6IoSxj0fCkj8pCJhG_munZ-i7gEDs"
              alt="Modern premium dental clinic lobby interior in Lagos"
            />
            <div className="absolute bottom-0 left-0 p-10 z-20 max-w-2xl">
              <span className="inline-block px-4 py-1.5 bg-primary text-white text-xs font-bold tracking-widest uppercase rounded-full mb-4">
                Victoria Island Flagship
              </span>
              <h2 className="text-5xl font-black text-white leading-tight mb-4">
                Your World-Class Dental Experience in Lagos
              </h2>
              <p className="text-slate-200 text-lg">
                State-of-the-art technology meets luxury comfort in the heart of Victoria Island, Lagos.
              </p>
            </div>
          </div>
        </section>

        {/* Info & Map Section – VI Clinic */}
        <section className="px-6 py-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">info</span>
                Location Information
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-primary/5">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Address</p>
                    <p className="font-medium">
                      Adeola Odeku Street,
                      <br />
                      Victoria Island, Lagos
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-primary/5">
                  <span className="material-symbols-outlined text-primary">call</span>
                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Phone</p>
                    <p className="font-medium">+234 809 000 0000</p>
                  </div>
                </div>
                <div className="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-primary/5">
                  <span className="material-symbols-outlined text-primary">schedule</span>
                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Opening Hours</p>
                    <p className="font-medium">Mon - Fri: 9:00 AM - 8:00 PM</p>
                    <p className="font-medium">Sat: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex-1 bg-[#25D366] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                <span className="material-symbols-outlined">chat</span>
                Chat on WhatsApp
              </button>
              <button className="flex-1 border-2 border-primary text-primary font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/5 transition-colors">
                <span className="material-symbols-outlined">directions</span>
                Get Directions
              </button>
            </div>
          </div>

          {/* Map Area */}
          <div className="lg:col-span-7 h-[450px] bg-slate-200 dark:bg-slate-800 rounded-3xl overflow-hidden relative border border-primary/10">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCyPAck51UFngultA4ohEeG-4oN7CpgEUQ0j-uvE0uoINnPzY1LaInMbnjRtpxEB-GM7gBAI8dHSHQSEyWpSPvz9Ox1ZGdHgGOZY5Zy6hcpN6WMCTWPkOkthXeEmSSTeVGiFfA55Z7uddGF6cGAd_QGxJ7FJHZopLqRet1XRUzxoHz5N3CeIuBHTVpiYcrh8xS3D1XCZ-PTxiJFCnX13OOJsUDmyuuxYh14EKM25545awtEKB2YVhlwkKBCZftfRGO_UtcHfO2SHXU")',
              }}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative flex items-center justify-center">
                <div className="absolute size-16 bg-primary/30 rounded-full animate-ping" />
                <div className="relative size-10 bg-primary rounded-full border-4 border-white flex items-center justify-center text-white shadow-2xl">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Team (adapted to Lagos) */}
        <section className="px-6 py-20 bg-primary/5 dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h3 className="text-3xl font-black mb-2">Our Victoria Island Team</h3>
              <p className="text-slate-500 max-w-xl">Meet the specialists dedicated to your perfect smile in Lagos.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: 'Dr. Michael Ade',
                  role: 'Cosmetic Dentist',
                  desc: '15+ years of experience in aesthetic transformations.',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLbfzQR8vqdaUqD5pv8JTDXzMzew7eFG43d8v9qhoG9xyc-EMDcWaTDyFFkOkpAZpm27_FPyW3w5QUNT_-ZWzGjI2PXHk9hiCn4quUEVseTP8bgzSkSsJno2Rwmmg0gauiUv-ngJUJougcx8rbM65tcu7mOIsQyJCScnuwshZ3CUEzQdaDfyf1Iq6Tjatzh8yRk2eGp9q2wXlJeplNTC9GcEia0n2aKSwy2CkXwUmILGptly7jaBV4dBFHXZmT-VCnmhzKi0oDn8Y',
                },
                {
                  name: 'Dr. Sarah Okafor',
                  role: 'Orthodontist',
                  desc: 'Specialising in invisible aligners and pediatric orthodontics.',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCY1F-ZkoYTk1UiCcJgjxfGOCjuHIhb3dUFjVG-LzuNEoyrW1ojbwkOXcbNtAMfiw9XBz0-b5NSqZ-SRjvsaOgIqHpVnwoBb53_HoLQ8vf46EIlsQMM_hBzpJiYMHzw6Xey5U9-TdRP-GV2xrZs77U3YYPQsHGrqPXWd1d41eT7E_qd7pE5B479aJrg40VmfxiIVmGnZlpmIa8N5oe9Tz1JneTy-iZNxS3gn0iY4kvkh9Ocw5l62y6q1Mf8oWrSp40rKSvgWdgzyNU',
                },
                {
                  name: 'Dr. James Balogun',
                  role: 'Implant Surgeon',
                  desc: 'Expert in full-mouth reconstruction and oral surgery.',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB89YgboTaG7U8otwiysqCrS-uD1t1KhpovTggbs6sbbxqWsPkQSY-YOO4gTf8ukbKfbAFJmuhiQSZDDWAdzog6Y-qmUdCczIN6Mnu-MpEUYz8XainuL93eXXWsV9vXMkZwAC-7zz3h7yj9_-NE-PtLquCZ3PDTRByge6sTGM5p1EAnuVkgJVQOYK5cM1tGWrMm8hlWEujVFPpyRuOd-zKIUAjdEUzBp8S_FYJwfBRvwMAlXIr9JNJhz3einuZY4P21vuqvcHSX3H8',
                },
                {
                  name: 'Dr. Lisa Nwosu',
                  role: 'General Dentist',
                  desc: 'Focused on preventive care and long-term oral health.',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBePOi59Ikh_FynOBvmsZRyoMmETCJ44rAp0-ekltgTJb8mVdXf_ayCDx97gaDY9L1jNECF906LOqh2hmIQShFPzckKs0ikrALeiXKiFe0x9KgE-DbXsGDASvOjXvK3bLjE4_Jwugjm5G3AWOIXh4BlMskmw8HZ82MO74f7rt1R8PNIIlv8Hdp8N8R0IZY7k31gPeGWiDf1CXlm1pyuCL1hXuxJbh9V1GW0lrp3nG3eL9hkyg1kOevCPyuQOFJH85gx2WT_fe7x3H8',
                },
              ].map((doc) => (
                <div
                  key={doc.name}
                  className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-primary/5 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={doc.img}
                      alt={doc.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-lg mb-1">{doc.name}</h4>
                    <p className="text-sm text-primary font-semibold mb-4 uppercase tracking-tighter">{doc.role}</p>
                    <p className="text-sm text-slate-500 mb-6">{doc.desc}</p>
                    <button className="w-full py-2 text-primary font-bold text-sm border border-primary/20 rounded-lg hover:bg-primary hover:text-white transition-colors">
                      View Profile
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Branch Services – Lagos */}
        <section className="px-6 py-24 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-black mb-4">Treatments at Victoria Island</h3>
            <p className="text-slate-500">
              Comprehensive dental care using the latest technology available on-site in Lagos.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'auto_fix_high',
                title: 'Veneers & Aesthetics',
                text: 'Custom porcelain veneers and smile design sessions using 3D imaging.',
              },
              {
                icon: 'precision_manufacturing',
                title: 'Dental Implants',
                text: 'Guided implant placement for long-lasting, natural-looking results.',
              },
              {
                icon: 'orthopedics',
                title: 'Invisalign® Center',
                text: 'Clear aligner therapy with digital scanning for Lagos professionals.',
              },
              {
                icon: 'emergency',
                title: 'Emergency Care',
                text: 'Same-day appointments for urgent dental needs and pain relief.',
              },
              {
                icon: 'psychology_alt',
                title: 'Sedation Dentistry',
                text: 'Comfort-focused options for patients with dental anxiety.',
              },
              {
                icon: 'health_and_safety',
                title: 'Oral Surgery',
                text: 'Complex extractions and bone grafting in a sterile environment.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 bg-white dark:bg-slate-800 rounded-3xl border border-primary/5 hover:border-primary/20 transition-all flex items-start gap-6"
              >
                <div className="size-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  )
}

export default Branches

