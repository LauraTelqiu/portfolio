import "./App.css"
import NavBar from "./screens/navigationBar/NavBar";
import Particles from './Particles'
import Header from "./screens/header/Header";
import AboutMe from "./screens/aboutMe/AboutMe";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <Particles />
      <AboutMe />
    </div>
  );
}

export default App;
