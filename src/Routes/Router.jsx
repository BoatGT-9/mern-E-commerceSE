import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import ProductList from "../pages/shop/ProductList";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import UpdateProfile from "../pages/UpdateProfile";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: (
          <PrivateRouter>
            <ProductList />
          </PrivateRouter>
        ),
      },
      {
        path: "/update-profile",
        element: <UpdateProfile />,
      },
    ],
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/SignIn",
    element: <SignIn />,
  },
]);

export default router;
