import AddForm from "./AdminPages/AddForm";
import Admin_Dash from "./AdminPages/AdminDashboard";
import Home from "./HomaPage/Home";
import RoutesPage from "./Routes";
import { BrowserRouter, Routes , Route} from "react-router-dom";
import AllBooks from "./AdminPages/AllBooks";
import DisplayBooks from "./AdminPages/DisplayBooks";
//npm install @react-icons/all-files --save
//npm i react-bootstrap

function App() {
  return (
    <BrowserRouter>
    <div className="App">

       {/* <Routes>
      <Route path='/' exact element={ <Home />} />
      <Route path='/Admin' exact element={<Admin_Dash />} />
      <Route path='/logout' exact element={<Home />} /> 
      <Route path='/addBooks' exact element={<AddForm />} />
       
      </Routes>  */}
      <AddForm />
      {/* <DisplayBooks /> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
