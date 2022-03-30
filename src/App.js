import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element = {<Home></Home>}></Route>
        <Route path='/shope' element = {<Shop></Shop>}></Route>
        <Route path='/about' element = {<About></About>}></Route>
        <Route path='/contact' element = {<Contact></Contact>}></Route>
        <Route path='*' element = {<NotFound></NotFound>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
