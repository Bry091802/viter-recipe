import React from "react";
import SideNavigation from "../../partials/SideNavigation";
import RoleList from "./RoleList";
import Footer from "../../partials/Footer";
import Header from "../../partials/Header";
import { setIsAdd } from "@/components/store/storeAction";
import { StoreContext } from "@/components/store/storeContext";
import { FaPlus } from "react-icons/fa";
import ModalAddRole from "./ModalAddRole";
import { Plus } from "lucide-react";
import ModalSuccess from "@/components/partials/modal/modalSuccess";
import ModalError from "@/components/partials/modal/ModalError";
import ModalArchive from "@/components/partials/modal/ModalArchive";

const Role = () => {
  const [itemEdit, setItemEdit] = React.useState(null);
  const { dispatch, store } = React.useContext(StoreContext);

  const handleAdd = () => {
    setItemEdit(null);
    dispatch(setIsAdd(true));
  };
  return (
    <>
      <section className="layout-main">
        <div className="layout-division">
          <SideNavigation menu="settings" />
          <main>
            <Header title="Role" subtitle="Welcome to Jollibee" />
            <div className="p-5">
              <div className="flex items-end justify-between">
                <div></div>
                <button className="btn btn-add" onClick={handleAdd}>
                  <Plus size={16} />
                  Add New
                </button>
              </div>
              <RoleList setItemEdit={setItemEdit} />
            </div>

            <Footer />
          </main>
        </div>
      </section>

      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
      {store.isAdd && <ModalAddRole itemEdit={itemEdit} />}
    </>
  );
};

export default Role;
