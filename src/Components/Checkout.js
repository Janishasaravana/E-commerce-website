import { useLocation } from "react-router-dom";

function Checkout() {

    const location = useLocation();
  const product = location.state;
  console.log(product);
//     const products = Array.isArray(location.state)
//     ? location.state
//     : [];
//   localStorage.removeItem("cart");
//     const totalAmount = products.reduce(

//         (total, item) =>

//             total + item.finalPrice,

//         0
    

    return (

        <div>

            <h1>Order Summary</h1>
            <hr/>
            <h2>{product?.name}</h2>
<hr/>
            <h3>
                Original Price :
                ₹{product?.price}
            </h3>

            <h3>
                Discount :
                {product?.discount}%
            </h3>
<hr/>
            <h2>
                Final Price :
                ₹{product?.finalPrice}
            </h2>

            <button
                onClick={() =>
                    alert("ORDER PLACED SUCCESSFULLY!")
                }
            >
                Place Order
            </button>

        </div>
    );
}

export default Checkout;