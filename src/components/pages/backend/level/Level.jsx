import { setIsAdd } from "@/components/store/storeAction";
import { StoreContext } from "@/components/store/storeContext";
import { Plus } from "lucide-react";
import React from "react";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import SearchBar from "../partials/SearchBar";
import SideNavigation from "../partials/SideNavigation";

import ModalError from "@/components/partials/modal/ModalError";
import ModalValidation from "../partials/modals/ModalValidation";
import LevelTable from "./LevelTable";
import ModalAddLevel from "./ModalAddLevel";
import ToastSuccess from "../partials/ToastSuccess";

const Level = () => {
  const { dispatch, store } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };
  return (
    <>
      <section className="layout-main">
        <div className="layout-division">
          <SideNavigation menu="level" />
          <main>
            <Header title="Level" subtitle="Manage Levels" />
            <div className="p-8">
              <div className="flex justify-between items-center">
                <div></div>
                <button className="btn btn-add" onClick={handleAdd}>
                  <Plus size={16} /> Add New
                </button>
              </div>
              <LevelTable setItemEdit={setItemEdit} />
            </div>
            <Footer />
          </main>
        </div>
      </section>
      {store.validate && <ModalValidation />}
      {store.error && <ModalError />}
      {store.success && <ToastSuccess/>}
      {store.isAdd && <ModalAddLevel itemEdit={itemEdit} />}
    </>
  );
};

export default Level;
