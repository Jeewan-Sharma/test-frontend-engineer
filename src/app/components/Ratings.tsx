import React from "react";
import Icons from "@/app/components/Icons";

type RatingProps = {
  rating: number;
};

const Rating: React.FC<RatingProps> = ({ rating }) => {
  const starIcon = Icons.Star;
  const emptyStarIcon = Icons.EmptyStar;

  // Generate star elements
  const stars = Array.from({ length: 5 }, (_, index) =>
    index < rating ? (
      <span key={index}>{starIcon}</span>
    ) : (
      <span key={index}>{emptyStarIcon}</span>
    )
  );

  return <div className="flex gap-1">{stars}</div>;
};

export default Rating;
