import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

export default function App() {
    const itemClasses = {
        title: "font-normal text-medium",
        trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
        indicator: "text-detail-green text-medium",
        content: "text-small px-2",
    };
    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return (
        <Accordion
            itemClasses={itemClasses}
        >
            <AccordionItem key="1" aria-label="Accordion 1" subtitle="Press to expand" title="Accordion 1">
                {defaultContent}
            </AccordionItem>
            <AccordionItem
                key="2"
                aria-label="Accordion 2"
                subtitle={
                    <span>
                        Press to expand <strong>key 2</strong>
                    </span>
                }
                title="Accordion 2"
            >
                {defaultContent}
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" subtitle="Press to expand" title="Accordion 3">
                {defaultContent}
            </AccordionItem>
        </Accordion>
    );
}
