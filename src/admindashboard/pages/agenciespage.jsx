import { Icon } from "@iconify/react";
import TableShared from "../../components/global/tableShared";
import mohamedimg from "../../assets/mohamed-img.png"
import { Link } from "react-router-dom";

const AgenciesPage = () =>{

    const items = [
        {id:1,name:"Number of agency",value:50,icon:<Icon icon="icon-park-outline:building-one" fontSize={25} />,iconColor:"#00887A"},
        {id:2,name:"Applications activated",value:10,icon:<Icon icon="basil:bag-solid" fontSize={25} />,iconColor:"#0F667F"},
        {id:3,name:"Poject",value:20,icon:<Icon icon="hugeicons:note" fontSize={25} />,iconColor:"#FA9022"},
    ]
    const tableHeader = ["agency name","user","project","account status","by client","actions"]
    const tableBody=[
        {
            cell1:(
                <div className="flex items-center gap-2">
                    <div 
                       className="w-[30px] h-[30px] flex items-center justify-center rounded-full font-bold text-white"
                       style={{
                            background: "linear-gradient(112deg, #16F2D1 -47.55%, #1294B9 35.23%, #0C259C 133.36%), var(--Brand-Primary, #1E43FA)"
                        }}
                    >
                        R
                    </div>
                    <span className="capitalize">rgeo</span>
                </div>
            ),
            cell2:(<span>2</span>),
            cell3:(<span>6</span>),
            cell4:(
                <div className="flex items-center justify-center rounded-lg h-[22px] w-fit px-4 text-[#00AC98] bg-[#D5FFF9]">
                    <Icon icon="octicon:dot-fill-16" fontSize={15} />
                    <span className="capitalize text-[12px] font-bold">paid</span>
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
                    <Link to={`rgeo`}>
                       <Icon icon="ph:eye-bold" color="#14181F" fontSize={22} />
                    </Link>
                </div>
            )
        },
        {
            cell1:(
                <div className="flex items-center gap-2">
                    <div 
                       className="w-[30px] h-[30px] flex items-center justify-center rounded-full font-bold text-white"
                       style={{
                            background: "linear-gradient(112deg, #16F2D1 -47.55%, #1294B9 35.23%, #0C259C 133.36%), var(--Brand-Primary, #1E43FA)"
                        }}
                    >
                        A
                    </div>
                    <span className="capitalize">Abduobd Oud</span>
                </div>
            ),
            cell2:(<span>4</span>),
            cell3:(<span>1</span>),
            cell4:(
                <div className="flex items-center justify-center rounded-lg h-[22px] w-fit px-4 text-[#00AC98] bg-[#D5FFF9]">
                    <Icon icon="octicon:dot-fill-16" fontSize={15} />
                    <span className="capitalize text-[12px] font-bold">paid</span>
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
                    <Link to={`Abduobd Oud`}>
                       <Icon icon="ph:eye-bold" color="#14181F" fontSize={22} />
                    </Link>
                </div>
            )
        },
        {
            cell1:(
                <div className="flex items-center gap-2">
                    <div 
                       className="w-[30px] h-[30px] flex items-center justify-center rounded-full font-bold text-white"
                       style={{
                            background: "linear-gradient(112deg, #16F2D1 -47.55%, #1294B9 35.23%, #0C259C 133.36%), var(--Brand-Primary, #1E43FA)"
                        }}
                    >
                        K
                    </div>
                    <span className="capitalize">Kemark</span>
                </div>
            ),
            cell2:(<span>3</span>),
            cell3:(<span>0</span>),
            cell4:(
                <div className="flex items-center justify-center rounded-lg h-[22px] w-fit px-4 text-[#FF0004] bg-[#FFE6E4]">
                    <Icon icon="octicon:dot-fill-16" fontSize={15} />
                    <span className="capitalize text-[12px] font-bold">un paid</span>
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
                    <Link to={`Kemark`}>
                       <Icon icon="ph:eye-bold" color="#14181F" fontSize={22} />
                    </Link>
                </div>
            )
        },
        {
            cell1:(
                <div className="flex items-center gap-2">
                    <div 
                       className="w-[30px] h-[30px] flex items-center justify-center rounded-full font-bold text-white"
                       style={{
                            background: "linear-gradient(112deg, #16F2D1 -47.55%, #1294B9 35.23%, #0C259C 133.36%), var(--Brand-Primary, #1E43FA)"
                        }}
                    >
                        M
                    </div>
                    <span className="capitalize">Mounten</span>
                </div>
            ),
            cell2:(<span>8</span>),
            cell3:(<span>3</span>),
            cell4:(
                <div className="flex items-center justify-center rounded-lg h-[22px] w-fit px-4 text-[#FF0004] bg-[#FFE6E4]">
                    <Icon icon="octicon:dot-fill-16" fontSize={15} />
                    <span className="capitalize text-[12px] font-bold">un paid</span>
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
                    <Link to={`Mounten`}>
                       <Icon icon="ph:eye-bold" color="#14181F" fontSize={22} />
                    </Link>
                </div>
            )
        }
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

            <div className="p-6 bg-white rounded-lg flex flex-col gap-8">
                <div className="flex justify-between gap-6">
                    <div className="flex flex-col gap-0.5">
                        <h3 className="capitalize text-[#0E1B26] text-lg font-[600]">Agancy</h3>
                        <p className="text-sm text-[#757575]">
                            A visual representation providing a comprehensive overview
                            of all your data syncs.
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
                <TableShared 
                    tableHeader={tableHeader}
                    tableBody={tableBody}
                    bb={true}
                    py={"py-4"}
                />
            </div>   
        </div>
    )
}
export default AgenciesPage;