import type { FC } from 'react'
import { useState } from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

type Category = 'all' | 'whitening' | 'braces' | 'veneers' | 'implants'

const Results: FC = () => {
  const [category, setCategory] = useState<Category>('all')

  const cases = [
    {
      id: 1,
      title: 'Full Arch Veneers',
      type: 'veneers' as Category,
    },
    {
      id: 2,
      title: 'Invisalign Correction',
      type: 'braces' as Category,
    },
    {
      id: 3,
      title: 'Single Tooth Implant',
      type: 'implants' as Category,
    },
    {
      id: 4,
      title: 'Laser Whitening',
      type: 'whitening' as Category,
    },
  ]

  const filtered = category === 'all' ? cases : cases.filter((c) => c.type === category)

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased font-display min-h-screen">
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

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Intro Section */}
        <section className="mb-20 text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase bg-primary/10 text-primary rounded-full">
            The Art of the Smile
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-slate-100 mb-6 leading-tight">
            Life-Changing Transformations in Lagos
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            See real smile transformations from patients in Lagos, Nigeria. Every result is a bespoke combination of
            clinical precision and aesthetic design.
          </p>
        </section>

        {/* Category Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {[
            { key: 'all', label: 'All Results' },
            { key: 'whitening', label: 'Teeth Whitening' },
            { key: 'braces', label: 'Braces & Invisalign' },
            { key: 'veneers', label: 'Porcelain Veneers' },
            { key: 'implants', label: 'Dental Implants' },
          ].map((c) => (
            <button
              key={c.key}
              type="button"
              onClick={() => setCategory(c.key as Category)}
              className={`px-6 py-3 rounded-xl font-bold text-sm transition-all border ${
                category === c.key
                  ? 'bg-primary text-white shadow-md border-primary'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-primary/10 border-slate-200 dark:border-slate-700'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Comparison Gallery (filtered) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Case Study 1 – Veneers */}
          {(category === 'all' || category === 'veneers') && (
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700">
              <div className="grid grid-cols-2 gap-0.5 bg-slate-200 dark:bg-slate-700">
                <div className="relative aspect-[4/3]">
                  <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur px-3 py-1 rounded text-[10px] font-bold text-white uppercase tracking-widest">
                    Before
                  </div>
                  <div
                    className="h-full w-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAzz9P00FVgrXHnTfmEhf7NXJfkCkdiyoDKfXwJN07kzsFQx3iWfBqgGjABpj3EGKO1_QF1cRkSpoGP5qKTrOKrg2ceQocuavCbaHorBbGjzIA9JtfFWh9vx2f6I0L_EBqjiARHZyFrZ5xESFEFkjuKl01-7XwW0q6kWD2TMth_48UQ9sdU-S8rEER0LuM9RXe8Ls39E050IDzklycA5FgJLU9CT66tJ4bd1DrgxZlPNT-3oNY6Nu85VsKJJMA8d9femUbDmR394uo")',
                    }}
                  />
                </div>
                <div className="relative aspect-[4/3]">
                  <div className="absolute top-4 right-4 z-10 bg-primary/80 backdrop-blur px-3 py-1 rounded text-[10px] font-bold text-white uppercase tracking-widest">
                    After
                  </div>
                  <div
                    className="h-full w-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDUoxp8ZD4YB1IWXnabNB8BhblJsUlvIzjic0r4SHZm7b5Lz_X0mrlTPoIDYjRBPyS-B__NuPEnLZTD6RFblTP3TbJXPN98QSZZbFFw_fZmHVxN_j9KXF1gh_wO8QgeLKeLK5VGluwSSjtN4RNDxfPfBmjnkm8Vb3fHhtxXLS1esTG5auqCevgIoeGwC5dt4k3OuaNzZ8L3AqGglv47m2FVspa4vf_m9nUeal9n-J1FuK4ImCRLaHtxDh7Da7Yzpl-bq12ztyI6nQs")',
                    }}
                  />
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Full Arch Veneers</h3>
                    <p className="text-primary font-semibold text-sm">Treatment: 8 Porcelain Veneers</p>
                    <p className="text-xs text-slate-400 mt-1">Location: Lagos, Nigeria</p>
                  </div>
                  <div className="flex gap-1 text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={`case1-star-${i}`} className="material-symbols-outlined text-sm">
                        star
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  &quot;The difference is night and day. I used to hide my smile in photos, now I can&apos;t stop showing it off.
                  The process was painless and the results look so natural.&quot; — Sarah, Lekki Lagos.
                </p>
                <button className="flex items-center text-primary font-bold text-sm group-hover:gap-2 transition-all">
                  View Case Details <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
          )}

          {/* Case Study 2 – Braces/Invisalign */}
          {(category === 'all' || category === 'braces') && (
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700">
              <div className="grid grid-cols-2 gap-0.5 bg-slate-200 dark:bg-slate-700">
                <div className="relative aspect-[4/3]">
                  <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur px-3 py-1 rounded text-[10px] font-bold text-white uppercase tracking-widest">
                    Before
                  </div>
                  <div
                    className="h-full w-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD5WG_svG8KJVgupk06WyrAeS4p8SjBM_LOdpsYz2pSg2zrweRhCBcnotFkqvhoKV_wonE-gcfPinkj3L2oJDkxkFfLrkT12kGvhTzaECSijxxw5AHeb4bR07305Um-3p4ze5wLlcJlZQW2pW7DjdXBwZcVq_orRPBV14aUBwmzMzFH-3GAHwLUnmH-c9-E7PE-ZGU2TUSSwbh9ekNT18dLvOVnf1Os1rTf1HcG7HSlwDSGVOikdkZLvhLxbdJuZ_zb7QKBEy7aBPA")',
                    }}
                  />
                </div>
                <div className="relative aspect-[4/3]">
                  <div className="absolute top-4 right-4 z-10 bg-primary/80 backdrop-blur px-3 py-1 rounded text-[10px] font-bold text-white uppercase tracking-widest">
                    After
                  </div>
                  <div
                    className="h-full w-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDX7wGbPKQvBA954d2-Cz3dSqutzA_a7gBsuwSBDmO3Ql0TnR0jlGZxABzeq25STEe2WVutlv2p4hx-YXX5J-AhBYgeHViJlVzPWvMM6H9EJgzW6IxvKb6QjHQSskpg28UvYvrY5clLlcfdI0Wgb1-v7IOnwMC18vdBKfFhWta2RSAFn433_F5CZMdewc7PhyeGmq2QJi8M93Vggzz73sK-1lFgnFk__o4fcznPW2S-FxKObV1HsCx8sGwB32LNzRmRqB1yLCo8q2Q")',
                    }}
                  />
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Invisalign Correction</h3>
                    <p className="text-primary font-semibold text-sm">Treatment: 14 Months Invisalign</p>
                    <p className="text-xs text-slate-400 mt-1">Location: Victoria Island, Lagos</p>
                  </div>
                  <div className="flex gap-1 text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={`case2-star-${i}`} className="material-symbols-outlined text-sm">
                        star
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  &quot;I didn&apos;t want metal braces as an adult. Invisalign was the perfect solution. My teeth are perfectly
                  aligned and my bite feels much better.&quot; — James, Ikoyi Lagos.
                </p>
                <button className="flex items-center text-primary font-bold text-sm group-hover:gap-2 transition-all">
                  View Case Details <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
          )}

          {/* Case Study 3 – Implants */}
          {(category === 'all' || category === 'implants') && (
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700">
              <div className="grid grid-cols-2 gap-0.5 bg-slate-200 dark:bg-slate-700">
                <div className="relative aspect-[4/3]">
                  <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur px-3 py-1 rounded text-[10px] font-bold text-white uppercase tracking-widest">
                    Before
                  </div>
                  <div
                    className="h-full w-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBqJAVsbKxnYTRMLOVJv8stdhFQiZmNcRR-GdNbRkg9FkUNvULm7vwEEVE3FDiDsVRgAbiZ0soMd05p0huNpruYAsS_dSPbEKI7KcCRt6zwe0YPFzTMJOrfpoz7jEqp0Dp6EYSDSdng009fDAoo-S0B5mf8JAYbu2s76D7b1hEJKDLeu5JzKrG3F5ZgEnMx2tWkBOyd4NQdsCDfWaR8VnsdDRJ3CbJy3s2q2llE6gDDSt-XpDPtrgWfoGuJNSgwIyyckgHz7wtA74o")',
                    }}
                  />
                </div>
                <div className="relative aspect-[4/3]">
                  <div className="absolute top-4 right-4 z-10 bg-primary/80 backdrop-blur px-3 py-1 rounded text-[10px] font-bold text-white uppercase tracking-widest">
                    After
                  </div>
                  <div
                    className="h-full w-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAf7HLRZfS6gBenBfIvVwXUIwqqUijfgWZu3dE7FPjlyj1ZYq_tLSJFTTUlKUN7fm5Fw9WxjTS4n3hG6dg928r-CpfOIF1WDnhB5BRafUfjJJ0ir6a0ZLW_yhp10eGcyTpGU2nIBtu3-1yoCZ0z096_c2NpWj-aZo2aNTb4xnG-nvqIlJl70c7HegdoXYIY1p1aGuuGZ2XCDByWyrfrK9bTWx7SA3xueqrDV7B4fPhiDISXsZGF-a9RzQeJe07Ux8RinoUneRhXm5w")',
                    }}
                  />
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Single Tooth Implant</h3>
                    <p className="text-primary font-semibold text-sm">Treatment: Titanium Implant &amp; Crown</p>
                    <p className="text-xs text-slate-400 mt-1">Location: Ikeja, Lagos</p>
                  </div>
                  <div className="flex gap-1 text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={`case3-star-${i}`} className="material-symbols-outlined text-sm">
                        star
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  &quot;The crown matches my existing teeth so perfectly that I often forget which one is the implant.
                  Truly remarkable craftsmanship.&quot; — Helena, Lagos Mainland.
                </p>
                <button className="flex items-center text-primary font-bold text-sm group-hover:gap-2 transition-all">
                  View Case Details <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
          )}

          {/* Case Study 4 – Whitening */}
          {(category === 'all' || category === 'whitening') && (
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700">
              <div className="grid grid-cols-2 gap-0.5 bg-slate-200 dark:bg-slate-700">
                <div className="relative aspect-[4/3]">
                  <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur px-3 py-1 rounded text-[10px] font-bold text-white uppercase tracking-widest">
                    Before
                  </div>
                  <div
                    className="h-full w-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDOX3GNkZ26_sDnOdrOU-yXK9x4CRCj9TPCK02mMT_8a5ehe85KCFp4025IIuHe4Awyjas8liJai4r2mLIGo6lQd5VEVpPoy7fBUy1wW8hYfz-qND0p4I2O0RcHa7hsod5o19J1aEltwNZM9JUly3dtlHGQf6LcRdC0OqSxyzYxPdFK-uW7DFAAfGjynP7qgfb5ZmSp2KXDnm0eGnU9tR-rtrtgHQ44RVLRdffjTkz6u6ZhrkqFjMjV2GxIWz5qWL4Nd-FZo2fHzhk")',
                    }}
                  />
                </div>
                <div className="relative aspect-[4/3]">
                  <div className="absolute top-4 right-4 z-10 bg-primary/80 backdrop-blur px-3 py-1 rounded text-[10px] font-bold text-white uppercase tracking-widest">
                    After
                  </div>
                  <div
                    className="h-full w-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDW95lAUlQlSNpqch7BicgAq5ctHEAqODpHII3RCpYtDnzIwBKKL-BYOlgSbvXri0BsPNToOFB6lPzlcLwft-x49TQRXNdIQGqj6Z2UnTYYD6CvAbS8CKg9OogpFaIO626gSVE9DmMOiWzlNBEFq45FMKeQg6caz_q-3ZHLau2hg8vJMJAHIpLrVNSHav2ikkvroBT9gFHl0GDxj5iet5Km0ks13h0VZZLEIJdUfoDZCcWsm48V9HN1SuS1qMq1iWltUvVuC15P3TY")',
                    }}
                  />
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Laser Whitening</h3>
                    <p className="text-primary font-semibold text-sm">Treatment: 1-Hour Boutique Whitening</p>
                    <p className="text-xs text-slate-400 mt-1">Location: Lagos, Nigeria</p>
                  </div>
                  <div className="flex gap-1 text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={`case4-star-${i}`} className="material-symbols-outlined text-sm">
                        star
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  &quot;In just one hour, my smile was brighter than I ever thought possible. Minimal sensitivity and immediate
                  confidence boost!&quot; — Mark, Ajah Lagos.
                </p>
                <button className="flex items-center text-primary font-bold text-sm group-hover:gap-2 transition-all">
                  View Case Details <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
          )}
        </div>

        {/* Disclaimer Section */}
        <section className="mt-24 p-8 rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <div className="flex gap-4 items-start">
            <span className="material-symbols-outlined text-primary">info</span>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Professional Disclaimer</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                The results shown in these photographs are from treatments performed in Lagos, Nigeria and are
                representative of what can be achieved with our clinical expertise; however, individual results may vary
                based on dental history, physiological conditions, and adherence to post-treatment care. A comprehensive
                consultation and clinical examination are required to determine eligibility for any dental procedure.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 text-center bg-primary rounded-[2.5rem] py-20 px-6 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Ready for your own transformation?</h2>
            <p className="text-white/80 text-lg mb-10 leading-relaxed">
              Join patients across Lagos and Nigeria who have rediscovered their confidence with Emerald Dental Lagos.
              Book your digital smile design consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-primary font-black rounded-full hover:scale-105 transition-transform shadow-xl">
                Schedule Online Now
              </button>
              <button className="px-8 py-4 bg-primary/20 backdrop-blur text-white border border-white/30 font-black rounded-full hover:bg-white/10 transition-all">
                Call +234 809 000 0000
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  )
}

export default Results

