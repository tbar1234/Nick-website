import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { site } from "@/lib/data";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LandscapingBusiness",
    name: site.name,
    description:
      "Weekly lawn mowing, lawn maintenance, garden maintenance, and mulching for residential and commercial properties in Glastonbury, CT, plus larger landscaping and hardscape projects throughout the surrounding towns.",
    telephone: site.phone,
    email: site.email,
    areaServed: site.serviceArea,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Glastonbury",
      addressRegion: "CT",
    },
    url: "https://www.pezzenteservices.com",
    sameAs: [site.facebook],
  };

  return (
    <>
      {/* eslint-disable-next-line react/no-danger */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <WhyChooseUs />
        <Testimonials />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
