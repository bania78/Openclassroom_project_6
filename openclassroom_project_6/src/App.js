import './styles/App.scss';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
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
