import Hero from "../components/home/Hero";
import PollSearchSection from "../components/home/PollSearchSection";
import ElectionPolls from "../components/home/candidatelist/ElectionPolls";
import PollSummary from "../components/home/PollSummary";
import PollMap from "../components/home/PollMap";
import WhyChooseUs from "../components/home/WhyChooseUs";
import CallToAction from "../components/home/CallToAction";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <PollSearchSection />
      <ElectionPolls />
      <PollSummary />
      <PollMap />
      <WhyChooseUs />
      <CallToAction />
    </div>
  );
}
