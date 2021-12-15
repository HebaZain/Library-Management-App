import React , {Component} from "react";
import { FaUserShield } from "react-icons/fa";
import { FaUser } from "react-icons/fa"; 

import './Home.css';
class Home extends Component{
    render(){
        return(
            <div className="Contaner">
                <h2>WELCOME ^^ </h2>
                <div className="sign-as">
                    <h3>Sing in as :</h3>
                     <button className="choose"> <FaUserShield/>  Admin</button><br></br>
                    <button className="choose"> <FaUser/> User</button>

                </div>
            </div>
        )
    }
}
export default Home;
