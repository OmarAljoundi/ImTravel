"use client";

import Filter from "./(filters)/Filter";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="py-[30px] lg:py-[60px] bg-[var(--bg-2)] ">
      <div className="container">
        <section>
          <Filter onChange={true} />
        </section>
        <section>{children}</section>
      </div>
    </div>
  );
}
