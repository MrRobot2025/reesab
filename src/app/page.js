import NavBar from "@/components/navBar";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
export default function page() {
  return (
    <div className="main">
      <NavBar/>
        <Hero/>
      <Footer/>
    </div>
  );
}
