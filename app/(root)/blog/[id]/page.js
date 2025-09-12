import React from "react";
import { blogData } from "@/lib/data";
import { notFound } from "next/navigation";
import ContactBanner from "@/components/common/ContactBanner";
import Script from "next/script";
import BlogPostClient from "./BlogPostClient";

// Generate metadata for each blog post
export async function generateMetadata({ params }) {
  const { id } = await params;
  const blog = blogData.find((b) => b.slug === id);

  if (!blog) {
    return {
      title: "Blog Post Not Found | Sunnyside Wellness & Chiropractic Center",
      description: "The requested blog post could not be found.",
    };
  }

  // Create SEO-optimized title and description
  const seoTitle = `${blog.title} | Dr. Potigian Fresno Chiropractor`;
  const seoDescription = blog.content.introduction.content
    .split("\n\n")[0] // First paragraph as description
    .replace(/\*\*(.*?)\*\*/g, "$1") // Remove markdown formatting
    .substring(0, 160); // Limit to 160 characters

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: `${blog.tags.join(
      ", "
    )}, chiropractic Fresno, Dr. Thomas Potigian, ${blog.category}`,
    canonical: `https://sunnysidechiropractic.com/blog/${blog.slug}`,
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: `https://sunnysidechiropractic.com/blog/${blog.slug}`,
      type: "article",
      publishedTime: blog.publishDate,
      authors: [blog.author],
      tags: blog.tags,
      images: [
        {
          url: blog.featuredImage,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
      images: [blog.featuredImage],
    },
    alternates: {
      canonical: `https://sunnysidechiropractic.com/blog/${blog.slug}`,
    },
  };
}

// Generate static params for better SEO
export async function generateStaticParams() {
  return blogData.map((blog) => ({
    id: blog.slug,
  }));
}

const BlogPostPage = async ({ params }) => {
  const { id } = await params;
  const blog = blogData.find((b) => b.slug === id);

  if (!blog) {
    notFound();
  }

  return (
    <>
      {/* Article Structured Data */}
      <Script
        id="article-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: blog.title,
            description: blog.content.introduction.content
              .split("\n\n")[0]
              .replace(/\*\*(.*?)\*\*/g, "$1")
              .substring(0, 200),
            image: blog.featuredImage,
            datePublished: blog.publishDate,
            dateModified: blog.publishDate,
            author: {
              "@type": "Person",
              name: blog.author,
              jobTitle: "Doctor of Chiropractic",
              worksFor: {
                "@type": "MedicalBusiness",
                name: "Sunnyside Wellness & Chiropractic Center",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "5207 E Belmont Ave",
                  addressLocality: "Fresno",
                  addressRegion: "CA",
                  postalCode: "93727",
                },
                telephone: "+1-559-454-1000",
              },
            },
            publisher: {
              "@type": "MedicalBusiness",
              name: "Sunnyside Wellness & Chiropractic Center",
              logo: {
                "@type": "ImageObject",
                url: "https://sunnysidechiropractic.com/logo/brand-logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://sunnysidechiropractic.com/blog/${blog.slug}`,
            },
            keywords: blog.tags.join(", "),
            articleSection: blog.category,
            wordCount:
              blog.content.sections.reduce(
                (count, section) => count + section.content.split(" ").length,
                0
              ) +
              blog.content.introduction.content.split(" ").length +
              blog.content.conclusion.content.split(" ").length,
          }),
        }}
      />

      {/* Breadcrumb Structured Data */}
      <Script
        id="breadcrumb-article-jsonld"
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
                name: "Blog",
                item: "https://sunnysidechiropractic.com/blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: blog.title,
                item: `https://sunnysidechiropractic.com/blog/${blog.slug}`,
              },
            ],
          }),
        }}
      />

      {/* FAQ Structured Data if applicable */}
      {blog.content.sections.some((section) => section.title.includes("?")) && (
        <Script
          id="faq-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: blog.content.sections
                .filter((section) => section.title.includes("?"))
                .map((section) => ({
                  "@type": "Question",
                  name: section.title,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: section.content.replace(/\*\*(.*?)\*\*/g, "$1"),
                  },
                })),
            }),
          }}
        />
      )}

      {/* Pass blog data to client component */}
      <BlogPostClient blog={blog} />
    </>
  );
};

export default BlogPostPage;
