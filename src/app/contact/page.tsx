// "use client";

// import { useState } from "react";
// import Link from "next/link";

// export default function ContactPage() {
//     const [message, setMessage] = useState("");
//     const maxLength = 100;

//     return (
//         <main className="bg-page min-h-screen pt-28 pb-20">
//             <div className="max-w-7xl mx-auto px-6 md:px-10">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
//                     <div>
//                         <h1 className="font-heading text-brand text-4xl md:text-5xl lg:text-6xl font-normal">
//                             Contact Us
//                         </h1>
//                         <p className="mt-4 text-base text-neutral-800 leading-relaxed max-w-sm">
//                             Email, call or complete the form to learn how to we can help with your financial needs.
//                         </p>

//                         <div className="mt-8 space-y-3 text-base text-neutral-900">
//                             <p>+234 8026071375</p>
//                             <p>+234 8028310715</p>
//                             <p>+234 8069456682</p>
//                         </div>

//                         <div className="mt-10 md:mt-40 grid grid-cols-1 md:grid-cols-2 gap-8">
//                             <div>
//                                 <h3 className="font-heading text-brand text-base md:text-lg font-semibold mb-2">
//                                     Customer Support
//                                 </h3>
//                                 <p className="text-sm text-neutral-700 leading-relaxed">
//                                     Our support team is available around the clock to address any concerns or queries you may have.
//                                 </p>
//                             </div>
//                             <div>
//                                 <h3 className="font-heading text-brand text-base md:text-lg font-semibold mb-2">
//                                     Feedback and Suggestions
//                                 </h3>
//                                 <p className="text-sm text-neutral-700 leading-relaxed">
//                                     We value your feedback and are continuously working to improve BridgeGap. Your input is crucial in shaping the future of BridgeGap.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="bg-white rounded-3xl p-3 md:p-6 shadow-sm h-fit">
//                         <h2 className="font-heading text-brand text-3xl md:text-4xl font-normal">
//                             Get in Touch
//                         </h2>
//                         <p className="mt-2 text-base text-neutral-600">
//                             You can reach us anytime
//                         </p>

//                         <div className="mt-5 space-y-6">
//                             {/* Name row */}
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                 <input
//                                     type="text"
//                                     placeholder="First name"
//                                     className="w-full rounded-full border border-neutral-300 bg-page px-5 py-3 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand transition-colors"
//                                 />
//                                 <input
//                                     type="text"
//                                     placeholder="Last name"
//                                     className="w-full rounded-full border border-neutral-300 bg-page px-5 py-3 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand transition-colors"
//                                 />
//                             </div>

//                             <input
//                                 type="email"
//                                 placeholder="Email"
//                                 className="w-full rounded-full border border-neutral-300 bg-page px-5 py-3 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand transition-colors"
//                             />

//                             <input
//                                 type="tel"
//                                 placeholder="Phone number"
//                                 className="w-full rounded-full border border-neutral-300 bg-page px-5 py-3 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand transition-colors"
//                             />

//                             <div className="relative">
//                                 <textarea
//                                     placeholder="How can we help?"
//                                     rows={6}
//                                     maxLength={maxLength}
//                                     value={message}
//                                     onChange={(e) => setMessage(e.target.value)}
//                                     className="w-full rounded-2xl border border-neutral-300 bg-page px-5 py-3 pb-8 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand transition-colors resize-none"
//                                 />
//                                 <span className="absolute bottom-3 right-4 text-sm text-neutral-400">
//                                     {message.length}/{maxLength}
//                                 </span>
//                             </div>

//                             <button
//                                 type="button"
//                                 className="w-full rounded-full bg-brand-button py-3 text-white font-medium hover:bg-brand-button/90 transition-colors"
//                             >
//                                 Submit
//                             </button>

//                             <p className="text-sm text-neutral-600 text-center">
//                                 By contacting us you agree to our{" "}
//                                 <Link href="/terms" className="text-brand font-semibold underline">
//                                     Terms of service
//                                 </Link>{" "}
//                                 and{" "}
//                                 <Link href="/privacy" className="text-brand font-semibold underline">
//                                     Privacy policy
//                                 </Link>
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="max-w-7xl mx-auto px-6 md:px-10 mt-20">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//                     <div className="rounded-2xl overflow-hidden h-80 md:h-auto">
//                         <iframe
//                             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0209207355992!2d3.35766357366702!3d6.519035093473477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c49f562b2d1%3A0xb5a48000b02daaa4!2s3%20Eniola%20St%2C%20Idi%20Oro%2C%20Lagos%20102215%2C%20Lagos!5e0!3m2!1sen!2sng!4v1776363078240!5m2!1sen!2sng"
//                             width="100%"
//                             height="100%"
//                             style={{ border: 0, minHeight: "400px" }}
//                             allowFullScreen
//                             loading="lazy"
//                             referrerPolicy="no-referrer-when-downgrade"
//                             title="BridgeGap Capital Office Location"
//                         />
//                     </div>

//                     <div className="flex flex-col justify-center">
//                         <p className="font-heading text-brand text-sm md:text-base font-semibold uppercase tracking-wide">
//                             Our Location
//                         </p>

