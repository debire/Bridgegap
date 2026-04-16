import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const products = [
  { label: "Financial Advisory", href: "/services" },
  { label: "Micro Lending", href: "/services" },
  { label: "Apply now", href: "/loan-application" },
];

const legal = [
  { label: "Terms & Condition", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

export function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-brand py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            <div>
              <Link href="/">
                <Image
                  src="/images/logo.svg"
                  alt="Bridge Gap Capital Limited"
                  width={140}
                  height={50}
                />
              </Link>
              <p className="mt-4 text-white/80 text-sm italic">
                Your Growth, Our Commitment.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-white text-lg font-semibold mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-white/80 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-white text-lg font-semibold mb-4">
                Our Products
              </h3>
              <ul className="space-y-3">
                {products.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/80 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-white text-lg font-semibold mb-4">
                Legal & Support
              </h3>
              <ul className="space-y-3">
                {legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/80 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-white text-lg font-semibold mb-4">
                Contact us
              </h3>
              <ul className="space-y-3">
                <li className="text-white/80 text-sm">
                  Phone: +234 8026071375
                </li>
                <li className="text-white/80 text-sm">
                  Address: 3, Eniola Street, Idi-Oro, Mushin, Lagos
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-brand-button py-3">
        <p className="text-center text-white text-sm">
          © 2026 BridgeGap All rights reserved.
        </p>
      </div>
    </footer>
  );
}