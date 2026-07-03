export default function Contact() {
  return (
    <div className="px-4 py-12 text-slate-900 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="fade-in-up text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">Contact</p>
          <h1 className="fade-in-up animate-delay-1 display-font mt-3 text-4xl font-bold sm:text-5xl">Let&apos;s Build Something Useful</h1>
          <p className="fade-in-up animate-delay-2 mx-auto mt-4 max-w-3xl text-slate-600">
            Available for frontend, MERN, and full-stack collaboration. The fastest way to reach me is by email or phone.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <a href="mailto:m.tahaqaisrani@gmail.com" className="fade-in-up rounded-3xl bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/10 transition duration-300 hover:-translate-y-1 hover:shadow-slate-950/20">
            <p className="text-sm uppercase tracking-[0.25em] text-amber-300">Email</p>
            <h2 className="display-font mt-3 text-2xl font-bold">m.tahaqaisrani@gmail.com</h2>
            <p className="mt-2 leading-7 text-slate-300">Best for project inquiries and professional opportunities.</p>
          </a>

          <a href="tel:+923306721738" className="glass-card fade-in-up animate-delay-1 rounded-3xl p-6 transition duration-300 hover:-translate-y-1">
            <p className="text-sm uppercase tracking-[0.25em] text-amber-600">Phone</p>
            <h2 className="display-font mt-3 text-2xl font-bold text-slate-950">+92 330 6721738</h2>
            <p className="mt-2 leading-7 text-slate-600">Pakistan-based availability for direct communication.</p>
          </a>

          <div className="glass-card fade-in-up animate-delay-2 rounded-3xl p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-amber-600">Location</p>
            <h2 className="display-font mt-3 text-2xl font-bold text-slate-950">Pakistan</h2>
            <p className="mt-2 leading-7 text-slate-600">Open to remote client work and software house opportunities.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
