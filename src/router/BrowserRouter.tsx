import AddProduct from "../component/AddProducts";
import ListProduct from "../component/ListProduct";
import MainLayout from "../layout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <AddProduct />,
      },
      {
        path: "/add-post",
        element: <AddProduct />,
      },
      {
        path: "/view-products",
        element: <ListProduct />,
      },
    ],
  },
  // {
  //   path: "*",
  //   element: <PageNotFoundPage />,
  // },
]);

export default router;
