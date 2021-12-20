import React , {Component} from "react";
import './AddForm.css';
class AddForm extends Component{
    constructor(){
        super()
        this.state={
            bookDetails:{
                    Id : null,
                    Title: null,
                    Publisher: null,
                    Category: null,
                    Price: null
            }
        };
    }
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
                Id : this.state.Id,
                Title: this.state.Title,
                Publisher: this.state.Publisher,
                Category: this.state.Category,
                Price: this.state.Price
            }  
        })
         console.log(response);
    } 
    componentDidMount() {
        document.body.style.backgroundImage="none";
        document.body.style.backgroundColor="navajowhite";
    }
    render(){
        return(
            <div className="Add-Container">
                <h2>ADD NEW BOOK</h2>
                <form className="add-form"  onSubmit={this.handleClick}>
                    <div className="id">
                        <label >Book ID:</label><br></br>
                        <input  
                        type='text'  
                        id="id"
                        name="id"
                        placeholder='input book id' 
                        value={this.state.bookDetails.Id}
                        onChange={this.handleChange} />
                    </div> 

                    <div className="title">
                        <label >Title:</label><br></br>
                        <input  
                        type='text' 
                        id="title" 
                        name="title"
                        placeholder='input book title' 
                        value={this.state.bookDetails.Title}
                        onChange={this.handleChange}/>
                    </div>

                    <div className="publisher">
                        <label >Publisher:</label><br></br>
                        <input  
                        type='text' 
                        id="publisher" 
                        placeholder='input publisher name'
                        value={this.state.bookDetails.Publisher} 
                        onChange={this.handleChange}/>
                    </div>

                    <div className="category">
                        <label>Category:</label><br></br>
                        <input  
                        type='text' id="category"
                        placeholder='input category'
                        value={this.state.bookDetails.Category}
                        onChange={this.handleChange}/>
                    </div>

                    <div className="price">
                        <label>Price:</label><br></br>
                        <input  
                        type='text' 
                        id="price" 
                        placeholder='input price' 
                        value={this.state.bookDetails.Price}
                        onChange={this.handleChange} />
                    </div>  
                    
                    <button className="addBook">ADD</button>
                </form>
            </div>
        )
    }
}
export default AddForm;