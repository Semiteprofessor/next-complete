import { Metadata } from "next";
import React from "react";

type Props = {
  params: {
    productId: string;
  };
};
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

const ProductDetails = ({ params }: { params: string }) => {
  return <div>Product Details Page {params.productId}</div>;
};

export default ProductDetails;
