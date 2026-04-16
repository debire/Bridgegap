"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Who is eligible to apply for a loan?",
        answer:
            "To qualify for a loan, you must be a Nigerian citizen aged 18–60 years, have a valid Bank Verification Number (BVN), maintain an active bank account, and have a verifiable source of income (salary, business revenue, or regular income). Both salaried employees and business owners can apply.",
    },
    {
        question: "How quickly can I get my loan?",
        answer:
            "Once your application is submitted with all required documents, our review process typically takes 48 to 72 hours. Approved loans are disbursed directly to your bank account within one business day of approval, so most applicants receive funds within 3 to 5 working days.",
    },
    {
        question: "How much can I borrow?",
        answer:
            "Loan amounts range from ₦50,000 for first-time traders' loans up to ₦10,000,000 for established corporate clients. The amount you qualify for depends on your loan type, income level, business history, and repayment capacity as assessed during our review.",
    },
    {
        question: "What documents do I need to apply?",
        answer:
            "You will need a valid means of identification (National ID, Driver's License, or International Passport), proof of address (recent utility bill), BVN, recent bank statements (last 3–6 months), and for business loans, your CAC registration documents. Additional documents may be requested depending on your loan type.",
    },
    {
        question: "Do I need a guarantor or collateral?",
        answer:
            "Collateral and guarantor requirements vary by loan type and amount. Smaller traders' loans typically require one or two guarantors with verifiable income, while larger business and corporate loans may require collateral such as property, inventory, or other tangible assets. Our loan officers will guide you through the specific requirements during your application.",
    },
    {
        question: "What types of loans does BridgeGap Capital offer?",
        answer:
            "We offer three main loan products: Traders' Loans designed for market traders and small-scale vendors, Business Loans for SMEs looking to expand operations or manage cash flow, and Corporate Loans for established companies seeking larger capital for strategic growth and investment.",
    },
    {
        question: "What are the interest rates on your loans?",
        answer:
            "Our interest rates are competitive and vary depending on the loan product, amount, and tenure. Rates are clearly communicated before you sign any agreement, so there are no hidden charges. Visit any of our branches or speak with a loan officer for a detailed rate schedule tailored to your needs.",
    },
    {
        question: "Can I repay my loan early without penalties?",
        answer:
            "Yes, we encourage early repayment. There are no penalties for settling your loan before the agreed tenure. Early repayment can also improve your credit profile with us, making it easier and faster to access larger loans in the future.",
    },
    {
        question: "What happens if I miss a repayment?",
        answer:
            "If you anticipate difficulty making a payment, we encourage you to contact us immediately. Late payments may attract additional charges as outlined in your loan agreement. We work with customers to find manageable repayment solutions, but consistent defaults may affect your eligibility for future loans.",
    },
    {
        question: "How do I check my loan balance or repayment schedule?",
        answer:
            "You can check your loan balance and upcoming repayment dates by visiting any of our branches or contacting our customer service team by phone. We also send periodic reminders via SMS to help you stay on track with your payments.",
    },
    {
        question: "Can I apply for a second loan while repaying an existing one?",
        answer:
            "In most cases, you will need to fully repay your current loan before applying for a new one. However, loyal customers with a strong repayment history may be eligible for top-up loans or refinancing options. Speak with your loan officer to explore available options.",
    },
    {
        question: "Do you offer loans to new businesses without trading history?",
        answer:
            "We understand that new businesses need support too. While a trading history strengthens your application, we evaluate new business applications based on your business plan, personal income, guarantor strength, and other factors. Our loan officers can advise you on the best path forward.",
    },
    {
        question: "What is the maximum loan tenure?",
        answer:
            "Loan tenures vary by product. Traders' loans typically run from 3 to 12 months, business loans from 6 to 24 months, and corporate loans can extend up to 36 months depending on the amount and purpose. Longer tenures mean smaller monthly repayments but more total interest paid.",
    },
    {
        question: "Are there any upfront fees to apply for a loan?",
        answer:
            "There are no application fees to submit a loan request. However, standard processing and administrative fees apply upon approval and are clearly disclosed before you accept the loan offer. We never charge hidden fees at any stage of the process.",
    },
    {
        question: "How do I apply for a loan?",
        answer:
            "You can apply by visiting any of our branches in Lagos, Ikorodu, or Badagry with the required documents. Alternatively, you can begin your application online through our website and a loan officer will contact you to complete the process.",
    },
    {
        question: "What is the Financial Advisory service?",
        answer:
            "Our Financial Advisory service provides personalized guidance on managing your finances, planning investments, and making informed decisions about savings and credit. Whether you are an individual or a business owner, our advisors help you build a solid financial foundation for the future.",
    },
    {
        question: "What does Asset Management include?",
        answer:
            "Our Asset Management service helps individuals and businesses manage, protect, and grow their assets. This includes investment portfolio guidance, property advisory, and strategic planning to ensure your assets are working effectively toward your financial goals.",
    },
    {
        question: "Where are your branches located?",
        answer:
            "We currently operate branches in Lagos (Mushin), Ikorodu, and Badagry. All branches are open during standard business hours, Monday to Friday. Visit us for in-person consultations, loan applications, or any customer service needs.",
    },
    {
        question: "How can I contact BridgeGap Capital?",
        answer:
            "You can reach us by phone at +234 8026071375 during business hours, visit any of our three branches, or use the contact form on our website. Our team typically responds to online enquiries within 24 hours.",
    },
    {
        question: "Is my personal information safe with BridgeGap Capital?",
        answer:
            "Absolutely. We take data protection seriously and comply with the Nigeria Data Protection Regulation (NDPR). Your personal and financial information is stored securely and is never shared with third parties without your explicit consent, except where required by law.",
    },
];

