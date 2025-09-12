import React from "react";
import TestimonialList from "@/components/testimonials/TestimonialList";
import TestimonialCard from "@/components/testimonials/TestimonialCard";
import Reviews from "@/components/testimonials/Reviews";
import ContactBanner from "@/components/common/ContactBanner";
import Script from "next/script";

export const metadata = {
  title: "Patient Reviews | Sunnyside Chiropractic Center Fresno, CA",
  description:
    "Read real patient reviews of Dr. Thomas Potigian's chiropractic care. 5-star ratings from satisfied patients in Fresno, CA. See why we're trusted for pain relief.",
  keywords:
    "chiropractor reviews Fresno, patient testimonials chiropractic, Dr Potigian reviews",
  canonical: "https://sunnysidechiropractic.com/testimonials",
  openGraph: {
    title: "Patient Reviews | Sunnyside Chiropractic Center Fresno, CA",
    description:
      "Read real patient reviews of Dr. Thomas Potigian's chiropractic care. 5-star ratings from satisfied patients in Fresno, CA.",
    url: "https://sunnysidechiropractic.com/testimonials",
    type: "website",
    images: [{ url: "https://sunnysidechiropractic.com/logo/brand-logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Patient Reviews | Sunnyside Chiropractic Center Fresno, CA",
    description:
      "Read real patient reviews of Dr. Thomas Potigian's chiropractic care. 5-star ratings from satisfied patients.",
  },
};

const Testimonials = () => {
  return (
    <>
      <Script
        id="localbusiness-reviews-jsonld"
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
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5.0",
              reviewCount: "50",
              bestRating: "5",
              worstRating: "1",
            },
            review: [
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "Kathy Louanglath",
                },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                },
                reviewBody:
                  "I've been seeing Thomas M. Potiguan for 2 months and the difference in my pain and mobility has been amazing. They take the time to listen, explain each adjustment, and make sure I'm comfortable throughout the process.",
                datePublished: "2025-08-15",
              },
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "Aileen Clemente",
                },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                },
                reviewBody:
                  "Impressed by Dr that educated me about chiropractic and assessment of my current posture. With just about a month of treatment. No more headaches when waking up the morning.",
                datePublished: "2025-07-15",
              },
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "Damar Randle",
                },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                },
                reviewBody:
                  "Started Treatment here in January after two back to back car accidents. Today, I am back to normal with full range of motion! That is because of the awesome work that Dr. Potigian does!",
                datePublished: "2025-05-15",
              },
            ],
          }),
        }}
      />

      <Script
        id="breadcrumb-testimonials-jsonld"
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
                name: "Patient Reviews",
                item: "https://sunnysidechiropractic.com/testimonials",
              },
            ],
          }),
        }}
      />

      <div className="header-container flex flex-col items-center text-center">
        <h1 className="sub-heading">
          Our Wall of <span className="text-secondary">Love</span>
        </h1>
        <p className="font-poppins">
          Our patients are at the heart of everything we do. From easing chronic{" "}
          <br />
          pain to helping restore mobility, we are grateful for the trust they{" "}
          place in us. <br />
          Here&apos;s what some of our happy patients have to say about their
          chiropractic experience with us.
        </p>
        <div className="flex items-center gap-4">
          <Reviews rating={4.5} />
          <p className="font-poppins">Reviews on Google</p>
        </div>
      </div>
      <TestimonialList />
      <ContactBanner />
    </>
  );
};

export default Testimonials;
