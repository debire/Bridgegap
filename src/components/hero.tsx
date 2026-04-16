import Link from "next/link";

export function Hero() {
    return (
        <section
            className="relative h-[70vh] md:h-screen w-full bg-cover bg-center bg-no-repeat flex items-center"
            style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        >
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pt-32">
                <div className="max-w-4xl">
                    <h1 className="font-heading text-white font-normal leading-tight text-4xl md:text-5xl lg:text-[55px]">
                        Empowering Businesses <br /> & Communities
                    </h1>

                    <p className="mt-6 text-white text-base md:text-lg max-w-none">
                        Providing accessible financial services to traders, entrepreneurs, and employees.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link
                            href="/services"
                            className="inline-flex items-center justify-center rounded-full bg-brand-button px-7 py-3 text-white font-medium hover:bg-brand-button/90 transition-colors"
                        >
                            Our Services
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-full bg-brand-accent px-7 py-3 text-white font-medium hover:bg-brand-accent/90 transition-colors"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}