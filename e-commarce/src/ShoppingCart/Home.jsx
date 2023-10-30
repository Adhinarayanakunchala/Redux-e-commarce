import React from "react";
import Product from "./Product";
import Product1 from "./images/Product1.jpg";
import Product2 from "./images/Product2.jpg";
import Product3 from "./images/product3.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div>
        <Product
          id="1"
          title="The product One is Shopping"
          price="50"
          rating="****"
          image={Product1}
        />
        <Product
          id="2"
          title="The product One is Computer"
          price="1000"
          rating="****"
          image={Product2}
        />
      </div>
      <div>
        <Product
          id="3"
          title="The product One is Computer"
          price="1500"
          rating="*****"
          image={Product3}
        />
      </div>
    </div>
  );
}

export default Home;
