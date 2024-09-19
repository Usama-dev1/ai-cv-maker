import React from "react";
import MainLayout from "./layouts/MainLayout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import ContactPage from "./pages/ContactPage";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        
        <Route index path="/" element={<HomePage />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
