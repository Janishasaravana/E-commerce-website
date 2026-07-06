import "./mobile.css";
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";

function Samsung() {
    const navigate = useNavigate();

    const [samsungPhones, setSamsungPhones] = useState([]);

    useEffect(() => {

        fetch("http://localhost:8080/samsung")

            .then((response) => response.json())

            .then((data) => {

                setSamsungPhones(data);

            })
        .catch((error) => {

                console.log(error);

            });


}, []);



    return (

        <div className="samsung-page">

            <h1>Samsung Models</h1>

            <div className="model-container">

                {

                    samsungPhones.map((phone) => (

                        <div
                            className="model-card"
                            key={phone.id}
                        >
                              <img
                                src={`/images/${phone.image}`}
                                alt={phone.name}
                            />

                            <h2>{phone.name}</h2>
                             <h3>₹{phone.finalPrice}</h3>
                             <button
                                className="btn1"
                                onClick={() =>
                                    navigate(`/samsung/${phone.id}`)
                                }
                            >

                                VIEW DETAILS

                            </button>

                        </div>

                    ))

                }

            </div>

        </div>

    );
}

export default Samsung;