const ITEMS_PER_PAGE = 10;

export default function FaqPage() {
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
    const [searchQuery, setSearchQuery] = useState("");

    const filteredFaqs = faqs.filter(
        (faq) =>
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const visibleFaqs = filteredFaqs.slice(0, visibleCount);
    const hasMore = visibleCount < filteredFaqs.length;

    return (
        <main className="bg-page min-h-screen pt-28 pb-20">
            <div className="max-w-7xl mx-auto px-6 md:px-10 mb-10">
                <h1 className="font-heading text-brand text-4xl md:text-5xl lg:text-6xl font-normal">
                    Frequently Asked Questions
                </h1>
                <p className="mt-4 text-base md:text-lg text-neutral-800">
                    Find answers to common questions about our services
                </p>
            </div>

            <div className="max-w-5xl mx-auto px-6 md:px-10">
                {/* Search */}
                <div className="mb-10">
                    <input
                        type="text"
                        placeholder="What can we help you with?"
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            setVisibleCount(ITEMS_PER_PAGE);
                        }}
                        className="w-full rounded-full border border-neutral-300 bg-page px-6 py-4 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand transition-colors"
                    />
                </div>

                <Accordion
                    type="single"
                    collapsible
                    defaultValue="item-0"
                    className="border-t border-neutral-300"
                >
                    {visibleFaqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="border-b border-neutral-300"
                        >
                            <AccordionTrigger className="py-6 text-left text-base md:text-lg font-medium text-neutral-900 hover:no-underline">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="pb-6 text-base text-neutral-700 leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                {filteredFaqs.length === 0 && (
                    <p className="py-10 text-center text-neutral-500">
                        No questions found matching your search. Try a different keyword.
                    </p>
                )}

                {hasMore && (
                    <div className="mt-12 flex justify-center">
                        <button
                            onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
                            className="inline-flex items-center justify-center rounded-full bg-brand-button px-8 py-3 text-white font-medium hover:bg-brand-button/90 transition-colors"
                        >
                            Load More
                        </button>
                    </div>
                )}

                <div className="mt-16">
                    <h2 className="font-heading text-brand text-xl md:text-2xl font-semibold">
                        Didn&apos;t Find Your Answer?
                    </h2>
                    <p className="mt-2 text-base text-neutral-800 leading-relaxed">
                        Our team is available during working hours to help with any questions.
                        <br />
                        Contact us directly or visit any of our branches for personalized assistance.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-full bg-brand-button px-6 py-2.5 text-white font-medium hover:bg-brand-button/90 transition-colors mt-6"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </main>
    );
}