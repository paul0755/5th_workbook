import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movie from './components/pages/Movie';
import Header from './components/Header';
import Home from './components/pages/Home';
import Celebirity from './components/pages/Celebirity';
import Tv from './components/pages/TV';
import NotFound from './components/pages/NotFound';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Header></Header>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/Movie" element={<Movie />}></Route>
                    <Route path="/Tv" element={<Tv />}></Route>
                    <Route path="/Celebirity" element={<Celebirity />}></Route>
                    <Route path='*' element={<NotFound/>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
