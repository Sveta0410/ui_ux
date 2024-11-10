import React from 'react';
import {BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import Product from './pages/Product/Product';
import { Header } from './components/header';
import Layout from './components/Layout';
import Footer from './components/footer';
function App() {
return (
    <Router>
        <Layout>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/product/:id" element={<Product />} />
            </Routes>
            <Footer />
        </Layout>
    </Router>
);
}
export default App;