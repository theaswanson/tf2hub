import { Outlet } from "react-router-dom";
import Navigation from "@pages/Navigation";
import "./App.scss";
import Footer from "@pages/Footer";

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
