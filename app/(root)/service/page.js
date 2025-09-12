import React from "react";
import ServiceCategories from "@/components/service/ServiceCategories";
import ServiceCard from "@/components/service/ServiceCard";
import ContactBanner from "@/components/common/ContactBanner";
import LocationMap from "@/components/common/LocationMap";
import Script from "next/script";

export const metadata = {
  title: "Chiropractic Services Fresno, CA | Pain Relief & Wellness Care",
  description:
    "Comprehensive chiropractic services in Fresno: spinal adjustments, pain management, prenatal care, sports injuries, and rehabilitation. Call (559) 454-1000.",
  keywords:
    "chiropractic services Fresno, spinal manipulation Fresno, pain relief chiropractic",
  canonical: "https://sunnysidechiropractic.com/service",
  openGraph: {
    title: "Chiropractic Services Fresno, CA | Pain Relief & Wellness Care",
    description:
      "Comprehensive chiropractic services in Fresno: spinal adjustments, pain management, prenatal care, sports injuries, and rehabilitation.",
    url: "https://sunnysidechiropractic.com/service",
    type: "website",
    images: [{ url: "https://sunnysidechiropractic.com/logo/brand-logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chiropractic Services Fresno, CA | Pain Relief & Wellness Care",
    description:
      "Comprehensive chiropractic services in Fresno: spinal adjustments, pain management, prenatal care, sports injuries.",
  },
};

const Services = () => {
  return (
    <>
      <Script
        id="medical-services-jsonld"
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
            medicalSpecialty: "Chiropractic",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Chiropractic Services",
              itemListElement: [
                {
                  "@type": "MedicalTherapy",
                  name: "Chiropractic Adjustments",
                  description:
                    "Precise spinal manipulations to restore proper alignment and relieve pain",
                  medicineSystem: "Chiropractic",
                },
                {
                  "@type": "MedicalTherapy",
                  name: "Pain Management",
                  description:
                    "Comprehensive pain relief for back, neck, joint pain, and headaches",
                  medicineSystem: "Chiropractic",
                },
                {
                  "@type": "MedicalTherapy",
                  name: "Sports Injury Treatment",
                  description:
                    "Specialized care for athletic injuries and performance optimization",
                  medicineSystem: "Chiropractic",
                },
                {
                  "@type": "MedicalTherapy",
                  name: "Prenatal Chiropractic Care",
                  description:
                    "Safe, gentle chiropractic care for expecting mothers",
                  medicineSystem: "Chiropractic",
                },
              ],
            },
          }),
        }}
      />

      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What conditions do chiropractors treat?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Chiropractors treat back pain, neck pain, headaches, sciatica, joint pain, sports injuries, and musculoskeletal disorders through spinal adjustments and holistic care approaches.",
                },
              },
              {
                "@type": "Question",
                name: "Is chiropractic care safe?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "When performed by licensed professionals like Dr. Potigian with 40+ years experience, chiropractic care is very safe with minimal side effects. We conduct thorough examinations before any treatment.",
                },
              },
              {
                "@type": "Question",
                name: "How many chiropractic sessions will I need?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Treatment plans vary by condition and individual response. Many patients feel improvement within 2-4 visits, with complete treatment plans typically lasting 4-12 weeks depending on the severity of the condition.",
                },
              },
              {
                "@type": "Question",
                name: "Do you accept insurance?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we accept most major insurance plans. We recommend calling our office at (559) 454-1000 to verify your specific coverage before your appointment.",
                },
              },
            ],
          }),
        }}
      />

      <Script
        id="breadcrumb-services-jsonld"
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
                name: "Services",
                item: "https://sunnysidechiropractic.com/service",
              },
            ],
          }),
        }}
      />

      <div className="header-container flex flex-col items-center justify-center space-y-8">
        <h1 className="sub-heading text-center">
          What we <span className="text-secondary">offer?</span>
        </h1>
        <h6 className="text-center">
          From pain relief to preventive care, we provide a full range of
          chiropractic and wellness services. <br />
          Our offerings include spinal adjustments, injury rehabilitation,
          custom orthotics, pediatric and prenatal care,
          <br />
          and ongoing wellness support—designed to restore balance, improve
          mobility, and enhance your quality of life.
        </h6>
      </div>

      <ServiceCategories />
      <ContactBanner />
      <LocationMap />
    </>
  );
};

export default Services;
