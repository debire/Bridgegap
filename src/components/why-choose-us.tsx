const reasons = [
  {
    number: "01",
    title: "25+ Years of Trust",
    description:
      "Operating since April 2000, we have built lasting relationships with thousands of traders and business owners across Lagos.",
  },
  {
    number: "02",
    title: "Community-Focused Lending",
    description:
      "We understand the unique challenges of Nigerian traders and SMEs. Our loan products are designed specifically for your needs.",
  },
  {
    number: "03",
    title: "Women Empowerment",
    description:
      "We actively support women entrepreneurs, helping them grow their businesses and contribute to household and community development.",
  },
  {
    number: "04",
    title: "Multiple Convenient Locations",
    description:
      "With branches in Lagos, Ikorodu, and Badagry, we are always close to you. Visit us during our working hours for personalized service.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="w-full bg-page py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-12">
          <h2 className="font-heading text-brand text-2xl md:text-3xl font-semibold">
            Why Choose BridgeGap Capital?
          </h2>
          <p className="mt-2 text-base md:text-lg text-neutral-800">
            Choose the financial partner that understands your needs
          </p>
        </div>

        <div className="border-t border-neutral-300">
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 border-b border-neutral-300"
            >
              <div className="md:col-span-2 text-neutral-600 text-base">
                {reason.number}
              </div>
              <div className="md:col-span-4">
                <h3 className="text-brand text-lg md:text-xl font-semibold">
                  {reason.title}
                </h3>
              </div>
              <div className="md:col-span-6 text-neutral-800 text-base leading-relaxed">
                {reason.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}