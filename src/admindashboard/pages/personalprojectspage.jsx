import { useState } from "react"
import { Link } from "react-router-dom"
import {Tabs,TabsList,TabsContent,TabsTrigger} from "../../components/ui/tabs"
import { Select,SelectTrigger,SelectContent,SelectGroup,SelectItem,SelectValue } from "../../components/ui/select"
import { Dialog,DialogContent,DialogTrigger,DialogTitle,DialogHeader,DialogDescription }  from "../../components/ui/dialog"
import { Button } from "../../components/ui/button"
import TableShared from "../../components/global/tableShared"
import {Icon} from "@iconify/react"
import googlemanagerlogo from "../../assets/client/google-tag-manager-logo.png"
import googlemanagerimg from "../../assets/client/googletage-img.png"
import googleanalyticslogo from "../../assets/client/google-analytic-logo.png"
import metalogo from "../../assets/client/meta-logo.png"
import hubspotlogo from "../../assets/client/hubSpot-Logo.png"
import tiktoklogo from "../../assets/client/tiktok-img.png"
import snapchatlogo from "../../assets/client/snapchat-logo.png"
import mohamedimg from "../../assets/mohamed-img.png"

const PersonalProjectsPage = () =>{

    const [activeTab,setActiveTab] = useState("all")

    const items = [
        {id:1,name:"Number of personal",value:50,icon:<Icon icon="fa6-solid:user" fontSize={25} />,iconColor:"#00887A"},
        {id:2,name:"Applications activated",value:10,icon:<Icon icon="basil:bag-solid" fontSize={25} />,iconColor:"#0F667F"},
        {id:3,name:"Poject",value:20,icon:<Icon icon="hugeicons:note" fontSize={25} />,iconColor:"#FA9022"},
    ]

    const tableHeader = ["project","date","sync date to","status","by client","actions"]
    const tableBody = [
        {
            cell1:(<span className="capitalize text-sm">Abduobd Oud</span>),
            cell2:(<span className="text-sm">1/5/2024</span>),
            cell3:(
                <div className="flex gap-5 w-[400px]">
                    <Dialog>
                        <DialogTrigger asChild>
                            <div className="flex items-center gap-2 cursor-pointer">
                                <img src={googlemanagerlogo} className="w-[30px] h-[30px]" alt="google-tag-manager-logo" />
                                <span className="capitalize text-sm">Google Tag Manager</span>
                            </div>
                        </DialogTrigger>
                        <SyncModalContent />
                    </Dialog>
                    
                    <div className="grow flex justify-end items-center gap-5">
                        <Icon icon="pajamas:arrow-right" color="#00AC98" fontSize={20} />
                        <img src={googleanalyticslogo} className="w-[30px] h-[30px]" alt="google-tag-manager-logo" />
                        <span className="capitalize text-sm">google analytic</span>
                    </div>
                </div>
            ),
            active:(
                <div className="flex items-center justify-center rounded-lg h-[22px] w-[71px] text-[#00AC98] bg-[#D5FFF9]">
                    <Icon icon="octicon:dot-fill-16" fontSize={15} />
                    <span className="capitalize text-[12px] font-bold">Active</span>
                </div>
            ),
            cell5:(
                <div className="flex items-center gap-2">
                    <img src={mohamedimg} className="w-[30px] h-[30px]" alt="google-tag-manager-logo" />
                    <span className="text-sm">Mohamed Ashref</span>
                </div>
            ),
            cell6:(
                <div className="flex items-center gap-4">
                    <Icon icon="solar:trash-bin-trash-bold" color="#DF0C3D" fontSize={22} />
                    <Link to={"Abduobd Oud"}><Icon icon="ph:eye-bold" color="#14181F" fontSize={22} /></Link>
                </div>
            )
        },
        {
            cell1:(<span className="capitalize text-sm">Kemark</span>),
            cell2:(<span className="text-sm">1/5/2024</span>),
            cell3:(
                <div className="flex gap-5 w-[400px]">
                    <div className="flex items-center gap-2">
                        <img src={googlemanagerlogo} className="w-[30px] h-[30px]" alt="google-tag-manager-logo" />
                        <span className="capitalize text-sm">Google Tag Manager</span>
                    </div>
                    
                    <div className="grow flex justify-end items-center gap-5">
                        <Icon icon="pajamas:arrow-right" color="#00AC98" fontSize={20} />
                        <img src={metalogo} className="w-[30px] h-[30px]" alt="google-tag-manager-logo" />
                        <span className="capitalize text-sm">Meta Pixel code</span>
                    </div>
                </div>
            ),
            underreview:(
                <div className="flex items-center justify-center rounded-lg h-[22px] w-fit px-2 text-[#F0993E] bg-[#FFF58B]">
                    <Icon icon="octicon:dot-fill-16" fontSize={15} />
                    <span className="capitalize text-[12px] font-bold">under review</span>
                </div>
            ),
            cell5:(
                <div className="flex items-center gap-2">
                    <img src={mohamedimg} className="w-[30px] h-[30px]" alt="google-tag-manager-logo" />
                    <span className="text-sm">Mohamed Ashref</span>
                </div>
            ),
            cell6:(
                <div className="flex items-center gap-4">
                    <Icon icon="solar:trash-bin-trash-bold" color="#DF0C3D" fontSize={22} />
                    <Link to={"kemark"}><Icon icon="ph:eye-bold" color="#14181F" fontSize={22} /></Link>
                </div>
            )
        },
        {
            cell1:(<span className="capitalize text-sm">mounten</span>),
            cell2:(<span className="text-sm">1/5/2024</span>),
            cell3:(
                <div className="flex gap-5 w-[400px]">
                    <div className="flex items-center gap-2">
                        <img src={hubspotlogo} className="w-[30px] h-[30px]" alt="google-tag-manager-logo" />
                        <span className="capitalize text-sm">HubSpot</span>
                    </div>
                    
                    <div className="grow flex  justify-end items-center gap-5">
                        <Icon icon="pajamas:arrow-right" color="#00AC98" fontSize={20} />
                        <img src={tiktoklogo} className="w-[30px] h-[30px]" alt="google-tag-manager-logo" />
                        <span className="capitalize text-sm">Tiktok conversion API</span>
                    </div>
                </div>
            ),
            disactive:(
                <div className="flex items-center justify-center rounded-lg h-[22px] w-fit px-2 text-[#FF0004] bg-[#FFE6E4]">
                    <Icon icon="octicon:dot-fill-16" fontSize={15} />
                    <span className="capitalize text-[12px] font-bold">disactive</span>
                </div>
            ),
            cell5:(
                <div className="flex items-center gap-2">
                    <img src={mohamedimg} className="w-[30px] h-[30px]" alt="google-tag-manager-logo" />
                    <span className="text-sm">Mohamed Ashref</span>
                </div>
            ),
            cell6:(
                <div className="flex items-center gap-4">
                    <Icon icon="solar:trash-bin-trash-bold" color="#DF0C3D" fontSize={22} />
                    <Link to={"mounten"}><Icon icon="ph:eye-bold" color="#14181F" fontSize={22} /></Link>
                </div>
            )
        },
        {
            cell1:(<span className="capitalize text-sm">rgeo</span>),
            cell2:(<span className="text-sm">1/5/2024</span>),
            cell3:(
                <div className="flex gap-5 w-[400px]">
                    <div className="flex items-center gap-2">
                        <img src={hubspotlogo} className="w-[30px] h-[30px]" alt="google-tag-manager-logo" />
                        <span className="capitalize text-sm">HubSpot</span>
                    </div>
                    
                    <div className="grow flex justify-end items-center gap-5">
                        <Icon icon="pajamas:arrow-right" color="#00AC98" fontSize={20} />
                        <img src={snapchatlogo} className="w-[30px] h-[30px]" alt="google-tag-manager-logo" />
                        <span className="capitalize text-sm">Snapchat Pixel Code</span>
                    </div>
                </div>
            ),
            disactive:(
                <div className="flex items-center justify-center rounded-lg h-[22px] w-fit px-2 text-[#FF0004] bg-[#FFE6E4]">
                    <Icon icon="octicon:dot-fill-16" fontSize={15} />
                    <span className="capitalize text-[12px] font-bold">disactive</span>
                </div>
            ),
            cell5:(
                <div className="flex items-center gap-2">
                    <img src={mohamedimg} className="w-[30px] h-[30px]" alt="google-tag-manager-logo" />
                    <span className="text-sm">Mohamed Ashref</span>
                </div>
            ),
            cell6:(
                <div className="flex items-center gap-4">
                    <Icon icon="solar:trash-bin-trash-bold" color="#DF0C3D" fontSize={22} />
                    <Link to={"rgeo"}><Icon icon="ph:eye-bold" color="#14181F" fontSize={22} /></Link>
                </div>
            )
        },
    ]

    return(
        <div className="flex flex-col gap-6">
            <div className="grid grid-cols-12 gap-6">
                {
                    items.map((item)=>{
                        return(
                            <div 
                               key={item.id}
                               className="bg-white flex gap-4 p-6 rounded-md xs:col-span-12 sm:col-span-6 lg:col-span-4"
                            >
                              <div className="grow">
                                <h4 className="text-[12px] text-[#A0AEC0] font-bold">{item.name}</h4>
                                <p className="font-bold text-lg">{item.value}</p>
                              </div>
                              <div 
                                className={`py-1.5 px-2 h-fit text-white flex items-center rounded-md`}
                                style={{backgroundColor:item.iconColor}}
                              >
                                 {item.icon}
                              </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="p-6 bg-white rounded-lg flex flex-col gap-10">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                       <h3 className="capitalize font-[600] text-[24px] text-[#0E1B26]">personal</h3>
                       <p className="text-[#757575] text-sm">
                            A visual representation providing a comprehensive
                            overview of all your data syncs.
                       </p>
                    </div>
                    <div className="flex items-center rounded-md border h-fit gap-2 py-1 px-2">
                        <Icon icon="iconamoon:search" color="#CFCFCF" fontSize={25} />
                        <input 
                            type="text"
                            placeholder="Search in Agency"
                            className="border-none outline-none grow"
                        />
                    </div>
                </div>
                <Tabs defaultValue="all">
                    <TabsList className="bg-white">
                        {
                            ["all","active","under review","disactive"].map((item,index)=>{
                                return(
                                <TabsTrigger 
                                    key={index} value={item}
                                    onClick={()=>setActiveTab(item)}
                                    className={`capitalize !rounded-none !shadow-none ${activeTab===item?
                                    "!text-[#1E43FA] border-[#1E43FA] border-b-[3px]":""}`}
                                >
                                    {item}
                                </TabsTrigger>
                                )
                            })
                        }
                    </TabsList>
                    <TabsContent value="all">
                        <TableShared tableBody={tableBody} tableHeader={tableHeader} bb={true} py={"py-4"} />
                    </TabsContent>
                    <TabsContent value="active">
                        <TableShared 
                            tableHeader={tableHeader}
                            tableBody={tableBody.filter(item=>[...Object.keys(item)].includes("active"))}
                            bb={true} py={"py-4"}
                        />
                    </TabsContent>
                    <TabsContent value="under review">
                        <TableShared 
                            tableHeader={tableHeader}
                            tableBody={tableBody.filter(item=>[...Object.keys(item)].includes("underreview"))}
                            bb={true} py={"py-4"}
                       />
                    </TabsContent>
                    <TabsContent value="disactive">
                        <TableShared 
                            tableHeader={tableHeader}
                            tableBody={tableBody.filter(item=>[...Object.keys(item)].includes("disactive"))}
                            bb={true} py={"py-4"}
                        />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
export default PersonalProjectsPage


const SyncModalContent = () =>{

    const tableHeader=["sync to","status","project","created by"]
    const tableBody=[
        {
            cell1:(
                <div className="flex items-center gap-2">
                    <img alt="sync-img" src={googleanalyticslogo} className="w-[24px] h-[24px]" />
                    <span className="capitalize text-[#0E1B26] font-[600] text-sm">
                       Google Analytice ID
                    </span>
                </div>
            ),
            cell2:(
                <Select
                    value="active"
                >
                    <SelectTrigger className="border-[1px] py-0 focus:ring-0 focus:border-transparent">
                        <SelectValue 
                          placeholder={
                            <div className="flex items-center justify-center rounded-lg h-[22px] w-[71px] text-[#00AC98] bg-[#D5FFF9]">
                                <Icon icon="octicon:dot-fill-16" fontSize={15} />
                                <span className="capitalize text-[12px] font-bold">Active</span>
                            </div>
                          }
                        />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="active">
                                <div className="flex items-center justify-center rounded-lg h-[22px] w-[71px] text-[#00AC98] bg-[#D5FFF9]">
                                    <Icon icon="octicon:dot-fill-16" fontSize={15} />
                                    <span className="capitalize text-[12px] font-bold">Active</span>
                                </div>
                            </SelectItem>  
                            <SelectItem value="underreview">
                                <div className="flex items-center justify-center rounded-lg h-[22px] w-fit px-2 text-[#F0993E] bg-[#FFF58B]">
                                    <Icon icon="octicon:dot-fill-16" fontSize={15} />
                                    <span className="capitalize text-[12px] font-bold">under review</span>
                                </div>
                            </SelectItem>  
                            <SelectItem value="disactive">
                                <div className="flex items-center justify-center rounded-lg h-[22px] w-fit px-2 text-[#FF0004] bg-[#FFE6E4]">
                                    <Icon icon="octicon:dot-fill-16" fontSize={15} />
                                    <span className="capitalize text-[12px] font-bold">disactive</span>
                                </div>
                            </SelectItem> 
                        </SelectGroup>
                    </SelectContent>
                </Select>
            ),
            cell3:(<span className="capitalize text-[#0E1B26] text-sm">Abduobd Oud</span>),
            cell4:(
                <div className="flex items-center gap-2">
                    <img src={mohamedimg} className="w-[30px] h-[30px]" alt="google-tag-manager-logo" />
                    <span className="text-sm">Mohamed Ashref</span>
                </div>
            )
        }
    ]

    return(
        <DialogContent className="max-w-[800px]">
            <DialogHeader className="mb-2">
                <div className="flex items-center gap-x-4">
                    <img 
                        alt="source-img" src={googlemanagerimg} 
                        className="h-full"
                    />
                    <div>
                        <DialogTitle className="mb-3">Google Tag Manager</DialogTitle>
                        <DialogDescription className="max-w-[350px]">
                            <div className="flex items-center justify-center rounded-lg h-[22px] w-[71px] text-[#00AC98] bg-[#D5FFF9]">
                                <Icon icon="octicon:dot-fill-16" fontSize={15} />
                                <span className="capitalize text-[12px] font-bold">Active</span>
                            </div>
                        </DialogDescription>
                    </div>
                </div>
            </DialogHeader>
            <div className="flex flex-col gap-6">
                <div className="flex gap-6">
                    <div className="flex flex-col gap-3">
                        <h4 className="text-sm font-[600]">Compatible platforms</h4>
                        <p className="flex gap-2 capitalize text-sm text-[#757575]">
                            <Icon icon="rivet-icons:data" fontSize={20} />
                            <span>server</span>
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h4 className="text-sm font-[600]">Website</h4>
                        <Link to={""} className="text-[#1E43FA]">tagmanager.google.com</Link>
                    </div>
                </div>
                <TableShared tableBody={tableBody} tableHeader={tableHeader} />
                <div className="flex gap-8">
                    <Button 
                        className="capitalize w-fit py-3 px-[45px] font-[600] text-[12px]"
                        style={{
                            background: "linear-gradient(112deg, #16F2D1 -47.55%, #1294B9 35.23%, #0C259C 133.36%), var(--Brand-Primary, #1E43FA)"
                        }}
                    >
                        save
                    </Button>
                    <Button 
                        className="capitalize w-fit py-3 px-[45px] font-[600] !bg-inherit
                        text-[#1E43FA] text-[12px] border border-[#1E43FA]"
                    >
                        read more
                    </Button>
                </div>
            </div>
        </DialogContent>
    )
}