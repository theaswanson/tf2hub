import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import "./App.scss";

function App() {
  return (
    <>
      <Navigation />
      <div className="content-container">
        <Outlet />
      </div>
    </>
  );
}

export default App;
