import AddForm from "./AdminPages/AddForm";
import Admin_Dash from "./AdminPages/AdminDashboard";
import Home from "./HomaPage/Home";
import RoutesPage from "./Routes";
import { BrowserRouter ,Route , Routes } from "react-router-dom";
//import { BrowserRouter , Route , Routes} from 'react-router-dom';

//npm install @react-icons/all-files --save

function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <Home />
        {/* <Routes>
          <Route path='/Admin' element={<Admin_Dash />}/>
        </Routes>  */}
       {/* <AddForm />  */}
      {/*  <Admin_Dash />  */} 

    </div>
    </BrowserRouter>
  );
}

export default App;
