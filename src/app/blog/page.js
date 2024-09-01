"use client";
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";
import Blog from "@/components/blog";

export default function blogPage() {
    return (
      <div className="home">
        <NavBar/>
        <Blog/>
        <Footer/>
      </div>
    );
  }