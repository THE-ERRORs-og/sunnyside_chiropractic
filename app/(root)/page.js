import React from "react";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import ServiceList from "@/components/home/ServiceList";
import TeamSection from "@/components/home/TeamSection";
import ContactBanner from "@/components/common/ContactBanner";
import TestimonialSwiper from "@/components/common/TestimonialSwiper";
import LocationMap from "@/components/common/LocationMap";
import Script from "next/script";

export const metadata = {
  title: "Sunnyside Wellness & Chiropractic Center | Chiropractor in Fresno, CA",
  description: "Expert chiropractic care in Fresno, CA. Dr. Thomas Potigian offers pain relief, spinal adjustments, and holistic wellness for all ages. Book your appointment today!",
  keywords: "chiropractor Fresno, chiropractic care Fresno, back pain relief Fresno",
  canonical: "https://sunnysidechiropractic.com",
};

const Home = () => {
  return (
    <>
      <Script
        id="organization-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Sunnyside Wellness & Chiropractic Center",
            "url": "https://sunnysidechiropractic.com",
            "logo": "https://sunnysidechiropractic.com/logo/brand-logo.png",
            "description": "Sunnyside Wellness & Chiropractic Center offers holistic, non-invasive chiropractic care for all ages—from prenatal to seniors—focusing on natural pain relief, rehabilitation, and overall wellness in Fresno, CA.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "5207 E Belmont Ave",
              "addressLocality": "Fresno",
              "addressRegion": "CA",
              "postalCode": "93727",
              "addressCountry": "US"
            },
            "telephone": "+1-559-454-1000",
            "sameAs": [
              "https://www.facebook.com/SunnysideWellnessandChiropracticCenter/",
              "https://www.instagram.com/sunnysidechiro/"
            ]
          })
        }}
      />
      <Script
        id="localbusiness-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Sunnyside Wellness & Chiropractic Center",
            "url": "https://sunnysidechiropractic.com",
            "telephone": "+1-559-454-1000",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "5207 E Belmont Ave",
              "addressLocality": "Fresno",
              "addressRegion": "CA",
              "postalCode": "93727",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "36.7468",
              "longitude": "-119.7931"
            },
            "openingHours": [
              "Mo 08:00-18:00",
              "Tu 08:00-18:00",
              "We 08:00-18:00",
              "Th 08:00-18:00",
              "Fr 10:00-17:00",
              "Sa 10:00-15:00"
            ],
            "priceRange": "$$",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "50"
            },
            "review": [
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Kathy Louanglath"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "I've been seeing Thomas M. Potiguan for 2 months and the difference in my pain and mobility has been amazing. They take the time to listen, explain each adjustment, and make sure I'm comfortable throughout the process. The office staff is friendly and professional, and I never feel rushed. My back and neck feel so much better, and I leave every visit feeling aligned and refreshed. Highly recommend to anyone looking for a caring and skilled chiropractor.",
                "datePublished": "2025-01-15"
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Aileen Clemente"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "I came in to find a chiropractor that is near my work and home. Impressed by Dr that educated me about chiropractic and assessment of my current posture. With just about a month of treatment. No more headaches when waking up the morning, which i thought caused by monthly periods. Overall a better quality in life. Who would have thought that sitting in the office for year can cause the uneven hip bones and crooked spine. Which can eventually end up with surgery.  With a little but if education, awareness and treatment can avoid all that future major bone problems.",
                "datePublished": "2025-01-15"
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Damar Randle"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "Started Treatment here in January after two back to back car accidents. The right side of my neck and right shoulder hurt so bad, I couldn't lift my arm or turn my neck. Today, I am back to normal with full range of motion! That is because of the awesome work that Dr. Potigian does! His team is wonderful and always greets with a warm smile!",
                "datePublished": "2025-01-15"
              }
            ]
          })
        }}
      />
      <Hero />
      <AboutSection />
      <ServiceList />
      <TeamSection />
      <ContactBanner/>
      <TestimonialSwiper/>
      <LocationMap />
    </>
  );
};

export default Home;
