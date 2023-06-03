import React from "react";
import ProductCard from "./06-product-card";

const Products = () => {
  return (
    <div>
      <ProductCard name="Bayram">
        <h2>Sony Display</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          repudiandae quis id quam, magni quibusdam laboriosam atque
          reprehenderit veniam! Dolorum sed laudantium consectetur ducimus
          provident. Porro illum facere tempora. Eveniet.
        </p>
      </ProductCard>
      <ProductCard name="Myrat">
        <h2>Intel Processor</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          repudiandae quis id quam, magni quibusdam laboriosam atque
          reprehenderit veniam! Dolorum sed laudantium consectetur ducimus
          provident. Porro illum facere tempora. Eveniet.
        </p>
      </ProductCard>
    </div>
  );
};

export default Products;
