import '../styles/App.css';
import Nav from './Nav';
import Footer from './Footer';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
