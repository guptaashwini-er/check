import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Hero from './component/Hero';
import Instagram from './profile/Instagram';



function Rander() {
  return ( 

    <HashRouter>
      <Routes>
        <Route path='/' element={<Hero/>}/>  
        <Route path='/about' element={<h1>About Page</h1>}/>
        <Route path='/#/profile' element={<Instagram/>}/>
      </Routes>
    </HashRouter>
  );
}



function App() {
  return (
   <>
   <Rander/>
   </>
  );
}

export default App;
