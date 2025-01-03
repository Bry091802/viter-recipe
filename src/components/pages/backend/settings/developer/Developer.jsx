import ModalError from "@/components/partials/modal/ModalError";
import ModalSuccess from "@/components/partials/modal/modalSuccess";
import { setError, setIsAdd, setMessage } from "@/components/store/storeAction";
import { StoreContext } from "@/components/store/storeContext";
import { Plus } from "lucide-react";
import React from "react";
import Footer from "../../partials/Footer";
import Header from "../../partials/Header";
import SideNavigation from "../../partials/SideNavigation";
import ModalAddUser from "./ModalAddDeveloper";
import UserList from "./DeveloperList";
import DeveloperList from "./DeveloperList";
import ModalAddDeveloper from "./ModalAddDeveloper";
import useQueryData from "@/components/custom-hook/useQueryData";

const Developer = () => {
  const [itemEdit, setItemEdit] = React.useState(null);
  const { dispatch, store } = React.useContext(StoreContext);

  const { isFetching, data: role } = useQueryData(
    `/v2/role`, // endpoint
    "get", // method
    "role" // key
  );

  const handleAdd = () => {
    if (developerRole?.length === 0) {
      dispatch(setError(true));
      dispatch(setMessage("Developer role is required"))
    }
    setItemEdit(null);
    dispatch(setIsAdd(true));
  };

  const developerRole = role?.data.filter(
    (item) => item.role_is_developer == 1
  );


  return (
    <>
      <section className="layout-main">
        <div className="layout-div">
          <SideNavigation menu="settings" />
          <main>
            <Header title="Developer" subtitle="Welcome to Jollibee" />
            <div className="p-5">
              <div className="flex items-end justify-between">
                <div></div>
                {isFetching ? (
                  "Loading..."
                ) : (
                  <button className="btn btn-add" onClick={handleAdd}>
                    <Plus size={16} />
                    Add New
                  </button>
                )}
              </div>
              <DeveloperList setItemEdit={setItemEdit} />
            </div>

            <Footer />
          </main>
        </div>
      </section>

      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
      {store.isAdd && <ModalAddDeveloper itemEdit={itemEdit}  developerRole={developerRole}/>}
    </>
  );
};

export default Developer;
