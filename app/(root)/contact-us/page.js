import React from "react";
import ContactForm from "@/components/contact/ContactForm";
import Script from "next/script";

export const metadata = {
  title: "Contact Sunnyside Chiropractic | Schedule Appointment Fresno, CA",
  description:
    "Contact Sunnyside Wellness & Chiropractic Center. Located at 5207 E Belmont Ave, Fresno, CA 93727. Call (559) 454-1000 to schedule your appointment.",
  keywords:
    "chiropractor contact Fresno, Sunnyside Chiropractic address, book chiropractic appointment",
  canonical: "https://sunnysidechiropractic.com/contact-us",
  openGraph: {
    title: "Contact Sunnyside Chiropractic | Schedule Appointment Fresno, CA",
    description:
      "Contact Sunnyside Wellness & Chiropractic Center. Located at 5207 E Belmont Ave, Fresno, CA 93727. Call (559) 454-1000.",
    url: "https://sunnysidechiropractic.com/contact-us",
    type: "website",
    images: [{ url: "https://sunnysidechiropractic.com/logo/brand-logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Sunnyside Chiropractic | Schedule Appointment Fresno, CA",
    description:
      "Contact Sunnyside Wellness & Chiropractic Center. Call (559) 454-1000 to schedule your appointment.",
  },
};

const ContactUs = () => {
  return (
    <>
      <Script
        id="contact-localbusiness-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: "Sunnyside Wellness & Chiropractic Center",
            url: "https://sunnysidechiropractic.com",
            telephone: "+1-559-454-1000",
            email: "info@sunnysidechiropractic.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "5207 E Belmont Ave",
              addressLocality: "Fresno",
              addressRegion: "CA",
              postalCode: "93727",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "36.7468",
              longitude: "-119.7931",
            },
            openingHours: [
              "Mo 08:00-18:00",
              "Tu 08:00-18:00",
              "We 08:00-18:00",
              "Th 08:00-18:00",
              "Fr 10:00-17:00",
              "Sa 10:00-15:00",
            ],
            medicalSpecialty: "Chiropractic",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Appointment Booking",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "MedicalTherapy",
                    name: "Initial Consultation",
                  },
                },
              ],
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-559-454-1000",
              contactType: "appointments",
            },
          }),
        }}
      />

      <Script
        id="breadcrumb-contact-jsonld"
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
                name: "Contact Us",
                item: "https://sunnysidechiropractic.com/contact-us",
              },
            ],
          }),
        }}
      />

      <div className="header-container flex flex-col items-center text-center">
        <h1 className="sub-heading mb-4">
          Give us opportunity to{" "}
          <span className="text-secondary">serve you</span>
        </h1>
        <p className="font-poppins">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo gravida
          quam hac risus pharetra elementum malesuada finibus? Varius augue
          egestas tempor consectetur montes morbi senectus
        </p>
      </div>
      <ContactForm />
    </>
  );
};

export default ContactUs;
