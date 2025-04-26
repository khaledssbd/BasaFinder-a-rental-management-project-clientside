import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import BFContainer from '@/components/ui/core/BFContainer';
import { faqPageMetadata } from '@/utils/Metadata';
import { faqPageSchemaData } from '@/utils/SchemaData';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = faqPageMetadata;

const FaqPage = () => {
  const schemaData = faqPageSchemaData;

  return (
    <>
      <Script
        id="schema-markup-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <BFContainer>
        <div className="md:mx-20">
          <h1 className="text-3xl font-bold text-center mb-6">
            Frequently Asked Questions
          </h1>

          <Accordion type="single" collapsible className="w-full">
            {/* What is BasaFinder? */}
            <AccordionItem value="item-1">
              <AccordionTrigger>What is BasaFinder?</AccordionTrigger>
              <AccordionContent>
                BasaFinder is an online platform that helps users find rental
                properties easily.
              </AccordionContent>
            </AccordionItem>

            {/* How does BasaFinder work? */}
            <AccordionItem value="item-2">
              <AccordionTrigger>How does BasaFinder work?</AccordionTrigger>
              <AccordionContent>
                BasaFinder connects tenants with landlords by providing a
                seamless platform for renting homes. Tenants can browse verified
                listings, and landlords can list their properties with ease.
              </AccordionContent>
            </AccordionItem>

            {/* Is BasaFinder free to use? */}
            <AccordionItem value="item-3">
              <AccordionTrigger>Is BasaFinder free to use?</AccordionTrigger>
              <AccordionContent>
                Yes! Browsing properties is completely free for tenants.
                However, landlords may need to pay a small fee for premium
                listings and promotional features.
              </AccordionContent>
            </AccordionItem>

            {/* Is my information secure? */}
            <AccordionItem value="item-4">
              <AccordionTrigger>Is my information secure?</AccordionTrigger>
              <AccordionContent>
                Yes, we prioritize user data security and follow industry
                standards to protect your information.
              </AccordionContent>
            </AccordionItem>

            {/* How do I list my property? */}
            <AccordionItem value="item-5">
              <AccordionTrigger>How do I list my property?</AccordionTrigger>
              <AccordionContent>
                You can list your property by creating an account and filling
                out the property details in the dashboard.
              </AccordionContent>
            </AccordionItem>

            {/* How do I contact a landlord? */}
            <AccordionItem value="item-6">
              <AccordionTrigger>How do I contact a landlord?</AccordionTrigger>
              <AccordionContent>
                Each property listing has a &quot;Contact Landlord&quot; button,
                allowing you to directly message the property owner via our
                secure platform.
              </AccordionContent>
            </AccordionItem>

            {/* Are the property listings verified? */}
            <AccordionItem value="item-7">
              <AccordionTrigger>
                Are the property listings verified?
              </AccordionTrigger>
              <AccordionContent>
                Yes! We manually review all property listings to ensure
                authenticity and prevent fraud. Verified properties will have a
                verification badge.
              </AccordionContent>
            </AccordionItem>

            {/* How secure is the rental process? */}
            <AccordionItem value="item-8">
              <AccordionTrigger>
                How secure is the rental process?
              </AccordionTrigger>
              <AccordionContent>
                BasaFinder ensures a secure and transparent rental process with
                verified listings, secure messaging, and trusted payment options
                for deposits.
              </AccordionContent>
            </AccordionItem>

            {/* Can I list my property on BasaFinder? */}
            <AccordionItem value="item-9">
              <AccordionTrigger>
                Can I list my property on BasaFinder?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely! Landlords can sign up, submit their property
                details, and start receiving inquiries from potential tenants
                instantly.
              </AccordionContent>
            </AccordionItem>

            {/* How do I contact a property owner? */}
            <AccordionItem value="item-10">
              <AccordionTrigger>
                How do I contact a property owner?
              </AccordionTrigger>
              <AccordionContent>
                Each listing includes a contact option that allows you to reach
                out to the property owner directly.
              </AccordionContent>
            </AccordionItem>

            {/* What if I face an issue with a landlord/tenant? */}
            <AccordionItem value="item-11">
              <AccordionTrigger>
                What if I face an issue with a landlord/tenant?
              </AccordionTrigger>
              <AccordionContent>
                We have a dedicated support team to assist with any disputes or
                issues. You can report any concerns through our
                &quot;Support&quot; section.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </BFContainer>
    </>
  );
};

export default FaqPage;
