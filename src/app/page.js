import Hero from "@/components/hero";
import "./globals.css"
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <div className="main">
      <NavBar/>
      <Hero/>
      <Footer/>
    </div>
  );
}
