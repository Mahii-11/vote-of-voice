import Hero from "../components/Hero";
import Navbar from "../layout/Navbar";
import  HomeSection  from "../components/HomeSection";

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar/>
      <Hero/>
      <HomeSection/>
    </div>
  )
}
