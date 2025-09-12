import React from "react";
import MissionVision from "@/components/about/MissionVision";
import CareProcess from "@/components/about/CareProcess";
import ContactBanner from "@/components/common/ContactBanner";
import LocationMap from "@/components/common/LocationMap";
import AboutDoctor from "@/components/about/AboutDoctor";
import AboutStaff from "@/components/about/AboutStaff";
import Script from "next/script";

export const metadata = {
  title: "About Dr. Thomas Potigian | Sunnyside Chiropractic Fresno, CA",
  description:
    "Learn about Dr. Thomas Potigian's chiropractic expertise at Sunnyside Wellness Center. Over 40 years of experience in holistic care for Fresno residents.",
  keywords:
    "Dr Thomas Potigian Fresno, chiropractor biography Fresno, holistic chiropractic care",
  canonical: "https://sunnysidechiropractic.com/about-us",
  openGraph: {
    title: "About Dr. Thomas Potigian | Sunnyside Chiropractic Fresno, CA",
    description:
      "Learn about Dr. Thomas Potigian's chiropractic expertise at Sunnyside Wellness Center. Over 40 years of experience in holistic care.",
    url: "https://sunnysidechiropractic.com/about-us",
    type: "website",
    images: [{ url: "https://sunnysidechiropractic.com/logo/brand-logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Dr. Thomas Potigian | Sunnyside Chiropractic Fresno, CA",
    description:
      "Learn about Dr. Thomas Potigian's chiropractic expertise. Over 40 years of experience in holistic care.",
  },
};

const AboutUs = () => {
  return (
    <>
      <Script
        id="physician-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Physician",
            name: "Dr. Thomas Potigian",
            jobTitle: "Doctor of Chiropractic",
            description:
              "Board-certified chiropractor with over 40 years of experience providing holistic, patient-centered care in Fresno, CA.",
            worksFor: {
              "@type": "MedicalBusiness",
              name: "Sunnyside Wellness & Chiropractic Center",
              address: {
                "@type": "PostalAddress",
                streetAddress: "5207 E Belmont Ave",
                addressLocality: "Fresno",
                addressRegion: "CA",
                postalCode: "93727",
                addressCountry: "US",
              },
              telephone: "+1-559-454-1000",
            },
            medicalSpecialty: "Chiropractic",
            knowsAbout: [
              "Spinal Manipulation",
              "Pain Management",
              "Sports Medicine",
              "Prenatal Care",
              "Holistic Medicine",
            ],
            address: {
              "@type": "PostalAddress",
              streetAddress: "5207 E Belmont Ave",
              addressLocality: "Fresno",
              addressRegion: "CA",
              postalCode: "93727",
              addressCountry: "US",
            },
            telephone: "+1-559-454-1000",
          }),
        }}
      />

      <Script
        id="organization-about-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: "Sunnyside Wellness & Chiropractic Center",
            url: "https://sunnysidechiropractic.com",
            description:
              "Sunnyside Wellness & Chiropractic Center offers holistic, non-invasive chiropractic care for all ages—from prenatal to seniors—focusing on natural pain relief, rehabilitation, and overall wellness in Fresno, CA.",
            founder: "Dr. Thomas Potigian",
            foundingDate: "1985",
            address: {
              "@type": "PostalAddress",
              streetAddress: "5207 E Belmont Ave",
              addressLocality: "Fresno",
              addressRegion: "CA",
              postalCode: "93727",
              addressCountry: "US",
            },
            telephone: "+1-559-454-1000",
            medicalSpecialty: "Chiropractic",
            hasCredential: {
              "@type": "EducationalOccupationalCredential",
              credentialCategory: "Doctor of Chiropractic",
            },
          }),
        }}
      />

      <Script
        id="breadcrumb-about-jsonld"
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
                name: "About Us",
                item: "https://sunnysidechiropractic.com/about-us",
              },
            ],
          }),
        }}
      />

      <MissionVision />
      <CareProcess />
      <AboutDoctor />
      <AboutStaff />
      <ContactBanner />
      <LocationMap />
    </>
  );
};

export default AboutUs;
