import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";

const PaymentOptions = () => {
  return (
    <Accordion type="single" collapsible className="px my">
      <AccordionItem value="item-1 ">
        <AccordionTrigger>Insurance</AccordionTrigger>
        <AccordionContent>
          Not all insurance plans are accepted at our office. We are providers
          for Fresno City Employees, and Fresno City Schools. We are a preferred
          provider for Veterans Hospital for Chiropractic care. We accept auto
          accident, personal injury, and we are a Medicare Nonparticipating
          provider. This means we will bill medicare for you and Medicare will
          send you the payment, so you will be responcible to pay our office
          directly for all services. Please call us to find out if your plan
          covers care in our office. Our staff will verify at no charge.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>No Insurance</AccordionTrigger>
        <AccordionContent>
          For patients who have little or no chiropractic insurance coverage,
          flexible payment programs can be arranged. If you have no insurance or
          do not have chiropractic benefits there is still a way for you to
          receive the care you need. Many patients pay directly for care, as
          they discover chiropractic to be extremely cost-effective and
          affordable.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Family Plans</AccordionTrigger>
        <AccordionContent>
          Our focus at Sunnyside Wellness & Chiropractic Center is to actively
          help you and your family in taking responsibility for your health,
          wellness, and disease management. We assist and guide you to take the
          time to care for the important people in your world: you and your
          family. In an effort to make living the wellness lifestyle as easy and
          affordable as possible, we can create a customized family plan that is
          specific to you and your family.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Health on Budget</AccordionTrigger>
        <AccordionContent>
          At Sunnyside Wellness & Chiropractic Center we&apos;re convinced that
          a small amount of your time and money to care for your most important
          asset--your health--will be far less time consuming and expensive than
          trying to recover it. If you feel you do not have enough time or money
          to take care of yourself, please contact us--we can help! The last
          thing we want is for you to come to our wellness center in crisis. So
          please, we would like to encourage you to take your health very
          seriously. As the old saying goes, if you don&apos;t have your health,
          you don&apos;t have anything. Unfortunately, too many people don't
          discover how true that statement is until it is too late.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default PaymentOptions;
