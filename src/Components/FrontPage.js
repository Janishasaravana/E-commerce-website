import { useNavigate } from "react-router-dom";
import './mobile.css';
function FrontPage (){
    const navigate = useNavigate();
    
    const handleyes =()=>{
navigate("/brands")
    }
    const handleno =()=>{
        alert("Maybe next time ")
    }
    return(
        <div>
            <div className="cont">
                <div className="cont1">
      <h1>Discover our newest collections and best offers</h1>
      <div className="front">
<h2>Explore Our Latest Smartphone Models</h2>
<p>Looking for a new Smartphone Models</p>
 <button onClick={handleyes}>YES</button> 
<button onClick={handleno}>NO</button> 
      </div>
</div>
        </div>
        </div>
    );
}
export default FrontPage;