import React , {Component} from "react";
import './AddForm.css';
class AddForm extends Component{
        state={
                    Id : null,
                    Title: null,
                    Publisher: null,
                    Category: null,
                    Price: null
        };
    handleChange =(e) =>{
         e.preventDefault()
         const name=e.target.name;
         this.setState({
             [name] : e.target.value
         });
     } 
     handleClick = async (e) => {
        e.preventDefault();
        let response= await fetch('http://localhost:8080/libraryManApp/addBook',{
            method :'post',
             body:{
                Id : this.state.bookDetails.Id,
                Title: this.state.bookDetails.Title,
                Publisher: this.state.bookDetails.Publisher,
                Category: this.state.bookDetails.Category,
                Price: this.state.bookDetails.Price
            }  
        })
         console.log(response);
    } 
   async componentDidMount() {
        document.body.style.backgroundImage="none";
        document.body.style.backgroundColor="navajowhite";
    }
    render(){
        return(
            <div className="Add-Container">
                <h2>ADD NEW BOOK</h2>
                <form className="add-form" >
                    <div className="id">
                        <label >Book ID:</label><br></br>
                        <input  
                        type='text'  
                        id="id"
                        name="id"
                        placeholder='input book id' 
                        value={this.state.Id}
                        onChange={this.handleChange} />
                    </div> 

                    <div className="title">
                        <label >Title:</label><br></br>
                        <input  
                        type='text' 
                        id="title" 
                        name="title"
                        placeholder='input book title' 
                        value={this.state.Title}
                        onChange={this.handleChange}/>
                    </div>

                    <div className="publisher">
                        <label >Publisher:</label><br></br>
                        <input  
                        type='text' 
                        id="publisher" 
                        placeholder='input publisher name'
                        value={this.state.Publisher} 
                        onChange={this.handleChange}/>
                    </div>

                    <div className="category">
                        <label>Category:</label><br></br>
                        <input  
                        type='text' id="category"
                        placeholder='input category'
                        value={this.state.Category}
                        onChange={this.handleChange}/>
                    </div>

                    <div className="price">
                        <label>Price:</label><br></br>
                        <input  
                        type='text' 
                        id="price" 
                        placeholder='input price' 
                        value={this.state.Price}
                        onChange={this.handleChange} />
                    </div>  
                    
                    <button className="addBook" onClick={this.handleClick} >ADD</button>
                </form>
            </div>
        )
    }
}
export default AddForm;