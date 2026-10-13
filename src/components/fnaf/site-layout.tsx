import { Link } from "@tanstack/react-router";
import { Ghost } from "lucide-react";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="wordmark">
          <Ghost className="brand-mark" />
          FNAF<span>ARCHIVE</span>
        </Link>
        <nav className="nav" aria-label="Navegação principal">
          <Link to="/" activeProps={{ className: "active" }}>
            Os jogos
          </Link>
          <Link to="/animatronicos" activeProps={{ className: "active" }}>
            Animatrônicos
          </Link>
          <Link to="/" hash="lista">
            Lista
          </Link>
        </nav>
        <div className="live">
          <i />
          SISTEMA ONLINE <span>12:00 AM</span>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <div className="footer-brand">FNAF ARCHIVE</div>
          <p>
            Arquivo de fãs. Five Nights at Freddy’s pertence a Scott Cawthon e seus respectivos
            criadores.
          </p>
        </div>
        <span className="footer-right">FIM DA TRANSMISSÃO · 06:00 AM</span>
      </div>
    </footer>
  );
}
