import { createBrowserRouter } from "react-router-dom";
import MainFile from "../MainFile/MainFile";
import Home from "../Home/Home";
import Add_product from "../pages/Add_product/Add_product";
import Edit_product from "../pages/Edit_product/Edit_product";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import View_product from "../pages/View_product/View_product";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainFile></MainFile>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: '/add',
          element: <Add_product></Add_product>
        },
        {
          path: '/edit/:id',
          element: <Edit_product></Edit_product>,
          loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`)
        },
        {
          path: '/view/:id',
          element: <View_product></View_product>,
          loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`)
        }
      ]
    },
]);

export default router;