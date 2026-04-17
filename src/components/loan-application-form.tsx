// "use client";

// import { useState } from "react";
// import Link from "next/link";

// type LoanType = "traders" | "corporate" | "business";

// export function LoanApplicationForm() {
//     const [loanType, setLoanType] = useState<LoanType>("traders");
//     const [dropdownOpen, setDropdownOpen] = useState(false);


//     return (
//         <div className="rounded-3xl border border-neutral-300 bg-white p-6 md:p-10">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                     <label className="block text-sm font-medium text-neutral-900 mb-2">
//                         Full Name
//                     </label>
//                     <input
//                         type="text"
//                         placeholder="Enter your full name"
//                         className="w-full rounded-full border border-neutral-300 bg-page px-5 py-3 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand transition-colors"
//                     />
//                 </div>

//                 <div>
//                     <label className="block text-sm font-medium text-neutral-900 mb-2">
//                         Phone number
//                     </label>
//                     <input
//                         type="tel"
//                         placeholder="Enter your phone number"
//                         className="w-full rounded-full border border-neutral-300 bg-page px-5 py-3 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand transition-colors"
//                     />
//                 </div>

//                 <div>
//                     <label className="block text-sm font-medium text-neutral-900 mb-2">
//                         Email
//                     </label>
//                     <input
//                         type="email"
//                         placeholder="Enter your email address"
//                         className="w-full rounded-full border border-neutral-300 bg-page px-5 py-3 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand transition-colors"
//                     />
//                 </div>

//                 <div className="relative">
//                     <label className="block text-sm font-medium text-neutral-900 mb-2">
//                         Loan Type
//                     </label>
//                     <button
//                         type="button"
//                         onClick={() => setDropdownOpen(!dropdownOpen)}
//                         className="w-full rounded-full border border-neutral-300 bg-page px-5 py-3 text-base text-neutral-900 focus:outline-none focus:border-brand transition-colors text-left flex items-center justify-between"
//                     >
//                         <span>
//                             {loanType === "traders"
//                                 ? "Traders Loan"
//                                 : loanType === "corporate"
//                                     ? "Corporate Loan"
//                                     : "Business Loan"}
//                         </span>
//                         <svg
//                             className={`w-4 h-4 text-neutral-500 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""
//                                 }`}
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                         >
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                         </svg>
//                     </button>

//                     {dropdownOpen && (
//                         <>
//                             <div
//                                 className="fixed inset-0 z-10"
//                                 onClick={() => setDropdownOpen(false)}
//                             />
//                             <div className="absolute z-20 mt-2 w-full rounded-2xl border border-neutral-300 bg-page overflow-hidden shadow-lg">
//                                 {[
//                                     { value: "traders" as LoanType, label: "Traders Loan" },
//                                     { value: "corporate" as LoanType, label: "Corporate Loan" },
//                                     { value: "business" as LoanType, label: "Business Loan" },
//                                 ].map((option) => (
//                                     <button
//                                         key={option.value}
//                                         type="button"
//                                         onClick={() => {
//                                             setLoanType(option.value);
//                                             setDropdownOpen(false);
//                                         }}
//                                         className={`w-full px-5 py-3 text-left text-base transition-colors hover:bg-white ${loanType === option.value
//                                                 ? "text-brand font-medium bg-white"
//                                                 : "text-neutral-900"
//                                             }`}
//                                     >
//                                         {option.label}
//                                     </button>
//                                 ))}
//                             </div>
//                         </>
//                     )}
//                 </div>

//                 {loanType === "corporate" && (
//                     <>
//                         <div>
//                             <label className="block text-sm font-medium text-neutral-900 mb-2">
//                                 Employer Name
//                             </label>
//                             <input
//                                 type="text"
//                                 placeholder="Enter your employer's name"
//                                 className="w-full rounded-full border border-neutral-300 bg-page px-5 py-3 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand transition-colors"
//                             />
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-neutral-900 mb-2">
//                                 Monthly Salary
//                             </label>
//                             <input
//                                 type="text"
//                                 placeholder="Enter your monthly salary"
//                                 className="w-full rounded-full border border-neutral-300 bg-page px-5 py-3 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand transition-colors"
//                             />
//                         </div>
//                     </>
//                 )}

