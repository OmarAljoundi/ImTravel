export const revalidate = false;

import RenderTours from "./(fetcher)/render-tours";

export default async function TourListing() {
  return (
    <section>
      <RenderTours />
    </section>
  );
}
