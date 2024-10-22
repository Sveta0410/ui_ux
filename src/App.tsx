import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from './pages/Home';
import {Catalog} from './pages/Catalog';
import {Product} from './pages/Product';
import { Header } from './components/header';
// import { ChakraProvider, extendTheme } from '@chakra-ui/react';

// const theme = extendTheme({
//     fonts: {
//         heading: 'Roboto, sans-serif',
//         body: 'Roboto, sans-serif',
//     },
//     colors: {
//     brand: {
//         50: '#f5f7ff',
//         100: '#e6ecff',
//         200: '#ccd3ff',
//         300: '#b2baff',
//         400: '#99a2ff',
//         500: '#7f89ff',
//         600: '#5f66cc',
//         700: '#4a5199',
//         800: '#343b66',
//         900: '#1f2633',
//     },
//     },
// });

function App() {
    return (
//         <ChakraProvider theme={theme}>
            <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/product" element={<Product />} />
                </Routes>
            </BrowserRouter>
//         </ChakraProvider>
    );
}
export default App