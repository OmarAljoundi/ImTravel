import { Suspense } from "react";

import Hero from "@/components/hero";
import Destinations from "@/components/destinations";
import TourListing from "@/components/tours-listing";
import Faqs from "@/components/faqs";

export default async function SiteHomePage() {
  return (
    <Suspense>
      <Hero />
      <Destinations />

      <TourListing />
      <Faqs />
    </Suspense>
  );
}
