"use client";

import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Capabilities } from "@/components/sections/Capabilities";
import { PastPerformance } from "@/components/sections/PastPerformance";
import { Credentials } from "@/components/sections/Credentials";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <Hero />
      <About />
      <Capabilities />
      <PastPerformance />
      <Credentials />
    </SmoothScroll>
  );
}
