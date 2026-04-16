export function WhoWeAre() {
  return (
    <section className="w-full bg-page py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <h2 className="font-heading text-brand text-2xl md:text-3xl font-semibold">
              Who We Are
            </h2>
          </div>

          <div className="md:col-span-3 space-y-6 text-base md:text-lg text-neutral-800 leading-relaxed">
            <p>
              BridgeGap Capital Ltd is a licensed microfinance institution providing a diversified range of financial services to Nigerians. Since April 2000, we have been committed to bridging the financial gap for traders, small business owners, and employed individuals across Lagos State.
            </p>
            <p>
              We believe that access to credit should not be a privilege reserved for a few. Our mission is to provide accessible, affordable, and responsible financial services that empower our customers to grow their businesses, meet their personal needs, and improve their quality of life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}