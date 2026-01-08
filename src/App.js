import { BrowserRouter as BrauserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Hero from './component/Hero';
import Instagram from './profile/Instagram';



function Rander() {
  return ( 

    <BrauserRouter>
      <Routes>
        <Route path='/' element={<Hero/>}/>  
        <Route path='/about' element={<h1>About Page</h1>}/>
        <Route path='/profile' element={<Instagram/>}/>
      </Routes>
    </BrauserRouter>
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
