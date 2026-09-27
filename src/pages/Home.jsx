import Hero from "../components/Hero";
import MeetingPoints from "../components/MeetingPoints";
import StatsBar from "../components/StatsBar";
import ClientLogos from "../components/ClientLogos";
import RewritingModel from "../components/RewritingModel";
import Testimonial from "../components/Testimonial";
import VideoSection from "../components/VideoSection";
import FinalCTA from "../components/FinalCTA";
import ScrollGallery from "../components/ScrollGallery";

export default function Home() {
  return (
    <>
      <Hero />
      <MeetingPoints />
      <StatsBar />
      <ClientLogos />
      <RewritingModel />
      <Testimonial />
      <VideoSection />
      <FinalCTA />
      <ScrollGallery />
    </>
  );
}
