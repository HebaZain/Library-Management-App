import React , {Component} from "react";
import { FaUserShield } from "react-icons/fa";
import { FaUser } from "react-icons/fa"; 
import { Link } from "react-router-dom";
import './Home.css';
function Home(){
    //let nav=useNavigate();

    return(
        <div className="Contaner">
            <h2>WELCOME ^^ </h2>
            <div className="sign-as">
                <h3>Sing in as :</h3>
                 <Link to='/Admin'><button className="choose" > <FaUserShield/>  Admin</button><br></br> </Link>
                <button className="choose"> <FaUser/> User</button>
            </div>
        </div>
    )

}
export default Home;
