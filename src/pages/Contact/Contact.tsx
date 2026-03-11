import type { FC } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Contact: FC = () => {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased min-h-screen overflow-x-hidden">
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

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-1/2 space-y-6">
                <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                  Support &amp; Care
                </span>
                <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-slate-100 md:text-5xl lg:text-6xl">
                  Get in <span className="text-primary text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Touch</span>
                </h1>
                <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400 max-w-xl">
                  Visit any of our Lagos branches or reach our concierge team for appointments, questions, or emergency
                  guidance.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-3 rounded-xl bg-white dark:bg-slate-900 p-4 shadow-sm border border-slate-100 dark:border-slate-800">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="material-symbols-outlined">call</span>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Call Us Directly</p>
                      <p className="text-sm font-bold">+234 809 000 0000</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl bg-white dark:bg-slate-900 p-4 shadow-sm border border-slate-100 dark:border-slate-800">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Email Support</p>
                      <p className="text-sm font-bold">care@emeralddentallagos.ng</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-primary/5">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAVwkwB_NF4GdpBIAEz1f5HBuxJaqIjmj59Fs1lbuRM27f2opSyl8RaK_VBkgRaMFaAtf9lJsZzofd4P3LLwvITDJ9JMv7PI0t1eH1D1utjbWHoPLm7m6ieOCInMKzxSOUJLLcoFCsvkE8ktRGtBHjqddYajN09CL4lcfELXwDYzmdOkorke8Ufl4u_R3g4GjupNEst7lE_xAfH3R6kSIBpRES33OYxcg7aj7dyfpzIQPAqeGLdUJI_RBlVbQFchGzFLrHoQwEqlkc")',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark/40 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Info Banner */}
        <section className="container mx-auto px-6 lg:px-12 mb-16">
          <div className="relative overflow-hidden rounded-2xl bg-slate-900 dark:bg-slate-800 p-8 lg:p-12 text-white">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-4 text-center md:text-left">
                <div className="inline-flex items-center gap-2 rounded-full bg-red-500/20 px-3 py-1 text-xs font-bold text-red-400">
                  <span className="size-2 rounded-full bg-red-500 animate-pulse" />
                  Urgent Care Available
                </div>
                <h3 className="text-2xl font-bold lg:text-3xl">Dental Emergency in Lagos?</h3>
                <p className="text-slate-400 max-w-md">
                  We offer priority scheduling for acute pain, broken teeth, or sudden swelling. Our emergency line is
                  monitored 24/7.
                </p>
              </div>
              <button className="w-full md:w-auto flex items-center justify-center gap-3 rounded-xl bg-red-600 px-8 py-4 text-lg font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-900/20">
                <span className="material-symbols-outlined">medical_services</span>
                Call Emergency Line
              </button>
            </div>
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          </div>
        </section>

        {/* Contact Form & Branch Info */}
        <section className="py-16 bg-white dark:bg-slate-900/50">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Send us a Message</h2>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">
                    Fill out the form below and our Lagos concierge team will respond within 2 business hours.
                  </p>
                </div>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">First Name</label>
                      <input
                        type="text"
                        placeholder="John"
                        className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-background-dark p-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Last Name</label>
                      <input
                        type="text"
                        placeholder="Doe"
                        className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-background-dark p-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-background-dark p-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Preferred Lagos Branch</label>
                    <select className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-background-dark p-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all">
                      <option>Select a branch</option>
                      <option>Victoria Island Clinic</option>
                      <option>Lekki Phase 1 Clinic</option>
                      <option>Ikeja GRA Clinic</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Your Message</label>
                    <textarea
                      rows={4}
                      placeholder="How can we help you today?"
                      className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-background-dark p-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-primary py-4 text-base font-bold text-white shadow-xl shadow-primary/30 hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                  >
                    Send Message
                    <span className="material-symbols-outlined text-xl">send</span>
                  </button>
                </form>
              </div>

              {/* Lagos Branches */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Our Lagos Branches</h2>
                <div className="space-y-6">
                  {/* Victoria Island */}
                  <div className="group relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 transition-all hover:shadow-lg hover:border-primary/30">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="space-y-2">
                        <h4 className="text-lg font-bold text-primary">Victoria Island Clinic</h4>
                        <div className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                          <p>
                            Adeola Odeku Street,<br />
                            Victoria Island, Lagos
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 min-w-[140px]">
                        <a
                          href="tel:+2348090000000"
                          className="flex items-center gap-2 text-sm font-semibold hover:text-primary"
                        >
                          <span className="material-symbols-outlined text-lg">call</span>
                          +234 809 000 0000
                        </a>
                        <a
                          href="#"
                          className="flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-700"
                        >
                          <span className="material-symbols-outlined text-lg">chat_bubble</span>
                          WhatsApp Chat
                        </a>
                      </div>
                    </div>
                    <div className="mt-4 rounded-xl overflow-hidden h-32 w-full bg-slate-100 dark:bg-slate-800 relative">
                      <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                        <img
                          className="w-full h-full object-cover grayscale opacity-50"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAfeVfWachBEPlezoe5w6tFLD7-dmgx6KgjwOXU5JLBGWMtmpjL7gtXEowLKaYHiATv4kJVOax92jh42PPvQ6niLLmqXSBENXS8rhsUozE5paD576TmFHlmyCbwdE5IT1Mk3i6qgyTzIOrvmoT7i5I_JCOPrGAZLdXTsOn-g37CCsGbzrayg2goZpkKKClqQGeoxjyofefkRuNxkwejnhK5Ir0ipwd2pdzm7hb0PXa76t3xgCb9X5bJMCjQFDQ7kBqUxg-VnSr4gs"
                          alt="Map view of Victoria Island, Lagos"
                        />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white shadow-lg">
                          <span className="material-symbols-outlined text-sm">push_pin</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Lekki */}
                  <div className="group relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 transition-all hover:shadow-lg hover:border-primary/30">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="space-y-2">
                        <h4 className="text-lg font-bold text-primary">Lekki Phase 1 Clinic</h4>
                        <div className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                          <p>
                            Admiralty Way,<br />
                            Lekki Phase 1, Lagos
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 min-w-[140px]">
                        <a
                          href="tel:+2348090000000"
                          className="flex items-center gap-2 text-sm font-semibold hover:text-primary"
                        >
                          <span className="material-symbols-outlined text-lg">call</span>
                          +234 809 000 0000
                        </a>
                        <a
                          href="#"
                          className="flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-700"
                        >
                          <span className="material-symbols-outlined text-lg">chat_bubble</span>
                          WhatsApp Chat
                        </a>
                      </div>
                    </div>
                    <div className="mt-4 rounded-xl overflow-hidden h-32 w-full bg-slate-100 dark:bg-slate-800 relative">
                      <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                        <img
                          className="w-full h-full object-cover grayscale opacity-50"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1xfGPp7j-vBunMgTdOnd690dUwuB4U_Cee2ermHwbLj7gm5jpbWpg8Q3MKKl9Ih6b8eFlC_ByA61oTd9qYBY-8m-uZeiUSALBssWTmH6pfYUBayx9xidl9FyWRAQN1TZWl9fHpy_fiMRp_7_MCSdPkl7lpp3UGckuO_PlseSlrYHyKue0tWm8TEaMVjGXSbfMkOdzkfw6s5HjCj_83v7T1oJDNhEfcE49bl9HDLDL8ET2iCyfKh6h52TPykaOWtw9p0f5pI-U57E"
                          alt="Map view of Lekki Phase 1, Lagos"
                        />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white shadow-lg">
                          <span className="material-symbols-outlined text-sm">push_pin</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Strip */}
        <section className="py-20 bg-background-light dark:bg-background-dark">
          <div className="container mx-auto px-6 lg:px-12 text-center space-y-12">
            <div className="max-w-2xl mx-auto space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Visit Our Facilities in Lagos</h2>
              <p className="text-slate-600 dark:text-slate-400">
                State-of-the-art dental technology and calming interiors designed for your comfort.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="aspect-video rounded-2xl bg-white dark:bg-slate-900 p-2 shadow-sm border border-slate-100 dark:border-slate-800">
                <div className="w-full h-full rounded-xl bg-slate-200 dark:bg-slate-800 overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover opacity-80"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-2Ak3u5bv1O5CzPhbSTIPuknIQSpXQ7AHiBjhW3lAy3tADnRvGyB7UBCg8xzwo1Rl6UBqeKsNwhgCzpotjvQDqdY2Xwi72ChURADGFVEBdZlak2B6FzwLkVUoF_q7rG45pZCIeX8FYYD3UfR1tYVLqd3SPdHpIIgz8zivt6etTDEO5ASlWhBx5O-Xe9HP0SuDms-PLvzH6Q8j9oqfdHl_WsZfKvdIAxtbnd7D8naNcs2RnWQI-FH2pRIJsWxUKTs1PfmMyYKa7T0"
                    alt="Modern high-tech dental examination room"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm p-3 rounded-lg flex items-center justify-between shadow-lg">
                    <span className="text-sm font-bold">Main Surgery Wing</span>
                    <span className="text-xs text-primary font-bold uppercase tracking-tighter">View 360°</span>
                  </div>
                </div>
              </div>
              <div className="aspect-video rounded-2xl bg-white dark:bg-slate-900 p-2 shadow-sm border border-slate-100 dark:border-slate-800">
                <div className="w-full h-full rounded-xl bg-slate-200 dark:bg-slate-800 overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover opacity-80"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuClliGDKVaWsSMIU5H3KkpZ-enPhHpiOziiPi6wB5ZnQxh49uKo2x5Py-rRtZpSzwW8c_rbuXEFBSymaQl1SSqnFG4eD70Q_oQIg7oNbjrnPWyhTe5zuxLCI-xLFRXiLF2P6mTOnyQTFDyqI9swF6yx68lW74On-qg6WUZCYbukHRhICOURgzUvSn5O2r7513Qc9Q4859EyhT7T5-0SaalDfVP3PhN2LZupkbYK1crvRbKCnRUdQSzoLl_LUt8-LqtrO7yq5Z6_c6I"
                    alt="Exterior of modern Lagos clinic building"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm p-3 rounded-lg flex items-center justify-between shadow-lg">
                    <span className="text-sm font-bold">Clinic Exterior</span>
                    <span className="text-xs text-primary font-bold uppercase tracking-tighter">View 360°</span>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block aspect-video rounded-2xl bg-white dark:bg-slate-900 p-2 shadow-sm border border-slate-100 dark:border-slate-800">
                <div className="w-full h-full rounded-xl bg-slate-200 dark:bg-slate-800 overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover opacity-80"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvPhU-il6qFlqkwQeNBfnvkke-o7vLhX5OJK8PEgaQQZIUJ3bl41SOALHb30151tK9EZ50-SNBLj2vSFpL8zJ34opOnCG2Kz_CkmvVc_xCFqoELJC_-x_LlufEK0Uo_rQVWMlyBGupc0ymWu6aS-Yq4zzsEBIis0yDrTBHhY2nf8dpxpNjEZs_9LnCP7qwLak8sFdd01tLtzF5lUfzBc3EGhYTV27phsPbYz3KUYTEAGSLNw4VflNnMIBM5vWTB6WMge5HYoDXVMA"
                    alt="Comfortable minimalist dental waiting lounge"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm p-3 rounded-lg flex items-center justify-between shadow-lg">
                    <span className="text-sm font-bold">Premium Lounge</span>
                    <span className="text-xs text-primary font-bold uppercase tracking-tighter">View 360°</span>
                  </div>
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

export default Contact

