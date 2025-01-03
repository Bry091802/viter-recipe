import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StoreProvider } from "./components/store/storeContext";
import Recipe from "./components/pages/backend/recipe/Recipe";
import HomePage from "./components/pages/frontend/homepage/HomePage";
import Single from "./components/pages/frontend/single/Single";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Category from "./components/pages/backend/category/Category";
import Level from "./components/pages/backend/level/Level";
import Dashboard from "./components/pages/backend/dashboard/Dashboard";
import Settings from "./components/pages/backend/settings/Settings";
import Role from "./components/pages/backend/settings/role/Role";
import Developer from "./components/pages/backend/settings/developer/Developer";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <Router>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/recipe/single/:slug" element={<Single />} />
            <Route path="/admin/recipe" element={<Recipe />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/category" element={<Category />} />
            <Route path="/admin/settings" element={<Settings />} />
            <Route path="/admin/settings/role" element={<Role />} />          
            <Route path="/developer/settings/developer" element={<Developer />} />          
          </Routes>
        </Router>
      </StoreProvider>
    </QueryClientProvider>
  );
};

export default App;
