import { Icon } from "@iconify/react";
import {  useLocation } from "react-router-dom";
import {Breadcrumb,BreadcrumbItem,BreadcrumbLink,BreadcrumbList,BreadcrumbSeparator,} from "../components/ui/breadcrumb"
import ChangeMode from "../components/global/changemode";
import ChangeLang from "../components/global/changelang";

const DashboardNavbar = () =>{
  
  const location = useLocation()
  const breadcrumbs = location.pathname.replace(/%20/g, " ").split("/").slice(3)
  let agencypath = "/dashboard/projects/agency"
  let personalpath = "/dashboard/projects/personal"

  const handleNavheader = () =>{
    if(location.pathname.includes("agency")){
      return (
        <Breadcrumb>
          <BreadcrumbList>
             {
              breadcrumbs.map((item,index)=>{
                if(index>0){
                  agencypath=agencypath + `/${item}`
                }
                return(
                  <BreadcrumbItem key={index}>
                    <BreadcrumbLink 
                      href={agencypath} 
                      className={`text-[#757575] capitalize ${breadcrumbs.length-1 == index&&
                        "font-[600] text-sm text-[#0E1B26]"}`}
                    >
                       {item}
                    </BreadcrumbLink>
                    {
                      breadcrumbs.length-1 == index?
                      null
                      :
                      <BreadcrumbSeparator />
                    }
                  </BreadcrumbItem>
                )})
             }
          </BreadcrumbList>
        </Breadcrumb>
      )
    }else if(location.pathname.includes("personal")){
      return (
        <Breadcrumb>
          <BreadcrumbList>
             {
              breadcrumbs.map((item,index)=>{
                if(index>0){
                  personalpath=personalpath + `/${item}`
                }
                return(
                  <BreadcrumbItem key={index}>
                    <BreadcrumbLink 
                      href={personalpath} 
                      className={`text-[#757575] capitalize ${breadcrumbs.length-1 == index&&
                        "font-[600] text-sm text-[#0E1B26]"}`}
                    >
                       {item}
                    </BreadcrumbLink>
                    {
                      breadcrumbs.length-1 == index?
                      null
                      :
                      <BreadcrumbSeparator />
                    }
                  </BreadcrumbItem>
                )})
             }
          </BreadcrumbList>
        </Breadcrumb>
      )
    }else{
      return <p className="font-bold">Welcome back, <span className="text-[#1E43FA]">mohamed</span></p>
    }
  }
    return(
        <div className="bg-white px-6 py-4 border-y-[1px]">
          <div className="flex justify-between items-center gap-x-8">
            {handleNavheader()}
            <div className="flex items-center gap-x-6">
                <div className="flex items-center gap-x-6 pr-4 border-black">
                  <ChangeMode />
                  <ChangeLang />
                  <Icon icon="fa6-solid:bell" fontSize={20} color="#0E1B26" />
                </div>
            </div>
          </div>
        </div>
    )
}
export default DashboardNavbar;