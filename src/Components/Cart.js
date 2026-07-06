import "./mobile.css";
import "./mobile.css";
import { useNavigate } from "react-router-dom";

function Cart() {

    const navigate = useNavigate();
      const item =
        JSON.parse(localStorage.getItem("cartItem")
        );
  
    

    const handleBuyNow = () => {
const isLoggedIn = localStorage.getItem("login") === "true";
        

        if (isLoggedIn) {

            navigate("/checkout", {
                state: item
            });

        } else {

            navigate("/login");
        }
    };

    return (

        <div className="details-page">

            <i className="bi bi-cart4 cart-logo"></i>

            <h2>Products added successfully</h2>

            <h1>{item?.name}</h1>

            <h2>{item?.finalPrice}</h2>

            <button
                className="btn2"
                onClick={handleBuyNow}
            >
                BUY NOW
            </button>

        </div>

    );
}

export default Cart;



