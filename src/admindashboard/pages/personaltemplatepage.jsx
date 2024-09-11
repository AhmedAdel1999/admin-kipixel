import React, { useEffect,useRef,useState } from 'react';
import Xarrow,{useXarrow} from 'react-xarrows';
import { Select,SelectTrigger,SelectContent,SelectGroup,SelectItem,SelectValue } from "../../components/ui/select"
import { Dialog,DialogContent,DialogTrigger }  from "../../components/ui/dialog"
import { Button } from '../../components/ui/button';
import { Icon } from "@iconify/react"
import googletagimg from "../../assets/client/googletage-img.png"
import middleLogo from "../../assets/client/middle-logo.png"
import metaLogo from "../../assets/client/meta-logo.png"
import mataimg from "../../assets/client/meta-img.png"
import googlemanagerLogo from "../../assets/client/google-tag-manager-logo.png"
import googleAnalyticLogo from "../../assets/client/google-analytic-logo.png"
import tiktokLogo from "../../assets/client/tiktok-img.png"


const PersonalTemplatePage = () =>{

    const container = useRef(null)
    const updateXarrow = useXarrow()
    let userPaied = true

    const [copied,setCopied] = useState(false)
    const [currentCopied,setCurrentCopied] = useState("")

    const clientId = `wk_2keOwyfXdkVddHPtqegg0k9NXQN`
    const gtmCode =
    `<!-- Google Tag Manager -->
    <script>(function(w,d,s,1,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(), event:'gtm.js'});var f=d.getElementsByTagName(s) [0],
    j=d.createElement(s),dl=l!='dataLayer'?'al='+l:'';j.async=true;j.src=
    https://www.googletagmanager.com/gtm.js?id= '+i+dl;f.parentNode.insertBefore (j,f);
    }) (window, document, 'script','dataLayer','GTM-5GR4LKQF');</script>
    <!-- End Google Tag Manager -->`
    const bodyCode =
    `<!-- Google Tag Manager (noscript) -->
    <noscript><iframe src=" https://www.googletagmanager.com/ns.html?id=GTM-5GR4LKQF "
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->`

   
    const handleCopy = (text) =>{
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setCurrentCopied(text)
        });
    }

  const updateArrows = () => {
    container.current.dispatchEvent(new Event('resize'));
    updateXarrow()
  };

  useEffect(() => {
    const element = container.current;

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

            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <img src={googletagimg} alt="google-tag-img" className="w-[80px] h-[80px]" />
                    <div>
                        <h3 className="text-[#0E1B26] font-[600]">
                            Google Tag Manager Browser Template
                        </h3>
                        <p className="text-[#717171]">
                            Build dynamic audiences using customer data sent from
                            your Google Tag Manager
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center rounded-lg h-[22px] w-fit px-4 text-[#00AC98] bg-[#D5FFF9]">
                    <Icon icon="octicon:dot-fill-16" fontSize={15} />
                    <span className="capitalize text-[12px] font-bold">Active</span>
                </div>
            </div>

            {
                userPaied?
                <div className='w-full flex items-start justify-between py-4' ref={container}>
                    <div className='flex flex-col gap-6'>
                        <div 
                            className='flex items-center gap-4 border border-[#00887A] rounded-lg px-3 py-1'
                            id='leftItem-1'
                        >
                            <div className="flex items-center gap-2">
                                <img src={googlemanagerLogo} alt="google-tag-manager-logo" />
                                <span>Google Tag Manager</span>
                            </div>
                            <p className='flex items-center text-[#00887A]'>
                                <Icon icon="octicon:dot-fill-16" fontSize={16} />
                                <span className='font-bold text-sm'>Active</span>
                            </p>
                        </div>
                    </div>

                    <div id="centerItem" className='mt-20'>
                        <img src={middleLogo} alt="middle-logo" />
                    </div>

                    <div className='flex flex-col justify-end gap-6'>
                       <div 
                            className='flex items-center gap-4 border border-[#FF0004] rounded-lg px-3 py-1'
                            id='rigthItem-1'
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

                        <Dialog>
                            <DialogTrigger asChild>
                                <div 
                                    className='cursor-pointer flex items-center gap-4 border border-[#F0993E] rounded-lg px-3 py-1'
                                    id='rigthItem-2'
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
                            </DialogTrigger>
                            <Modal />
                        </Dialog>

                        <div 
                            className='flex items-center gap-4 border border-[#00887A] rounded-lg px-3 py-1'
                            id='rigthItem-3'
                        >
                            <div className="grow flex items-center gap-2">
                                <img src={tiktokLogo} alt="google-tag-manager-logo" className='w-[30px] h-[30px]' />
                                <span>Tiktok Pixel Code</span>
                            </div>
                            <p className='flex items-center text-[#00887A]'>
                                <Icon icon="octicon:dot-fill-16" fontSize={16} />
                                <span className='font-bold text-sm'>Active</span>
                            </p>
                        </div>
                    </div>

                    <Xarrow
                    start="leftItem-1"
                    end="centerItem"
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
                    start="centerItem"
                    end="rigthItem-1"
                    color="#EA4335"
                    strokeWidth={1}
                    curveness={0.95}
                    showTail
                    tailShape={{
                        svgElem:<path d="M 0 0 L 1 0.5 L 0 1 L 0.25 0.5 z" transform="rotate(180) translate(-1.2,-1)"/>,
                        offsetForward:0.25,
                    }}
                    />
                    <Xarrow
                    start="centerItem"
                    end="rigthItem-2"
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
                    start="centerItem"
                    end="rigthItem-3"
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
                <div className='w-full flex items-center justify-between py-4' ref={container}>
                    <div 
                        className='flex items-center gap-4 border border-[#16F2D1] rounded-lg px-3 py-1 translate-x-[10%]'
                        id='leftItem-1'
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

                    <div id="centerItem">
                        <img src={middleLogo} alt="middle-logo" />
                    </div>

                    <Dialog>
                        <DialogTrigger asChild>
                            <div 
                                className='cursor-pointer flex items-center gap-4 border border-[#F0993E] rounded-lg px-3 py-1 -translate-y-16'
                                id='rigthItem-1'
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
                        </DialogTrigger>
                        <Modal />
                    </Dialog>

                    <Xarrow
                    start="leftItem-1"
                    end="centerItem"
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
                    start="centerItem"
                    end="rigthItem-1"
                    color="#EA4335"
                    strokeWidth={1}
                    curveness={0.95}
                    showTail
                    tailShape={{
                        svgElem:<path d="M 0 0 L 1 0.5 L 0 1 L 0.25 0.5 z" transform="rotate(180) translate(-1.2,-1)"/>,
                        offsetForward:0.25,
                    }}
                    />

                </div>
            }


            <div className='flex flex-col gap-6'>
                <div className='flex flex-col gap-1'>
                    <label className='text-sm font-[600] capitalize'>status</label>
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
                </div>

                <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-[600] capitalize">Container ID</h3>
                    <div className="relative text-[#CFCFCF] rounded-lg border-2 px-2 py-3">
                        <span className="text-[#757575]">{clientId}</span>
                        <div className="absolute top-2 right-2">
                            {
                                (copied && currentCopied===clientId)?
                                <Icon icon="icon-park-outline:done-all" color="#0f5714" fontSize={25} />
                                :
                                <Icon 
                                    icon="bi:copy" color="#000"
                                    className="cursor-pointer" fontSize={25}
                                    onClick={()=>handleCopy(clientId)}
                                />
                            }
                        
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="font-[600] text-sm capitalize">Install GTM Code</h3>
                    <p className="text-[#757575] mb-1.5">Copy the code below and paste it into every page of your website.</p>
                    <h4 className="text-sm font-[600] capitalize mb-1.5">{`1. Paste this code as high in the <head> of the page as possible:`}</h4>
                    <div className="relative  text-[#CFCFCF] rounded-md border-2 px-2 py-4">
                        <p className="text-[#757575] max-w-[570px]">{gtmCode}</p>
                        <div className="absolute top-2 right-2">
                            {
                                (copied && currentCopied===gtmCode)?
                                <Icon icon="icon-park-outline:done-all" color="#0f5714" fontSize={25} />
                                :
                                <Icon 
                                    icon="bi:copy" color="#000"
                                    className="cursor-pointer" fontSize={25}
                                    onClick={()=>handleCopy(gtmCode)}
                                />
                            }
                        
                        </div>
                    </div>
                    <h4 className="text-sm font-[600] capitalize my-1.5">{`2. Paste this code immediately after the opening <body> tag:`}</h4>
                    <div className="relative  text-[#CFCFCF] rounded-md border-2 px-2 py-4">
                        <p className="text-[#757575] max-w-[570px]">{bodyCode}</p>
                        <div className="absolute top-2 right-2">
                            {
                                (copied && currentCopied===bodyCode)?
                                <Icon icon="icon-park-outline:done-all" color="#0f5714" fontSize={25} />
                                :
                                <Icon 
                                    icon="bi:copy" color="#000"
                                    className="cursor-pointer" fontSize={25}
                                    onClick={()=>handleCopy(bodyCode)}
                                />
                            }
                        
                        </div>
                    </div>
                </div>
            </div>

            <Button 
                className="capitalize w-fit py-3 px-[45px] font-[600] text-[12px]"
                style={{
                    background: "linear-gradient(112deg, #16F2D1 -47.55%, #1294B9 35.23%, #0C259C 133.36%), var(--Brand-Primary, #1E43FA)"
                }}
            >
                save
            </Button>
        </div>
    )
}
export default PersonalTemplatePage;

const Modal = () =>{

    const diagram = useRef(null)
    
    return(
        <DialogContent className="max-w-[900px]">
            <div className='flex flex-col gap-4'>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <img src={mataimg} alt="google-tag-img" className="w-[80px] h-[80px]" />
                        <div>
                            <h3 className="text-[#0E1B26] font-[600]">
                               Facebook Pixel
                            </h3>
                            <p className="text-[#717171]">
                                Build dynamic audiences using customer data sent from
                                your Google Tag Manager
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-[#F0993E]">
                        <Icon icon="octicon:dot-fill-16" fontSize={15} />
                        <span className="capitalize text-[12px] font-bold">under review</span>
                    </div>
                </div>

                <div className='w-full flex items-center justify-between' ref={diagram}>
                    <div>
                        <div 
                            className='flex items-center gap-4 border border-[#16F2D1] rounded-lg px-3 py-1'
                            id='left-1'
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

                <form>
                    <div className='flex flex-col gap-1'>
                        <label className='capitalize font-bold text-sm text-[#0E1B26]'>pixel id</label>
                        <input 
                            type='text'
                            className='rounded-md py-2 px-4 border outline-none'
                        />
                    </div>
                </form>

                <div className='flex gap-6'>
                   <Button 
                        className="capitalize w-fit py-2 px-[45px] font-[600] text-[12px]"
                        style={{
                            background: "linear-gradient(112deg, #16F2D1 -47.55%, #1294B9 35.23%, #0C259C 133.36%), var(--Brand-Primary, #1E43FA)"
                        }}
                    >
                        save
                    </Button>
                    <Button 
                    className="bg-white w-fit py-2 px-[45px] hover:bg-white font-bold text-sm text-[#1E43FA] border border-[#1E43FA]"
                    >
                    cancel
                </Button>
                </div>
            </div>
        </DialogContent>
    )
}