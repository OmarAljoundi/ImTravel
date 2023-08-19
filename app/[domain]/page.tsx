import ClientMainProvider from "@/components/Providers/ClientMainProvider";
import Hero from "@/components/Hero";
import Property from "@/components/Property";
import Destinations from "@/components/Destinations";
import TravelMemory from "@/components/TravelMemory";
import WhyChoose from "@/components/WhyChoose";

export default async function SiteHomePage() {
  return (
    <ClientMainProvider>
      <Hero />
      <Destinations />
      <Property />
      <WhyChoose />
      <TravelMemory />
    </ClientMainProvider>
  );
}
