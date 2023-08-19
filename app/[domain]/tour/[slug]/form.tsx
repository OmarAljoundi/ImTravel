"use client";
import BlurImage from "@/components/BlurImage";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ITour } from "@/interface/Tour";
import { cn } from "@/lib/utils";
import { HeartIcon } from "@heroicons/react/24/outline";
import { FC } from "react";

const Form: FC<{ tour: ITour }> = ({ tour }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>تواصل معنا</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>معلومات التواصل</DialogTitle>
          <DialogDescription>
            أترك معلوماتك لكي يتم التواصل معك من قبل مختصين الرحلات
          </DialogDescription>
        </DialogHeader>
        <div className="pb-0 mb-6 relative">
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
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Form;
