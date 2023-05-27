import React from "react";
import ProductCart from "../component/ProductCart";
import  Phone  from "../assets/images/phone.jpg"
import { useTitle } from "../hooks/useTitle";

const Home = () => {
  useTitle("Home");
  const products = [
    {
      id: 1,
      name: "Sony Wh-Ch510 Bluetooth Wireless",
      price: 149,
      image: Phone,
    },
    {
      id: 2,
      name: "boAt Rockerz 450",
      price: 49,
      image: Phone,
    },
    {
      id: 3,
      name: "JBL Tune 760NC",
      price: 179,
      image: Phone,
    },
    {
      id: 4,
      name: "Logitech H111 Wired",
      price: 39,
      image: Phone,
    },
    {
      id: 5,
      name: "APPLE Airpods Max Bluetooth Headset",
      price: 199,
      image: Phone,
    },
    {
      id: 6,
      name: "ZEBRONICS Zeb-Thunder Wired",
      price: 29,
      image: Phone
    }
  ];
  return (
    <div className="products">
      {products.map((product) => (
        <ProductCart key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
