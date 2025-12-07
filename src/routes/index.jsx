import { createBrowserRouter, RouterProvider } from "react-router-dom";
import allRoute from "./allListing"
const Routes=()=>{
    let route=createBrowserRouter(allRoute)
    return <RouterProvider router={route}/>
}
export default Routes;