import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import AllProduct from "./pages/AllProduct";
import Product from "./pages/Product";
import Order from "./pages/Order";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import { useUser } from "./context/UserContext";

function App() {
  const { currentUser } = useUser();
  const navigate = useNavigate();

  const privateRoute = (element) => {};

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route index element={<AllProduct />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="orders" element={<Order />} />
          <Route path="cart" element={<Cart />} />
          <Route path="user/signin" element={<SignIn />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
