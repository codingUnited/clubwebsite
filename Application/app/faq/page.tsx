import faqs from "@/data/faqs/testSessions.json";
import { Accordion, Span } from "@chakra-ui/react/";

export default function Faqs() {
  return (
    <>
      <Accordion.Root collapsible defaultValue={["b"]} spaceY="4">
        {faqs.map((faq) => (
          <Accordion.Item key={faq.title} value={faq.title}>
            <Accordion.ItemTrigger>
              <Span flex="1" color="black" fontWeight="bold">
                 {faq.title}
              </Span>
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody color="gray.600">
                 {faq.response}
              </Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </>
  );
}
