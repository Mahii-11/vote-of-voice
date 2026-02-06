import Navbar from "../layout/Navbar";
import Hero from "../components/home/Hero";
import  HomeSection  from "../components/home/HomeSection";

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar/>
      <Hero/>
      <HomeSection/>
    </div>
  )
}
