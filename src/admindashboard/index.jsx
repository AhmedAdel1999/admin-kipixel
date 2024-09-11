import DashboardSidebar from "./sidebar";
import DashboardNavbar from "./navbar";
import DashboardMaincontent from "./maincontent";
import { Outlet } from "react-router-dom";



const AdminDashboard = () =>{

    return(
        <div className="flex w-screen">
           <DashboardSidebar />
           <div className="flex flex-col w-full h-screen overflow-hidden">
              <DashboardNavbar />
              <DashboardMaincontent>
                <Outlet />
            </DashboardMaincontent>   
           </div>
        </div>
    )
}
export default AdminDashboard;