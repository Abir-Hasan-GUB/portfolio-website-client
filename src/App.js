import './App.css';
import About from './Componants/Home/AboutMe/About';
import Banner from './Componants/Home/Banner/Banner';
import NavBar from './Componants/Home/NavBar/NavBar';
import Skill from './Componants/Home/Skils/Skill';


function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <About></About>
      <Skill></Skill>
    </div>
  );
}

export default App;
