import React from "react";
import { getRecipeByCategory } from "./function";

const DashboardCard = ({ item, dataRecipe }) => {
  const recipeItem = getRecipeByCategory(item.category_aid, dataRecipe);
  const activeRecipe = recipeItem
    ?.filter((item) => (item.recipe_is_active == 1))
    .reduce((prev, cur) => prev + 1, 0);
  const inactiveRecipe = recipeItem
    ?.filter((item) => (item.recipe_is_active == 0))
    .reduce((prev, cur) => prev + 1, 0);

  return (
    <>
      <div className="card bg-secondary p-4 rounded-md border border-line">
        <small>{item.category_title}</small>
        <h2 className="text-4xl mt-1 mb-2">{recipeItem?.length} Items</h2>
        <ul className="flex gap-5 items-center">
          <li className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-success block"></span>
            {activeRecipe} Active
          </li>
          <li className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-gray-300 block"></span>
            {inactiveRecipe} Inactive
          </li>
        </ul>
      </div>
    </>
  );
};

export default DashboardCard;
