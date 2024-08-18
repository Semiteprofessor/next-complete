import Link from "next/link";
import React from "react";

const ProductList = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>Product List</h1>
      <h1>
        <Link href="/products/1">Product 1</Link>
      </h1>
      <h1>
        <Link href="/products/2">Product 2</Link>
      </h1>
      <h1>
        <Link href="/products/3" replace>
          Product 3
        </Link>
      </h1>
    </div>
  );
};

export default ProductList;
