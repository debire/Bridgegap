import Image from "next/image";

const bankers = [
  {
    name: "Sterling Bank",
    logo: "/images/sterling-logo.jpg",
  },
  {
    name: "Polaris Bank",
    logo: "/images/polaris-logo.jpg",
  },
];

export function Bankers() {
  return (
    <section className="w-full bg-page pt-4 md:pt-6 pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-10">
          <h2 className="font-heading text-brand text-2xl md:text-3xl font-semibold">
            Our Bankers
          </h2>
          <p className="mt-2 text-base md:text-lg text-neutral-800">
            We partner with top financial institutions and technology providers to serve you better
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          {bankers.map((banker) => (
            <div
              key={banker.name}
              className="bg-white rounded-lg p-4 flex items-center justify-center w-32 h-32 md:w-36 md:h-36"
            >
              <Image
                src={banker.logo}
                alt={banker.name}
                width={120}
                height={120}
                className="object-contain max-w-full max-h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}