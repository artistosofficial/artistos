export function CTASection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center gap-8">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-medium text-white tracking-tight max-w-2xl">
            Your music deserves a system behind it.
          </h2>
          <p className="text-zinc-400 max-w-lg">
            Join 100+ DJs and producers who stopped winging it and started building a real career.
          </p>
          <div className="flex flex-col items-center gap-4">
            <a
              href="#pricing"
              className="px-6 py-3 text-zinc-900 font-medium rounded-lg transition-colors text-sm bg-white hover:bg-zinc-200"
            >
              Get ArtistOS — €49
            </a>
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <span className="text-white">★★★★★</span>
              <span>30-day money-back guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
