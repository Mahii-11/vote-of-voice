import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Error from "./components/Error";
import AppLayout from "./layout/AppLayout";


const router = createBrowserRouter([

  {
    element: <AppLayout />,
    errorElement: <Error/>,
    children: [

       {  
       path: "/",
       element: <Home/>,
       errorElement: <Error />,
      
      }


    ]
  }
]);







export default function App() {
  return (
   <RouterProvider router={router} />
  );
}
