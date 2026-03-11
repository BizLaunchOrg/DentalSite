import type { FC } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const About: FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 transition-colors duration-300 min-h-screen overflow-x-hidden">
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

      {/* Global Navbar (same as landing page) */}
      <Navbar />

      <main>
        {/* Section 1: Hero Banner */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD79JI_nTCGziIlqeH1c7u8hvoff4GKvjE9wltmcxYOHUoH5PaOil2fmKsK_VmoOkmxbMHM24uvW-WhI1mt7pv-0i16rTz1sip4i7fbe7-RDHDYjKQYmsYq02KvYMAJaNK3JR0Hr2kEnwV8meGi1ppe1qsi6D8lXl56bvmgUGrujyCgBSIASxwZO-Za2jlx9DMBKN-mG0WxisnXWBsGQ7RucY4Fg_jtrDH1H-8c0vEwh4dtGgr4pQXrK4d3pzryS9EeDzMfq5OAdCU"
              alt="Modern high-end dental clinic interior with natural lighting"
            />
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-blue-400 font-bold text-xs uppercase tracking-widest mb-6">
              Established 2004
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Redefining the Dental Experience with{' '}
              <span className="text-primary">Precision &amp; Artistry</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 font-normal max-w-2xl mx-auto">
              Where luxury meets world-class oral health. We combine cutting-edge technology with a human touch to give
              you the smile you deserve.
            </p>
          </div>
        </section>

        {/* Section 2: Our Story */}
        <section className="py-24 bg-background-light dark:bg-background-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIv3avguAlAn8v3MYO3hOK_IFCAcWHQMC5FvsaKfzM-elkvFkJDhDK-8WD9NnQFpqOl1O7YHOtfXVQ1ZGN0QNl7sSWwP5-iAh7FKiXR5KUUbruP5-z2Eu8oOp_2m2DXo6c0OL3FKwznSR9QAmIdq-0RCz7c_3fbsYoFc2REDln9ubDEkoWJecqW7EnCMY_7uwizwVFx7GvrR--Mfkw6s6heTvgocq2zOwzNFzgEPsltiO6bznA0jSHjS8w32TYZll1lk8jFe1NTw4"
                    alt="Doctor discussing treatment plan with a patient"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-8 rounded-xl shadow-xl border border-primary/10 hidden md:block">
                  <p className="text-4xl font-black text-primary">20+</p>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-tighter">Years of Excellence</p>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">Our Legacy of Care</h2>
                <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                  <p>
                    Founded over two decades ago, Elite Dental Care began with a simple vision: to redefine the patient
                    experience. What started as a small private practice has evolved into a regional leader in premium
                    dental services.
                  </p>
                  <p>
                    Our commitment to clinical excellence and personalized care has made us a leader in premium dental
                    services, combining artistry with advanced medical science. We believe that every patient is unique,
                    and so should be their treatment.
                  </p>
                  <p>
                    Today, we continue to push the boundaries of modern dentistry, ensuring that every visit is as
                    comfortable as it is effective.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Mission & Vision */}
        <section className="py-20 bg-primary/5 dark:bg-primary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background-light dark:bg-slate-800 p-10 rounded-2xl border border-primary/10 shadow-sm">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined text-3xl">track_changes</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  To provide exceptional dental care through innovation, empathy, and a commitment to patient-centered
                  excellence. We strive to improve lives one smile at a time by making health and confidence accessible.
                </p>
              </div>
              <div className="bg-background-light dark:bg-slate-800 p-10 rounded-2xl border border-primary/10 shadow-sm">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined text-3xl">visibility</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  To be the global benchmark for luxury dental health, where advanced medical technology meets
                  unparalleled comfort, creating a future where dental visits are something patients look forward to.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Why Choose Us */}
        <section className="py-24" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Discerning Patients Choose Us</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Experience the standard of care that sets us apart from traditional clinics.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="mb-6 inline-block p-4 rounded-full bg-primary/5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-4xl">workspace_premium</span>
                </div>
                <h4 className="text-xl font-bold mb-3">Expert Clinicians</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Our team consists of internationally trained specialists with decades of combined experience.
                </p>
              </div>
              <div className="text-center group">
                <div className="mb-6 inline-block p-4 rounded-full bg-primary/5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-4xl">precision_manufacturing</span>
                </div>
                <h4 className="text-xl font-bold mb-3">Advanced Tech</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  We utilize 3D imaging and laser dentistry to ensure minimally invasive and highly accurate treatments.
                </p>
              </div>
              <div className="text-center group">
                <div className="mb-6 inline-block p-4 rounded-full bg-primary/5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-4xl">spa</span>
                </div>
                <h4 className="text-xl font-bold mb-3">Patient Comfort</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  From noise-canceling headphones to sedation options, we prioritize your relaxation throughout your
                  visit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Milestones Timeline */}
        <section className="py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-16">Our Journey of Growth</h2>
            <div className="relative border-l-2 border-primary/30 ml-4 md:ml-0 md:flex md:border-l-0 md:border-t-2 md:pt-8 md:justify-between space-y-12 md:space-y-0">
              <div className="relative pl-8 md:pl-0 md:w-1/4">
                <div className="absolute -left-[9px] top-0 md:top-[-41px] md:left-0 w-4 h-4 rounded-full bg-primary border-4 border-slate-900" />
                <h5 className="text-primary font-bold text-xl mb-2">2004</h5>
                <p className="text-sm font-bold text-slate-100 mb-1">Clinic Founded</p>
                <p className="text-xs text-slate-400">The journey began in a boutique space with 2 chairs.</p>
              </div>
              <div className="relative pl-8 md:pl-0 md:w-1/4">
                <div className="absolute -left-[9px] top-0 md:top-[-41px] md:left-0 w-4 h-4 rounded-full bg-primary border-4 border-slate-900" />
                <h5 className="text-primary font-bold text-xl mb-2">2010</h5>
                <p className="text-sm font-bold text-slate-100 mb-1">Specialist Expansion</p>
                <p className="text-xs text-slate-400">Introduced in-house Orthodontics and Implantology.</p>
              </div>
              <div className="relative pl-8 md:pl-0 md:w-1/4">
                <div className="absolute -left-[9px] top-0 md:top-[-41px] md:left-0 w-4 h-4 rounded-full bg-primary border-4 border-slate-900" />
                <h5 className="text-primary font-bold text-xl mb-2">2018</h5>
                <p className="text-sm font-bold text-slate-100 mb-1">State-of-the-Art Facility</p>
                <p className="text-xs text-slate-400">Moved to our current luxury flagship location.</p>
              </div>
              <div className="relative pl-8 md:pl-0 md:w-1/4">
                <div className="absolute -left-[9px] top-0 md:top-[-41px] md:left-0 w-4 h-4 rounded-full bg-primary border-4 border-slate-900" />
                <h5 className="text-primary font-bold text-xl mb-2">2023</h5>
                <p className="text-sm font-bold text-slate-100 mb-1">Excellence Award</p>
                <p className="text-xs text-slate-400">Voted Top Dental Practice for patient care.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Technology */}
        <section className="py-24 bg-background-light dark:bg-background-dark overflow-hidden" id="technology">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Investing in Your Comfort through Technology</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-primary">biotech</span>
                    <div>
                      <h6 className="font-bold">Digital Impression Scanners</h6>
                      <p className="text-sm text-slate-500">
                        Say goodbye to messy molds. Our 3D scanners create perfect replicas of your teeth in seconds.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-primary">healing</span>
                    <div>
                      <h6 className="font-bold">Hard &amp; Soft Tissue Lasers</h6>
                      <p className="text-sm text-slate-500">
                        More comfort, faster healing, and less need for anesthesia during procedures.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-primary">3d_rotation</span>
                    <div>
                      <h6 className="font-bold">CBCT 3D X-Rays</h6>
                      <p className="text-sm text-slate-500">
                        High-resolution 3D views of your bone and roots for precise surgical planning.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                <img
                  className="rounded-xl shadow-lg mt-8"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1yGAui59ezDWiwyt5dK0LPK_VanEGYtOk16i4ZSEkOJACnP2LkKnuLYoSwv7x7-3QXokKYgdsvYV6nLshGqqgYTu0imLkHlxFqtFSYP2HFzTSOrgkVgcr4oSYiJn9QZoR910wGLzk4wl6mtXlhOPRBkGh0vp3IoT9SUgv1izIg5KiVEdMDjte13ZaPK1_c1M6q0zDDZUucL5qzy7JTouu6fh-i0TkEpg3tBqqS7slBUB5YQQ4iMRDa4Ttx8DaiLisE6QEfdGvpa0"
                  alt="Close up of high tech dental laser equipment"
                />
                <img
                  className="rounded-xl shadow-lg"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDd4nrU-hMu4YWAY509jNTa6AanIIqHhaLmtjmkclmy7uR02rAUNuSI1cH5Inu8WZpsFSt-8IcTfwpZG4Nub1xRZNl5ajboucIX-Ev7hvwsswUls48XBmFkT9YxunffNAH2rY3VQx8fKjfyPxN1I7m7-M9KrpeTayN0FMPPRt_2w-ArFeYtNONGi63xJVh20NWEkJcabOrRVWng_3MG2SwJtFmnHuUI2Wj6t0rpXQU5rRIYePRLM0wwbpDNL_6iQByJr9m5s9NCRPE"
                  alt="Dentist looking at 3D dental scan on monitor"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Team Preview */}
        <section className="py-24 bg-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Meet Our Visionaries</h2>
              <p className="text-slate-500">Led by world-class professionals dedicated to your oral health.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background-light dark:bg-slate-800 rounded-2xl overflow-hidden border border-primary/10 transition-transform hover:-translate-y-2">
                <img
                  className="w-full h-72 object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbPEkkmeteX8wfJNJUpfTRDBf3dltRpVxdQ8qZNwJLrpTM0yqJLWIt51cMyRLtohzF010pYOS7u93NEzOwaeQOpTUZefKWznePhbiOtz9AHIDfQQWIz6e96fIiIhW_01zUpzMS_SsBcIXLTGmZdDeDvUYzjrkKXUaFPhNl7P-JzgSl3k2whkK1p9b2u2YeJT9SDvm58Aq3IB68rpTOCIWHFV-Ayqr_0ssOMHRYNeOR__CzRxO_YAIKpTxttvTy2TvP6izIkNUKRzY"
                  alt="Portrait of lead dentist Dr. Sarah Mitchell"
                />
                <div className="p-6">
                  <h5 className="text-xl font-bold">Dr. Sarah Mitchell</h5>
                  <p className="text-primary text-sm font-semibold mb-3">Chief Dental Surgeon</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm italic mb-4">
                    &quot;Creating confidence through healthy smiles is my life's work.&quot;
                  </p>
                  <div className="flex gap-4 text-primary">
                    <span className="material-symbols-outlined cursor-pointer hover:scale-110">mail</span>
                    <span className="material-symbols-outlined cursor-pointer hover:scale-110">link</span>
                  </div>
                </div>
              </div>
              <div className="bg-background-light dark:bg-slate-800 rounded-2xl overflow-hidden border border-primary/10 transition-transform hover:-translate-y-2">
                <img
                  className="w-full h-72 object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvvHwHb3YrWGTyh-g5mk8aGefSGGRv1mR2i9a8kT295Ge4rE6aSf_fSEFJMirii6PGkg30El2tMB78shn-pOljKKMXalhYoVshshnf8uRa1TbVKn-H4t6SPhb174g0WmGtUY1Kfs8cm5UByCTM2iAOG-3jRdzHOx79Enrs-nleXV7Wk3Q4fPrjKGaEP-J0ETgV-UDwWYr1E-yRpXXtps4kz6bG2ypnHm46VxK2NG7EAiVXZYt0Jeg12O7zvUN52BXyIwpQdZm7Pfk"
                  alt="Portrait of senior orthodontist Dr. James Chen"
                />
                <div className="p-6">
                  <h5 className="text-xl font-bold">Dr. James Chen</h5>
                  <p className="text-primary text-sm font-semibold mb-3">Senior Orthodontist</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm italic mb-4">
                    &quot;Precision alignment meets patient-focused aesthetics.&quot;
                  </p>
                  <div className="flex gap-4 text-primary">
                    <span className="material-symbols-outlined cursor-pointer hover:scale-110">mail</span>
                    <span className="material-symbols-outlined cursor-pointer hover:scale-110">link</span>
                  </div>
                </div>
              </div>
              <div className="bg-background-light dark:bg-slate-800 rounded-2xl overflow-hidden border border-primary/10 transition-transform hover:-translate-y-2 lg:hidden xl:block">
                <img
                  className="w-full h-72 object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIEfN9hBve0ReAfMEuR4gsPWnp5Mg0IyXjp9c18GlQLMQIq8L5qnfmwFexewht1GbiDMSaCI_w-o9wxVe0acqgLjVonxMjzCHzlQlLdDjbdXwvl_FoVVvML4_WqLEKxgTYswvuNRGebzC7cyDwqgcpu5ptjI1Dd_krTw5bSIbWifttSi8GHonvbwrwZZA1bj955SSZ_240109BXhhqr6zqHnRq_hpITiZXf01E7WiDKG7BPxgJT8lOD_DenHqywL9DiFDQTw3Eewc"
                  alt="Portrait of cosmetic specialist Dr. Elena Rodriguez"
                />
                <div className="p-6">
                  <h5 className="text-xl font-bold">Dr. Elena Rodriguez</h5>
                  <p className="text-primary text-sm font-semibold mb-3">Cosmetic Specialist</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm italic mb-4">
                    &quot;Beauty begins with a healthy foundation and expert artistry.&quot;
                  </p>
                  <div className="flex gap-4 text-primary">
                    <span className="material-symbols-outlined cursor-pointer hover:scale-110">mail</span>
                    <span className="material-symbols-outlined cursor-pointer hover:scale-110">link</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Final CTA (kept, but footer is global) */}
        <section className="py-20 relative overflow-hidden" id="contact">
          <div className="absolute inset-0 bg-primary/95" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Ready for Your First Class Smile?
            </h2>
            <p className="text-blue-100 text-lg mb-10">
              Join patients across Lagos and Nigeria who trust our team with their oral health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-10 py-4 rounded-xl font-black text-lg hover:bg-slate-100 transition-all shadow-xl">
                Book Appointment
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-xl font-black text-lg hover:bg-white/10 transition-all">
                Contact Support
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer (same as landing page) */}
      <Footer />
    </div>
  )
}

export default About

