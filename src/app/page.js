import FeaturedProject from "@/components/Home/FeaturedProject/FeaturedProject";
import HeroSection from "@/components/Home/HeroSection/HeroSection";
import StatList from "@/components/Home/StatList/StatList";
import WorkList from "@/components/Home/WorkList/WorkList";

export default function Home() {
  return (
    <>
        <HeroSection/>
        <div className="container-layout">
          <WorkList/>
          <StatList/>
        </div>
        <FeaturedProject/>
    </>
  );
}
