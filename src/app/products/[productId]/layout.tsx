import React from "react";

const ProductDetailsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <h2>Features products</h2>
    </div>
  );
};

export default ProductDetailsLayout;
