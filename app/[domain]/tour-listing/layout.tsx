import Filter from "../../../components/custom/Shared/filter";
import Breadcrumb from "@/components/custom/ThemeOne/breadcrumb";

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <div className="py-[30px] lg:py-[60px] bg-[var(--bg-2)] ">
      <div className="container">
        <section>{children}</section>
      </div>
    </div>
  );
}
