import { Hero } from "@/components/hero";
import { WhoWeAre } from "@/components/who-we-are";
import { WhatWeDo } from "@/components/what-we-do";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Stats } from "@/components/stats";
import { Bankers } from "@/components/bankers";
import { Faq } from "@/components/faq";
import { Cta } from "@/components/cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <WhyChooseUs />
      <Stats />
      <Bankers />
      <Faq />
      <Cta />
    </main>
  );
}