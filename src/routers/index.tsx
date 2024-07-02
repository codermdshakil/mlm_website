import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import RoutLayout from "../pages/Layout"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Pricing from "../pages/Pricing"
import Services from "../pages/Services"
import Blog from "../pages/Blog"
import Home from "../pages/Hpme"
import NotFound from "../pages/NotFound"
import Admin from "../pages/Admin"
import Admin_home from "../pages/Admin_home"

const router = createBrowserRouter((createRoutesFromElements(
    <>
        <Route path="/" element={<RoutLayout />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="blog" element={<Blog />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="contact" element={<Contact />} />
           
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="admin" element={<Admin />} />
        <Route path="admin/admin_home" element={<Admin_home />} />
    </>
)))



export default router