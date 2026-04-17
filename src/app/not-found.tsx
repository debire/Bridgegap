import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-page min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="font-heading text-brand text-8xl md:text-9xl font-bold">
          404
        </h1>
        <h2 className="font-heading text-brand text-2xl md:text-3xl font-semibold mt-4">
          Page Not Found
        </h2>
        <p className="mt-4 text-base text-neutral-600 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-brand-button px-8 py-3 text-white font-medium hover:bg-brand-button/90 transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border-2 border-brand px-8 py-3 text-brand font-medium hover:bg-brand hover:text-white transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}