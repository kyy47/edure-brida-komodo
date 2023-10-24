import CommunitySection from "@/components/CommunitySection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import QuizSection from "@/components/QuizSection";
import TrackingSection from "@/components/TrackingSection";
import { Quicksand } from "next/font/google";
const quickdsand = Quicksand({ subsets: ["latin"] });
export default function Home() {
  return (
    <div className={` ${quickdsand.className}`}>
      <Navbar />
      <HeroSection />
      <TrackingSection />
      <CommunitySection />
      <QuizSection />
    </div>
  );
}
