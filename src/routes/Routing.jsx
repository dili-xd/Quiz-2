import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Registro from "../pages/Registro";
import Home from "../pages/Home";
function Routing(){
    return(
    <Router>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<Login/>}/>
            <Route path="/registro" element={<Registro/>}/>
            <Route path="/home" element={<Home/>}/>
            
        </Routes>
    </Router>
    )
}
export default Routing
