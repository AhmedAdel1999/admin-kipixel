import { Link, useLocation } from "react-router-dom"
import { Icon } from "@iconify/react"
import { Button } from "../components/ui/button"
import logo from "../assets/mohamed-img.png"
import settingicon from "../assets/setting-2.svg"
import profileaddicon from "../assets/profile-add.svg"
import hriicon from "../assets/hierarchy-2.svg"






const DashboardSidebar = () =>{

    const route = useLocation()

    const checkPathName = (value) =>{
        if(route.pathname.endsWith(value)){
            return true
        }else{return false}
    }

    return(
        <div 
          className={`bg-white h-screen max-h-screen overflow-auto min-w-[320px]
          border-r-[1px] border-t-[1px] flex flex-col
          `}>

            <div className="grow flex flex-col p-4">
               <div className="grow flex flex-col">
                    <div className="mb-4 flex flex-col gap-4">
                        <div className="rounded-sm px-2 py-2 w-full flex gap-x-3">
                            <img 
                                alt="logo" src={logo} 
                                className="h-[45px] w-[45px] rounded-full"
                            />
                            <div>
                                <h4 className="text-[#0E1B26] font-[600] m-0">Mohamed asharf</h4>
                                <p className="text-[#757575]">mohamedashraf@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <nav className="grow flex flex-col pt-5 border-t-2">
                        <div className="grow flex flex-col gap-y-4">
                            <Link
                                className={`flex gap-x-3 items-center rounded-lg px-4 py-2 
                                ${checkPathName("dashboard")?"bg-[#F9F9F9] text-[#1E43FA]":"text-[#757575]"}`}
                            >
                                <Icon icon="bx:home" fontSize={22} />
                                <span className="capitalize">home</span>
                            </Link>
                            
                            <div className="flex gap-x-3 items-center rounded-lg px-4 py-1 text-[#757575]">
                                <img alt="hierarchy-icon" src={hriicon} />
                                <span className="capitalize">projects</span>
                            </div>

                            <div className="flex flex-col gap-y-4 ps-12 text-[#757575]">
                                {
                                    ["agency","personal"].map((project,index)=>{
                                        return(
                                            <Link
                                                key={index}
                                                to={`projects/${project}`}
                                                className={`capitalize ${route.pathname.includes(project)?"text-[#1E43FA]":"text-[#757575]"}`}
                                            >
                                                {project}
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="w-full self-end flex flex-col gap-4">
                            <Link 
                                to={`adduser`}
                                className={`flex gap-x-3 items-center rounded-lg px-4 py-2 
                                ${checkPathName("adduser")?"bg-[#F9F9F9] text-[#1E43FA]":"text-[#757575]"}`}
                            > 
                                <img alt="profile add icon" src={profileaddicon} className="w-[20px] h-[20px]" />
                                <span className="capitalize">add user</span>
                            </Link>
                            <Link 
                                to={`settings`}
                                className={`flex gap-x-3 items-center rounded-lg px-4 py-2
                                ${checkPathName("settings")?"bg-[#F9F9F9] text-[#1E43FA]":"text-[#757575]"}`}
                            > 
                                <img alt="setting icon" src={settingicon} className="w-[20px] h-[20px]" />
                                <span className="capitalize">Settings</span>
                            </Link>
                            <Button className="text-[#757575] !bg-inherit flex justify-start items-center gap-3">
                                <Icon icon="solar:logout-2-broken" fontSize={20} />
                                <span className="">Log Out</span>
                            </Button>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default DashboardSidebar