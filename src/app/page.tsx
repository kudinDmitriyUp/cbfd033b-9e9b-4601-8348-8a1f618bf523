"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="small"
        sizing="large"
        background="noise"
        cardStyle="subtle-shadow"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Collections",
          id: "products",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Jakk"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Jakk Studio"
      description="Where art meets nature. Creating exquisite floral arrangements for every special moment in your life."
      buttons={[
        {
          text: "Explore Flowers",
          href: "#products",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/crystal-vase-with-gorgeous-bouquet_23-2148029206.jpg"
      imageAlt="Jakk Flower Studio"
      showDimOverlay={true}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={true}
      title="Our Floral Passion"
      description="Jakk Studio was founded on the belief that flowers are the language of emotions. We source the freshest stems daily, crafting bespoke arrangements that tell your unique story with elegance and simplicity."
      imageSrc="http://img.b2bpic.net/free-photo/midsection-view-woman-s-hand-holding-bunch-flowers-with-photo-album-desk_23-2147882093.jpg"
      imageAlt="Our Florist Studio"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Classic Roses",
          price: "$85",
          variant: "Premium",
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-floral-design-studio_23-2151910651.jpg",
        },
        {
          id: "2",
          name: "Lily Elegance",
          price: "$65",
          variant: "Fresh",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-white-color-roses-gladiolus-flowers-palm-leaf-green-wooden-background-with-copy-space_141793-7993.jpg",
        },
        {
          id: "3",
          name: "Tulip Joy",
          price: "$55",
          variant: "Spring",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-red-tulip-flower-bouquet_140725-12188.jpg",
        },
        {
          id: "4",
          name: "Mixed Seasonal",
          price: "$75",
          variant: "Artisan",
          imageSrc: "http://img.b2bpic.net/free-photo/female-hand-holding-beautiful-colorful-flower-bouquet_181624-25733.jpg",
        },
        {
          id: "5",
          name: "Sunflower Shine",
          price: "$45",
          variant: "Rustic",
          imageSrc: "http://img.b2bpic.net/free-photo/flowers-vase-baroque-like-photography_23-2149659280.jpg",
        },
        {
          id: "6",
          name: "Orchid Grace",
          price: "$95",
          variant: "Luxury",
          imageSrc: "http://img.b2bpic.net/free-photo/flowers-from-home-garden-vase-white-background_169016-34735.jpg",
        },
      ]}
      title="Our Collections"
      description="Curated arrangements designed for elegance and lasting impact."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={true}
      testimonial="Jakk Studio turned our vision into reality! The floral arrangements for our event were absolutely breathtaking and smelled like a dream."
      rating={5}
      author="Elena Rossi"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/smiley-woman-gardening-indoors_23-2148509872.jpg",
          alt: "Customer 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-woman-smiling-with-bouquet_1098-640.jpg",
          alt: "Customer 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/women-making-preparations-wedding_23-2149184365.jpg",
          alt: "Customer 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-with-flowers-bouquet_23-2149235778.jpg",
          alt: "Customer 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-happy-women-looking-tablet_23-2148377329.jpg",
          alt: "Customer 5",
        },
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      tag="Contact Us"
      title="Ready to bloom?"
      description="Have a special occasion or need a bespoke arrangement? Send us a message and let's craft something beautiful together."
      imageSrc="http://img.b2bpic.net/free-photo/woman-making-floral-arrangement_329181-9427.jpg"
      mediaAnimation="slide-up"
      inputPlaceholder="Enter your email for inquiries"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Jakk Studio"
      copyrightText="© 2025 Jakk Flower Studio. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
