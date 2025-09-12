import React from "react";
import BlogCard, {
  HorizontalBlogCard,
  VerticalBlogCard,
} from "@/components/blog/BlogCard";
import { blogData } from "@/lib/data";
import Script from "next/script";

export const metadata = {
  title: "Chiropractic Blog | Health Tips from Dr. Potigian Fresno, CA",
  description:
    "Expert chiropractic advice from Dr. Thomas Potigian. Learn about pain relief, wellness tips, and holistic health practices for better living in Fresno.",
  keywords:
    "chiropractic blog Fresno, health tips chiropractor, wellness advice Fresno, back pain relief, spinal health, Dr. Thomas Potigian",
  canonical: "https://sunnysidechiropractic.com/blog",
  openGraph: {
    title: "Chiropractic Blog | Health Tips from Dr. Potigian Fresno, CA",
    description:
      "Expert chiropractic advice from Dr. Thomas Potigian. Learn about pain relief, wellness tips, and holistic health practices.",
    url: "https://sunnysidechiropractic.com/blog",
    type: "website",
    images: [
      {
        url: "https://sunnysidechiropractic.com/logo/brand-logo.png",
        width: 1200,
        height: 630,
        alt: "Sunnyside Wellness & Chiropractic Center Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chiropractic Blog | Health Tips from Dr. Potigian Fresno, CA",
    description:
      "Expert chiropractic advice from Dr. Thomas Potigian. Learn about pain relief and wellness tips.",
  },
  alternates: {
    canonical: "https://sunnysidechiropractic.com/blog",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const Blog = () => {
  const featuredBlog = blogData[3]; // First blog as featured
  const otherBlogs = blogData.slice(1); // Rest for other sections

  return (
    <>
      <Script
        id="blog-website-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Sunnyside Chiropractic Health Blog",
            description:
              "Expert chiropractic advice, health tips, and wellness information from Dr. Thomas Potigian and the Sunnyside Wellness team.",
            url: "https://sunnysidechiropractic.com/blog",
            author: {
              "@type": "Person",
              name: "Dr. Thomas Potigian",
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
              address: {
                "@type": "PostalAddress",
                streetAddress: "5207 E Belmont Ave",
                addressLocality: "Fresno",
                addressRegion: "CA",
                postalCode: "93727",
              },
            },
            blogPost: blogData.map((blog) => ({
              "@type": "BlogPosting",
              headline: blog.title,
              description: blog.content.introduction.content
                .split("\n\n")[0]
                .replace(/\*\*(.*?)\*\*/g, "$1")
                .substring(0, 200),
              url: `https://sunnysidechiropractic.com/blog/${blog.slug}`,
              datePublished: blog.publishDate,
              author: {
                "@type": "Person",
                name: blog.author,
              },
              image: blog.featuredImage,
              keywords: blog.tags.join(", "),
            })),
          }),
        }}
      />

      <Script
        id="breadcrumb-blog-jsonld"
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
            ],
          }),
        }}
      />

      <Script
        id="blog-itemlist-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Chiropractic Health Blog Posts",
            description:
              "Latest health and wellness articles from Sunnyside Wellness & Chiropractic Center",
            numberOfItems: blogData.length,
            itemListElement: blogData.map((blog, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "BlogPosting",
                "@id": `https://sunnysidechiropractic.com/blog/${blog.slug}`,
                headline: blog.title,
                description: blog.content.introduction.content
                  .split("\n\n")[0]
                  .replace(/\*\*(.*?)\*\*/g, "$1")
                  .substring(0, 160),
                datePublished: blog.publishDate,
                author: {
                  "@type": "Person",
                  name: blog.author,
                },
                image: blog.featuredImage,
                url: `https://sunnysidechiropractic.com/blog/${blog.slug}`,
              },
            })),
          }),
        }}
      />

      <div className="header-container flex flex-col gap-5">
        <header className="items-center text-center flex flex-col">
          <h1 className="sub-heading mb-3">
            Welcome to <span className="text-secondary">Our Blog</span>
          </h1>
          <p className="text-base md:text-lg font-poppins max-w-3xl">
            Stay informed with expert chiropractic advice, wellness tips, and
            health insights from Dr. Thomas Potigian and the Sunnyside Wellness
            team. Discover natural approaches to pain relief and optimal health.
          </p>
        </header>

        {featuredBlog && <HorizontalBlogCard blog={featuredBlog} />}

        <div className="my-5 w-full">
          <h1 className="blog-heading text-start">Top Picks for You</h1>
          <div className="flex gap-2 overflow-x-auto pb-2 w-full">
            {blogData.map((blog) => (
              <VerticalBlogCard key={blog.id} blog={blog} />
            ))}
            {blogData.length < 3 &&
              blogData.map((blog) => (
                <VerticalBlogCard key={`duplicate-${blog.id}`} blog={blog} />
              ))}
          </div>
        </div>

        <div className="my-5">
          <h1 className="blog-heading text-start">More for You</h1>
          <div className="flex gap-2 flex-col">
            {blogData.map((blog) => (
              <HorizontalBlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
