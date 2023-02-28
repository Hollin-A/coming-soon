import "./App.css";
import { Navbar } from "./component/Navbar.js";
import { Body } from "./component/Body.js";
import { Footer } from "./component/Footer.js";
import { Background } from "./component/Background";

function App() {
  return (
    <div className="h-screen flex flex-col relative">
      <Background/>
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}


export default App;
