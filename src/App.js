import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Explore from "./pages/Explore";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/offers";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Category from "./pages/Category";
import CreateListing from "./pages/CreateListing";
import Listing from "./pages/Listing";
import Contact from "./pages/Contact";


function App() {


  return (

    <>
    <Router>
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/Offers" element={<Offers />} />
        <Route path="/Category/:categoryName" element={<Category />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/create-listing" element={<CreateListing />} />
        <Route path="/category/:categoryName/:listingId" element={<Listing />} />
        <Route path="/Profile" element={<PrivateRoute />}>
            <Route path="/Profile" element={<Profile />} />
        </Route>

        <Route path="/contact/:landlordId" element={<Contact />} />

      </Routes>

      <Navbar />

    </Router>

    <ToastContainer />

    </>
    
  )
}

export default App;
