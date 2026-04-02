import HeroSection from "./components/Herosection";
import CategoriesSection from "./components/CategoriesSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import MarqueeBanner from "./components/MarqueeBanner";
import WhyChooseUs from "./components/WhyChooseUs";
import FeaturesFan from "./components/FeaturesFan";
import CustomPrintServices from "./components/CustomPrintServices";
import PartnersSection from "./components/PartnersSection";
// import TeamSection from "./components/TeamSection";
import TestimonialsSection from "./components/TestimonialsSection";
// import Cardsscroll from "./components/Cardsscroll";
import FancySlider from "./components/FancySlider";
import Newsletter from "./components/Newsletter";

import { getDictionary } from "@/lib/get-dictionary";
import { type Locale } from "@/lib/i18n-config";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <FancySlider dict={dict} />
      {/* <HeroSection /> */}
      <CategoriesSection dict={dict} />
      <AboutSection dict={dict} />
      <ServicesSection dict={dict} />
      <MarqueeBanner dict={dict} />
      <WhyChooseUs dict={dict} />
      <FeaturesFan dict={dict} />
      <CustomPrintServices dict={dict} />
      <PartnersSection dict={dict} />
      {/* <TeamSection /> */}
      <TestimonialsSection dict={dict} />
      {/* <Newsletter dict={dict} /> */}
      {/* <Cardsscroll /> */}
    </>
  );
}