//                 {loanType === "business" && (
//                     <>
//                         <div>
//                             <label className="block text-sm font-medium text-neutral-900 mb-2">
//                                 Business Name
//                             </label>
//                             <input
//                                 type="text"
//                                 placeholder="Enter your business name"
//                                 className="w-full rounded-full border border-neutral-300 bg-page px-5 py-3 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand transition-colors"
//                             />
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-neutral-900 mb-2">
//                                 Business Registration (CAC) Number
//                             </label>
//                             <input
//                                 type="text"
//                                 placeholder="Enter your CAC number"
//                                 className="w-full rounded-full border border-neutral-300 bg-page px-5 py-3 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand transition-colors"
//                             />
//                         </div>
//                     </>
//                 )}

//                 <div>
//                     <label className="block text-sm font-medium text-neutral-900 mb-2">
//                         Loan Amount
//                     </label>
//                     <input
//                         type="text"
//                         placeholder="Enter desired loan amount"
//                         className="w-full rounded-full border border-neutral-300 bg-page px-5 py-3 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand transition-colors"
//                     />
//                 </div>

//                 <div>
//                     <label className="block text-sm font-medium text-neutral-900 mb-2">
//                         Repayment Period
//                     </label>
//                     <input
//                         type="text"
//                         placeholder="Enter repayment period"
//                         className="w-full rounded-full border border-neutral-300 bg-page px-5 py-3 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand transition-colors"
//                     />
//                 </div>

//                 <div className="md:col-span-2">
//                     <label className="block text-sm font-medium text-neutral-900 mb-2">
//                         Purpose of Loan
//                     </label>
//                     <textarea
//                         placeholder="Enter intended purpose of loan"
//                         rows={5}
//                         className="w-full rounded-2xl border border-neutral-300 bg-page px-5 py-3 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand transition-colors resize-none"
//                     />
//                 </div>
//             </div>

//             <div className="mt-8 flex flex-col items-center">
//                 <button
//                     type="button"
//                     className="inline-flex items-center justify-center rounded-full bg-brand-button px-12 py-3 text-white font-medium hover:bg-brand-button/90 transition-colors"
//                 >
//                     Submit
//                 </button>
//                 <p className="mt-4 text-sm text-neutral-600 text-center">
//                     By submitting this form you agree to our{" "}
//                     <Link href="/terms" className="text-brand font-medium underline">
//                         Terms of service
//                     </Link>{" "}
//                     and{" "}
//                     <Link href="/privacy" className="text-brand font-medium underline">
//                         Privacy policy
//                     </Link>
//                 </p>
//             </div>
//         </div>
//     );
// }


"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loanApplicationSchema, type LoanApplicationInput } from "@/lib/validations";
import { submitLoanApplication } from "@/lib/actions";

type LoanType = "traders" | "corporate" | "business";

