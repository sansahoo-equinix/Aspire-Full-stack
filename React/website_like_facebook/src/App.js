import logo from './logo.svg';
import './App.css';
import {Image} from './components/Image'
import { Navbar } from './components/navbar/Navbar';
import { LeftSideBar } from './components/leftsidebar/LeftSideBar';
import { MainContent } from './components/maincontent/MainContent';
import { RightSideBar } from './components/rightsidebar/RightSideBar';



function App() {
  
return <div class="body" >

  <Navbar/>
  <div class="container">
      <LeftSideBar/>
      <MainContent/>
      <RightSideBar/>

  </div>
</div>

}

export default App;


  
