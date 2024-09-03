"use client";
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";
import Blog from "@/components/blog";
import About from "@/components/about";

export default function blogPage() {
    return (
      <div className="home">
        <NavBar/>
        <About/>
        <Footer/>
      </div>
    );
  }