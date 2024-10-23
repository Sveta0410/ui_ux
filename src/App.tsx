import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import { Header_1 } from './components/Header';
import Layout from './components/Layout';
function App() {
return (
    <BrowserRouter>
        <Layout>
            <Header_1 />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            </Routes>
        </Layout>
    </BrowserRouter>
);
}
export default App;