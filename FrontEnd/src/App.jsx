import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";
import Register from "./Pages/Register";
import Cart from "./Pages/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Success from "./Pages/Success";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products/:category" element={ <ProductList/>}/>
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/success" element={<Success/>} />
      </Routes>
    </Router>
    
    )
};

export default App;