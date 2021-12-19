import React , {Component} from "react";
import { FaBook } from "react-icons/fa";
import './AllBooks.css';
class AllBooks extends Component{
     componentDidMount() {
        document.body.style.backgroundImage="none";
        document.body.style.backgroundColor="navajowhite";
    }

    render(){
        return(
            <div>
                <div className="navBar">
                <FaBook/>  All Books
                </div>
            </div>
        )
    }
}
export default AllBooks;