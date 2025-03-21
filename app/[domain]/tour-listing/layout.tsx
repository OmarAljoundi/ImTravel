export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="py-[30px] lg:py-[60px] bg-[var(--bg-2)] ">
      <div className="container">
        <section>{children}</section>
      </div>
    </div>
  );
}