//                         <h2 className="font-heading text-brand text-2xl md:text-3xl lg:text-4xl font-normal mt-4">
//                             Connecting Near and Far
//                         </h2>

//                         <div className="mt-6 text-base text-neutral-800 leading-relaxed space-y-1">
//                             <p>3, Eniola Street</p>
//                             <p>off Olaniyi Street, Idi – Oro</p>
//                             <p>Mushin</p>
//                             <p>Lagos</p>
//                         </div>

//                         <p className="mt-2 text-base text-neutral-800">
//                             8am – 5pm, Monday to Friday
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </main>
//     );
// }




"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactInput } from "@/lib/validations";
import { submitContactForm } from "@/lib/actions";

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; error?: string } | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });

  const message = watch("message", "");
  const maxLength = 100;

  const onSubmit = async (data: ContactInput) => {
    setSubmitting(true);
    setSubmitResult(null);
    const result = await submitContactForm(data);
    setSubmitResult(result);
    setSubmitting(false);
    if (result.success) {
      reset();
    }
  };

  const inputClass = (error?: boolean) =>
    `w-full rounded-full border ${error ? "border-red-500" : "border-neutral-300"} bg-page px-5 py-3 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand transition-colors`;

  return (
    <main className="bg-page min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left column - Contact info */}
          <div>
            <h1 className="font-heading text-brand text-4xl md:text-5xl lg:text-6xl font-normal">
              Contact Us
            </h1>
            <p className="mt-4 text-base text-neutral-800 leading-relaxed max-w-sm">
              Email, call or complete the form to learn how to we can help with your financial needs.
            </p>

            <div className="mt-8 space-y-3 text-base text-neutral-900">
              <p>+234 8026071375</p>
              <p>+234 8028310715</p>
              <p>+234 8069456682</p>
            </div>

            <div className="mt-10 md:mt-40 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading text-brand text-base md:text-lg font-semibold mb-2">
                  Customer Support
                </h3>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  Our support team is available around the clock to address any concerns or queries you may have.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-brand text-base md:text-lg font-semibold mb-2">
                  Feedback and Suggestions
                </h3>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  We value your feedback and are continuously working to improve BridgeGap. Your input is crucial in shaping the future of BridgeGap.
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Contact form */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm h-fit">
            <h2 className="font-heading text-brand text-3xl md:text-4xl font-normal">
              Get in Touch
            </h2>
            <p className="mt-2 text-base text-neutral-600">
              You can reach us anytime
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input {...register("firstName")} type="text" placeholder="First name" className={inputClass(!!errors.firstName)} />
                  {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                </div>
                <div>
                  <input {...register("lastName")} type="text" placeholder="Last name" className={inputClass(!!errors.lastName)} />
                  {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                </div>
              </div>

              <div>
                <input {...register("email")} type="email" placeholder="Email" className={inputClass(!!errors.email)} />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <input {...register("phone")} type="tel" placeholder="Phone number" className={inputClass(!!errors.phone)} />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </div>

              <div className="relative">
                <textarea
                  {...register("message")}
                  placeholder="How can we help?"
                  rows={6}
                  maxLength={maxLength}
                  className="w-full rounded-2xl border border-neutral-300 bg-page px-5 py-3 pb-8 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand transition-colors resize-none"
                />
                <span className="absolute bottom-3 right-4 text-sm text-neutral-400">
                  {message?.length || 0}/{maxLength}
                </span>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              {submitResult && (
                <div
                  className={`text-center p-4 rounded-xl ${submitResult.success
                      ? "bg-brand/10 text-brand"
                      : "bg-brand-button/10 text-brand-button"
                    }`}
                >
                  {submitResult.success
                    ? "Message sent successfully! We'll get back to you soon."
                    : submitResult.error}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-full bg-brand-button py-3 text-white font-medium hover:bg-brand-button/90 transition-colors disabled:opacity-50"
              >
                {submitting ? "Sending..." : "Submit"}
              </button>

              <p className="text-sm text-neutral-600 text-center">
                By contacting us you agree to our{" "}
                <Link href="/terms" className="text-brand font-semibold underline">Terms of service</Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-brand font-semibold underline">Privacy policy</Link>
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Our Location section stays the same */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="rounded-2xl overflow-hidden h-80 md:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0209207355992!2d3.35766357366702!3d6.519035093473477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c49f562b2d1%3A0xb5a48000b02daaa4!2s3%20Eniola%20St%2C%20Idi%20Oro%2C%20Lagos%20102215%2C%20Lagos!5e0!3m2!1sen!2sng!4v1776363078240!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BridgeGap Capital Office Location"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-heading text-brand text-sm md:text-base font-semibold uppercase tracking-wide">Our Location</p>
            <h2 className="font-heading text-brand text-3xl md:text-4xl lg:text-5xl font-normal mt-4">Connecting Near and Far</h2>
            <div className="mt-8 text-base text-neutral-800 leading-relaxed space-y-1">
              <p>3, Eniola Street</p>
              <p>off Olaniyi Street, Idi – Oro</p>
              <p>Mushin</p>
              <p>Lagos</p>
            </div>
            <p className="mt-6 text-base text-neutral-800">8am – 5pm, Monday to Friday</p>
          </div>
        </div>
      </div>
    </main>
  );
}