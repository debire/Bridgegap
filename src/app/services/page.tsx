"use client";

import Image from "next/image";
import Link from "next/link";
import { LoanApplicationForm } from "@/components/loan-application-form";
import { Cta } from "@/components/cta";

export default function ServicesPage() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="bg-page min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-6">
        <h1 className="font-heading text-brand text-4xl md:text-5xl lg:text-6xl font-normal">
          Our Services
        </h1>
        <p className="mt-4 text-base md:text-lg text-neutral-800">
          Comprehensive financial solutions for individuals and businesses
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-16">
        <h2 className="font-heading text-brand text-xl md:text-2xl font-semibold mb-4">
          Our Products
        </h2>
        <p className="text-base md:text-lg text-neutral-800 leading-relaxed max-w-4xl">
          BridgeGap Capital Ltd is a group providing a diversified range of financial services. Our three core service divisions work together to address your complete financial needs—from expert advice and wealth management to accessible credit solutions.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-20">
        <div className="mb-6">
          <h3 className="font-heading text-brand text-xl md:text-2xl font-semibold">
            Financial Advisory
          </h3>
          <p className="mt-3 text-base text-neutral-800 leading-relaxed max-w-4xl">
            Making sound financial decisions requires expertise and insight. Our Financial Advisory service provides personalized guidance to help you navigate complex financial matters, plan for the future, and make informed decisions about your money.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
          <div className="relative w-full min-h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/images/advisory.jpg"
              alt="Financial Advisory"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h4 className="font-heading text-brand text-lg md:text-xl font-semibold mb-4">
              What We Offer
            </h4>
            <ul className="space-y-3 text-base text-neutral-800 leading-relaxed">
              <li>• Investment Advisory: Guidance on investment opportunities and strategies</li>
              <li>• Financial Planning: Comprehensive planning for short and long-term goals</li>
              <li>• Wealth Management Consultation: Strategies to grow and protect your wealth</li>
              <li>• Business Financial Consulting: Financial guidance for business owners</li>
              <li>• Retirement Planning: Preparing for a secure financial future</li>
            </ul>

            <h4 className="font-heading text-brand text-lg md:text-xl font-semibold mt-8 mb-4">
              Who Is This For?
            </h4>
            <ul className="space-y-3 text-base text-neutral-800 leading-relaxed">
              <li>• Individuals seeking to grow their wealth</li>
              <li>• Business owners needing financial guidance</li>
              <li>• Families planning for major life events</li>
              <li>• Anyone wanting expert financial advice</li>
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-button px-8 py-3 text-white font-medium hover:bg-brand-button/90 transition-colors mt-8"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-20">
        <div className="mb-6">
          <h3 className="font-heading text-brand text-xl md:text-2xl font-semibold">
            Micro Lending
          </h3>
          <p className="mt-3 text-base text-neutral-800 leading-relaxed max-w-4xl">
            Our Micro Lending division provides accessible financial products to those who need them most. We focus on financial inclusion, serving traders, employees, and small businesses with loan products designed for their specific needs.
          </p>
        </div>

        <div className="flex gap-8 border-b border-neutral-300 mb-12">
          <button
            onClick={() => scrollTo("traders-loans")}
            className="font-heading text-brand text-base md:text-lg font-semibold pb-3 border-b-2 border-brand hover:text-brand/80 transition-colors"
          >
            Traders Loans
          </button>
          <button
            onClick={() => scrollTo("corporate-loans")}
            className="font-heading text-neutral-500 text-base md:text-lg font-semibold pb-3 border-b-2 border-transparent hover:text-brand transition-colors"
          >
            Corporate Loans
          </button>
          <button
            onClick={() => scrollTo("business-loans")}
            className="font-heading text-neutral-500 text-base md:text-lg font-semibold pb-3 border-b-2 border-transparent hover:text-brand transition-colors"
          >
            Business Loans
          </button>
        </div>

        <div id="traders-loans" className="scroll-mt-28 mb-20">
          <div className="mb-6">
            <h4 className="font-heading text-brand text-xl md:text-2xl font-semibold">
              Traders Loans
            </h4>
            <p className="mt-3 text-base text-neutral-800 leading-relaxed max-w-4xl">
              Keep your business moving with quick access to working capital. Our Traders Loans are designed specifically for market traders who need funds to restock inventory and manage daily business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
            <div className="relative w-full min-h-[300px] rounded-xl overflow-hidden">
              <Image
                src="/images/traders.jpg"
                alt="Traders Loans"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h4 className="font-heading text-brand text-lg md:text-xl font-semibold mb-4">
                Key Features
              </h4>
              <ul className="space-y-3 text-base text-neutral-800 leading-relaxed">
                <li>• Purpose: Working capital for inventory and business operations</li>
                <li>• Target: Market traders and retail vendors</li>
                <li>• Loan Amount: From ₦100,000</li>
                <li>• Tenor: Up to 4 months</li>
                <li>• Repayment: Bi-weekly or weekly (flexible to match your cash flow)</li>
                <li>• Interest: Flat rate computation</li>
                <li>• Collateral: Guarantor, stock of goods, or household items</li>
              </ul>

              <h4 className="font-heading text-brand text-lg md:text-xl font-semibold mt-8 mb-4">
                Who Is This For?
              </h4>
              <ul className="space-y-3 text-base text-neutral-800 leading-relaxed">
                <li>• Market traders in Lagos and surrounding areas</li>
                <li>• Retail shop owners needing to restock inventory</li>
                <li>• Vendors who need flexible repayment matching their sales cycle</li>
              </ul>

              <button
                onClick={() => scrollTo("loan-application")}
                className="inline-flex items-center justify-center rounded-full bg-brand-button px-8 py-3 text-white font-medium hover:bg-brand-button/90 transition-colors mt-8"
              >
                Apply for Loan
              </button>
            </div>
          </div>
        </div>

        <div id="corporate-loans" className="scroll-mt-28 mb-20">
          <div className="mb-6">
            <h4 className="font-heading text-brand text-xl md:text-2xl font-semibold">
              Corporate Loans
            </h4>
            <p className="mt-3 text-base text-neutral-800 leading-relaxed max-w-4xl">
              As an employed individual, you may need funds for personal needs—family expenses, home improvements, education, or emergencies. Our Corporate Loans provide the financial support you need with convenient monthly repayments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
            <div>
              <h4 className="font-heading text-brand text-lg md:text-xl font-semibold mb-4">
                Key Features
              </h4>
              <ul className="space-y-3 text-base text-neutral-800 leading-relaxed">
                <li>• Purpose: Personal needs (family, education, emergencies, etc.)</li>
                <li>• Target: Employed individuals with regular salary</li>
                <li>• Loan Amount: From ₦200,000</li>
                <li>• Tenor: 6 to 8 months</li>
                <li>• Repayment: Monthly (aligned with salary schedule)</li>
                <li>• Interest: Reducing balance computation</li>
                <li>• Collateral: Guarantor and/or asset pledge</li>
              </ul>

              <h4 className="font-heading text-brand text-lg md:text-xl font-semibold mt-8 mb-4">
                Who Is This For?
              </h4>
              <ul className="space-y-3 text-base text-neutral-800 leading-relaxed">
                <li>• Salary earners in private or public sector employment</li>
                <li>• Employees needing funds for personal or family needs</li>
                <li>• Individuals who prefer predictable monthly repayments</li>
              </ul>

              <button
                onClick={() => scrollTo("loan-application")}
                className="inline-flex items-center justify-center rounded-full bg-brand-button px-8 py-3 text-white font-medium hover:bg-brand-button/90 transition-colors mt-8"
              >
                Apply for Loan
              </button>
            </div>

            <div className="relative w-full min-h-[300px] rounded-xl overflow-hidden">
              <Image
                src="/images/corporate.jpg"
                alt="Corporate Loans"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div id="business-loans" className="scroll-mt-28 mb-20">
          <div className="mb-6">
            <h4 className="font-heading text-brand text-xl md:text-2xl font-semibold">
              Business Loans
            </h4>
            <p className="mt-3 text-base text-neutral-800 leading-relaxed max-w-4xl">
              Take your business to the next level with our Business Loans. Whether you need funds for expansion, equipment purchase, or working capital, we provide the financial support that growing SMEs need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
            <div className="relative w-full min-h-[300px] rounded-xl overflow-hidden">
              <Image
                src="/images/business.jpg"
                alt="Business Loans"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h4 className="font-heading text-brand text-lg md:text-xl font-semibold mb-4">
                Key Features
              </h4>
              <ul className="space-y-3 text-base text-neutral-800 leading-relaxed">
                <li>• Purpose: Working capital, capital expenditure (CAPEX), business expansion</li>
                <li>• Target: Small and Medium Enterprises (SMEs)</li>
                <li>• Loan Amount: From ₦500,000</li>
                <li>• Tenor: 6 to 8 months</li>
                <li>• Repayment: Monthly</li>
                <li>• Interest: Reducing balance computation</li>
                <li>• Collateral: Guarantor and asset pledge</li>
              </ul>

              <h4 className="font-heading text-brand text-lg md:text-xl font-semibold mt-8 mb-4">
                Who Is This For?
              </h4>
              <ul className="space-y-3 text-base text-neutral-800 leading-relaxed">
                <li>• Established small and medium businesses</li>
                <li>• Business owners looking to expand operations</li>
                <li>• Entrepreneurs needing equipment or working capital</li>
              </ul>

              <button
                onClick={() => scrollTo("loan-application")}
                className="inline-flex items-center justify-center rounded-full bg-brand-button px-8 py-3 text-white font-medium hover:bg-brand-button/90 transition-colors mt-8"
              >
                Apply for Loan
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-20">
        <div className="mb-6">
          <h3 className="font-heading text-brand text-xl md:text-2xl font-semibold">
            Asset Management
          </h3>
          <p className="mt-3 text-base text-neutral-800 leading-relaxed max-w-4xl">
            Trust your assets to experienced professionals. Our Asset Management service provides expert oversight of your investments and assets, working to maximize returns while managing risk according to your goals and risk tolerance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
          <div>
            <h4 className="font-heading text-brand text-lg md:text-xl font-semibold mb-4">
              What We Offer
            </h4>
            <ul className="space-y-3 text-base text-neutral-800 leading-relaxed">
              <li>• Portfolio Management: Professional management of your investment portfolio</li>
              <li>• Asset Allocation: Strategic distribution of assets for optimal performance</li>
              <li>• Risk Management: Protecting your wealth through diversification</li>
              <li>• Performance Monitoring: Regular review and reporting on your assets</li>
              <li>• Estate Planning Support: Helping you plan for wealth transfer</li>
            </ul>

            <h4 className="font-heading text-brand text-lg md:text-xl font-semibold mt-8 mb-4">
              Who Is This For?
            </h4>
            <ul className="space-y-3 text-base text-neutral-800 leading-relaxed">
              <li>• High-net-worth individuals</li>
              <li>• Business owners with investable assets</li>
              <li>• Families seeking professional wealth management</li>
              <li>• Anyone wanting expert management of their assets</li>
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-button px-8 py-3 text-white font-medium hover:bg-brand-button/90 transition-colors mt-8"
            >
              Schedule a Consultation
            </Link>
          </div>

          <div className="relative w-full min-h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/images/asset.jpg"
              alt="Asset Management"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-20">
        <h3 className="font-heading text-brand text-xl md:text-2xl font-semibold">
          General Loan Eligibility Requirements
        </h3>
        <p className="mt-3 text-base text-neutral-800 leading-relaxed">
          To apply for any of our loan products, you generally need:
        </p>
        <ul className="mt-6 space-y-4 text-base text-neutral-800 leading-relaxed">
          <li>• Be a Nigerian citizen or legal resident</li>
          <li>• Have a verifiable source of income (business revenue or salary)</li>
          <li>• Provide valid identification</li>
          <li>• Have a guarantor willing to stand for your loan</li>
          <li>• Meet product-specific collateral requirements</li>
        </ul>
      </div>
      <div id="loan-application" className="scroll-mt-28 max-w-7xl mx-auto px-6 md:px-10 mb-20">
        <div className="mb-6">
          <h3 className="font-heading text-brand text-xl md:text-2xl font-semibold">
            Loan Application Form
          </h3>
          <p className="mt-3 text-base text-neutral-800 leading-relaxed">
            Complete the form below to apply for a loan. Our team will contact you within 24–48 hours.
          </p>
        </div>

        <LoanApplicationForm />
      </div>
      <Cta />
    </main>
  );
}