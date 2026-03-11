import type { FC } from 'react'

const Footer: FC = () => {
  return (
    <footer
      id="contact"
      className="bg-white dark:bg-slate-950 pt-20 pb-10 border-t border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg text-white">
              <span className="material-symbols-outlined text-2xl">dentistry</span>
            </div>
            <h2 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase">
              Dental<span className="text-primary">Clinic</span>
            </h2>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed">
            Providing high-end dental solutions in Lagos, Nigeria. We combine technology, comfort, and clinical
            excellence for the perfect Lagos smile.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="size-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:bg-primary hover:text-white transition-all"
            >
              <span className="material-symbols-outlined text-base">public</span>
            </a>
            <a
              href="#"
              className="size-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:bg-primary hover:text-white transition-all"
            >
              <span className="material-symbols-outlined text-base">smart_display</span>
            </a>
            <a
              href="#"
              className="size-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:bg-primary hover:text-white transition-all"
            >
              <span className="material-symbols-outlined text-base">camera</span>
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-black text-slate-900 dark:text-white mb-6 uppercase text-sm tracking-wider">
            Quick Links
          </h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Find a Doctor
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Our Specializations
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Before &amp; After Gallery
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Patient Portal
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Insurance Partners
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-black text-slate-900 dark:text-white mb-6 uppercase text-sm tracking-wider">
            Lagos Headquarters
          </h4>
          <div className="space-y-4 text-sm text-slate-500">
            <p className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-base">location_on</span>
              Adeola Odeku Street
              <br />
              Victoria Island, Lagos
            </p>
            <p className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-base">call</span>
              +234 809 000 0000
            </p>
            <p className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-base">mail</span>
              care@emeralddentallagos.ng
            </p>
          </div>
        </div>
        <div>
          <h4 className="font-black text-slate-900 dark:text-white mb-6 uppercase text-sm tracking-wider">
            Newsletter
          </h4>
          <p className="text-sm text-slate-500 mb-6">
            Stay updated with our latest treatments and branch openings.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-lg flex-1 text-sm focus:ring-primary focus:border-primary px-3 py-2 border"
            />
            <button className="bg-primary text-white p-2 rounded-lg">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-20 pt-10 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-400">
        <p>© 2024 Emerald Dental Lagos. All rights reserved.</p>
        <div className="flex gap-6">
          <a className="hover:text-slate-600 transition-colors" href="#">
            Privacy Policy
          </a>
          <a className="hover:text-slate-600 transition-colors" href="#">
            Terms of Service
          </a>
          <a className="hover:text-slate-600 transition-colors" href="#">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

