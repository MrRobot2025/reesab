"use client";
import { usePathname } from 'next/navigation'; 
import Link from 'next/link';
import "../styles/navbar.css";
import Image from 'next/image';
import logo from '../../public/bo.png';

export default function NavBar() {
    const pathname = usePathname(); 

    return (
        <div className="navbar">
            <div className="logo">
                <Image className="img" src={logo} alt="Description of the image" />
                <span className="d3">REESAB</span>
            </div>
            <div className="nav-links">
                <Link 
                    href="/"
                    className={pathname === "/" ? "active" : ""}
                >
                    Home
                </Link>
                <Link 
                    href="/blog"
                    className={pathname === "/blog" ? "active" : ""}
                >
                    Blog
                </Link>
                <Link 
                    href="/about"
                    className={pathname === "/about" ? "active" : ""}
                >
                    About
                </Link>
            </div>
        </div>
    );
}
