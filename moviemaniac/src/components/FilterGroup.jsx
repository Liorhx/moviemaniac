import React from "react";
import "./MovieList.css";
const FilterGroup = ({ minRating, onRatingClick, ratings }) => {
  return (
    <div>
      <ul className="movielist_filter align-center">
        {ratings.map((rating) => (
          <li
            key={rating}
            className={
              minRating === rating
                ? "movielist_filter_item active"
                : "movielist_filter_item"
            }
            onClick={() => onRatingClick(rating)}
          >
            {rating}+ Star
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterGroup;
