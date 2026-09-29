import Seo from "../components/Seo";
import Hero from "../components/Hero";
import MeetingPoints from "../components/MeetingPoints";
import StatsBar from "../components/StatsBar";
import RewritingModel from "../components/RewritingModel";
import Testimonial from "../components/Testimonial";
import VideoSection from "../components/VideoSection";
import FinalCTA from "../components/FinalCTA";
import ScrollGallery from "../components/ScrollGallery";

export default function Home() {
  return (
    <>
      <Seo
        title="Events, Exhibitions & Conferences in Saudi Arabia"
        description="Connect Spot Exhibitions builds exhibitions, conferences and managed events across Saudi Arabia and the Middle East — connecting businesses, people and ideas."
        path="/"
      />
      <Hero />
      <MeetingPoints />
      <StatsBar />
      <RewritingModel />
      <Testimonial />
      <VideoSection />
      <FinalCTA />
      <ScrollGallery />
    </>
  );
}
