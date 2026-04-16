"use client";

import { useState } from "react";
import Link from "next/link";

type LoanType = "traders" | "corporate" | "business";

export function LoanApplicationForm() {
    const [loanType, setLoanType] = useState<LoanType>("traders");
    const [dropdownOpen, setDropdownOpen] = useState(false);


    return (
        <div className="rounded-3xl border border-neutral-300 bg-white p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-neutral-900 mb-2">
                        Full Name
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full rounded-full border border-neutral-300 bg-page px-5 py-3 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand transition-colors"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-neutral-900 mb-2">
                        Phone number
                    </label>
                    <input
                        type="tel"
                        placeholder="Enter your phone number"
                        className="w-full rounded-full border border-neutral-300 bg-page px-5 py-3 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand transition-colors"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-neutral-900 mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full rounded-full border border-neutral-300 bg-page px-5 py-3 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand transition-colors"
                    />
                </div>

                <div className="relative">
                    <label className="block text-sm font-medium text-neutral-900 mb-2">
                        Loan Type
                    </label>
                    <button
                        type="button"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="w-full rounded-full border border-neutral-300 bg-page px-5 py-3 text-base text-neutral-900 focus:outline-none focus:border-brand transition-colors text-left flex items-center justify-between"
                    >
                        <span>
                            {loanType === "traders"
                                ? "Traders Loan"
                                : loanType === "corporate"
                                    ? "Corporate Loan"
                                    : "Business Loan"}
                        </span>
                        <svg
                            className={`w-4 h-4 text-neutral-500 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""
                                }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {dropdownOpen && (
                        <>
                            <div
                                className="fixed inset-0 z-10"
                                onClick={() => setDropdownOpen(false)}
                            />
                            <div className="absolute z-20 mt-2 w-full rounded-2xl border border-neutral-300 bg-page overflow-hidden shadow-lg">
                                {[
                                    { value: "traders" as LoanType, label: "Traders Loan" },
                                    { value: "corporate" as LoanType, label: "Corporate Loan" },
                                    { value: "business" as LoanType, label: "Business Loan" },
                                ].map((option) => (
                                    <button
                                        key={option.value}
                                        type="button"
                                        onClick={() => {
                                            setLoanType(option.value);
                                            setDropdownOpen(false);
                                        }}
                                        className={`w-full px-5 py-3 text-left text-base transition-colors hover:bg-white ${loanType === option.value
                                                ? "text-brand font-medium bg-white"
                                                : "text-neutral-900"
                                            }`}
                                    >
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {loanType === "corporate" && (
                    <>
                        <div>
                            <label className="block text-sm font-medium text-neutral-900 mb-2">
                                Employer Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your employer's name"
                                className="w-full rounded-full border border-neutral-300 bg-page px-5 py-3 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand transition-colors"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-neutral-900 mb-2">
                                Monthly Salary
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your monthly salary"
                                className="w-full rounded-full border border-neutral-300 bg-page px-5 py-3 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand transition-colors"
                            />
                        </div>
                    </>
                )}

                {loanType === "business" && (
                    <>
                        <div>
                            <label className="block text-sm font-medium text-neutral-900 mb-2">
                                Business Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your business name"
                                className="w-full rounded-full border border-neutral-300 bg-page px-5 py-3 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand transition-colors"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-neutral-900 mb-2">
                                Business Registration (CAC) Number
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your CAC number"
                                className="w-full rounded-full border border-neutral-300 bg-page px-5 py-3 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand transition-colors"
                            />
                        </div>
                    </>
                )}

                <div>
                    <label className="block text-sm font-medium text-neutral-900 mb-2">
                        Loan Amount
                    </label>
                    <input
                        type="text"
                        placeholder="Enter desired loan amount"
                        className="w-full rounded-full border border-neutral-300 bg-page px-5 py-3 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand transition-colors"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-neutral-900 mb-2">
                        Repayment Period
                    </label>
                    <input
                        type="text"
                        placeholder="Enter repayment period"
                        className="w-full rounded-full border border-neutral-300 bg-page px-5 py-3 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand transition-colors"
                    />
                </div>

                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-neutral-900 mb-2">
                        Purpose of Loan
                    </label>
                    <textarea
                        placeholder="Enter intended purpose of loan"
                        rows={5}
                        className="w-full rounded-2xl border border-neutral-300 bg-page px-5 py-3 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand transition-colors resize-none"
                    />
                </div>
            </div>

            <div className="mt-8 flex flex-col items-center">
                <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full bg-brand-button px-12 py-3 text-white font-medium hover:bg-brand-button/90 transition-colors"
                >
                    Submit
                </button>
                <p className="mt-4 text-sm text-neutral-600 text-center">
                    By submitting this form you agree to our{" "}
                    <Link href="/terms" className="text-brand font-medium underline">
                        Terms of service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-brand font-medium underline">
                        Privacy policy
                    </Link>
                </p>
            </div>
        </div>
    );
}