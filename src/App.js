import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Hero from './component/Hero';
import Instagram from './profile/Instagram';
import Radhe from './radhe/Radhe';



function Rander() {
  return ( 

    <HashRouter>
      <Routes>
        <Route path='/' element={<Hero/>}/>  
        <Route path='/about' element={<h1>About Page</h1>}/>
        <Route path='/profile' element={<Instagram/>}/>
        <Route path='/radhe' element={<Radhe/>}/>
        <Route path='*' element={<h1>404 Not Found</h1>}/>
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
