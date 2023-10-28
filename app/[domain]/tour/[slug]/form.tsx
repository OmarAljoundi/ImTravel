"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { useDomainStore } from "@/hooks/useDomain";
import { cn } from "@/lib/utils";
import { Tour } from "@/types/custom";
import { FC } from "react";

const Form: FC<{ tour: Tour }> = ({ tour }) => {
  const office = useDomainStore((x) => x.office);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full md:w-fit">طريقة الحجز</Button>
      </DialogTrigger>
      <DialogContent className={cn("sm:max-w-[425px]", office?.primary_font)}>
        <DialogHeader>
          <DialogTitle>معلومات التواصل</DialogTitle>
          <DialogDescription>
            أترك معلوماتك لكي يتم التواصل معك من قبل مختصين الرحلات
          </DialogDescription>
        </DialogHeader>
        <div className={cn("pb-0 mb-6 relative", office?.primary_font)}>
          <div className="bg-white rounded-2xl p-3 sm:p-4 lg:py-8 lg:px-6">
            <form className="flex flex-col gap-5 mb-4">
              <input
                type="text"
                placeholder="الأسم"
                className="w-full  bg-[var(--bg-1)] border focus:outline-none py-2 px-3 md:py-3 md:px-4"
                required
              />
              <input
                type="tel"
                placeholder="رقم الهاتف"
                className="w-full  bg-[var(--bg-1)] border focus:outline-none py-2 px-3 md:py-3 md:px-4"
                required
              />
              <textarea
                rows={2}
                placeholder="ملاحظات"
                className="w-full bg-[var(--bg-1)] border focus:outline-none py-2 px-3 md:py-3 md:px-4"
              ></textarea>
            </form>
            <Button className="w-full">إرسال</Button>
            <Separator className="my-4" />
            <span className="font-primary">
              {" "}
              أو التواصل مباشرة مع هذا الرقم
            </span>
            <a
              href={`tel:${office?.contact_number}`}
              className="text-primary underline mr-4"
            >
              {office?.contact_number}
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Form;
