import './App.css';
import About from './Componants/Home/AboutMe/About';
import Banner from './Componants/Home/Banner/Banner';
import Contacts from './Componants/Home/Contacts/Contacts';
import NavBar from './Componants/Home/NavBar/NavBar';
import Portfolio from './Componants/Home/Portfolio/Portfolio';
import Sarvice from './Componants/Home/Service/Sarvice';
import Skill from './Componants/Home/Skils/Skill';
import './Responsive.css';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <About></About>
      <Skill></Skill>
      <Sarvice></Sarvice>
      <Portfolio></Portfolio>
      <Contacts></Contacts>
    </div>
  );
}

export default App;
