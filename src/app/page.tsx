import { AboutUs } from "@/components/component/about-us";
import { AppBar } from "@/components/component/app-bar";
import { DescriptionSection } from "@/components/component/description-section";
import { Hero } from "@/components/component/hero";
import { PageFooter } from "@/components/component/page-footer";

export default function Home() {
  return (
    <div>
      <AppBar />
      <Hero />
      <DescriptionSection />
      <AboutUs />
      <PageFooter />
    </div>
  );
}
