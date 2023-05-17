import { createBrowserRouter } from "react-router-dom";
import HomeLayouts from "../Layouts/HomeLayouts";
import Login from "../Pages/Login/Login";
import Reg from "../Pages/Reg/Reg";
import MyToys from "../Pages/MyToys/MyToys";
import AddNew from "../Pages/AddNew/AddNew";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayouts></HomeLayouts>,
        children: [
            

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/reg',
                element: <Reg></Reg>
            },
            {
                path: '/myToys',
                element: <MyToys></MyToys>
            },
            {
                path: '/addNew',
                element: <AddNew></AddNew>
            }

        ]
    }
])

export default router;