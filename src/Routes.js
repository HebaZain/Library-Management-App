import { Component } from "react";
import AddForm from "./AdminPages/AddForm";
import Admin_Dash from "./AdminPages/AdminDashboard";
import Home from "./HomaPage/Home";
import { BrowserRouter ,Route , Routes } from "react-router-dom";
class RoutesPage extends Component{
    render(){
        return(
            <BrowserRouter>
                <Routes>
                <Route path='/Admin'  element={<Admin_Dash />} />
                </Routes>
            </BrowserRouter>
            
        )
    }
}
export default RoutesPage;