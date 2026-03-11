import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Home: FC = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 overflow-x-hidden min-h-screen">
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

      {/* Main Navbar (reusable component) */}
      <Navbar />

      {/* Hero Section */}
      <main>
        <section className="relative w-full h-[600px] lg:h-[750px] overflow-hidden">
          <div className="absolute inset-0 bg-slate-900/40 z-10" />
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-700"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBFrBkl-wOTts0endAa9UffO2JSrahZev2YqFjr7ifOwCWZnoXw-rhwmF1Fmt_HxLiBsYEChoKD1sJ7i8YzQhyn9vUQdl5XtscBg6Kg3IRZqg0lE69uiVfO5DvoalYtQpl_Cm7x6Yf9dy2quYptHkw6YW6trQwwx8_dgNaS0JdFZg-yaV6im4LZOqnWdZPV3ceVZCUXfBVdwFu4vsALVyVNjKuElGRdxISMJusnjKWUHqBosrg8zjLTTeemnz_VgES-Qjq4wSNCFKU")',
            }}
          />
          <div className="relative z-20 h-full max-w-7xl mx-auto px-10 flex flex-col justify-center items-start">
            <div className="max-w-2xl space-y-6">
              <span className="bg-primary/20 border border-primary/30 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                Premium Oral Care Specialists
              </span>
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.1]">
                Beautiful Smiles, <br />
                <span className="text-primary italic">Trusted Care</span>
              </h1>
              <p className="text-white/80 text-lg lg:text-xl font-medium leading-relaxed">
                Experience world-class dental excellence with our expert team and state-of-the-art biological dentistry
                technology.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => navigate('/book')}
                  className="bg-primary text-white px-8 py-4 rounded-xl text-base font-bold shadow-2xl hover:bg-primary/90 transition-colors flex items-center gap-2"
                >
                  Book Appointment <span className="material-symbols-outlined text-sm">calendar_month</span>
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/results')}
                  className="bg-white/10 border border-white/20 backdrop-blur-md text-white px-8 py-4 rounded-xl text-base font-bold hover:bg-white/20 transition-colors"
                >
                  View Results
                </button>
              </div>
            </div>
          </div>
          {/* Carousel Indicators */}
          <div className="absolute bottom-10 left-10 z-20 flex gap-2">
            <div className="w-12 h-1 bg-primary rounded-full" />
            <div className="w-12 h-1 bg-white/30 rounded-full" />
            <div className="w-12 h-1 bg-white/30 rounded-full" />
          </div>
        </section>

        {/* About Intro & Stats */}
        <section id="about" className="py-24 px-6 lg:px-20 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl" />
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  className="w-full aspect-square object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjtZChV3cJ7O-4EmEGqn5rjis5DkX1hM3paHb3JxPIJSqWWSyVF8j7t9NSkxHRBNv871X7L0JlLQvJwE3gVmBT_7QokHpYE075xmh7hS5CylYtnf_9joGVrOVN28jgeiTY3mNmmay1yH8gbiBV9KDxHogsmVmH-VttEFrABys3BC8x_F2yIO8I1UR6AGt3CRGVFxepsQrmz27vjsIgLcvIhGUCvTGwpcS9f7zz4FIWCP1HLAb-URUfu8EcP8bkkTy9OyLNsIQJmoc"
                  alt="Professional dentist smiling in a modern clinic"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl hidden sm:block">
                <p className="text-primary text-3xl font-black">12+</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-tighter">
                  Years of Excellence
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h4 className="text-primary font-bold text-sm uppercase tracking-[0.2em]">Our Legacy</h4>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white">
                  Redefining the Dental Experience
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                  Since 2012, we&apos;ve focused on combining clinical excellence with a luxury guest experience. Our
                  approach is holistic, ensuring your oral health contributes to your overall well-being.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Lagos Branches', value: '3' },
                  { label: 'Happy Patients in Lagos', value: '5k+' },
                  { label: 'Lagos Specialists', value: '15+' },
                  { label: 'Success Rate in Lagos', value: '99%' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50"
                  >
                    <p className="text-primary text-3xl font-black">{stat.value}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview Grid */}
        <section id="services" className="bg-slate-50 dark:bg-slate-900/30 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center space-y-4 mb-16">
            <h4 className="text-primary font-bold text-sm uppercase tracking-[0.2em]">Expertise</h4>
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white">Comprehensive Dental Services</h2>
            <p className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400">
              Tailored treatments using modern technology to provide the best outcomes for your smile.
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: 'medical_services', label: 'General' },
              { icon: 'auto_awesome', label: 'Cosmetic' },
              { icon: 'align_items_stretch', label: 'Orthodontics' },
              { icon: 'biotech', label: 'Implants' },
              { icon: 'mood', label: 'Pediatric' },
              { icon: 'dentistry', label: 'Root Canal' },
              { icon: 'health_metrics', label: 'Gum Care' },
              { icon: 'emergency', label: 'Emergency' },
              { icon: 'masks', label: 'Sedation' },
              { icon: 'shield', label: 'Preventative' },
            ].map((service) => (
              <div
                key={service.label}
                className="group bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer text-center flex flex-col items-center"
              >
                <div className="size-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                </div>
                <p className="font-bold text-slate-900 dark:text-white">{service.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="py-24 px-6 lg:px-20 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
              Your Journey to a Perfect Smile
            </h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-4 gap-12 relative">
            {[
              {
                step: 1,
                title: 'Online Booking',
                text: 'Select your branch and preferred time through our portal.',
              },
              {
                step: 2,
                title: 'Consultation',
                text: 'Meet our expert for a detailed clinical examination.',
              },
              {
                step: 3,
                title: 'Custom Plan',
                text: 'Receive a personalized treatment blueprint and quote.',
              },
              {
                step: 4,
                title: 'Care & Follow-up',
                text: 'Professional treatment followed by routine check-ins.',
              },
            ].map((item) => (
              <div key={item.step} className="relative text-center space-y-4">
                <div className="size-14 bg-primary text-white rounded-xl flex items-center justify-center mx-auto text-xl font-black mb-6 z-10 relative">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Services Showcase */}
        <section className="py-24 bg-slate-900 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-20">
            <div className="mb-16">
              <h2 className="text-4xl font-black mb-4">Elite Smile Solutions</h2>
            <p className="text-slate-400 max-w-xl">
              Our signature procedures delivered with surgical precision and artistic care for patients in Lagos.
            </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-colors p-8 group">
                <img
                  className="w-full rounded-2xl mb-6 grayscale group-hover:grayscale-0 transition-all"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpnMsHNkEx3-XpYFL3Pk0M2HtfonEhSSzwG5g0QHE1C_NQG3QIbAfNGrE7tTbqf9DDExUGbEXw02L4gf2CtXCNd5YKNlgR7URQYzffCW1B8zrEvGyJy7X4w0J0FQ-iRKc6E-wrLlOxt4jDGoDht87R7X4mAhgl_PzN23etaXiJR9J4pNQwlipBUMVAgaFBIoOHmhd6n7BeDsqbQJZBwrh5slpnL89TTAPy1uPNQUp3mBRu5Me2cCRXLNMyesmPb0qTIGi4406ZiVw"
                  alt="Close up of perfect porcelain veneers"
                />
                <h3 className="text-2xl font-bold mb-3">Premium Veneers</h3>
                <p className="text-slate-400 text-sm mb-6">
                  Hand-crafted porcelain shells for an instantly flawless aesthetic transformation.
                </p>
                <a
                  href="#"
                  className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all"
                >
                  Learn More <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-colors p-8 group">
                <img
                  className="w-full rounded-2xl mb-6 grayscale group-hover:grayscale-0 transition-all"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj_SgwP5rXdliLD-4DLEv8pim3Od1ov2qBJO7SzdAQDfyNhRgJii1mw8G4OIu8Ko6tE2QSG2lXyWIvARqIGTq2gYszhhv00_I6XWAiAVr1prj-y0fhjQgKaqPCWS30Y3VkTAj2A_KFYz8NXRtczIk4bYDd3ns-OaYYxn5s_UwcbsPLuP2z-Kk5Rdb29qWeelSyRIWpmtA6VkALOBfuGzCDGGqzMzsixE_M3z5gz8HXW11bFCUsDgWpLb3ZdG9ydi3FDDGmTI_g1VY"
                  alt="Invisalign transparent aligner tray"
                />
                <h3 className="text-2xl font-bold mb-3">Invisalign®</h3>
                <p className="text-slate-400 text-sm mb-6">
                  The world&apos;s most advanced clear aligner system for discreet teeth straightening.
                </p>
                <a
                  href="#"
                  className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all"
                >
                  Learn More <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-colors p-8 group">
                <img
                  className="w-full rounded-2xl mb-6 grayscale group-hover:grayscale-0 transition-all"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIW7BJ_gtFcO2APYan1ObW61zJDPB8Kz8D1qZIKcLEF3mgV2Cc5i8ZVdCZRO7WF6RNn74ARdSYFu-drAIcIDcmlvdvIJhhKuTqhwrONBCqkZxqgvGvMHeBpU2D69Gca2maVTi7fg26vMgVO7UZ4xdbYL2G_qoj9bfiIMpAdl7IEiyzidZYJ5f6bYDgNrCYA5xDXf8aUuPSQcXazlQu8uMdBQMH6IdqEaH2aoj6cmF7wqIz7VM55warBAvmRnsI_FpdK9R15H8hK_k"
                  alt="Dental implant model illustration"
                />
                <h3 className="text-2xl font-bold mb-3">Swiss Implants</h3>
                <p className="text-slate-400 text-sm mb-6">
                  Permanent, natural-looking tooth replacement using biological grade titanium.
                </p>
                <a
                  href="#"
                  className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all"
                >
                  Learn More <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Before & After */}
        <section id="results" className="py-24 px-6 lg:px-20 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h4 className="text-primary font-bold text-sm uppercase tracking-[0.2em]">Transformations</h4>
              <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white">The Results Speak</h2>
            </div>
            <button className="px-6 py-3 border-2 border-slate-200 dark:border-slate-800 rounded-xl font-bold hover:bg-slate-50 transition-colors">
              View Gallery
            </button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="space-y-4">
              <div className="flex rounded-2xl overflow-hidden shadow-lg aspect-video">
                <div className="w-1/2 relative">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnNPp1OqeRH6NRviIxHs__yy2_xDgW9X4aKp4WXlShT5RPcqgOWZ37p5lkgNWuIFYPRNmHHl9NUqIo7Q6I8kbRowMdnXxlTO7izjKpRq2cytcBb80gSMgXwzvzO45sATLSPV19R7I4qlLj5tp13UrEP2M132O49i6nkss7HE2eTYzD_uVutHYXebju8HiSL-BkztqhfgkZb4rP1yP9IzPESLm6mB0ILGXy6P8yKb0m0j2pOFSbk77pFLtu0SSCC1JAChdLFbJGWRw"
                    alt="Teeth before procedure"
                  />
                  <span className="absolute top-2 left-2 bg-black/50 text-white text-[10px] px-2 py-1 rounded-full uppercase">
                    Before
                  </span>
                </div>
                <div className="w-1/2 relative border-l-2 border-white">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuByVOCpeVLsvyYXbUj8FiH6GFTywHufotjC1yNsoaOzyCtqgn8JT8EV0hSpfgsO5vsu81l-2sD4ZJhV_ztGY8J1xsFwGeENEfJA1v_J482WMkXNOyKchjIUBIXAMYk4JzXiJbW33x4vVi9iMGv2IPH9R1AT6qIL2kSRvuiL4WLtmrOloGpmsr01WCLkMiZC_WggVWxPiKlOV7o7d00dfM-gTEaKmSVMgk-kppnBbGvdUXCSI1kBjE9SJe2Q9yLZkMWIOd2a9ttUt94"
                    alt="Teeth after procedure"
                  />
                  <span className="absolute top-2 left-2 bg-primary text-white text-[10px] px-2 py-1 rounded-full uppercase">
                    After
                  </span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg">Full Mouth Reconstruction</h3>
                <p className="text-slate-500 text-sm">Patient treated for complex alignment and wear.</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="space-y-4">
              <div className="flex rounded-2xl overflow-hidden shadow-lg aspect-video">
                <div className="w-1/2 relative">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTaWti7OnykryENEz79_qr38_s3sXXRsZZNI7TUNdq1G9gTTmlePo2QDDqbSbnJ9HKtw4UQy37wtUehbVfx9Dti81bTkgbGwQYOh98_pFe1CeA5p7D8cuemddWEn8oZ63DZWlWLYOhuTVUPuwIlEEplwP2oYQvXozAgeWmvWhfplfHsbs9rey7kFD6OqYXah1zhLIbrUkVa-gLkncr522aPc1lMccfOgTZ6iSF0dhElQUcsnlaBQFvq8dsscQcwL8Cz4hK6ISgQko"
                    alt="Smile before procedure"
                  />
                  <span className="absolute top-2 left-2 bg-black/50 text-white text-[10px] px-2 py-1 rounded-full uppercase">
                    Before
                  </span>
                </div>
                <div className="w-1/2 relative border-l-2 border-white">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCqr8gVB84YbkXoxBOzP7hHmgpMfq6wfqnziTpOnrSSPaBlPgTSoGSz56Em7C7oZMCflVCLCbbf4gCIv7frbdadAWAkm7zl25bj9SrUWsx1hzVMFHVgunBFIL7ArO6BRGNZJzENLDWtZHxQ7eO0Q7_kNO7j4ZG0E1mqbulpZk9P6vLbitN7V8m81AR8e4xvVK-w3g5YYn4Gu23j-pbB3Gsma17_80zDVfiK_kq83itKT6NdaUUCYSZChJa5u54YWZ00-0-b2s6xcY"
                    alt="Smile after procedure"
                  />
                  <span className="absolute top-2 left-2 bg-primary text-white text-[10px] px-2 py-1 rounded-full uppercase">
                    After
                  </span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg">Porcelain Veneers</h3>
                <p className="text-slate-500 text-sm">Correcting discoloration and gap issues.</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="space-y-4 hidden lg:block">
              <div className="flex rounded-2xl overflow-hidden shadow-lg aspect-video">
                <div className="w-1/2 relative">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxWjys0rwyNAKuGoWpMo0TAIjaI4UM93nS-4hJnt9uO5VR9gr9m681PhzBVqN7yp2fyGMOsDZQu5Lt93_iPnF1Doplrw4AZT8UU4BBWMa2XwXIG3lXc6xDJDoUEpJ83pf76PQzgZuw28dieuZKsT0xdw-0Mo92-8NnacvgrF8ou0P_WIDwMIwED_sIX6EbyS2tKpbiNRlVJ3Hs0CDnZGlxOEUsqmnuSc8zGdwSbJ2MjPqJIFGaX91D8HG1JPcUd8cCeov3RhQ7vt8"
                    alt="Teeth alignment before"
                  />
                  <span className="absolute top-2 left-2 bg-black/50 text-white text-[10px] px-2 py-1 rounded-full uppercase">
                    Before
                  </span>
                </div>
                <div className="w-1/2 relative border-l-2 border-white">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHy46QXg-hTMipRCX8g9x6-TKriDAyX4iPqsPCTVXeTpvHBiqoJdPhaHfllCi-rgtuXP51KIE5F1HaPWvUKeN1wW4bPHqIPb-R-F2eatZZnASdktSeXHck6XCEDpu4l_aU2q2w7WrXIVmHFnYvqz6KjuNKhWLD0sA2uxelr7GDeonhOA2KL35czkrgLHzMOOPE72Z4AYN7KyGYDduqjpTBOkvUq4_bfnAzmDhuOkcCm2jIQSbVpCI9d5F7abJhyhIM4cWdIcZyg3U"
                    alt="Teeth alignment after"
                  />
                  <span className="absolute top-2 left-2 bg-primary text-white text-[10px] px-2 py-1 rounded-full uppercase">
                    After
                  </span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg">Invisalign Treatment</h3>
                <p className="text-slate-500 text-sm">14-month treatment for orthodontic correction.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="branches" className="bg-primary/5 py-24 px-6 lg:px-20 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-extrabold text-center mb-20">Voices of Satisfaction</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  text: "The level of professionalism and care in Lagos is unparalleled. I've never felt so comfortable in a dentist's chair. My results are absolutely life-changing.",
                  name: 'Tolu A.',
                  branch: 'Victoria Island, Lagos',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBupkIK-vYLAvVAWo_9xwnNLtYwIE_PgGnjobWsLoGz2qK2xJgocSr4mhyj-bvmbQrPoIQBH0vTlkVXjW51txlYcmhvvIA7H7G7594jsnGCvPWADbb6smCo1Lz8g9NI9uBhYYO2CliMoY5TYkyZfaAATZOX0sw2RwiwG15jTrGXWD_cBkeZWCTZbdNi72YYixLhGeeAfAP57Dc_OFkj37Pe-1lWVVaer3eRvKUQKcDY-4WWbt9qa2jbUbWtciNs65Hv1qfRgAEf_pA',
                  hideOnLg: false,
                },
                {
                  text: 'Incredible attention to detail. My implant treatment in Lagos was painless and surprisingly quick.',
                  name: 'Kunle B.',
                  branch: 'Lekki Phase 1, Lagos',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArjU7dLsbCHzRcolHpOgKnSyTnpLwsWx8QXhRrah4EsI7LoqI1AWAI3TA9C-a1TzMRu880yuQvWSph4oDDra0BNUvLBwG3y-8lzX6rUOzwBFrx6GnNp8sNNbud4nVlOX_t6YuD5YNOruiun9CAUklt7ML6LlNHwRwcjK6iQ7wiFjQ0HUL4HZ8AiE_Wgw3dSBMrIKKfDtGNwmn2l8h-JMUdzMyNfRyJ3TTE5nmhltAGI7q36F9_WMWrlnJcjU3T2HgJBnxCRRe555U',
                  hideOnLg: false,
                },
                {
                  text: 'Their pediatric department is wonderful. My kids actually look forward to their Lagos check-ups. Truly a family-oriented premium clinic.',
                  name: 'Ada E.',
                  branch: 'Ikeja GRA, Lagos',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQkXFI9JGWzjR1ZuZgCneoXatIrajO-u9D3wg7Ptsk9aKtNgoeuAxBc9LE4TYAketR1NsdRZmGWOPiN8d61XQJvRna3vFMayMlljEss63ZoMOW-DdRGQLzVt-pkI6j5moTg8FpQYY4L8TQ0F5GLU2ii7hySIrcF8tFWFRbaznNXn5BSSgnRLAgtu5Hz7CdpoBPlLF40fN8y79C5uK23nbjtIiKZm5AyqXX1LkTaezEqYaGH9gDJi8EiniaPkdz33M0zgrWZNGPty8',
                  hideOnLg: true,
                },
              ].map((t, idx) => (
                <div
                  key={t.name}
                  className={`bg-white dark:bg-slate-800 p-10 rounded-[2rem] shadow-xl shadow-primary/5 relative ${
                    t.hideOnLg ? 'hidden lg:block' : ''
                  }`}
                >
                  <span className="material-symbols-outlined text-primary/20 text-6xl absolute top-6 right-8">
                    format_quote
                  </span>
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={`${idx}-star-${i}`}
                        className="material-symbols-outlined text-amber-400 fill-current text-lg"
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 italic mb-8 relative z-10">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <div
                      className="size-12 rounded-full bg-slate-200 bg-center bg-cover"
                      style={{ backgroundImage: `url("${t.img}")` }}
                    />
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">{t.name}</p>
                      <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">{t.branch}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Logo Strip */}
        <section id="faq" className="py-12 border-y border-slate-100 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-20">
            <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-10">
              Trusted by Global Providers
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all">
              {['AXA', 'CIGNA', 'ALLIANZ', 'BUPA', 'METLIFE'].map((brand) => (
                <div
                  key={brand}
                  className="text-2xl font-black text-slate-900 dark:text-white"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Reusable Footer */}
      <Footer />
    </div>
  )
}

export default Home

