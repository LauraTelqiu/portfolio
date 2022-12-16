import "./App.css"
import NavBar from "./screens/navigationBar/NavBar";
import Particles from './Particles'
import Header from "./screens/header/Header";
import AboutMe from "./screens/aboutMe/AboutMe";
import Technologies from "./screens/technologies/Technologies";
import Portfolio from "./screens/portfolio/Portfolio";
function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <Particles />
      <AboutMe />
      <Technologies />
      <Portfolio />
    </div>
  );
}

export default App;
