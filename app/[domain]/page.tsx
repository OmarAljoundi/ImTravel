import Hero from "@/components/Hero";
import Property from "@/components/Property";
import Destinations from "@/components/Destinations";
import Faqs from "@/components/FAQs";

export default async function SiteHomePage() {
  return (
    <>
      <Hero />
      <Destinations />
      <Property />
      <Faqs />
      {/* <WhyChoose /> */}
      {/* <TravelMemory /> */}
    </>
  );
}
