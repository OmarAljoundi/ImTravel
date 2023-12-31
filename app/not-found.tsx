"use client";
import Link from "next/link";

const error = async () => {
  return (
    <div
      className="py-[30px] lg:py-[60px] bg-[var(--bg-2)]"
      style={{ height: "100vh" }}
    >
      <div className="container">
        <div className="flex justify-center">
          <div className="col-span-10 lg:col-span-6">
            <div className="text-center pb-10">
              <h2 className="mt-10 mb-5 h2"> لا يوجد عنوان لهذه الصفحة </h2>
              <Link href="/" className="btn-primary font-semibold">
                <span className="inline-block"> الرجوع للرئيسية </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default error;
