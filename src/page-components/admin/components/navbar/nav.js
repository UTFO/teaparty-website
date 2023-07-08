import "./nav.css";
import { useLocation } from "react-router-dom";

function NavButton(props) {
  return (
    <a className="admin-nav-button" href={props.link}>
      <img src={props.image} style={{ opacity: props.enable ? 1 : 0.5 }} />
      <p style={{ opacity: props.enable ? 1 : 0.5 }}>{props.text}</p>
    </a>
  );
}

export default function AdminNavbar() {
  console.log(useLocation().pathname);
  return (
    <div style={{ zIndex: 20 }}>
      <header className="admin-nav-top">
        <img src="/adminLogo.png" />
      </header>
      <div className="admin-nav-bottom">
        <NavButton
          image="/dashboard.png"
          text="Dashboard"
          enable={useLocation().pathname == "/admin/dashboard"}
          link="/admin/dashboard"
        />
        <NavButton
          image="/page.png"
          text="Pages"
          enable={useLocation().pathname.includes("/admin/page")}
        />
        <NavButton
          image="/documents.png"
          text="Documentation"
          enable={useLocation().pathname == "/admin/doc"}
          link="/admin/doc"
        />
      </div>
    </div>
  );
}
