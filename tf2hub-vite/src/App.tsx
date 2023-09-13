import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import "./App.scss";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Navigation />
      <div className="content-container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
