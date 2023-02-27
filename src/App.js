import "./App.css";
import { Navbar } from "./component/Navbar.js";
import { Body } from "./component/Body.js";
import { Footer } from "./component/Footer.js";

function App() {
  return (
    <div className="bg-white background-image h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default App;
