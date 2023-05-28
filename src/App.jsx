import "./App.scss";

import { Navbar } from "./components/index";
import {
  About,
  Contact,
  Footer,
  Header,
  Testimonials,
  Work,
} from "./container/index";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
