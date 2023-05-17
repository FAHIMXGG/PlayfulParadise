import { createBrowserRouter } from "react-router-dom";
import HomeLayouts from "../Layouts/HomeLayouts";
import Login from "../Pages/Login/Login";
import Reg from "../Pages/Reg/Reg";

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

        ]
    }
])

export default router;