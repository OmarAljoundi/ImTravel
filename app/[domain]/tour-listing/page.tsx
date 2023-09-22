export const revalidate = 3600;

import RenderTours from "./(fetcher)/render-tours";

export default async function TourListing() {
  return (
    <section>
      <RenderTours />
    </section>
  );
}
