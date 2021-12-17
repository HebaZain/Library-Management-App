import React , {Component} from "react";
import { FaHome } from "react-icons/fa";
import { FaFolderPlus } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
//import { Link } from "react-router-dom";
import './AdminDashboard.css';
class Admin_Dash extends Component{
    async componentDidMount() {
        /* document.body.style.backgroundImage="none";
        document.body.style.backgroundColor="navajowhite"; */
        /* let response= await fetch('http://localhost:8080/',{

        });
        console.log('SUCCESS'); */
    }
    render(){
        return(
            <div>
                <div className="navBar">
                <FaHome/>  Home
                </div>
                <div className='options'>
                {/* <Link to='/admin/addBook'> <button><i className='icon'><FaFolderPlus size={50}/></i><br></br> Add Book</button> </Link> */} 
                    <button><i className='icon'><FaFileAlt size={50}/></i><br></br> All Book</button>
                    <button><i className='icon'><FaSignOutAlt size={50}/></i><br></br> Log out</button>

                </div>

            </div>
        )
    }
}
export default Admin_Dash;