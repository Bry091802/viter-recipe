import { ChevronDown, Dot } from "lucide-react";
import React from "react";
import { getRecipeByCategory } from "./function";
import IconNoData from "../partials/IconNoData";
import TableLoader from "../partials/TableLoader";
import FetchingSpinner from "@/components/partials/spinner/FetchingSpinner";

const DashboardAccordion = ({ item, dataRecipe }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const recipeItem = getRecipeByCategory(item.category_aid, dataRecipe);

  const handleToggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <>
      <div className="accordion mb-2">
        <div
          className="accordion-header p-2 flex justify-between bg-secondary rounded-t-md cursor-pointer"
          onClick={handleToggleOpen}
        >
          <h5 className="mb-0">{item.category_title}</h5>
          <button className={`transition-all ${isOpen ? "rotate-180" : ""}`}>
            <ChevronDown />
          </button>
        </div>
        <div
          className={`accordion-body  border border-line rounded-b-md border-t-0 overflow-hidden  h-full transition-all ${
            isOpen ? "max-h-[600px]" : "max-h-[0]"
          }`}
        >
          <ul className="space-y-3 py-4 px-2 relative">
            {recipeItem?.length === 0 && <IconNoData />}
            {recipeItem?.map((item, key) => (
              <li className="flex items-center" key={key}>
                <Dot
                  size={30}
                  className={` ${
                    item.level_aid === 1
                      ? "text-green-300"
                      : item.level_aid === 3
                      ? "text-blue-500"
                      : item.level_aid === 4
                      ? "text-red-700"
                      : ""
                  }`}
                />

                {item.recipe_title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardAccordion;
