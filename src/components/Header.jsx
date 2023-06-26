import { GiGalaxy } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        <GiGalaxy size={24} />
        <div>IntegerStore</div>
      </Link>
      <nav>
        <NavLink to="/">Beranda</NavLink>
        <NavLink to="/about">Tentang</NavLink>
        <NavLink to="/contact">Kontak</NavLink>
      </nav>
      <button>Login</button>
    </header>
  );
}
