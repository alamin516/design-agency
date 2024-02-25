import HeroSection from "@/components/Home/HeroSection/HeroSection";
import StatList from "@/components/Home/StatList/StatList";
import WorkList from "@/components/Home/WorkList/WorkList";

export default function Home() {
  return (
    <>
        <HeroSection/>
        <main className="container-layout">
          <WorkList/>
          <StatList/>
        </main>
    </>
  );
}
