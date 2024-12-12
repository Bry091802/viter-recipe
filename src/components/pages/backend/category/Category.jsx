import React from "react";
import RecipeTable from "./CategoryTable";
import { StoreContext } from "@/components/store/storeContext";
import { setIsAdd } from "@/components/store/storeAction";
import ModalAddRecipe from "./ModalAddCategory";
import SideNavigation from "../partials/SideNavigation";
import { Plus } from "lucide-react";
import Header from "../partials/Header";
import SearchBar from "../partials/SearchBar";
import Footer from "../partials/Footer";
import ToastSuccess from "../partials/ToastSuccess";

import ModalValidation from "../partials/modals/ModalValidation";
import CategoryTable from "./CategoryTable";
import ModalAddCategory from "./ModalAddCategory";
import ModalError from "@/components/partials/modal/ModalError";

const Category = () => {
  const { dispatch, store } = React.useContext(StoreContext);
  const [isCategoryEdit, setIsCategoryEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setIsCategoryEdit(null);
  };
  return (
    <>
      <section className="layout-main">
        <div className="layout-division">
          <SideNavigation menu="category" />
          <main>
            <Header title="Category" subtitle="Manage Categories" />
            <div className="p-8">
              <div className="flex justify-between items-center">
                <SearchBar />
                <button className="btn btn-add" onClick={handleAdd}>
                  <Plus size={16} /> Add New
                </button>
              </div>
              <CategoryTable setIsCategoryEdit={setIsCategoryEdit} />
            </div>
            <Footer />
          </main>
        </div>
      </section>
      {store.validate && <ModalValidation />}
      {store.error && <ModalError />}
      {store.success && <ToastSuccess />}
      {store.isAdd && <ModalAddCategory isCategoryEdit={isCategoryEdit} />}
    </>
  );
};

export default Category;
