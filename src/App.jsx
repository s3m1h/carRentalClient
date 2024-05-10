import Home from "./components/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import AddBrand from "./components/car/brand/AddBrand";
import Admin from "./components/admin/Admin";
import Urls from "./constants/Urls";
import ListBrand from "./components/car/brand/ListBrand";
import UpdateBrand from "./components/car/brand/UpdateBrand";
import AddColor from "./components/car/color/AddColor";
import ListColor from "./components/car/color/ListColor";
import UpdateColor from "./components/car/color/UpdateColor";
import AddCar from "./components/car/AddCar";
import ListCar from "./components/car/ListCar";
import UpdateCar from "./components/car/UpdateCar";
import AdminBase from "./components/admin/AdminBase";
import AdminLayout from "./components/admin/AdminLayout";

import Header from "./components/layout/Header";
import "./index.css";
import CarDetail from "./components/home/CarDetail";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Profile from "./components/auth/Profile";
import Logout from "./components/auth/Logout";
import AuthProvider from "./components/auth/AuthProvider";
import PageNotFound404 from "./components/PageNotFound404";
import RentalCarForm from "./components/rent/RentalCarForm";
import About from "./components/About";

function App() {
  return (
    <>
    <AuthProvider>
      <Router>
        {/* Buraya scroll top component eklenecek. */}
        <Header />
        <Routes>
          <Route path={"/admin"} element={<AdminBase><AdminLayout /></AdminBase>}>
            <Route index element={<Admin />} />
            <Route path={"cars"} element={<ListCar />} />
            <Route path={"brands"} element={<ListBrand />} />
            <Route path={"colors"} element={<ListColor />} />
            <Route path={"rental-add"} element={<RentalCarForm />} />

              {/* Ekleme urlleri */}
            <Route path={"add-car"} element={<AddCar />} />
            <Route path={"add-brand"} element={<AddBrand />} />
            <Route path={"add-color"} element={<AddColor />} />

             {/* Güncelleme urlleri */}
            <Route path={":brandId"} element={<UpdateBrand />}/>
            <Route path={":colorId"} element={<UpdateColor />}/>
            <Route path={"cars/:carId"} element={<UpdateCar />} />
          </Route>

          <Route path={Urls.HOME} element={<Home />} />
          <Route path={"car-detail"} element={<CarDetail />} />


          <Route path={"/about"} element={<About />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/profile"} element={<Profile />} />
          <Route path={"/logout"} element={<Logout />} />
          <Route path={"*"} element={<PageNotFound404 />} />
        </Routes>
        <Footer />
      </Router>
      </AuthProvider>
    </>
  );
}

export default App;
