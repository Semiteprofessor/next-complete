"use client";

import { notFound } from "next/navigation";
import React from "react";

const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count);
};
const ReviewDetails = ({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) => {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error loading review");
  }
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      Review {params.reviewId} for product {params.productId}
    </div>
  );
};

export default ReviewDetails;
