import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./mobile.css";

// import pic1 from "./images (1).jpg";
// import pic2 from "./images (2).jpg";

function SamsungDetails() {
const navigate = useNavigate();
    const { id } = useParams();

     const [phone, setPhone] = useState(null);
 useEffect(() => {

        fetch(`http://localhost:8080/samsung/${id}`)

            .then((response) => response.json())

            .then((data) => {

                setPhone(data);

            })

            .catch((error) => {

                console.log(error);

            });

    }, [id]);

    
    if (!phone) {

        return <h2>Loading...</h2>;
    }

    // BUY NOW
    const handleBuyNow = () => {

        const isLoggedIn =
            localStorage.getItem("login") === "true";

        if (isLoggedIn) {

            navigate("/checkout", {
                state: phone
            });

        } else {

            navigate("/login");
        }
    };

    
    const handleAddToCart = () => {

        

        localStorage.setItem(
            "cartItem",
            JSON.stringify(phone)
        );

        alert("Added to cart!");

        navigate("/cart");
    };

    return (

        <div className="details-page">

            <div className="details-card">

                <img
                    src={`/images/${phone.image}`}
                    alt={phone.name}
                />

                <div className="phone-details">

                    <h1>{phone.name}</h1>

                    <h3>RAM : {phone.ram}</h3>

                    <h3>Processor : {phone.processor}</h3>

                    <h3>Battery : {phone.battery}</h3>

                    <h3>Camera : {phone.camera}</h3>

                    <h3>Storage : {phone.storage}</h3>

                    <h2>
                        Original Price : ₹{phone.price}
                    </h2>

                    <h3>
                        Discount : {phone.discount}%
                    </h3>

                    <h2>
                        Final Price : ₹{phone.finalPrice}
                    </h2>

                    <button
                        className="btn1"
                        onClick={handleAddToCart}
                    >
                        ADD TO CART
                    </button>

                   
                </div>

            </div>

        </div>

    );
}

export default SamsungDetails;




