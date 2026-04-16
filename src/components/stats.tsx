const stats = [
  { value: "25", label: "Years of Operation" },
  { value: "150Hh", label: "/year CSR Support" },
  { value: "10K", label: "Loans Disbursed" },
  { value: "4", label: "Branches" },
];

export function Stats() {
  return (
    <section className="w-full bg-page pt-0 pb-12 md:pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="bg-brand rounded-3xl py-16 md:py-20 px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center">
                <div className="font-heading text-brand-button text-4xl md:text-5xl font-semibold">
                  {stat.value}
                </div>
                <div className="mt-3 text-white text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}