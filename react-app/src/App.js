import './App.css';
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import CartProvider from './component/Context/CartContext';
import Cart from './component/Cart/Cart';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import Error404 from './component/Error404/Error404';
import Checkout from './component/Checkout/Checkout';

function App() {

    return (
        <CartProvider>
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route exact path="/" element={<Home/>} /> 
                        <Route exact path="/categoria/:categoryId" element={<ItemListContainer/>}/> 
                        <Route exact path="/menu" element={<ItemListContainer/>} /> 
                        <Route exact path="/detalle/:detalleId" element={<ItemDetailContainer/>}/> 
                        <Route exact path="/cart" element={<Cart/>}/>
                        <Route path={"/checkout"} element={<Checkout />} />
                        <Route path={"*"} element={<Error404 />} /> 
                    </Routes>
                    <Footer/>   
                </BrowserRouter>
        </CartProvider>
    );
}

export default App;
