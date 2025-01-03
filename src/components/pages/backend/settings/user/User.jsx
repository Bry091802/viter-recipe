import ModalError from "@/components/partials/modal/ModalError";
import ModalSuccess from "@/components/partials/modal/modalSuccess";
import { setIsAdd } from "@/components/store/storeAction";
import { StoreContext } from "@/components/store/storeContext";
import { Plus } from "lucide-react";
import React from "react";
import Footer from "../../partials/Footer";
import Header from "../../partials/Header";
import SideNavigation from "../../partials/SideNavigation";
import ModalAddUser from "./ModalAddUser";
import UserList from "./UserList";

const User = () => {
  const [itemEdit, setItemEdit] = React.useState(null);
  const { dispatch, store } = React.useContext(StoreContext);

  const handleAdd = () => {
    setItemEdit(null);
    dispatch(setIsAdd(true));
  };
  return (
    <>
      <section className="layout-main">
        <div className="layout-div">
          <SideNavigation menu="settings" />
          <main>
            <Header title="User" subtitle="Welcome to Jollibee" />
            <div className="p-5">
              <div className="flex items-end justify-between">
                <div></div>
                <button className="btn btn-add" onClick={handleAdd}>
                  <Plus size={16} />
                  Add New
                </button>
              </div>
              <UserList setItemEdit={setItemEdit} />
            </div>

            <Footer />
          </main>
        </div>
      </section>

      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
      {store.isAdd && <ModalAddUser itemEdit={itemEdit} />}
    </>
  );
};

export default User;
