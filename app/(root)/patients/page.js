import React from "react";
import PaymentOptions from "@/components/payment/PaymentOptions";
import ContactBanner from "@/components/common/ContactBanner";
import Script from "next/script";

export const metadata = {
  title: "Patient Resources | Payment Options at Sunnyside Chiropractic",
  description:
    "Patient information for Sunnyside Chiropractic Center. Learn about our flexible payment options, insurance acceptance, and what to expect during your visit.",
  keywords:
    "chiropractor payment options, insurance chiropractic Fresno, new patient chiropractic",
  canonical: "https://sunnysidechiropractic.com/patients",
  openGraph: {
    title: "Patient Resources | Payment Options at Sunnyside Chiropractic",
    description:
      "Patient information for Sunnyside Chiropractic Center. Learn about our flexible payment options, insurance acceptance.",
    url: "https://sunnysidechiropractic.com/patients",
    type: "website",
    images: [{ url: "https://sunnysidechiropractic.com/logo/brand-logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Patient Resources | Payment Options at Sunnyside Chiropractic",
    description:
      "Learn about our flexible payment options, insurance acceptance, and patient resources.",
  },
};

const PaymentMethods = () => {
  return (
    <>
      <Script
        id="payment-services-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: "Sunnyside Wellness & Chiropractic Center",
            url: "https://sunnysidechiropractic.com",
            telephone: "+1-559-454-1000",
            address: {
              "@type": "PostalAddress",
              streetAddress: "5207 E Belmont Ave",
              addressLocality: "Fresno",
              addressRegion: "CA",
              postalCode: "93727",
              addressCountry: "US",
            },
            paymentAccepted: [
              "Cash",
              "Credit Card",
              "Debit Card",
              "Insurance",
              "Health Savings Account",
              "Flexible Spending Account",
            ],
            currenciesAccepted: "USD",
            priceRange: "$$",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Payment Options",
              itemListElement: [
                {
                  "@type": "Offer",
                  name: "Insurance Coverage",
                  description: "We accept most major insurance plans",
                },
                {
                  "@type": "Offer",
                  name: "Flexible Payment Plans",
                  description: "Custom payment arrangements available",
                },
                {
                  "@type": "Offer",
                  name: "HSA/FSA Accepted",
                  description:
                    "Health Savings and Flexible Spending Accounts welcome",
                },
              ],
            },
          }),
        }}
      />

      <Script
        id="breadcrumb-patients-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://sunnysidechiropractic.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "For Patients",
                item: "https://sunnysidechiropractic.com/patients",
              },
            ],
          }),
        }}
      />

      <div className="header-container flex flex-col items-center justify-center space-y-8">
        <h1 className="sub-heading text-center">
          Our Payment <span className="text-secondary">Methods</span>
        </h1>
        <h6 className="text-center">
          We believe that quality chiropractic care should be accessible to
          everyone. <br />
          That&apos;s why we offer flexible payment options and work with most major
          insurance plans <br />
          to make your path to wellness as convenient as possible.
        </h6>
      </div>

      <PaymentOptions />
      <ContactBanner />
    </>
  );
};

export default PaymentMethods;
