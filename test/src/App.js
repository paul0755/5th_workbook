import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movie from './components/page/Movie';
import Header from './components/page/Header';
import Home from './components/page/Home';
import Celebirity from './components/page/Celebirity';
import Tv from './components/page/TV';
import NotFound from './components/page/NotFound';

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
