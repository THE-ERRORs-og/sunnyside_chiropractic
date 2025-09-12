import React from "react";
import ServiceHero from "@/components/service/serviceDetails/ServiceHero";
import { serviceData } from "@/lib/data";
import SubServieDetail from "@/components/service/serviceDetails/SubServieDetail";
import Script from "next/script";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const data = serviceData.find((service) => service.title_id === id);

  if (!data) {
    return {
      title: "Service Not Found | Sunnyside Chiropractic",
      description: "The requested service page could not be found.",
    };
  }

  return {
    title: `${data.title} | Sunnyside Chiropractic Center Fresno, CA`,
    description: `${data.description.substring(0, 155)}...`,
    keywords: `${data.title.toLowerCase()} Fresno, chiropractic ${data.title.toLowerCase()}, ${
      data.title
    } treatment`,
    canonical: `https://sunnysidechiropractic.com/service/${id}`,
    openGraph: {
      title: `${data.title} | Sunnyside Chiropractic Center Fresno, CA`,
      description: data.description.substring(0, 155),
      url: `https://sunnysidechiropractic.com/service/${id}`,
      type: "website",
      images: [
        { url: "https://sunnysidechiropractic.com/logo/brand-logo.png" },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${data.title} | Sunnyside Chiropractic Center Fresno, CA`,
      description: data.description.substring(0, 155),
    },
  };
}

const ServiceDetail = async ({ params }) => {
  const { id } = await params;
  const data = serviceData.find((service) => service.title_id === id);

  if (!data) {
    return <div>Service not found</div>;
  }

  return (
    <>
      <Script
        id={`service-${id}-jsonld`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalTherapy",
            name: data.title,
            description: data.description,
            medicineSystem: "Chiropractic",
            provider: {
              "@type": "MedicalBusiness",
              name: "Sunnyside Wellness & Chiropractic Center",
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
            },
            preparation:
              "Initial consultation and comprehensive examination required before treatment begins",
          }),
        }}
      />

      <Script
        id={`breadcrumb-service-${id}-jsonld`}
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
              {
                "@type": "ListItem",
                position: 3,
                name: data.title,
                item: `https://sunnysidechiropractic.com/service/${id}`,
              },
            ],
          }),
        }}
      />

      <ServiceHero data={data} />
      {data.sub_services.map((sub_service, index) => (
        <SubServieDetail key={index} data={sub_service} />
      ))}
    </>
  );
};

export default ServiceDetail;
