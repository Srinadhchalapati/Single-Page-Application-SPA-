import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";

export default function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <h1>ShopSmart Advanced SPA</h1>
        <p>
          This is an advanced Single Page Application built with React, React
          Router, and the FakeStore API. It showcases API integration, routing,
          reusable components, global state, favorites with localStorage, dark
          mode, and filtering/sorting of data.
        </p>
        <p>
          Use the navigation bar to browse products, mark favorites, and switch
          between light and dark themes.
        </p>
        <Link to="/products">
          <Button>Start Browsing</Button>
        </Link>
      </div>
    </section>
  );
}
