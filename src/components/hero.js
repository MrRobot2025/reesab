"use client";
import "../styles/hero.css";
import Link from 'next/link';
import { useState } from "react";
import LoadingSpinner from "./loadingSpinner";
export default function Hero() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.location.href = '/surprise'; 
    }, 2000);
  };

    return (
      <div className="hero">
        <h1 className="greeting">Hi Friends,<br></br> कथमस्ति भवान्!</h1>
        <p>Welcome! I&apos;m Rishabh Singh👋.&quot;REESAB&quot; is the abbreviation I use on social media.</p>
        
        <p>I&apos;m from India 🇮🇳. I currently work in Bengaluru.</p>
        <p>I have been working as a Software Engineer 👨🏻‍💻 since March 2024.</p>
        <p>You can view my work <a href="#">here</a>, or <a href="#">download</a> my resume.</p>
        <p className="typing">&quot;Now I am become Death, the Destroyer of Worlds&quot;</p>
        <p>Catch a glimpse of my life and latest updates in my latest <a href="https://x.com/reeeesab">tweet!</a> <span className="x">𝕏</span></p>
        <p>This website is for recording life. Feel free to <a href="">get to know me better.</a></p>
        <p onClick={handleClick} className="surprise-button">
        {loading ? <LoadingSpinner /> : 'surprise here!!!!'}
      </p>
      </div>
    );
  }