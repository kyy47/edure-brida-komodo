import React from "react";
import Description from "../micro/Description";
import Heading from "../micro/Heading";
import ButtonPrimary from "../micro/ButtonPrimary";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FrequentlyAskedSection() {
  return (
    <section className="grid md:grid-cols-2 gap-4 px-4 lg:px-6.25 mt-20">
      <div className="flex flex-col gap-2">
        <Heading>Frequently Asked Questions</Heading>
        <Description fontSize="text-sm" className="max-w-sm">
          Find answer to common questions and concerns about Menstrual cycle
          Tracker and its usage.
        </Description>
        <ButtonPrimary variant="medium-outline">Contact</ButtonPrimary>
      </div>
      <div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I track ? </AccordionTrigger>
            <AccordionContent>
              To track your menstrual cycle, simply click on the ‘Track’ button
              and enter teh start and end dates of your period. The tracker will
              then calculate the length of your cycle and predict future
              periods.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is my data secure?</AccordionTrigger>
            <AccordionContent>
              Yes, we take data security seriously. All your personal
              information and cycle date are encrypted and stored securely. We
              do not share your data with any third parties.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Can I sync my data?</AccordionTrigger>
            <AccordionContent>
              Currently, we do not offer data syncing across devices. However,
              you can export your data and import it into another device
              manuallly.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Can I delete my data?</AccordionTrigger>
            <AccordionContent>
              Yes, you can delete your data at any time. Simply go to the
              settings page and choose the option to delete your cycle data.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

export default FrequentlyAskedSection;
