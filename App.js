import {BrowserRouter , Route,Routes} from "react-router-dom";
import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/confirmorder.scss";
import "./styles/paymentsuccess.scss";
import "./styles/login.scss";
import "./styles/Profile.scss";
import "./styles/table.scss";
import "./styles/orderdetails.scss";
import "./styles/dashboard.scss";
import "./styles/users.scss";


import Profile from "./component/profile/Profile";
import Login from "./component/login/Login";
import Home from "./component/home/Home";
import Cart from "./component/cart/Cart.jsx";
import Shipping from "./component/cart/Shipping.jsx";
import Contact from "./component/contact/Contact";
import Header from "./component/layout/Header.jsx";
import Founder from "./component/home/Founder.jsx";
import ConfirmOrder from "./component/cart/ConfirmOrder";
import MyOrders from "./component/order/MyOrders";
import "./styles/founder.scss"
import PaymentSuccess from "./component/cart/PaymentSuccess";
import OrderDetails from "./component/order/OrderDetails";
import DashBoard from "./component/admin/DashBoard";
import Users from "./component/admin/Users";
// import O from "./component/admin/Users";
import Orders from "./component/admin/Orders";
function App() {
  return (
   <div>
   <BrowserRouter>
   <Header isAuthenticated={true}/>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/shipping" element={<Shipping/>}/>
        <Route path="/confirmorder" element={<ConfirmOrder/>}/>
        <Route path="/paymentsuccess" element={<PaymentSuccess/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/me" element={<Profile/>}/>
        <Route path="/myorders" element={<MyOrders/>}/>
        <Route path="/order" element={<OrderDetails/>}/>
        <Route path="/admin/dashboard" element={<DashBoard/>}/>
        <Route path="/admin/users" element={<Users/>}/>
        <Route path="/admin/orders" element={<Orders/>}/>
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
