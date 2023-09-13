export const revalidate = 0;

import RenderTours from "./(fetcher)/render-tours";

export default async function TourListing() {
  return (
    <section>
      <RenderTours />
    </section>
  );
}
