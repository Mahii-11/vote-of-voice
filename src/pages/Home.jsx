import Hero from "../components/home/Hero";
import PollSearchSection from "../components/home/PollSearchSection";
import ElectionPolls from "../components/home/candidatelist/ElectionPolls";
import PollSummary from "../components/home/PollSummary";
import WhyChooseUs from "../components/home/WhyChooseUs";


export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <PollSearchSection />
      <ElectionPolls />
      <PollSummary />
      <WhyChooseUs />
    </div>
  );
}
