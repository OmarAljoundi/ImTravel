export const revalidate = false;

import Hero from "@/components/Hero";
import Property from "@/components/Property";
import Destinations from "@/components/Destinations";

export default async function SiteHomePage() {
  return (
    <>
      <Hero />
      <Destinations />
      <Property />
      {/* <WhyChoose /> */}
      {/* <TravelMemory /> */}
    </>
  );
}
