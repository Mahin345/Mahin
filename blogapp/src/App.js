import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Addblog from './Component/Addblog';
import Api from './Component/Api';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='Home' element={<Api/>}/>
        <Route path='/add' element={<Addblog/>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
