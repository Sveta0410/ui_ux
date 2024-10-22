import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from './pages/Home';
import {Catalog} from './pages/Catalog';
import { Header } from './components/Header';
import Layout from './components/Layout';
function App() {
return (
<BrowserRouter>
<Layout>
<Header />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/catalog" element={<Catalog />} />
</Routes>
</Layout>
</BrowserRouter>
);
}
export default App;