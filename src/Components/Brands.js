import pic1 from './download samsung.jpg';
import pic2 from './oppo.png';
import pic3 from './Realme-PNG-Image.png';
import pic4 from './133290-11-pic-apple.png';

import pic5 from './nokia-1000x1000.webp';
import pic6 from './images.jpg';
import "./mobile.css";
import { useNavigate } from "react-router-dom";

function Brands() {

    const navigate = useNavigate();
   
    const brands = [
        {
            name: "Samsung",
            image: pic1
        },

        {
            name: "Oppo",
            image: pic2
        },

        {
            name: "Realme",
            image: pic3
        },

        {
            name: "iPhone",
            image: pic4
        },

        {
            name: "Nokia",
            image: pic5
        },

        {
            name: "Poco",
            image: pic6
        }
    ];

    return (

    <div>

        <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
        >

            <div className="carousel-inner">

                <div className="carousel-item active">
<div className="carousel-content">
                    <img
                        src={pic1}
                        className="carousel-img"
                        alt="Samsung"
                    />
<div className="right">

        <h2>Samsung Galaxy Sale</h2>

        <p>Up to 40% OFF</p>

    </div>
 </div>

</div>
                <div className="carousel-item">
<div className="carousel-content">
                    <img
                        src={pic2}
                        className="carousel-img"
                        alt="Oppo"
                    />
<div className="right">

        <h2>Oppo New Launch</h2>

        <p>Best Camera Phones</p>

    </div>
                </div>
</div>
                <div className="carousel-item">
<div className="carousel-content">

                    <img
                        src={pic3}
                        className="carousel-img"
                        alt="Realme"
                    />
<div className="right">

        <h2>Realme Live sale</h2>

        <p>Explore now!</p>

    </div>
                </div>
                </div>

               

            </div>

            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
            >

                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>

            </button>

            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
            >

                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>

            </button>

        </div>

        <div className="brand-page">

            <h1>Mobile Brands</h1>

            <div className="card-container">

                {
                    brands.map((brand, index) => (

                        <div
                            className="card1"
                            style={{ width: "18rem" }}
                            key={index}
                        >

                            <img
                                src={brand.image}
                                className="card-img-top"
                                alt={brand.name}
                            />

                            <div className="card-body">

                                <h5 className="card-title">

                                    {brand.name}

                                </h5>

                                <button className="btn1"
                            onClick={()=>  {
                                if (brand.name == "Samsung"){
                                    navigate("/samsung");
                                }
                            }}
                            >
                                    VIEW MODELS

                                </button>

                            </div>

                        </div>

                    ))
                }

            </div>

        </div>

    </div>

);
}
export default Brands;