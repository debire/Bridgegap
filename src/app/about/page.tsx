import Image from "next/image";
import { ShieldCheck, HandHeart, HeartHandshake, Sprout } from "lucide-react";
import { Cta } from "@/components/cta";
import { Stats } from "@/components/stats";


export default function AboutPage() {
    return (
        <main className="bg-page min-h-screen pt-28 pb-20">
            <div className="max-w-7xl mx-auto px-6 md:px-10 mb-12">
                <h1 className="font-heading text-brand text-4xl md:text-5xl lg:text-6xl font-normal">
                    About Us
                </h1>
                <p className="mt-4 text-base md:text-lg text-neutral-800">
                    Making loans accessible, transparent, and affordable for everyone
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 py-12">
                    <div className="md:col-span-1">
                        <h2 className="font-heading text-brand text-xl md:text-2xl font-semibold">
                            Who We Are
                        </h2>
                    </div>
                    <div className="md:col-span-3 space-y-6 text-base text-neutral-800 leading-relaxed">
                        <p>
                            BridgeGap Capital Ltd is a licensed microfinance institution providing a diversified range of financial services to Nigerians. Since April 2000, we have been committed to bridging the financial gap for traders, small business owners, and employed individuals across Lagos State.
                        </p>
                        <p>
                            We believe that access to credit should not be a privilege reserved for a few. Our mission is to provide accessible, affordable, and responsible financial services that empower our customers to grow their businesses, meet their personal needs, and improve their quality of life.
                        </p>
                    </div>
                </div>

                {/* Our Story */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 py-12">
                    <div className="md:col-span-1">
                        <h2 className="font-heading text-brand text-xl md:text-2xl font-semibold">
                            Our Story
                        </h2>
                    </div>
                    <div className="md:col-span-3 space-y-6 text-base text-neutral-800 leading-relaxed">
                        <p>
                            For over two decades, we have stood alongside Nigeria&apos;s grassroots economy providing micro-lending solutions to traders, employees and small businesses. Licensed in Lagos, our journey began with a simple but powerful mission: to empower women and underserved communities with access to finance that could transform lives.
                        </p>
                        <p>
                            From bustling markets to quiet workshops, we have seen firsthand how a small loan can spark big change helping a trader expand her stall, an artisan buy better tools, or a small enterprise grow into a thriving business. Each success story has fueled our passion and strengthened our commitment.
                        </p>
                        <p>
                            Today, our vision extends beyond Lagos. We are spreading nationwide, reaching salary earners, SMEs, and entrepreneurs across Nigeria. Our goal is to be more than a lender we are a trusted partner in growth, resilience, and prosperity.
                        </p>
                        <p>
                            We believe finance should be inclusive, transparent, and empowering. That is why our core values Empowerment, Integrity, Community Impact and Sustainability guide every decision we make. They ensure that we remain true to our purpose: building prosperity for individuals, families, and communities.
                        </p>
                        <p>
                            Our story is one of empowerment, resilience, and shared success. Together with our clients, we are writing the next chapter of Nigeria&apos;s economic transformation one loan, one business, one dream at a time.
                        </p>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 md:px-10 mt-10 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Team photo */}
                    <div className="relative w-full rounded-xl overflow-hidden">
                        <Image
                            src="/images/team.jpg"
                            alt="BridgeGap Capital Team"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-center">
                        <h2 className="font-heading text-brand text-2xl md:text-3xl font-semibold">
                            Our Vision
                        </h2>
                        <p className="mt-4 text-base text-neutral-800 leading-relaxed">
                            To be Nigeria&apos;s leading microfinance institution that transforms communities by empowering individuals and small businesses with inclusive financial solutions.
                        </p>

                        <h2 className="font-heading text-brand text-2xl md:text-3xl font-semibold mt-12">
                            Our Mission
                        </h2>
                        <p className="mt-4 text-base text-neutral-800 leading-relaxed">
                            To provide accessible and affordable lending to individuals and businesses with a special focus on women. Through financial literacy and responsible practices, we enable sustainable growth and prosperity.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-10 mb-20">
                <h2 className="font-heading text-brand text-2xl md:text-3xl font-semibold mb-12">
                    Our Values
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                    <div>
                        <ShieldCheck className="w-16 h-16 text-neutral-900" strokeWidth={1.5} />
                        <h3 className="font-heading text-brand text-lg md:text-xl font-semibold mt-6 mb-3">
                            Integrity
                        </h3>
                        <p className="text-sm text-neutral-700 leading-relaxed">
                            Upholding transparency, fairness, and accountability in every transaction.
                        </p>
                    </div>

                    <div>
                        <HandHeart className="w-16 h-16 text-neutral-900" strokeWidth={1.5} />
                        <h3 className="font-heading text-brand text-lg md:text-xl font-semibold mt-6 mb-3">
                            Empowerment
                        </h3>
                        <p className="text-sm text-neutral-700 leading-relaxed">
                            Supporting women, entrepreneurs, and professionals to achieve financial independence.
                        </p>
                    </div>

                    <div>
                        <HeartHandshake className="w-16 h-16 text-neutral-900" strokeWidth={1.5} />
                        <h3 className="font-heading text-brand text-lg md:text-xl font-semibold mt-6 mb-3">
                            Community Impact
                        </h3>
                        <p className="text-sm text-neutral-700 leading-relaxed">
                            Measuring success by the transformation of families, businesses, and local economies.
                        </p>
                    </div>

                    <div>
                        <Sprout className="w-16 h-16 text-neutral-900" strokeWidth={1.5} />
                        <h3 className="font-heading text-brand text-lg md:text-xl font-semibold mt-6 mb-3">
                            Sustainability
                        </h3>
                        <p className="text-sm text-neutral-700 leading-relaxed">
                            Promoting responsible lending that balances growth with long-term stability.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 md:px-10 mb-20">
                <h2 className="font-heading text-brand text-2xl md:text-3xl font-semibold">
                    Our Journey
                </h2>
                <p className="mt-2 text-base md:text-lg text-neutral-800 mb-16">
                    25 years of growth, transformation, and service
                </p>

                <div className="flex flex-col gap-20">
                    {/* 2000 - Left */}
                    <div className="flex justify-start">
                        <div className="w-full md:w-[45%]">
                            <div className="border-t border-neutral-300 pt-4 mb-4">
                                <p className="text-right font-heading text-brand-button text-lg md:text-xl font-semibold">
                                    2000
                                </p>
                            </div>
                            <h3 className="font-heading text-brand text-base md:text-lg font-semibold mb-2">
                                Commenced Operations
                            </h3>
                            <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                                BridgeGap Capital began its journey with a vision to provide accessible financial services to Nigerians.
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-start md:justify-end">
                        <div className="w-full md:w-[45%]">
                            <div className="border-t border-neutral-300 pt-4 mb-4">
                                <p className="text-right font-heading text-brand-button text-lg md:text-xl font-semibold">
                                    2004
                                </p>
                            </div>
                            <h3 className="font-heading text-brand text-base md:text-lg font-semibold mb-2">
                                HD Ventures
                            </h3>
                            <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                                Established HD Ventures, marking our first major business expansion.
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-start">
                        <div className="w-full md:w-[45%]">
                            <div className="border-t border-neutral-300 pt-4 mb-4">
                                <p className="text-right font-heading text-brand-button text-lg md:text-xl font-semibold">
                                    2006
                                </p>
                            </div>
                            <h3 className="font-heading text-brand text-base md:text-lg font-semibold mb-2">
                                Converted to Limited Liability Company
                            </h3>
                            <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                                Incorporated as HDV Integrated Services, a Limited Liability Company, strengthening our corporate foundation.
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-start md:justify-end">
                        <div className="w-full md:w-[45%]">
                            <div className="border-t border-neutral-300 pt-4 mb-4">
                                <p className="text-right font-heading text-brand-button text-lg md:text-xl font-semibold">
                                    2015
                                </p>
                            </div>
                            <h3 className="font-heading text-brand text-base md:text-lg font-semibold mb-2">
                                Moved to Corporate Headquarters
                            </h3>
                            <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                                Relocated to our corporate headquarters at 3, Eniola Street, Idi-Oro, Mushin, Lagos.
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-start">
                        <div className="w-full md:w-[45%]">
                            <div className="border-t border-neutral-300 pt-4 mb-4">
                                <p className="text-right font-heading text-brand-button text-lg md:text-xl font-semibold">
                                    2017
                                </p>
                            </div>
                            <h3 className="font-heading text-brand text-base md:text-lg font-semibold mb-2">
                                Rebranded to BGCL & Opened Mowe Outlet
                            </h3>
                            <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                                Changed our name to BridgeGap Capital Ltd (BGCL) and expanded with our Mowe branch.
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-start md:justify-end">
                        <div className="w-full md:w-[45%]">
                            <div className="border-t border-neutral-300 pt-4 mb-4">
                                <p className="text-right font-heading text-brand-button text-lg md:text-xl font-semibold">
                                    2020
                                </p>
                            </div>
                            <h3 className="font-heading text-brand text-base md:text-lg font-semibold mb-2">
                                Opened Ikorodu Office
                            </h3>
                            <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                                Extended our reach with a new branch in Ikorodu to serve the growing community.
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-start">
                        <div className="w-full md:w-[45%]">
                            <div className="border-t border-neutral-300 pt-4 mb-4">
                                <p className="text-right font-heading text-brand-button text-lg md:text-xl font-semibold">
                                    2025
                                </p>
                            </div>
                            <h3 className="font-heading text-brand text-base md:text-lg font-semibold mb-2">
                                Opened Badagry Office
                            </h3>
                            <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                                Continued expansion with our Badagry branch, bringing our total to 4 outlets across Lagos State.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-10 mb-20">
                <div className="mb-12">
                    <h2 className="font-heading text-brand text-2xl md:text-3xl font-semibold">
                        Why Choose BridgeGap Capital?
                    </h2>
                    <p className="mt-2 text-base md:text-lg text-neutral-800">
                        Choose the financial partner that understands your needs
                    </p>
                </div>

                <div className="border-t border-neutral-300">
                    {[
                        {
                            number: "01",
                            title: "25+ Years of Experience",
                            description:
                                "With over two decades in the microfinance industry, we have the expertise and stability that comes from years of serving Nigerian communities.",
                        },
                        {
                            number: "02",
                            title: "Personal Relationship Banking",
                            description:
                                "Unlike digital-only lenders, we take time to know our customers personally. Our loan officers understand your business and provide tailored advice.",
                        },
                        {
                            number: "03",
                            title: "Flexible Loan Products",
                            description:
                                "Our loan products are designed with flexibility in mind—from bi-weekly repayments for traders to monthly schedules for salary earners.",
                        },
                        {
                            number: "04",
                            title: "Community Presence",
                            description:
                                "With multiple branches across Lagos, we are always accessible. Visit us in person for face-to-face service.",
                        },
                    ].map((item) => (
                        <div
                            key={item.number}
                            className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 border-b border-neutral-300"
                        >
                            <div className="md:col-span-2 text-brand-button text-base font-medium">
                                {item.number}
                            </div>
                            <div className="md:col-span-4">
                                <h3 className="text-brand text-lg md:text-xl font-semibold">
                                    {item.title}
                                </h3>
                            </div>
                            <div className="md:col-span-6 text-neutral-800 text-base leading-relaxed">
                                {item.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Stats />
            <Cta />
        </main>
    );
}