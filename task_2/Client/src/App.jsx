import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import HomeScreen from './Screens/HomeScreen'
import CreateScreen from "./Screens/CreateScreen";
import UpdateScreen from './Screens/UpdateScreen'
import {Oauth} from './components'
const App = () => {
  return (
   <BrowserRouter>
   <nav  style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#333', padding: '10px' }}>
    <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
    <Link to='/create' style={{ textDecoration: 'none', color: 'white' }}>Create</Link>
</nav>

    <Routes>
      <Route index element={<HomeScreen />} />
      <Route path="create" element={<CreateScreen />} />
      <Route path="update/:id" element={<UpdateScreen />} />
      <Route path="login" element={<Oauth />} />
    </Routes>
   </BrowserRouter>
  );
};

export default App;
