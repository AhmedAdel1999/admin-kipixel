import React, { useEffect,useRef } from 'react';
import { useParams,useNavigate } from "react-router-dom";
import TableShared from '../../components/global/tableShared';
import Xarrow,{useXarrow} from 'react-xarrows';
import { Icon } from '@iconify/react';
import metaLogo from "../../assets/client/meta-logo.png"
import middleLogo from "../../assets/client/middle-logo.png"
import googlemanagerLogo from "../../assets/client/google-tag-manager-logo.png"
import iosLogo from "../../assets/client/ios-logo.png"
import zohoLogo from "../../assets/client/zoho-crm-logo.png"
import googleAnalyticLogo from "../../assets/client/google-analytic-logo.png"
import tiktokLogo from "../../assets/client/tiktok-img.png"
import snapchatLogo from "../../assets/client/snapchat-logo.png"

const PersonalSingleProject = () =>{

    let userPaied = true

    const {projectName}=useParams()
    const updateXarrow = useXarrow()
    const navigate = useNavigate()
    const diagram = useRef(null)

    const billingTableHeader = ["Period From","Period to","Payment Method","amount","status","invoice"]
    let billings = {
        cell1:(<span>May 28, 2024</span>),
        cell2:(<span>May 28, 2024</span>),
        cell3:(<span>Not defined</span>),
        cell4:(<span>0 usd</span>),
        cell5:(
            <div className="flex items-center  text-[#0E1B26]">
                <Icon icon="octicon:dot-fill-16" fontSize={15} />
                <span className="capitalize text-[12px] font-bold">free</span>
            </div>
        ),
        cell6:(<span>Realtime</span>)
    }
    const billingTableData = userPaied?[
        billings,
        {
            cell1:(<span>May 28, 2024</span>),
            cell2:(<span>June 28, 2024</span>),
            cell3:(<span>Not defined</span>),
            cell4:(<span>30 usd</span>),
            cell5:(
                <div className="flex items-center justify-center w-fit px-2 text-white bg-[#13B238] rounded-md">
                    <Icon icon="octicon:dot-fill-16" fontSize={15} />
                    <span className="capitalize text-[12px] font-bold">paid</span>
                </div>
            ),
            cell6:(<span>N/A</span>)
        }

    ]:[billings]

    const updateArrows = () => {
        diagram.current.dispatchEvent(new Event('resize'));
        updateXarrow()
      };
    
      useEffect(() => {
        const element = diagram.current;
    
        if (element) { 
          const resizeObserver = new ResizeObserver(updateArrows);
    
          resizeObserver.observe(element);
    
          // Cleanup function to remove the observer when the component unmounts
          return () => {
            resizeObserver.unobserve(element);
          };
        }
      });


    return(
       <div className="p-6 bg-white rounded-lg flex flex-col gap-4">
          <div className='flex items-center gap-4'>
            <h3 className='text-[#0E1B26] font-[600] text-lg'>{projectName}</h3>
            {
                userPaied?
                <p className='flex items-center gap-0.5 text-[#00887A] text-[12px]'>
                    <Icon icon="octicon:dot-fill-16" fontSize={16} />
                    <span className='capitalize'>paid</span>
                </p>
                :
                <p className='flex items-center gap-0.5 text-[#1E43FA] text-[12px]'>
                    <Icon icon="octicon:dot-fill-16" fontSize={16} />
                    <span className='capitalize'>free plan</span>
                </p>
            }
          </div>

          {
            userPaied?
            <div className='w-full flex items-center justify-between' ref={diagram}>
                <div className='flex flex-col gap-6'>
                    <div 
                        className='cursor-pointer flex items-center gap-4 border border-[#16F2D1] rounded-lg px-3 py-1'
                        id='left-1'
                        onClick={()=>navigate("Google Tag Manager")}
                    >
                        <div className="flex items-center gap-2">
                            <img src={googlemanagerLogo} alt="google-tag-manager-logo" />
                            <span>Google Tag Manager</span>
                        </div>
                        <p className='flex items-center text-[#16F2D1]'>
                            <Icon icon="octicon:dot-fill-16" fontSize={16} />
                            <span className='font-bold text-sm'>Active</span>
                        </p>
                    </div>

                    <div 
                        className='cursor-pointer flex items-center gap-4 border border-[#F0993E] rounded-lg px-3 py-1'
                        id='left-2'
                    >
                        <div className="flex items-center gap-2">
                            <img src={iosLogo} alt="google-tag-manager-logo" />
                            <span>Mobile</span>
                        </div>
                        <p className='flex items-center text-[#F0993E] ml-auto'>
                            <Icon icon="octicon:dot-fill-16" fontSize={16} />
                            <span className='font-bold text-sm'>Under Review</span>
                        </p>
                    </div>

                    <div 
                        className='cursor-pointer flex items-center gap-4 border border-[#16F2D1] rounded-lg px-3 py-1'
                        id='left-3'
                    >
                        <div className="flex items-center gap-2">
                            <img src={zohoLogo} alt="google-tag-manager-logo" />
                            <span>Zoho CRM</span>
                        </div>
                        <p className='flex items-center text-[#16F2D1] ml-auto'>
                            <Icon icon="octicon:dot-fill-16" fontSize={16} />
                            <span className='font-bold text-sm'>Active</span>
                        </p>
                    </div>
                </div>

                <div>
                    <div id="item-center">
                        <img src={middleLogo} alt="middle-logo" />
                    </div>
                </div>

                <div className='flex flex-col gap-6'>

                   <div 
                        className='flex items-center gap-4 border border-[#FF0004] rounded-lg px-3 py-1'
                        id='rigth-1'
                    >
                        <div className="grow flex items-center gap-2">
                            <img src={googleAnalyticLogo} alt="google-tag-manager-logo" />
                            <span>Google Analytice</span>
                        </div>
                        <p className='flex items-center text-[#FF0004] ml-auto'>
                            <Icon icon="octicon:dot-fill-16" fontSize={16} />
                            <span className='font-bold text-sm'>Disactive</span>
                        </p>
                   </div>

                    <div 
                        className='flex items-center gap-4 border border-[#F0993E] rounded-lg px-3 py-1'
                        id='rigth-2'
                    >
                        <div className="grow flex items-center gap-2">
                            <img src={metaLogo} alt="google-tag-manager-logo" />
                            <span>Meta Pixel Code</span>
                        </div>
                        <p className='flex items-center text-[#F0993E] ml-auto'>
                            <Icon icon="octicon:dot-fill-16" fontSize={16} />
                            <span className='font-bold text-sm'>Under Review</span>
                        </p>
                    </div>

                    <div 
                        className='flex items-center gap-4 border border-[#00887A] rounded-lg px-3 py-1'
                        id='rigth-3'
                    >
                        <div className="grow flex items-center gap-2">
                            <img src={tiktokLogo} alt="google-tag-manager-logo" className='w-[30px] h-[30px]' />
                            <span>Tiktok Pixel Code</span>
                        </div>
                        <p className='flex items-center text-[#00887A] ml-auto'>
                            <Icon icon="octicon:dot-fill-16" fontSize={16} />
                            <span className='font-bold text-sm'>Active</span>
                        </p>
                   </div>

                   <div 
                        className='flex items-center gap-4 border border-[#00887A] rounded-lg px-3 py-1'
                        id='rigth-4'
                    >
                        <div className="grow flex items-center gap-2">
                            <img src={snapchatLogo} alt="google-tag-manager-logo" />
                            <span>Snapchat Pixel Code</span>
                        </div>
                        <p className='flex items-center text-[#00887A] ml-auto'>
                            <Icon icon="octicon:dot-fill-16" fontSize={16} />
                            <span className='font-bold text-sm'>Active</span>
                        </p>
                   </div>
                </div>

                <Xarrow
                start="left-1"
                end="item-center"
                color="#16F2D1"
                strokeWidth={1}
                curveness={0.95}
                showTail
                tailShape={{
                    svgElem:<path d="M 0 0 L 1 0.5 L 0 1 L 0.25 0.5 z" transform="rotate(180) translate(-1.2,-1)"/>,
                    offsetForward:0.25,
                }}
                />
                <Xarrow
                start="left-2"
                end="item-center"
                color="#F0993E"
                strokeWidth={1}
                showTail
                tailShape={{
                    svgElem:<path d="M 0 0 L 1 0.5 L 0 1 L 0.25 0.5 z" transform="rotate(180) translate(-1.2,-1)"/>,
                    offsetForward:0.25,
                }}
                />
                <Xarrow
                start="left-3"
                end="item-center"
                color="#16F2D1"
                strokeWidth={1}
                curveness={0.95}
                showTail
                tailShape={{
                    svgElem:<path d="M 0 0 L 1 0.5 L 0 1 L 0.25 0.5 z" transform="rotate(180) translate(-1.2,-1)"/>,
                    offsetForward:0.25,
                }}
                />

                <Xarrow
                start="item-center"
                end="rigth-1"
                color="#FF0004"
                strokeWidth={1}
                curveness={0.95}
                showTail
                tailShape={{
                    svgElem:<path d="M 0 0 L 1 0.5 L 0 1 L 0.25 0.5 z" transform="rotate(180) translate(-1.2,-1)"/>,
                    offsetForward:0.25,
                }}
                />
                <Xarrow
                start="item-center"
                end="rigth-2"
                color="#F0993E"
                strokeWidth={1}
                curveness={0.95}
                showTail
                tailShape={{
                    svgElem:<path d="M 0 0 L 1 0.5 L 0 1 L 0.25 0.5 z" transform="rotate(180) translate(-1.2,-1)"/>,
                    offsetForward:0.25,
                }}
                />
                <Xarrow
                start="item-center"
                end="rigth-3"
                color="#00887A"
                strokeWidth={1}
                curveness={0.95}
                showTail
                tailShape={{
                    svgElem:<path d="M 0 0 L 1 0.5 L 0 1 L 0.25 0.5 z" transform="rotate(180) translate(-1.2,-1)"/>,
                    offsetForward:0.25,
                }}
                />
                <Xarrow
                start="item-center"
                end="rigth-4"
                color="#00887A"
                strokeWidth={1}
                curveness={0.95}
                showTail
                tailShape={{
                    svgElem:<path d="M 0 0 L 1 0.5 L 0 1 L 0.25 0.5 z" transform="rotate(180) translate(-1.2,-1)"/>,
                    offsetForward:0.25,
                }}
                />
            </div>
            :
            <div className='w-full flex items-center justify-between' ref={diagram}>
                <div>
                    <div 
                        className='cursor-pointer flex items-center gap-4 border border-[#16F2D1] rounded-lg px-3 py-1'
                        id='left-1'
                        onClick={()=>navigate("Google Tag Manager")}
                    >
                        <div className="flex items-center gap-2">
                            <img src={googlemanagerLogo} alt="google-tag-manager-logo" />
                            <span>Google Tag Manager</span>
                        </div>
                        <p className='flex items-center text-[#16F2D1]'>
                            <Icon icon="octicon:dot-fill-16" fontSize={16} />
                            <span className='font-bold text-sm'>Active</span>
                        </p>
                    </div>
                </div>

                <div>
                    <div id="item-center">
                        <img src={middleLogo} alt="middle-logo" />
                    </div>
                </div>

                <div>
                    <div 
                        className='flex items-center gap-4 border border-[#F0993E] rounded-lg px-3 py-1'
                        id='rigth-1'
                    >
                        <div className="grow flex items-center gap-2">
                            <img src={metaLogo} alt="google-tag-manager-logo" />
                            <span>Meta Pixel Code</span>
                        </div>
                        <p className='flex items-center text-[#F0993E]'>
                            <Icon icon="octicon:dot-fill-16" fontSize={16} />
                            <span className='font-bold text-sm'>Under Review</span>
                        </p>
                    </div>
                </div>

                <Xarrow
                start="left-1"
                end="item-center"
                color="#16F2D1"
                strokeWidth={1}
                curveness={0}
                showTail
                tailShape={{
                    svgElem:<path d="M 0 0 L 1 0.5 L 0 1 L 0.25 0.5 z" transform="rotate(180) translate(-1.2,-1)"/>,
                    offsetForward:0.25,
                }}
                />

                <Xarrow
                start="item-center"
                end="rigth-1"
                color="#F0993E"
                strokeWidth={1}
                curveness={0}
                showTail
                tailShape={{
                    svgElem:<path d="M 0 0 L 1 0.5 L 0 1 L 0.25 0.5 z" transform="rotate(180) translate(-1.2,-1)"/>,
                    offsetForward:0.25,
                }}
                />
            </div>
          }

          <div className="rounded-lg flex flex-col gap-4 p-4 border-[3px]">
                <h3 className="capitalize text-sm font-[600]">Billing History</h3>
                <TableShared tableHeader={billingTableHeader} tableBody={billingTableData} bb={false} py={"py-4"} />
          </div>
       </div>
    )
}
export default PersonalSingleProject
