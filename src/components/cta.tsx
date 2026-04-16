import Link from "next/link";

export function Cta() {
  return (
    <section className="w-full bg-page pt-4 md:pt-6 pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div
          className="rounded-3xl py-16 md:py-20 px-6 md:px-10 text-center"
          style={{ backgroundColor: "#D8D8EC" }}
        >
          <h2 className="font-heading text-brand text-2xl md:text-4xl lg:text-5xl font-bold">
            Ready to experience the difference?
          </h2>
          <p className="mt-4 text-base md:text-lg text-neutral-800 max-w-xl mx-auto">
            Join thousands of satisfied customers who trust us with their financial needs
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/loan-application"
              className="inline-flex items-center justify-center rounded-full bg-brand-button px-8 py-3 text-white font-medium hover:bg-brand-button/90 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}