export function LoanApplicationForm() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; error?: string } | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<LoanApplicationInput>({
    resolver: zodResolver(loanApplicationSchema),
    defaultValues: { loanType: "traders" },
  });

  const loanType = watch("loanType") as LoanType;

  const onSubmit = async (data: LoanApplicationInput) => {
    setSubmitting(true);
    setSubmitResult(null);
    const result = await submitLoanApplication(data);
    setSubmitResult(result);
    setSubmitting(false);
    if (result.success) {
      reset();
    }
  };

  const inputClass = (error?: boolean) =>
    `w-full rounded-full border ${error ? "border-red-500" : "border-neutral-300"} bg-page px-5 py-3 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand transition-colors`;

  return (
    <div className="rounded-3xl border border-neutral-300 bg-white p-6 md:p-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-neutral-900 mb-2">Full Name</label>
            <input {...register("fullName")} type="text" placeholder="Enter your full name" className={inputClass(!!errors.fullName)} />
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-neutral-900 mb-2">Phone number</label>
            <input {...register("phone")} type="tel" placeholder="Enter your phone number" className={inputClass(!!errors.phone)} />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-neutral-900 mb-2">Email</label>
            <input {...register("email")} type="email" placeholder="Enter your email address" className={inputClass(!!errors.email)} />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Loan Type */}
          <div className="relative">
            <label className="block text-sm font-medium text-neutral-900 mb-2">Loan Type</label>
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full rounded-full border border-neutral-300 bg-page px-5 py-3 text-base text-neutral-900 focus:outline-none focus:border-brand transition-colors text-left flex items-center justify-between"
            >
              <span>
                {loanType === "traders" ? "Traders Loan" : loanType === "corporate" ? "Corporate Loan" : "Business Loan"}
              </span>
              <svg className={`w-4 h-4 text-neutral-500 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setDropdownOpen(false)} />
                <div className="absolute z-20 mt-2 w-full rounded-2xl border border-neutral-300 bg-page overflow-hidden shadow-lg">
                  {([
                    { value: "traders" as const, label: "Traders Loan" },
                    { value: "corporate" as const, label: "Corporate Loan" },
                    { value: "business" as const, label: "Business Loan" },
                  ]).map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => {
                        setValue("loanType", option.value);
                        setDropdownOpen(false);
                      }}
                      className={`w-full px-5 py-3 text-left text-base transition-colors hover:bg-white ${loanType === option.value ? "text-brand font-medium bg-white" : "text-neutral-900"}`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Corporate fields */}
          {loanType === "corporate" && (
            <>
              <div>
                <label className="block text-sm font-medium text-neutral-900 mb-2">Employer Name</label>
                <input {...register("employerName")} type="text" placeholder="Enter your employer's name" className={inputClass(!!errors.employerName)} />
                {errors.employerName && <p className="text-red-500 text-sm mt-1">{errors.employerName.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-900 mb-2">Monthly Salary</label>
                <input {...register("monthlySalary")} type="text" placeholder="Enter your monthly salary" className={inputClass(!!errors.monthlySalary)} />
              </div>
            </>
          )}

          {/* Business fields */}
          {loanType === "business" && (
            <>
              <div>
                <label className="block text-sm font-medium text-neutral-900 mb-2">Business Name</label>
                <input {...register("businessName")} type="text" placeholder="Enter your business name" className={inputClass(!!errors.businessName)} />
                {errors.businessName && <p className="text-red-500 text-sm mt-1">{errors.businessName.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-900 mb-2">Business Registration (CAC) Number</label>
                <input {...register("cacNumber")} type="text" placeholder="Enter your CAC number" className={inputClass(!!errors.cacNumber)} />
              </div>
            </>
          )}

          {/* Loan Amount */}
          <div>
            <label className="block text-sm font-medium text-neutral-900 mb-2">Loan Amount</label>
            <input {...register("loanAmount")} type="text" placeholder="Enter desired loan amount" className={inputClass(!!errors.loanAmount)} />
            {errors.loanAmount && <p className="text-red-500 text-sm mt-1">{errors.loanAmount.message}</p>}
          </div>

          {/* Repayment Period */}
          <div>
            <label className="block text-sm font-medium text-neutral-900 mb-2">Repayment Period</label>
            <input {...register("repaymentPeriod")} type="text" placeholder="Enter repayment period" className={inputClass(!!errors.repaymentPeriod)} />
            {errors.repaymentPeriod && <p className="text-red-500 text-sm mt-1">{errors.repaymentPeriod.message}</p>}
          </div>

          {/* Purpose */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-neutral-900 mb-2">Purpose of Loan</label>
            <textarea {...register("purpose")} placeholder="Enter intended purpose of loan" rows={5} className="w-full rounded-2xl border border-neutral-300 bg-page px-5 py-3 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand transition-colors resize-none" />
            {errors.purpose && <p className="text-red-500 text-sm mt-1">{errors.purpose.message}</p>}
          </div>
        </div>

        {/* Submit */}
        <div className="mt-8 flex flex-col items-center">
          {submitResult && (
            <div className={`mb-4 w-full text-center p-3 rounded-xl ${submitResult.success ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
              {submitResult.success ? "Application submitted successfully! We'll contact you within 24–48 hours." : submitResult.error}
            </div>
          )}
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center justify-center rounded-full bg-brand-button px-12 py-3 text-white font-medium hover:bg-brand-button/90 transition-colors disabled:opacity-50"
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
          <p className="mt-4 text-sm text-neutral-600 text-center">
            By submitting this form you agree to our{" "}
            <Link href="/terms" className="text-brand font-medium underline">Terms of service</Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-brand font-medium underline">Privacy policy</Link>
          </p>
        </div>
      </form>
    </div>
  );
}