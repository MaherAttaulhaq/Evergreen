import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AccordianData from "../../api/question.json";
export const Accordian = ({ questions }) => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex justify-between md:flex-row flex-col">
        <h1 className="text-5xl font-bold">Frequently Asked Questions</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Possimus quasi illo laudantium labore laborum ipsam <br />
          cumque maxime amet inventore architecto?
        </p>
      </div>
      {/* Accordian */}
      <Accordion
        type="single"
        collapsible
        className="flex flex-col gap-6 my-10 font-extralight "
        defaultValue="item-1"
      >
        {questions.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className={"bg-gray-100 rounded-2xl  border-0"}
          >
            <AccordionTrigger
              className={"text-4xl font-semibold hover:no-underline "}
            >
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>{item.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
