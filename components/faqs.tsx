"use client";
import { Minus, Plus } from "lucide-react";
import SubHeadingBtn from "./header-text";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { useDomainStore } from "@/hooks/use-domain";

const Faqs = () => {
  const text1 = "اسئلة متكررة";
  const [item, setItem] = useState("0");
  const { faq } = useDomainStore((x) => x.office!);

  return (
    <div className="py-[60px] lg:py-[30px] bg-white relative ">
      <div className="container ">
        <div className="max-w-[570px] mx-auto flex flex-col items-center text-center px-3 pb-8">
          <SubHeadingBtn text={text1} classes="bg-[var(--primary-light)] " />
        </div>

        <Accordion
          type="single"
          collapsible
          onValueChange={(x) => setItem(String(x))}
          value={String(item)}
        >
          {faq?.map((i, index) => (
            <AccordionItem value={String(index)} key={i.id}>
              <AccordionTrigger>
                <div className="flex items-center focus:outline-none">
                  {String(index) === String(index) && (
                    <Minus className="text-primary" />
                  )}
                  {String(index) !== String(index) && (
                    <Plus className="text-primary" />
                  )}

                  <h1 className="mx-4 text-xl text-gray-700 ">{i.title}</h1>
                </div>
              </AccordionTrigger>

              <AccordionContent>
                <div className="flex  md:mx-10">
                  <span className="border border-primary"></span>
                  <p className="max-w-3xl px-4 text-primary font-bold">
                    {i.description}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faqs;
