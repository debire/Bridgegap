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
];

export function Faq() {
  return (
    <section className="w-full bg-page pt-4 md:pt-6 pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-10">
        <h2 className="font-heading text-brand text-2xl md:text-3xl font-semibold">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-base md:text-lg text-neutral-800">
          Find answers to common questions about our loan services
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="border-t border-neutral-300"
        >
          {faqs.map((faq, index) => (
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

        <div className="mt-12 flex justify-center">
          <Link
            href="/faq"
            className="inline-flex items-center justify-center rounded-full bg-brand-button px-8 py-3 text-white font-medium hover:bg-brand-button/90 transition-colors"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}