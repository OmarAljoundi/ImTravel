"use client";
import { Minus, Plus } from "lucide-react";
import SubHeadingBtn from "./header-text";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { useState } from "react";
import { useContentStore } from "@/hooks/useContent";

const Faqs = () => {
  const content = useContentStore((x) => x.content);
  const text1 = "اسئلة متكررة";
  const [item, setItem] = useState("0");

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
          {content?.faq?.map((i, index) => (
            <AccordionItem value={String(index)} key={i.uuid}>
              <AccordionTrigger>
                <button className="flex items-center focus:outline-none">
                  {String(index) === String(index) && (
                    <Minus className="text-primary" />
                  )}
                  {String(index) !== String(index) && (
                    <Plus className="text-primary" />
                  )}

                  <h1 className="mx-4 text-xl text-gray-700 dark:text-white">
                    {i.title}
                  </h1>
                </button>
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
