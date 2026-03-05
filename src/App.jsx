
import { Link, Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

function App() {
  return (
    <>
      <nav className="nav">
        <div className="nav-logo">
          Starter<span>Kit</span>
        </div>

        <ul className="nav-links">
          <li className="nav-link">
            <Link to={ROUTES.home}>Home</Link>
          </li>
          <li className="nav-link">
            <Link to={ROUTES.about}>About</Link>
          </li>
          <li className="nav-link">
            <Link to={ROUTES.contact}>Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path={ROUTES.home} element={<HomePage />} />
        <Route path={ROUTES.about} element={<AboutPage />} />
        <Route path={ROUTES.contact} element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
