import './App.css';

import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const pageSize = 10;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  return (
    <BrowserRouter>

      <Navbar />
      <Routes>
        <Route path='/' element={<News key="general" pageSize={pageSize} apiKey={apiKey} country="us" category="general" />}></Route>
        <Route path='/business' element={<News key="business" pageSize={pageSize} apiKey={apiKey} country="us" category="business" />}></Route>
        <Route path='/entertainment' element={<News key="entertainment" pageSize={pageSize} apiKey={apiKey} country="us" category="entertainment" />}></Route>
        <Route path='/health' element={<News key="health" pageSize={pageSize} apiKey={apiKey} country="us" category="health" />}></Route>
        <Route path='/science' element={<News key="science" pageSize={pageSize} apiKey={apiKey} country="us" category="science" />}></Route>
        <Route path='/sports' element={<News key="sports" pageSize={pageSize} apiKey={apiKey} country="us" category="sports" />}></Route>
        <Route path='/technology' element={<News key="technology" pageSize={pageSize} apiKey={apiKey} country="us" category="technology" />}></Route>

      </Routes>


    </BrowserRouter>

  )
}
export default App;