import "../styles/navbar.css";
export default function NavBar() {
    return (
      <div className="navbar">
        <div className="logo">
            <span className="d3">REESAB</span>
        </div>
        <div class="nav-links">
            <a href="#">Home</a>
            <a href="#">Blog</a>
            <a href="#">About</a>
        </div>
      </div>
    );
  }
  