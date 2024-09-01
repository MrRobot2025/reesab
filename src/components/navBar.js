"use client";
import { useState } from "react";
import "../styles/navbar.css";
import Image from "next/image";
import logo from "../../public/rick.gif";
export default function NavBar() {
    const [page,setPage] = useState("Home");




    
    return (
      <div className="navbar">
        <div className="logo">
            <Image src={logo} alt="Description of the image"
        width={350} 
        height={300}></Image>
            <span className="d3">REESAB</span>
        </div>
        <div class="nav-links">
            <a href="#" className={page === "Home" ? "active" : ""}>Home</a>
            <a href="#" className={page === "Blog" ? "active" : ""}>Blog</a>
            <a href="#" className={page === "About" ? "active" : ""}>About</a>
        </div>
      </div>
    );
  }
  