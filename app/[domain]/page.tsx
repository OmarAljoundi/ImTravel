import Hero from "@/components/Hero";
import Property from "@/components/Property";
import Destinations from "@/components/Destinations";
import TravelMemory from "@/components/TravelMemory";
import WhyChoose from "@/components/WhyChoose";

export default async function SiteHomePage() {
  return (
    <>
      <Hero />
      <Destinations />
      <Property />
      <WhyChoose />
      <TravelMemory />
    </>
  );
}
