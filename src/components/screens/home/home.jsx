import CustomContainer from "@/components/ui/custom_container/custom_container";
import React from "react";
import BannerSection from "./sections/banner/banner";
import ProductsSection from "./sections/products/products";
import TasteSection from "./sections/taste/taste";
import AboutSection from "./sections/about/about";

const HomeScreen = () => {
  return (
    <main>
      <BannerSection />
      <ProductsSection />
      {/* <AboutSection /> */}
      <TasteSection />
    </main>
  );
};

export default HomeScreen;
