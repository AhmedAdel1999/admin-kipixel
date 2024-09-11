import { useState } from "react"
import { Link } from "react-router-dom"
import { Icon } from "@iconify/react"
import { Card,CardContent,CardDescription,CardTitle,CardHeader } from "../../components/ui/card"
import {Tabs,TabsList,TabsContent,TabsTrigger} from "../../components/ui/tabs"
import { Dialog,DialogContent,DialogTrigger,DialogTitle,DialogHeader,DialogDescription }  from "../../components/ui/dialog"
import { Button } from "../../components/ui/button"
import TableShared from "../../components/global/tableShared"
import norequest from "../../assets/client/no-request.png"
import googlemanagerlogo from "../../assets/client/google-tag-manager-logo.png"
import googlemanagerimg from "../../assets/client/googletage-img.png"
import googleanalyticslogo from "../../assets/client/google-analytic-logo.png"
import metalogo from "../../assets/client/meta-logo.png"
import hubspotlogo from "../../assets/client/hubSpot-Logo.png"
import tiktoklogo from "../../assets/client/tiktok-img.png"
import snapchatlogo from "../../assets/client/snapchat-logo.png"
import mohamedimg from "../../assets/mohamed-img.png"
import baglogo from "../../assets/briefcase.svg"



const HomePage = () =>{
    const [activeTab,setActiveTab] = useState("all")
    const items = [
        {id:1,name:"Number of applications",value:0,iconColor:"#00887A"},
        {id:2,name:"Applications activated",value:0,iconColor:"#0F667F"},
        {id:3,name:"Applications Under Review",value:0,iconColor:"#FA9022"},
        {id:4,name:"Applications Disactive",value:0,iconColor:"#FF0004"}
    ]

    const tableHeader = ["project","date","sync date to","status","type account","by client"]
    const tableBody = [
        {
            cell1:(<span className="capitalize text-sm">Abduobd Oud</span>),
            cell2:(<span className="text-sm">1/5/2024</span>),
            cell3:(
                <div className="flex gap-5 w-[400px]">
                    <Dialog>
                        <DialogTrigger asChild>
                            <div className="flex items-center gap-2">
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
                <div className="flex items-center gap-1">
                    <Icon icon="solar:buildings-3-outline" color="#00AC98" fontSize={15} />
                    <span className="capitalize text-sm">agency</span>
                </div>
            ),
            cell6:(
                <div className="flex items-center gap-2">
                    <img src={mohamedimg} className="w-[30px] h-[30px]" alt="google-tag-manager-logo" />
                    <span className="text-sm">Mohamed Ashref</span>
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
                <div className="flex items-center gap-1">
                    <Icon icon="solar:buildings-3-outline" color="#00AC98" fontSize={15} />
                    <span className="capitalize text-sm">agency</span>
                </div>
            ),
            cell6:(
                <div className="flex items-center gap-2">
                    <img src={mohamedimg} className="w-[30px] h-[30px]" alt="google-tag-manager-logo" />
                    <span className="text-sm">Mohamed Ashref</span>
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
                <div className="flex items-center gap-1">
                    <Icon icon="mingcute:user-4-line" color="#1E43FA" fontSize={15} />
                    <span className="capitalize text-sm">personal</span>
                </div>
            ),
            cell6:(
                <div className="flex items-center gap-2">
                    <img src={mohamedimg} className="w-[30px] h-[30px]" alt="google-tag-manager-logo" />
                    <span className="text-sm">Mohamed Ashref</span>
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
                <div className="flex items-center gap-1">
                    <Icon icon="mingcute:user-4-line" color="#1E43FA" fontSize={15} />
                    <span className="capitalize text-sm">personal</span>
                </div>
            ),
            cell6:(
                <div className="flex items-center gap-2">
                    <img src={mohamedimg} className="w-[30px] h-[30px]" alt="google-tag-manager-logo" />
                    <span className="text-sm">Mohamed Ashref</span>
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
                               className="bg-white flex gap-4 p-6 rounded-md xs:col-span-12 sm:col-span-6 lg:col-span-3"
                            >
                              <div className="grow">
                                <h4 className="text-[12px] text-[#A0AEC0] font-bold">{item.name}</h4>
                                <p className="font-bold text-lg">{item.value}</p>
                              </div>
                              <div 
                                className={`py-1.5 px-2 h-fit text-white flex items-center rounded-md`}
                                style={{backgroundColor:item.iconColor}}
                              >
                                 <img alt="bag-icon" src={baglogo} className="w-6 h-6" />
                              </div>
                            </div>
                        )
                    })
                }
            </div>

            <Card className="border-none">
               <CardHeader>
                  <CardTitle className="font-[600] text-[#0E1B26]">Applications Integration</CardTitle>
                  <CardDescription className="text-[#757575]">
                     A visual representation providing a comprehensive overview of all your data syncs.
                  </CardDescription>
               </CardHeader>
               <CardContent className="pt-4">
                    {
                        tableHeader.length?
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
                               <TableShared tableBody={tableBody} tableHeader={tableHeader} />
                            </TabsContent>
                            <TabsContent value="active">
                               <TableShared 
                                    tableHeader={tableHeader}
                                    tableBody={tableBody.filter(item=>[...Object.keys(item)].includes("active"))}
                               />
                            </TabsContent>
                            <TabsContent value="under review">
                               <TableShared 
                                    tableHeader={tableHeader}
                                    tableBody={tableBody.filter(item=>[...Object.keys(item)].includes("underreview"))}
                               />
                            </TabsContent>
                            <TabsContent value="disactive">
                               <TableShared 
                                    tableHeader={tableHeader}
                                    tableBody={tableBody.filter(item=>[...Object.keys(item)].includes("disactive"))}
                               />
                            </TabsContent>
                        </Tabs>
                        :
                        <div className="flex flex-col items-center">
                            <img 
                                alt="no request"
                                src={norequest} 
                                className="w-[180px] h-[230px]"
                            />
                            <p className="text-[#757575] text-[14px]">There are no requests for your hand</p>
                        </div>
                    }
                </CardContent>
            </Card>
        </div>
    )
}
export default HomePage

const SyncModalContent = () =>{

    const tableHeader=["sync to","status","type"]
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
                <div className="flex items-center justify-center rounded-lg h-[22px] w-[71px] text-[#00AC98] bg-[#D5FFF9]">
                    <Icon icon="octicon:dot-fill-16" fontSize={15} />
                    <span className="capitalize text-[12px] font-bold">Active</span>
                </div>
            ),
            cell3:(<span className="capitalize text-[#0E1B26] text-sm">Event Streams</span>)
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