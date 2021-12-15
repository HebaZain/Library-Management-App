import React , {Component} from "react";
import './AddForm.css'
class AddForm extends Component{
    componentDidMount() {
        document.body.style.backgroundImage="none";
        document.body.style.backgroundColor="navajowhite";
    }
    render(){
        return(
            <div className="Add-Container">
                <h2>ADD NEW BOOK</h2>
                <form className="add-form">
                    <div className="id">
                        <label >Book ID:</label><br></br>
                        <input  type='text' placeholder='input book id' />
                    </div>
                    <div className="title">
                        <label >Title:</label><br></br>
                        <input  type='text' placeholder='input book title' />
                    </div>
                    <div className="publisher">
                        <label >Publisher:</label><br></br>
                        <input  type='text' placeholder='input publisher name' />
                    </div>
                    <div className="year">
                        <label >Year:</label><br></br>
                        <input  type='text' placeholder='input year' />
                    </div>
                    <div className="category">
                        <label>Category:</label><br></br>
                        <input  type='text' placeholder='input category' />
                    </div>
                    <div className="price">
                        <label>Price:</label><br></br>
                        <input  type='text' placeholder='input price' />
                    </div>
                    <button>ADD</button>
                </form>
            </div>
        )
    }
}
export default AddForm;