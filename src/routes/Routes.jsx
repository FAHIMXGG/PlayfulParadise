import { createBrowserRouter } from "react-router-dom";

import Login from "../Pages/Login/Login";
import Reg from "../Pages/Reg/Reg";
import MyToys from "../Pages/MyToys/MyToys";
import AddNew from "../Pages/AddNew/AddNew";
import AllToys from "../Pages/AllToys/AllToys";
import PrivateRoute from "./PrivateRoute";
import ToysDetails from "../Pages/ToysDetails/ToysDetails";
import ToysFullData from "../Pages/ToysDetails/Info/ToysFullData";
import UpdateData from "../Pages/UpdateData/UpdateData";
import UpdateToysDataPage from "../Pages/UpdateData/UpdateToysDataPage";
import Layouts from "../Layouts/Layouts";
import HomeLayouts from "../Layouts/HomeLayouts";
import Search from "../Pages/Search/Search";
import SearchQ from "../Pages/Search/SearchQ/SearchQ";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layouts></Layouts>,
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
            },
            

        ]
    },
    {
        path: 'home',
        element: <HomeLayouts></HomeLayouts>
    },
    {
        path: 'allToys',
        element: <AllToys></AllToys>,
        children: [
            // {
            //     path: ':id',
            //     element: <ToysFullInfo></ToysFullInfo>,
            //     loader: ({params}) => fetch(`http://localhost:5000/allToys/${params.id}`)
                
            // }
        ]
    },
    {
        path: 'toys',
        element: <ToysDetails></ToysDetails>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><ToysFullData></ToysFullData></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/allToys/${params.id}`)
                
            }
        ]
    },
    {
        path: 'updateToys',
       element: <UpdateToysDataPage></UpdateToysDataPage>,
       children:[
        {
            path: ':id',
            element: <UpdateData></UpdateData>,
            loader: ({params}) => fetch(`http://localhost:5000/allToys/${params.id}`)
        }
       ]

    },
    {
        path: 'search',
        element: <Search></Search>,
        children:[
            {
                path:':data',
                element: <SearchQ></SearchQ>,
                loader: ({params}) => fetch(`http://localhost:5000/search?query=${params.data}`)
            }
        ]
    }
])

export default router;