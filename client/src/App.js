import { Box } from '@mui/material';
import './App.css';

//components
import Header from './components/header/Header';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import DetailView from './components/details/DetailView';

import  ContextProvider  from './context/ContextProvider';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
      <Header/>
      <Box style={{ marginTop: 54 }}>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/product/:id' element={<DetailView />} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </Box>
      </BrowserRouter>
    </ContextProvider>

  );
}

export default App;
