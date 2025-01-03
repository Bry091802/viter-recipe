import useQueryData from "@/components/custom-hook/useQueryData";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import SideNavigation from "../partials/SideNavigation";
import DashboardAccordion from "./DashboardAccordion";
import DashboardCard from "./DashboardCard";
import FetchingSpinner from "@/components/partials/spinner/FetchingSpinner";
import IconNoData from "../partials/IconNoData";
import TableLoader from "../partials/TableLoader";
import { getCategoryPrices } from "./function";

const Dashboard = () => {
  const {
    isLoading: isLoadingCategory,
    isFetching: isFetchingCategory,
    error: errorCategory,
    data: dataCategory,
  } = useQueryData(
    `/v2/category`, // endpoint
    "get", // method
    "category" // key
  );
  const {
    isLoading: isLoadingRecipe,
    isFetching: isFetchingRecipe,
    error: errorRecipe,
    data: dataRecipe,
  } = useQueryData(
    `/v2/recipe`, // endpoint
    "get", // method
    "recipe" // key
  );
  const {
    isLoading: isLoadingLevel,
    isFetching: isFetchingLevel,
    error: errorLevel,
    data: dataLevel,
  } = useQueryData(
    `/v2/level`, // endpoint
    "get", // method
    "level" // key
  );

  const tableData = getCategoryPrices(dataCategory, dataRecipe, dataLevel);

  return (
    <>
      <section className="layout-main">
        <div className="layout-division">
          <SideNavigation menu="dashboard" />
          <main>
            <Header title="Dashboard" subtitle="Manage Dashboard" />
            <div className="p-5 overflow-y-auto custom-scroll">
              <div className="grid grid-cols-[1fr_400px] gap-5">
                <div className="stats">
                  <div className="chart pb-28 relative">
                    {(isFetchingCategory || isFetchingRecipe) &&
                      !isLoadingCategory &&
                      !isLoadingRecipe && <FetchingSpinner />}
                    {isLoadingCategory || isLoadingRecipe ? (
                      <TableLoader cols={1} count={15} />
                    ) : (
                      <ResponsiveContainer width={"100%"} height={340}>
                        <h2>Recipe Info</h2>
                        <BarChart
                          width={500}
                          height={300}
                          data={tableData}
                          margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="category_title" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="menu_level" stackId="a" fill="#86efac" />
                          <Bar dataKey="menu_level" stackId="a" fill="#3b82f6" />
                          <Bar dataKey="menu_level" stackId="a" fill="#b91c1c" />
                        </BarChart>
                      </ResponsiveContainer>
                    )}
                  </div>

                  <div className="relative">
                    {isFetchingCategory && !isLoadingCategory && (
                      <FetchingSpinner />
                    )}
                    {isLoadingCategory && <TableLoader cols={4} count={20} />}
                    {dataCategory?.count === 0 && <IconNoData />}
                    <div className="grid grid-cols-4 gap-5 mt-8">
                      {dataCategory?.count > 0 &&
                        dataCategory?.data.map((item, key) => {
                          return (
                            <DashboardCard
                              key={key}
                              item={item}
                              dataRecipe={dataRecipe}
                            />
                          );
                        })}
                    </div>
                  </div>
                </div>

                <div className=" relative sidebar custom-scroll overflow-auto h-[calc(100vh-250px)]">
                  {isFetchingCategory && !isLoadingCategory && (
                    <FetchingSpinner />
                  )}
                  {isLoadingCategory && <TableLoader cols={1} count={15} />}
                  {dataCategory?.count === 0 && <IconNoData />}
                  {dataCategory?.count > 0 &&
                    dataCategory?.data.map((item, key) => {
                      return (
                        <DashboardAccordion
                          key={key}
                          item={item}
                          dataRecipe={dataRecipe}
                          dataCategory={dataCategory}
                        />
                      );
                    })}
                </div>
              </div>
            </div>

            <Footer />
          </main>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
