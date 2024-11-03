import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog';
import { Header } from './components/header';
import Layout from './components/Layout';
import Footer from './components/footer';
function App() {
return (
    <BrowserRouter>
        <Layout>
            <Header />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            </Routes>
            <Footer />
        </Layout>
    </BrowserRouter>
);
}
export default App;