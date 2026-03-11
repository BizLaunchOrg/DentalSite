import type { FC } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Invisalign: FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen overflow-x-hidden">
      {/* Top Utility Bar (shared style, Nigeria) */}
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

      <main className="flex-1 flex flex-col items-center">
        <div className="layout-content-container flex flex-col max-w-[1120px] w-full px-4 lg:px-10 py-8">
          {/* Hero Section */}
          <section className="w-full mb-12">
            <div
              className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-[450px] relative group"
              style={{
                backgroundImage:
                  'linear-gradient(180deg, rgba(16,22,34,0) 40%, rgba(16,22,34,0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDM0EX1vMmb42KTTALEAKmZioHT9nIJr9NAlZRI4B_MlhtSf29iVE4qR4bGd_wxxIm8IkDlAnfjn7oJamDWA5Ak5aPoYvQ-77KQ1cJPK0C9wIzO-PJjc5GAxWugEd4Ia-kSqZgVDyHXtZ2-jUaSIMPfQ4n-CHK7SPcnCdVQ19-iNCGJlWvwVaVekEiKvRZU43HZNcCirk83fqHOYEQH1EK98tHJvx7a8yhgS8I62q_Bk8Nr5ie_utEzP-8Cxoa3PXPg118PddAftOc")',
              }}
            >
              <div className="p-8 lg:p-12">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block uppercase tracking-wider">
                  Premium Orthodontics
                </span>
                <h1 className="text-white text-4xl lg:text-5xl font-extrabold leading-tight mb-4 max-w-2xl">
                  Invisalign: The Modern Way to Straighten Your Smile
                </h1>
                <p className="text-slate-200 text-lg max-w-xl mb-6">
                  Experience a clear aligner system that helps patients in Lagos straighten their smiles discreetly and
                  comfortably.
                </p>
                <div className="flex gap-4">
                  <button className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all">
                    Start Consultation
                  </button>
                  <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-3 rounded-lg font-bold hover:bg-white/20 transition-all">
                    View Results
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Overview Section */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-center">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined">info</span>
                <span className="font-bold uppercase tracking-widest text-xs">Overview</span>
              </div>
              <h2 className="text-3xl font-black text-slate-900 dark:text-slate-100">What is Invisalign?</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                Invisalign is a modern orthodontic treatment that uses a series of custom-made, clear plastic aligners
                to gradually shift your teeth into the desired position. Unlike traditional metal braces, these aligners
                are virtually invisible and can be removed for eating, brushing, and flossing.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-4">
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <p className="text-primary font-bold text-2xl mb-1">15M+</p>
                  <p className="text-slate-500 text-sm">Smiles transformed worldwide</p>
                </div>
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <p className="text-primary font-bold text-2xl mb-1">2x</p>
                  <p className="text-slate-500 text-sm">Faster results than traditional methods</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="aspect-square rounded-2xl bg-slate-200 dark:bg-slate-800 overflow-hidden shadow-2xl rotate-3">
                <img
                  alt="Invisalign aligner tray close up"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmEOUDBbKx5Cm6EpTUM-uWY6o3rR-9ZJcNq7xzZWCD4Ia6AfMxq63AgzNLP0w-skFdgCDqlYV_OfCya8HzgfXU7030ueUYEd6eyXKrFeaSZvOL7QdbTANfS1CqzRuioungdtRtHCW3_6P_RcNadEfrBI26LgwxdRiBEc4O9qgNRDTQqso2SKgNUmoEdSdYL00thlrpXgiAl287Fuls1cNwgHMTpmaXy2iOsCP8EalDlApENYTBpoaVcXwcLGVmI83qe5rh9Lz_4NA"
                />
              </div>
            </div>
          </section>

          {/* Benefits & Indications */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Invisalign?</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Tailored for patients in Lagos who demand both clinical excellence and aesthetic discretion.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-white dark:bg-slate-800/50 shadow-sm border border-slate-100 dark:border-slate-800 hover:border-primary/30 transition-all group">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">visibility_off</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Discreet Appearance</h3>
                <p className="text-slate-500 leading-relaxed">
                  Virtually invisible aligners mean most people won&apos;t even notice you&apos;re wearing them.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-white dark:bg-slate-800/50 shadow-sm border border-slate-100 dark:border-slate-800 hover:border-primary/30 transition-all group">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">restaurant</span>
                </div>
                <h3 className="text-xl font-bold mb-3">No Dietary Restrictions</h3>
                <p className="text-slate-500 leading-relaxed">
                  Simply remove your aligners to enjoy your favourite Nigerian dishes without worry.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-white dark:bg-slate-800/50 shadow-sm border border-slate-100 dark:border-slate-800 hover:border-primary/30 transition-all group">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">ecg_heart</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Enhanced Comfort</h3>
                <p className="text-slate-500 leading-relaxed">
                  Smooth SmartTrack material ensures a precise fit without metal wires or brackets.
                </p>
              </div>
            </div>
          </section>

          {/* Procedure Section */}
          <section className="mb-20 bg-primary/5 rounded-3xl p-8 lg:p-16">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/3">
                <h2 className="text-3xl font-bold mb-6">Your Path to a Perfect Smile</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  Our streamlined process in Lagos ensures you know exactly what to expect at every stage of your
                  transformation.
                </p>
                <button className="flex items-center gap-2 text-primary font-bold hover:underline">
                  Download Treatment Guide <span className="material-symbols-outlined text-sm">download</span>
                </button>
              </div>
              <div className="lg:w-2/3 space-y-8">
                {[
                  {
                    step: 1,
                    title: 'Initial Consultation & 3D Scan',
                    text: 'We use digital scanners to create a precise 3D model of your teeth. No messy impressions required.',
                  },
                  {
                    step: 2,
                    title: 'Custom Treatment Plan',
                    text: 'Your orthodontist maps out precise tooth movements and shows you a digital preview of your final smile.',
                  },
                  {
                    step: 3,
                    title: 'Aligner Fabrication',
                    text: 'Your custom series of aligners is manufactured using state-of-the-art 3D printing technology.',
                  },
                  {
                    step: 4,
                    title: 'Ongoing Progress Checks',
                    text: 'Wear your aligners 22 hours a day, changing them every 1–2 weeks with checkups every 6–8 weeks.',
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-6">
                    <div className="flex-shrink-0 size-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                      <p className="text-slate-500">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20 max-w-3xl mx-auto w-full">
            <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: 'How long does the treatment take?',
                  a: 'Treatment duration varies depending on individual needs, but most adult cases take between 12 to 18 months. Some minor corrections can be completed in as little as 6 months.',
                },
                {
                  q: 'Is Invisalign painful?',
                  a: 'Most patients experience temporary, minor discomfort for a few days at the beginning of each new aligner stage. This is typically described as a feeling of pressure and is a sign that the aligners are working.',
                },
                {
                  q: 'Will it affect my speech?',
                  a: 'Like any orthodontic appliance, there is a short adjustment period. Most people adjust very quickly and any slight lisp usually disappears within a day or two.',
                },
              ].map((item) => (
                <details
                  key={item.q}
                  className="group border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900/50 p-6 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 dark:text-slate-100">
                    <h3 className="font-bold text-lg">{item.q}</h3>
                    <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                      expand_more
                    </span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-slate-500">{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Related Services */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8">Complementary Treatments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Professional Whitening',
                  text: 'Brighten your new smile',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlcWrJN7gyqISpi3zvrPEHFnhPE3V7L0w9wz9cp9EkNc6uLk-D3HiNzi7CoPU-LuXVfXfXpQ4wjzgAnjGmoFPpDUi1NE6xzQgtisfFNibczupIaZ5Wi-5Et7f1t-FHfLbT49go3KxwwDrAk-kedraeZW7wsRmHSo8anTul2eDj7jgTVxL1AJFQKxYVawnQoBhKx9s7g9cCrzRFiFUFCKXE_JX2775j2T6oor-9hYzsrfXOLARcC6QV98qLUNYRod5ASQ2sdQTJWkg',
                },
                {
                  title: 'Composite Bonding',
                  text: 'Refine tooth shape & edges',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLbZ5RrTAoyd9W6NyWfpXxaaUP63fELJ-tFIuUWxvyQS8Wxe_fjHVgtL5mS-x2pEaOPnKV6VdSk3nJ_qzDMyqDsgjfLsZkAF9vd68QFckjfKwz3Zpn5ZvUkjZXu6eWxg5Icb8VW1xM4iYuFaMkai99fxREXJXUxTxiorgTbG8FN5ODCmbPu2CqY9YpnI4gTB_bCi9IaQtjCnLvaG8TKmEuuF5SrQ6UdXsbcx8PFuF1TLJ8_x32qR_M2T3tCIkiOAVqyMq58xHhKl4',
                },
                {
                  title: 'Porcelain Veneers',
                  text: 'Complete smile makeover',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtd1e8pSut7yLvAhwNjyLaNo3BcQAWO-61F9rN9Frs1Oz5zPKOYDE79lAFyqcl1LBJYawTUuc4iaTbx2kkOOOsIPZWzE4T8MqCfi-v5A049YUcjSGaX0khtZQxX1zEZnrTS1WU6PxrOUy_1iqfFcPi4D5ETKX6HJIII1QNLv4cWC6GStF6E_3QNa7R2AHeMdQBrAPYG_dtfAN2wTMx_AEGybpG8TxKOCAuv_Ws-nfTyk9uzhxBQHQYkisEesqKsecWhrEFmOs4l8c',
                },
                {
                  title: 'Deep Cleaning',
                  text: 'Essential gum health',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDo7hJ-FL6kyvdctD0Van6iMozea5naS4nGn9lpL4bSuhxniwKVshAXJlu7T9L1lWjxzrI3kqxYLK82_vl3YwA1KuQVmVP83gXSHrwm8BsfaV2PD5K5ndh7AgHCBkTMYXR4ubrfQQ-e7gbFxqVJfEyo65vnAhYCqry6xZOiz7fLn6SDlsjds0sUXDc71zu-zo8pyUqkMQYpXMJLHmOiIy2c_hiHWHiClvALlLSRfqZuRJjes5i7oksxPruWzETCq3fhIrZeSNqzzD8',
                },
              ].map((item) => (
                <div key={item.title} className="group cursor-pointer">
                  <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-slate-200">
                    <img
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={item.img}
                    />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-slate-100 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-500">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="mb-12">
            <div className="bg-primary rounded-[2rem] p-8 lg:p-16 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid)" />
                  <defs>
                    <pattern id="grid" patternUnits="userSpaceOnUse" width="10" height="10">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                </svg>
              </div>
              <h2 className="text-3xl lg:text-5xl font-black mb-6 relative z-10">Ready for your transformation?</h2>
              <p className="text-lg mb-10 max-w-xl mx-auto relative z-10 opacity-90">
                Join patients across Lagos and Nigeria. Book your initial consultation today and see what Invisalign can
                do for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <button className="bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all shadow-xl">
                  Book Appointment
                </button>
                <button className="bg-transparent border-2 border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
                  Call us: +234 809 000 0000
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  )
}

export default Invisalign

