export function CTA() {
  return (
    <section id="cta" className="bg-mediumBlue">
    {/* Flex Container */}
    <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:px-12 md:flex-row md:space-y-0">
      {/* Heading */}
      <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
        Simplifique como sua equipe trabalha hoje.
      </h2>
      {/* Button */}
      <div>
        <a href="#" className="p-3 px-6 pt-2 text-mediumBlue bg-white rounded-full shadow-2xl baseline hover:bg-gray-700 transition">Comece agora!</a>

      </div>
    </div>
  </section>
  )
}