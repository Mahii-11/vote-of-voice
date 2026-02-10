import Hero from "../components/home/Hero";
import PollSearchSection from "../components/home/PollSearchSection";
import ElectionPolls from "../components/home/candidatelist/ElectionPolls";
import PollSummary from "../components/home/PollSummary";
import WhyChooseUs from "../components/home/WhyChooseUs";


export default function Home() {
  return (
    <div className="font-sans">
      <div id="hero">
         <Hero />
      </div>
      <div  id="candidate-search">
         <PollSearchSection />
      </div>
      <div  id="support">
        <ElectionPolls />
      </div>
     <div id="statistics">
       <PollSummary />
     </div>
    <div id="why-us">
        <WhyChooseUs />
    </div>
    </div>
  );
}
