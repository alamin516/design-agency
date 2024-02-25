import HeroSection from "@/components/Home/HeroSection/HeroSection";
import WorkList from "@/components/Home/WorkList/WorkList";

export default function Home() {
  return (
    <>
        <HeroSection/>
        <main className="w-[1440px] px-[100px] mx-auto">
          <WorkList/>
        </main>
    </>
  );
}
